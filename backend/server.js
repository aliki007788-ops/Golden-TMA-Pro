const express = require('express');
const path = require('path');
const fs = require('fs');
const { Bot } = require('grammy');
const cors = require('cors');
const adminApi = require('./admin-api');

const app = express();
const port = process.env.PORT || 3000;
const bot = new Bot(process.env.BOT_TOKEN || 'YOUR_BOT_TOKEN');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes for main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Route for admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/admin-panel.html'));
});

// API route for tools
app.get('/api/tools', (req, res) => {
  try {
    const toolsPath = path.join(__dirname, '../frontend/main.js');
    const content = fs.readFileSync(toolsPath, 'utf8');
    
    // Extract tools data from main.js
    const toolsMatch = content.match(/const toolsData = (\[[\s\S]*?\]);/);
    if (toolsMatch) {
      const toolsData = eval(toolsMatch[1]);
      res.json({
        success: true,
        total: toolsData.length,
        tools: toolsData
      });
    } else {
      res.status(500).json({ error: 'Tools data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API for tool details
app.get('/api/tool/:id', (req, res) => {
  try {
    const toolId = parseInt(req.params.id);
    const toolsPath = path.join(__dirname, '../frontend/main.js');
    const content = fs.readFileSync(toolsPath, 'utf8');
    
    const toolsMatch = content.match(/const toolsData = (\[[\s\S]*?\]);/);
    if (toolsMatch) {
      const toolsData = eval(toolsMatch[1]);
      const tool = toolsData.find(t => t.id === toolId);
      
      if (tool) {
        res.json({ success: true, tool });
      } else {
        res.status(404).json({ error: 'Tool not found' });
      }
    } else {
      res.status(500).json({ error: 'Tools data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Download endpoint
app.get('/api/download/:folder', (req, res) => {
  const folder = req.params.folder;
  const zipPath = path.join(__dirname, '../tools', folder, `${folder}.zip`);
  
  if (fs.existsSync(zipPath)) {
    res.download(zipPath, `${folder}.zip`);
  } else {
    // Return placeholder URL for testing
    res.json({
      success: true,
      url: `https://github.com/aliki007788-ops/Golden-TMA-Pro/raw/main/tools/${folder}/${folder}.zip`,
      message: 'Download link generated'
    });
  }
});

// Invoice creation
app.post('/api/create-invoice', async (req, res) => {
  const { toolId, price, toolName, description } = req.body;
  
  try {
    // For testing - return mock invoice
    const mockInvoice = {
      slug: `invoice_${Date.now()}_${toolId}`,
      title: toolName || `Golden Tool ${toolId}`,
      description: description || `Purchase of ${toolName}`,
      price: price,
      currency: 'XTR',
      status: 'pending'
    };
    
    // Save invoice to database (simulated)
    const invoicesPath = path.join(__dirname, 'data/invoices.json');
    let invoices = [];
    
    if (fs.existsSync(invoicesPath)) {
      invoices = JSON.parse(fs.readFileSync(invoicesPath, 'utf8'));
    }
    
    invoices.push({
      ...mockInvoice,
      id: invoices.length + 1,
      createdAt: new Date().toISOString(),
      userId: req.body.userId || 'unknown',
      status: 'pending'
    });
    
    // Ensure directory exists
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(invoicesPath, JSON.stringify(invoices, null, 2));
    
    res.json({
      success: true,
      invoice: mockInvoice,
      message: 'Invoice created successfully'
    });
  } catch (error) {
    console.error('Invoice creation error:', error);
    res.status(500).json({ error: 'Failed to create invoice' });
  }
});

// Admin API routes
app.use('/api/admin', adminApi);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    services: {
      api: 'running',
      admin: 'running',
      static: 'running'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path
  });
});

// Start server
app.listen(port, () => {
  console.log(`✨ Golden TMA Pro Server running on port ${port}`);
  console.log(`📁 Frontend: http://localhost:${port}`);
  console.log(`👑 Admin Panel: http://localhost:${port}/admin`);
  console.log(`🩺 Health Check: http://localhost:${port}/health`);
  
  // Create necessary directories
  const dirs = [
    path.join(__dirname, 'data'),
    path.join(__dirname, '../tools'),
    path.join(__dirname, '../logs')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    }
  });
  
  // Initialize data files
  const dataFiles = {
    'invoices.json': [],
    'users.json': [],
    'sales.json': [],
    'admin_logs.json': []
  };
  
  Object.entries(dataFiles).forEach(([filename, defaultData]) => {
    const filePath = path.join(__dirname, 'data', filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
      console.log(`📄 Created data file: ${filename}`);
    }
  });
});
