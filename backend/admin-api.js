const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Admin tokens (in production, use environment variables)
const VALID_ADMIN_TOKENS = [
  'GOLDEN_TMA_ADMIN_2024',
  'SUPER_ADMIN_SECRET',
  'MASTER_KEY_123'
];

// Middleware to check admin access
const adminAuth = (req, res, next) => {
  const token = req.query.admin_token || 
                req.headers.authorization?.replace('Bearer ', '');
  
  if (!token || !VALID_ADMIN_TOKENS.includes(token)) {
    return res.status(403).json({
      error: 'دسترسی غیرمجاز',
      message: 'توکن ادمین معتبر نیست'
    });
  }
  
  next();
};

// Apply auth to all admin routes
router.use(adminAuth);

// Helper function to read data
const readData = (filename) => {
  const filePath = path.join(__dirname, 'data', filename);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return [];
};

// Helper function to write data
const writeData = (filename, data) => {
  const filePath = path.join(__dirname, 'data', filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return true;
};

// 1. Admin Stats Dashboard
router.get('/stats', (req, res) => {
  try {
    const invoices = readData('invoices.json');
    const users = readData('users.json');
    const sales = readData('sales.json');
    
    // Calculate total revenue
    const paidInvoices = invoices.filter(inv => inv.status === 'paid');
    const totalRevenue = paidInvoices.reduce((sum, inv) => sum + (inv.price || 0), 0);
    
    // Calculate today's revenue
    const today = new Date().toISOString().split('T')[0];
    const todayRevenue = paidInvoices
      .filter(inv => inv.createdAt && inv.createdAt.startsWith(today))
      .reduce((sum, inv) => sum + (inv.price || 0), 0);
    
    // Find popular tool (mock data for now)
    const toolSales = {};
    sales.forEach(sale => {
      if (sale.toolName) {
        toolSales[sale.toolName] = (toolSales[sale.toolName] || 0) + 1;
      }
    });
    
    const popularTool = Object.entries(toolSales)
      .sort((a, b) => b[1] - a[1])[0];
    
    res.json({
      success: true,
      data: {
        totalRevenue: totalRevenue,
        totalSales: paidInvoices.length,
        totalUsers: users.length,
        todayRevenue: todayRevenue,
        popularTool: popularTool ? popularTool[0] : 'N/A',
        conversionRate: users.length > 0 
          ? Math.round((paidInvoices.length / users.length) * 100) 
          : 0,
        activeUsers: users.filter(u => u.status === 'active').length,
        pendingInvoices: invoices.filter(inv => inv.status === 'pending').length,
        failedInvoices: invoices.filter(inv => inv.status === 'failed').length
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت آمار',
      message: error.message
    });
  }
});

// 2. Sales Management
router.get('/sales', (req, res) => {
  try {
    const { startDate, endDate, limit = 50, status } = req.query;
    let invoices = readData('invoices.json');
    
    // Filter by date if provided
    if (startDate) {
      invoices = invoices.filter(inv => 
        new Date(inv.createdAt) >= new Date(startDate)
      );
    }
    
    if (endDate) {
      invoices = invoices.filter(inv => 
        new Date(inv.createdAt) <= new Date(endDate)
      );
    }
    
    // Filter by status if provided
    if (status) {
      invoices = invoices.filter(inv => inv.status === status);
    }
    
    // Limit results
    invoices = invoices.slice(0, parseInt(limit));
    
    // Format response
    const formattedSales = invoices.map(inv => ({
      id: inv.id,
      invoiceId: inv.slug || `INV-${inv.id}`,
      userId: inv.userId || 'N/A',
      userName: inv.userName || 'Unknown User',
      toolId: inv.toolId,
      toolName: inv.title || `Tool ${inv.toolId}`,
      amount: inv.price,
      currency: inv.currency || 'XTR',
      date: inv.createdAt,
      status: inv.status || 'pending',
      paymentMethod: inv.paymentMethod || 'Telegram Stars'
    }));
    
    res.json({
      success: true,
      total: formattedSales.length,
      sales: formattedSales
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت فروش‌ها',
      message: error.message
    });
  }
});

// 3. Users Management
router.get('/users', (req, res) => {
  try {
    const { search, limit = 100 } = req.query;
    let users = readData('users.json');
    
    // If no users in database, create sample data
    if (users.length === 0) {
      users = [
        {
          id: 1,
          telegramId: 123456789,
          username: 'admin_user',
          firstName: 'Admin',
          lastName: 'User',
          purchases: 3,
          totalSpent: 1097,
          lastPurchase: '2024-01-15',
          status: 'active',
          joinedAt: '2024-01-01',
          email: 'admin@example.com'
        },
        {
          id: 2,
          telegramId: 987654321,
          username: 'premium_user',
          firstName: 'Premium',
          lastName: 'User',
          purchases: 5,
          totalSpent: 2895,
          lastPurchase: '2024-01-14',
          status: 'premium',
          joinedAt: '2024-01-05',
          email: 'premium@example.com'
        }
      ];
      writeData('users.json', users);
    }
    
    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      users = users.filter(user => 
        user.username?.toLowerCase().includes(searchLower) ||
        user.firstName?.toLowerCase().includes(searchLower) ||
        user.lastName?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower)
      );
    }
    
    // Limit results
    users = users.slice(0, parseInt(limit));
    
    res.json({
      success: true,
      total: users.length,
      users: users
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت کاربران',
      message: error.message
    });
  }
});

