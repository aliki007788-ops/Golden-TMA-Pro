const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/admin-panel.html'));
});

// API route for tools
app.get('/api/tools', (req, res) => {
  try {
    // Read tools from main.js
    const mainJsPath = path.join(__dirname, '../frontend/main.js');
    const content = fs.readFileSync(mainJsPath, 'utf8');
    
    // Extract tools data
    const toolsMatch = content.match(/const toolsData = (\[[\s\S]*?\]);/);
    if (toolsMatch) {
      const toolsData = eval(toolsMatch[1]);
      res.json({ success: true, tools: toolsData });
    } else {
      res.status(500).json({ error: 'Tools data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Simple admin API
app.get('/api/admin/stats', (req, res) => {
  const token = req.query.admin_token;
  const validTokens = ['GOLDEN_TMA_ADMIN_2024', 'SUPER_ADMIN_SECRET'];
  
  if (!token || !validTokens.includes(token)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  // Return mock stats
  res.json({
    success: true,
    data: {
      totalRevenue: 12850,
      totalSales: 45,
      totalUsers: 67,
      todayRevenue: 350,
      popularTool: "Next.js Template",
      conversionRate: "28%",
      activeUsers: 52
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '2.0.0'
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Golden TMA Pro Server running on port ${port}`);
  console.log(`📁 Frontend: http://localhost:${port}`);
  console.log(`👑 Admin Panel: http://localhost:${port}/admin`);
});
