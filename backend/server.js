// server.js - Golden TMA Pro Server - Ultimate Professional Edition
// ارائه frontend, API ابزارها, دانلود ZIP امن, داشبورد وب

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// ارائه فایل‌های static frontend (Mini App)
app.use(express.static(path.join(__dirname, '../frontend')));

// ارائه لیست ابزارها (فقط فعال‌ها – حفظ شده از کد قبلی)
app.get('/api/tools', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
  res.json(data.tools.filter(t => t.active));
});

// دانلود zip ابزار (امن با چک id و active – حفظ شده از کد قبلی)
app.get('/api/download/:id', (req, res) => {
  const toolId = parseInt(req.params.id);
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
  const tool = data.tools.find(t => t.id === toolId);

  if (!tool || !tool.active) {
    return res.status(403).json({ error: 'ابزار غیرفعال یا یافت نشد' });
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

// داشبورد وب برای ادمین (جدید – فقط برای ادمین)
app.get('/admin-dashboard', (req, res) => {
  // امنیت ساده (بعداً با رمز یا JWT حرفه‌ای‌تر کن)
  const auth = req.headers.authorization;
  if (auth !== 'your_secret_key') {
    return res.status(401).send('دسترسی ممنوع');
  }

  const stats = JSON.parse(fs.readFileSync(path.join(__dirname, 'stats.json'), 'utf-8'));
  res.send(`
    <html lang="fa" dir="rtl">
    <head>
      <title>داشبورد Golden TMA Pro</title>
      <style>
        body { background: #000; color: #FFD700; font-family: Tahoma; text-align: center; padding: 50px; }
        h1 { font-size: 3rem; text-shadow: 0 0 20px #FFD700; }
        .stat { font-size: 2rem; margin: 20px; box-shadow: 0 0 30px #FFD70040; padding: 20px; border-radius: 20px; }
      </style>
    </head>
    <body>
      <h1>🌟 داشبورد مدیریت Golden TMA Pro 🌟</h1>
      <div class="stat">بازدید کل: ${stats.visits}</div>
      <div class="stat">فروش کل: ${Object.values(stats.sales).reduce((a, b) => a + b, 0)}</div>
      <div class="stat">درآمد کل: ${stats.totalIncome} Stars</div>
      <script>
        // بروزرسانی خودکار هر ۶۰ ثانیه
        setInterval(() => location.reload(), 60000);
      </script>
    </body>
    </html>
  `);
});

// fallback به صفحه اصلی Mini App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`✨ سرور Golden TMA Pro در پورت ${port} اجرا شد ✨`);
  console.log(`Mini App: http://localhost:${port}`);
  console.log(`داشبورد ادمین: http://localhost:${port}/admin-dashboard (با auth)`);
  console.log('تمام ویژگی‌ها فعال – آماده فروش میلیون دلاری!');
});