// 4. Tools Management
router.get('/tools-stats', (req, res) => {
  try {
    const sales = readData('sales.json');
    
    // Group sales by tool
    const toolStats = {};
    sales.forEach(sale => {
      if (sale.toolId) {
        if (!toolStats[sale.toolId]) {
          toolStats[sale.toolId] = {
            toolId: sale.toolId,
            toolName: sale.toolName || `Tool ${sale.toolId}`,
            salesCount: 0,
            totalRevenue: 0,
            tier: sale.tier || 'basic'
          };
        }
        toolStats[sale.toolId].salesCount++;
        toolStats[sale.toolId].totalRevenue += (sale.amount || 0);
      }
    });
    
    // Convert to array and sort by revenue
    const toolsArray = Object.values(toolStats)
      .sort((a, b) => b.totalRevenue - a.totalRevenue);
    
    // If no sales data, read from main.js
    if (toolsArray.length === 0) {
      const mainJsPath = path.join(__dirname, '../frontend/main.js');
      if (fs.existsSync(mainJsPath)) {
        const content = fs.readFileSync(mainJsPath, 'utf8');
        const toolsMatch = content.match(/const toolsData = (\[[\s\S]*?\]);/);
        if (toolsMatch) {
          const toolsData = eval(toolsMatch[1]);
          toolsArray.push(...toolsData.map(tool => ({
            toolId: tool.id,
            toolName: tool.name,
            salesCount: 0,
            totalRevenue: 0,
            tier: tool.tier,
            price: tool.price
          })));
        }
      }
    }
    
    res.json({
      success: true,
      total: toolsArray.length,
      tools: toolsArray
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت آمار ابزارها',
      message: error.message
    });
  }
});

// 5. Downloads History
router.get('/downloads', (req, res) => {
  try {
    const { userId, toolId, limit = 50 } = req.query;
    let downloads = readData('downloads.json');
    
    // If no downloads data, create sample
    if (downloads.length === 0) {
      downloads = [
        {
          id: 1,
          userId: 123456789,
          toolId: 1,
          toolName: 'Analytics 001',
          date: '2024-01-15 14:30:00',
          ip: '192.168.1.1',
          status: 'success',
          downloadUrl: '/api/download/Analytics 001'
        },
        {
          id: 2,
          userId: 987654321,
          toolId: 3,
          toolName: 'ChessNowBot 004',
          date: '2024-01-14 11:22:00',
          ip: '192.168.1.2',
          status: 'success',
          downloadUrl: '/api/download/ChessNowBot 004'
        }
      ];
      writeData('downloads.json', downloads);
    }
    
    // Apply filters
    if (userId) {
      downloads = downloads.filter(d => d.userId == userId);
    }
    
    if (toolId) {
      downloads = downloads.filter(d => d.toolId == toolId);
    }
    
    // Limit results
    downloads = downloads.slice(0, parseInt(limit));
    
    res.json({
      success: true,
      total: downloads.length,
      downloads: downloads
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت تاریخچه دانلودها',
      message: error.message
    });
  }
});

