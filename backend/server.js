const express = require('express');
const path = require('path');
const fs = require('fs');
const { Bot } = require('grammy');

const app = express();
const port = process.env.PORT || 3000;
const bot = new Bot(process.env.BOT_TOKEN);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/tools', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
  res.json(data.tools.filter(t => t.active));
});

app.get('/api/download/:id', (req, res) => {
  const toolId = req.params.id;
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
  const tool = data.tools.find(t => t.folder === toolId);
  if (!tool || !tool.active) return res.status(403).json({ error: 'ابزار غیرفعال' });
  const zipPath = path.join(__dirname, '../tools', tool.folder, `${tool.folder}.zip`);
  if (fs.existsSync(zipPath)) res.download(zipPath, `${tool.name}.zip`);
  else res.status(404).json({ error: 'فایل یافت نشد' });
});

app.post('/api/create-invoice', async (req, res) => {
  const { toolId, price } = req.body;
  try {
    const invoiceLink = await bot.api.createInvoiceLink({
      title: `Golden Tool ${toolId}`,
      description: `خرید ابزار شماره ${toolId}`,
      payload: `golden_tool_${toolId}`,
      provider_token: process.env.PROVIDER_TOKEN,
      currency: "XTR",
      prices: [{ label: `Tool ${toolId}`, amount: price }]
    });
    const slug = invoiceLink.split('/').pop();
    res.json({ slug });
  } catch (err) {
    res.status(500).json({ error: 'خطا در ایجاد invoice' });
  }
});

app.listen(port, () => console.log(`✨ Server running on ${port}`));
