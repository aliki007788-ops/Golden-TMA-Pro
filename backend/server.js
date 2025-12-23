// server.js - سرور فوق حرفه‌ای Express برای TMA Toolkit Pro
// ارائه data.json + دانلود zip ابزارها با امنیت بالا

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// ارائه فایل‌های static frontend (Mini App)
app.use(express.static(path.join(__dirname, '../frontend')));

// ارائه لیست ابزارها (فقط فعال‌ها)
app.get('/api/tools', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
  res.json(data.tools.filter(t => t.active));
});

// دانلود zip ابزار (امن با چک id و active)
app.get('/api/download/:id', (req, res) => {
  const toolId = parseInt(req.params.id);
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
  const tool = data.tools.find(t => t.id === toolId);

  if (!tool || !tool.active) {
    return res.status(403).json({ error: t('ابزار غیرفعال یا یافت نشد', 'Tool inactive or not found') });
  }

  const zipPath = path.join(__dirname, '../tools', tool.folder, `${tool.folder}.zip`);

  if (fs.existsSync(zipPath)) {
    res.download(zipPath, `${tool.name}.zip`, (err) => {
      if (err) {
        console.error('خطا در ارسال zip:', err);
        res.status(500).send('خطا در ارسال فایل');
      }
    });
  } else {
    res.status(404).json({ error: 'فایل ZIP یافت نشد' });
  }
});

// صفحه اصلی Mini App (fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`✨ سرور Elite TMA Toolkit Pro در پورت ${port} اجرا شد ✨`);
  console.log(`Mini App آماده: http://localhost:${port}`);
  console.log('بات و سرور همزمان فعال - آماده فروش میلیون دلاری!');
});