// 6. Export Data to Excel
router.get('/export', (req, res) => {
  try {
    const { type = 'sales' } = req.query;
    
    // Read data based on type
    let data = [];
    let filename = '';
    
    switch (type) {
      case 'sales':
        data = readData('invoices.json');
        filename = 'sales_export.json';
        break;
      case 'users':
        data = readData('users.json');
        filename = 'users_export.json';
        break;
      case 'tools':
        data = readData('sales.json');
        filename = 'tools_export.json';
        break;
      default:
        data = readData('invoices.json');
        filename = 'export.json';
    }
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    
    // Send JSON data
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'خطا در خروجی گرفتن داده‌ها',
      message: error.message
    });
  }
});

// 7. Backup Database
router.get('/backup', (req, res) => {
  try {
    const backupDir = path.join(__dirname, 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(backupDir, `backup_${timestamp}.zip`);
    
    // Get all data files
    const dataFiles = ['invoices.json', 'users.json', 'sales.json', 'downloads.json'];
    const backupData = {};
    
    dataFiles.forEach(file => {
      const filePath = path.join(__dirname, 'data', file);
      if (fs.existsSync(filePath)) {
        backupData[file] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
    });
    
    // Write backup file
    fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
    
    res.json({
      success: true,
      message: 'بک‌آپ با موفقیت ایجاد شد',
      backupFile: backupFile,
      timestamp: timestamp,
      size: fs.statSync(backupFile).size
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در ایجاد بک‌آپ',
      message: error.message
    });
  }
});

// 8. Regenerate Admin Token
router.post('/regenerate-token', (req, res) => {
  try {
    const newToken = 'ADMIN_' + 
      Math.random().toString(36).substr(2, 16).toUpperCase() + 
      '_' + new Date().getFullYear();
    
    // Log the action
    const logs = readData('admin_logs.json');
    logs.push({
      action: 'regenerate_token',
      adminId: req.query.admin_id || 'unknown',
      newToken: newToken,
      timestamp: new Date().toISOString(),
      ip: req.ip
    });
    writeData('admin_logs.json', logs);
    
    res.json({
      success: true,
      message: 'توکن جدید ایجاد شد',
      newToken: newToken,
      warning: 'این توکن را در جای امنی ذخیره کنید'
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در ایجاد توکن',
      message: error.message
    });
  }
});

// 9. Admin Logs
router.get('/logs', (req, res) => {
  try {
    const { action, limit = 100 } = req.query;
    let logs = readData('admin_logs.json');
    
    // Filter by action if provided
    if (action) {
      logs = logs.filter(log => log.action === action);
    }
    
    // Limit results
    logs = logs.slice(0, parseInt(limit));
    
    res.json({
      success: true,
      total: logs.length,
      logs: logs
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت لاگ‌ها',
      message: error.message
    });
  }
});

// 10. System Info
router.get('/system-info', (req, res) => {
  try {
    const systemInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      serverTime: new Date().toISOString(),
      dataFiles: {
        invoices: readData('invoices.json').length,
        users: readData('users.json').length,
        sales: readData('sales.json').length,
        downloads: readData('downloads.json').length,
        logs: readData('admin_logs.json').length
      }
    };
    
    res.json({
      success: true,
      systemInfo: systemInfo
    });
  } catch (error) {
    res.status(500).json({
      error: 'خطا در دریافت اطلاعات سیستم',
      message: error.message
    });
  }
});

module.exports = router;
