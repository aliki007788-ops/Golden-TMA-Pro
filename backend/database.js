// backend/database.js
// سیستم پایگاه‌داده Golden TMA Pro - نسخه حرفه‌ای با قابلیت‌های ادمین

const fs = require('fs');
const path = require('path');

class GoldenTMADatabase {
  constructor() {
    this.dataDir = path.join(__dirname, 'data');
    this.backupDir = path.join(__dirname, 'backups');
    this.logsDir = path.join(__dirname, 'logs');
    this.initDirectories();
    this.initDataFiles();
  }

  // ایجاد دایرکتوری‌های مورد نیاز
  initDirectories() {
    const dirs = [this.dataDir, this.backupDir, this.logsDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
      }
    });
  }

  // ایجاد فایل‌های دیتای اولیه
  initDataFiles() {
    const dataFiles = {
      'invoices.json': [],
      'users.json': [],
      'sales.json': [],
      'downloads.json': [],
      'admin_logs.json': [],
      'tools.json': this.getToolsFromFrontend(),
      'settings.json': {
        system_name: "Golden TMA Pro",
        version: "2.0.0",
        admin_tokens: ["GOLDEN_TMA_ADMIN_2024", "SUPER_ADMIN_SECRET"],
        maintenance_mode: false,
        star_price: 1,
        auto_backup: true,
        backup_interval: 24,
        email_notifications: true,
        telegram_notifications: true
      }
    };

    Object.entries(dataFiles).forEach(([filename, defaultData]) => {
      const filePath = path.join(this.dataDir, filename);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
        console.log(`📄 Created data file: ${filename}`);
      }
    });
  }

  // گرفتن داده ابزارها از frontend/main.js
  getToolsFromFrontend() {
    try {
      const mainJsPath = path.join(__dirname, '../frontend/main.js');
      if (fs.existsSync(mainJsPath)) {
        const content = fs.readFileSync(mainJsPath, 'utf8');
        const toolsMatch = content.match(/const toolsData = (\[[\s\S]*?\]);/);
        if (toolsMatch) {
          return eval(toolsMatch[1]);
        }
      }
    } catch (error) {
      console.error('Error reading tools from frontend:', error);
    }
    return [];
  }

  // ==================== توابع اصلی ====================

  // خواندن فایل دیتا
  readData(filename) {
    try {
      const filePath = path.join(this.dataDir, filename);
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
      }
      return [];
    } catch (error) {
      console.error(`Error reading ${filename}:`, error);
      return [];
    }
  }

  // نوشتن در فایل دیتا
  writeData(filename, data) {
    try {
      const filePath = path.join(this.dataDir, filename);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return true;
    } catch (error) {
      console.error(`Error writing ${filename}:`, error);
      return false;
    }
  }

  // ==================== مدیریت اینوویس‌ها ====================

  // ایجاد اینویس جدید
  createInvoice(invoiceData) {
    try {
      const invoices = this.readData('invoices.json');
      const newInvoice = {
        id: invoices.length + 1,
        ...invoiceData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'pending'
      };
      
      invoices.push(newInvoice);
      this.writeData('invoices.json', invoices);
      
      // لاگ کردن
      this.logAdminAction('create_invoice', {
        invoiceId: newInvoice.id,
        amount: newInvoice.price,
        toolId: newInvoice.toolId
      });
      
      return newInvoice;
    } catch (error) {
      console.error('Error creating invoice:', error);
      return null;
    }
  }

  // آپدیت وضعیت اینویس
  updateInvoiceStatus(invoiceId, status, paymentData = {}) {
    try {
      const invoices = this.readData('invoices.json');
      const invoiceIndex = invoices.findIndex(inv => inv.id == invoiceId);
      
      if (invoiceIndex !== -1) {
        invoices[invoiceIndex] = {
          ...invoices[invoiceIndex],
          status: status,
          paymentData: paymentData,
          updatedAt: new Date().toISOString(),
          paidAt: status === 'paid' ? new Date().toISOString() : null
        };
        
        this.writeData('invoices.json', invoices);
        
        // اگر پرداخت موفق بود، به sales اضافه کن
        if (status === 'paid') {
          this.addSale(invoices[invoiceIndex]);
        }
        
        return invoices[invoiceIndex];
      }
      return null;
    } catch (error) {
      console.error('Error updating invoice:', error);
      return null;
    }
  }

  // ==================== مدیریت کاربران ====================

  // ایجاد یا آپدیت کاربر
  upsertUser(userData) {
    try {
      const users = this.readData('users.json');
      const existingUserIndex = users.findIndex(u => u.telegramId === userData.telegramId);
      
      if (existingUserIndex !== -1) {
        // آپدیت کاربر موجود
        users[existingUserIndex] = {
          ...users[existingUserIndex],
          ...userData,
          updatedAt: new Date().toISOString()
        };
      } else {
        // ایجاد کاربر جدید
        const newUser = {
          id: users.length + 1,
          ...userData,
          purchases: 0,
          totalSpent: 0,
          status: 'active',
          joinedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        users.push(newUser);
      }
      
      this.writeData('users.json', users);
      return true;
    } catch (error) {
      console.error('Error upserting user:', error);
      return false;
    }
  }

  // افزایش آمار خرید کاربر
  incrementUserPurchase(userId, amount) {
    try {
      const users = this.readData('users.json');
      const userIndex = users.findIndex(u => u.id == userId || u.telegramId == userId);
      
      if (userIndex !== -1) {
        users[userIndex].purchases = (users[userIndex].purchases || 0) + 1;
        users[userIndex].totalSpent = (users[userIndex].totalSpent || 0) + amount;
        users[userIndex].lastPurchase = new Date().toISOString();
        users[userIndex].updatedAt = new Date().toISOString();
        
        // آپگرید به premium اگر بیش از 2000 Stars خرج کرده
        if (users[userIndex].totalSpent >= 2000 && users[userIndex].status !== 'premium') {
          users[userIndex].status = 'premium';
        }
        
        this.writeData('users.json', users);
        return users[userIndex];
      }
      return null;
    } catch (error) {
      console.error('Error incrementing user purchase:', error);
      return null;
    }
  }

  // ==================== مدیریت فروش‌ها ====================

  // اضافه کردن فروش جدید
  addSale(invoice) {
    try {
      const sales = this.readData('sales.json');
      const newSale = {
        id: sales.length + 1,
        invoiceId: invoice.id,
        userId: invoice.userId,
        toolId: invoice.toolId,
        toolName: invoice.title,
        amount: invoice.price,
        currency: invoice.currency || 'XTR',
        status: 'completed',
        soldAt: new Date().toISOString(),
        paymentMethod: 'Telegram Stars'
      };
      
      sales.push(newSale);
      this.writeData('sales.json', sales);
      
      // آپدیت آمار کاربر
      this.incrementUserPurchase(invoice.userId, invoice.price);
      
      // لاگ کردن
      this.logAdminAction('new_sale', {
        saleId: newSale.id,
        amount: newSale.amount,
        toolId: newSale.toolId
      });
      
      return newSale;
    } catch (error) {
      console.error('Error adding sale:', error);
      return null;
    }
  }

  // ==================== مدیریت دانلود‌ها ====================

  // ثبت دانلود جدید
  logDownload(downloadData) {
    try {
      const downloads = this.readData('downloads.json');
      const newDownload = {
        id: downloads.length + 1,
        ...downloadData,
        downloadedAt: new Date().toISOString(),
        status: 'success'
      };
      
      downloads.push(newDownload);
      this.writeData('downloads.json', downloads);
      
      // لاگ کردن
      this.logAdminAction('tool_download', {
        downloadId: newDownload.id,
        toolId: downloadData.toolId,
        userId: downloadData.userId
      });
      
      return newDownload;
    } catch (error) {
      console.error('Error logging download:', error);
      return null;
    }
  }

  // ==================== توابع ادمین ====================

  // دریافت آمار کلی سیستم
  getAdminStats() {
    try {
      const invoices = this.readData('invoices.json');
      const users = this.readData('users.json');
      const sales = this.readData('sales.json');
      const tools = this.readData('tools.json');
      
      // محاسبه درآمد کل
      const paidInvoices = invoices.filter(inv => inv.status === 'paid');
      const totalRevenue = paidInvoices.reduce((sum, inv) => sum + (inv.price || 0), 0);
      
      // محاسبه درآمد امروز
      const today = new Date().toISOString().split('T')[0];
      const todayRevenue = paidInvoices
        .filter(inv => inv.createdAt && inv.createdAt.startsWith(today))
        .reduce((sum, inv) => sum + (inv.price || 0), 0);
      
      // پیدا کردن محبوب‌ترین ابزار
      const toolSales = {};
      sales.forEach(sale => {
        if (sale.toolName) {
          toolSales[sale.toolName] = (toolSales[sale.toolName] || 0) + 1;
        }
      });
      
      const popularTool = Object.entries(toolSales)
        .sort((a, b) => b[1] - a[1])[0];
      
      // آمار کاربران
      const activeUsers = users.filter(u => u.status === 'active').length;
      const premiumUsers = users.filter(u => u.status === 'premium').length;
      
      return {
        totalRevenue,
        totalSales: paidInvoices.length,
        totalUsers: users.length,
        activeUsers,
        premiumUsers,
        todayRevenue,
        popularTool: popularTool ? popularTool[0] : 'N/A',
        popularToolSales: popularTool ? popularTool[1] : 0,
        totalTools: tools.length,
        basicTools: tools.filter(t => t.tier === 'basic').length,
        proTools: tools.filter(t => t.tier === 'pro').length,
        premiumTools: tools.filter(t => t.tier === 'premium').length,
        pendingInvoices: invoices.filter(inv => inv.status === 'pending').length,
        failedInvoices: invoices.filter(inv => inv.status === 'failed').length,
        totalDownloads: this.readData('downloads.json').length,
        systemUptime: process.uptime()
      };
    } catch (error) {
      console.error('Error getting admin stats:', error);
      return null;
    }
  }

  // دریافت گزارش فروش با فیلتر
  getSalesReport(startDate, endDate, limit = 100) {
    try {
      let sales = this.readData('sales.json');
      
      // فیلتر تاریخ
      if (startDate) {
        sales = sales.filter(sale => 
          new Date(sale.soldAt) >= new Date(startDate)
        );
      }
      
      if (endDate) {
        sales = sales.filter(sale => 
          new Date(sale.soldAt) <= new Date(endDate)
        );
      }
      
      // مرتب‌سازی و محدودیت
      sales.sort((a, b) => new Date(b.soldAt) - new Date(a.soldAt));
      sales = sales.slice(0, limit);
      
      return sales;
    } catch (error) {
      console.error('Error getting sales report:', error);
      return [];
    }
  }

  // دریافت آمار ابزارها
  getToolsStats() {
    try {
      const sales = this.readData('sales.json');
      const tools = this.readData('tools.json');
      
      // گروه‌بندی فروش بر اساس ابزار
      const toolStats = {};
      
      sales.forEach(sale => {
        if (sale.toolId) {
          if (!toolStats[sale.toolId]) {
            const toolInfo = tools.find(t => t.id === sale.toolId) || {};
            toolStats[sale.toolId] = {
              toolId: sale.toolId,
              toolName: sale.toolName || toolInfo.name || `Tool ${sale.toolId}`,
              tier: toolInfo.tier || 'unknown',
              price: toolInfo.price || 0,
              salesCount: 0,
              totalRevenue: 0,
              lastSale: sale.soldAt
            };
          }
          toolStats[sale.toolId].salesCount++;
          toolStats[sale.toolId].totalRevenue += (sale.amount || 0);
          toolStats[sale.toolId].lastSale = sale.soldAt;
        }
      });
      
      // اضافه کردن ابزارهایی که فروش نداشتند
      tools.forEach(tool => {
        if (!toolStats[tool.id]) {
          toolStats[tool.id] = {
            toolId: tool.id,
            toolName: tool.name,
            tier: tool.tier,
            price: tool.price,
            salesCount: 0,
            totalRevenue: 0,
            lastSale: null
          };
        }
      });
      
      // تبدیل به آرایه و مرتب‌سازی
      const toolsArray = Object.values(toolStats)
        .sort((a, b) => b.totalRevenue - a.totalRevenue);
      
      return toolsArray;
    } catch (error) {
      console.error('Error getting tools stats:', error);
      return [];
    }
  }

  // دریافت تاریخچه دانلودها
  getDownloadsHistory(userId = null, toolId = null, limit = 100) {
    try {
      let downloads = this.readData('downloads.json');
      
      // فیلترها
      if (userId) {
        downloads = downloads.filter(d => d.userId == userId);
      }
      
      if (toolId) {
        downloads = downloads.filter(d => d.toolId == toolId);
      }
      
      // مرتب‌سازی
      downloads.sort((a, b) => new Date(b.downloadedAt) - new Date(a.downloadedAt));
      downloads = downloads.slice(0, limit);
      
      return downloads;
    } catch (error) {
      console.error('Error getting downloads history:', error);
      return [];
    }
  }

  // ==================== لاگ‌گیری ادمین ====================

  // ثبت عمل ادمین
  logAdminAction(action, details = {}) {
    try {
      const logs = this.readData('admin_logs.json');
      const logEntry = {
        id: logs.length + 1,
        action,
        details,
        timestamp: new Date().toISOString(),
        ip: details.ip || 'unknown'
      };
      
      logs.push(logEntry);
      this.writeData('admin_logs.json', logs);
      
      // همچنین در فایل لاگ هم ذخیره کن
      this.appendToLogFile('admin_actions.log', JSON.stringify(logEntry));
      
      return logEntry;
    } catch (error) {
      console.error('Error logging admin action:', error);
      return null;
    }
  }

  // دریافت لاگ‌های ادمین
  getAdminLogs(action = null, limit = 100) {
    try {
      let logs = this.readData('admin_logs.json');
      
      if (action) {
        logs = logs.filter(log => log.action === action);
      }
      
      logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      logs = logs.slice(0, limit);
      
      return logs;
    } catch (error) {
      console.error('Error getting admin logs:', error);
      return [];
    }
  }

  // ==================== سیستم بک‌آپ ====================

  // ایجاد بک‌آپ از دیتابیس
  createBackup() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupFileName = `backup_${timestamp}.json`;
      const backupPath = path.join(this.backupDir, backupFileName);
      
      // جمع‌آوری تمام داده‌ها
      const dataFiles = fs.readdirSync(this.dataDir)
        .filter(file => file.endsWith('.json'));
      
      const backupData = {};
      dataFiles.forEach(file => {
        backupData[file] = this.readData(file);
      });
      
      // ذخیره بک‌آپ
      fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
      
      // لاگ کردن
      this.logAdminAction('create_backup', {
        backupFile: backupFileName,
        size: fs.statSync(backupPath).size
      });
      
      return {
        success: true,
        backupFile: backupFileName,
        path: backupPath,
        size: fs.statSync(backupPath).size,
        timestamp
      };
    } catch (error) {
      console.error('Error creating backup:', error);
      return { success: false, error: error.message };
    }
  }

  // بازیابی از بک‌آپ
  restoreBackup(backupFileName) {
    try {
      const backupPath = path.join(this.backupDir, backupFileName);
      
      if (!fs.existsSync(backupPath)) {
        throw new Error('Backup file not found');
      }
      
      const backupData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      
      // بازنویسی فایل‌های دیتا
      Object.entries(backupData).forEach(([filename, data]) => {
        const filePath = path.join(this.dataDir, filename);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      });
      
      // لاگ کردن
      this.logAdminAction('restore_backup', {
        backupFile: backupFileName
      });
      
      return { success: true, message: 'Backup restored successfully' };
    } catch (error) {
      console.error('Error restoring backup:', error);
      return { success: false, error: error.message };
    }
  }

  // ==================== توابع کمکی ====================

  // اضافه کردن به فایل لاگ
  appendToLogFile(logFilename, message) {
    try {
      const logPath = path.join(this.logsDir, logFilename);
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] ${message}\n`;
      
      fs.appendFileSync(logPath, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error);
    }
  }

  // دریافت لیست بک‌آپ‌ها
  listBackups() {
    try {
      if (!fs.existsSync(this.backupDir)) {
        return [];
      }
      
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.startsWith('backup_') && file.endsWith('.json'))
        .map(file => {
          const filePath = path.join(this.backupDir, file);
          const stats = fs.statSync(filePath);
          return {
            filename: file,
            path: filePath,
            size: stats.size,
            created: stats.birthtime,
            modified: stats.mtime
          };
        })
        .sort((a, b) => b.created - a.created);
      
      return files;
    } catch (error) {
      console.error('Error listing backups:', error);
      return [];
    }
  }

  // پاک کردن بک‌آپ‌های قدیمی
  cleanupOldBackups(daysToKeep = 30) {
    try {
      const backups = this.listBackups();
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
      
      let deletedCount = 0;
      backups.forEach(backup => {
        if (new Date(backup.created) < cutoffDate) {
          fs.unlinkSync(backup.path);
          deletedCount++;
        }
      });
      
      if (deletedCount > 0) {
        this.logAdminAction('cleanup_backups', { deletedCount, daysToKeep });
      }
      
      return deletedCount;
    } catch (error) {
      console.error('Error cleaning up old backups:', error);
      return 0;
    }
  }

  // دریافت اطلاعات سیستم
  getSystemInfo() {
    return {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      serverTime: new Date().toISOString(),
      dataDir: this.dataDir,
      backupDir: this.backupDir,
      logsDir: this.logsDir,
      dataFiles: fs.readdirSync(this.dataDir).length,
      backupsCount: this.listBackups().length
    };
  }
}

// ایجاد نمونه از دیتابیس
const db = new GoldenTMADatabase();

// اکسپورت توابع
module.exports = {
  // توابع اصلی
  readData: (filename) => db.readData(filename),
  writeData: (filename, data) => db.writeData(filename, data),
  
  // مدیریت اینوویس
  createInvoice: (data) => db.createInvoice(data),
  updateInvoiceStatus: (id, status, paymentData) => db.updateInvoiceStatus(id, status, paymentData),
  
  // مدیریت کاربران
  upsertUser: (data) => db.upsertUser(data),
  incrementUserPurchase: (userId, amount) => db.incrementUserPurchase(userId, amount),
  
  // مدیریت فروش‌ها
  addSale: (invoice) => db.addSale(invoice),
  
  // مدیریت دانلودها
  logDownload: (data) => db.logDownload(data),
  
  // توابع ادمین
  getAdminStats: () => db.getAdminStats(),
  getSalesReport: (startDate, endDate, limit) => db.getSalesReport(startDate, endDate, limit),
  getToolsStats: () => db.getToolsStats(),
  getDownloadsHistory: (userId, toolId, limit) => db.getDownloadsHistory(userId, toolId, limit),
  
  // لاگ‌گیری
  logAdminAction: (action, details) => db.logAdminAction(action, details),
  getAdminLogs: (action, limit) => db.getAdminLogs(action, limit),
  
  // بک‌آپ
  createBackup: () => db.createBackup(),
  restoreBackup: (filename) => db.restoreBackup(filename),
  listBackups: () => db.listBackups(),
  cleanupOldBackups: (days) => db.cleanupOldBackups(days),
  
  // اطلاعات سیستم
  getSystemInfo: () => db.getSystemInfo(),
  
  // Instance برای دسترسی مستقیم
  instance: db
};

console.log('✅ Golden TMA Database initialized successfully');
