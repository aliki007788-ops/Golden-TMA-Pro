// bot.js - Golden TMA Pro Bot - Real Stars Payment + Secure Delivery

const { Bot } = require('grammy');
const fs = require('fs');
const path = require('path');

const bot = new Bot(process.env.BOT_TOKEN || 'YOUR_BOT_TOKEN');

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const tools = data.tools;

bot.command('start', async (ctx) => {
  if (ctx.match) {
    const toolId = parseInt(ctx.match.replace('tool_', ''));
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
      await ctx.reply(`🛠 ${tool.name}\n\n${tool.desc}\n\nقیمت: ${tool.price} Stars`, {
        reply_markup: {
          inline_keyboard: [[
            { text: `پرداخت ${tool.price} Stars`, pay: true }
          ]]
        }
      });
    }
  } else {
    await ctx.reply('به Golden TMA Pro خوش آمدید!\nبرای خرید ابزارها به وب اپ مراجعه کنید.');
  }
});

// چک پرداخت
bot.on('pre_checkout_query', async (ctx) => {
  await ctx.answerPreCheckoutQuery(true);
});

// پرداخت موفق – تحویل ZIP
bot.on('successful_payment', async (ctx) => {
  const payload = ctx.message.successful_payment.invoice_payload;
  const toolId = parseInt(payload.replace('tool_', ''));
  const tool = tools.find(t => t.id === toolId);

  if (tool) {
    const zipPath = path.join(__dirname, '../tools', tool.folder, `${tool.folder}.zip`);
    
    await ctx.replyWithDocument({ source: zipPath, filename: `${tool.name}.zip` });
    await ctx.reply('🎉 پرداخت موفق! فایل ابزار با موفقیت ارسال شد.\nممنون از خرید شما!');
  }
});

// ایجاد invoice
bot.on('message', async (ctx) => {
  if (ctx.message?.successful_payment) return;

  const text = ctx.message?.text;
  if (text && text.startsWith('/buy')) {
    const toolId = parseInt(text.split(' ')[1]);
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
      await bot.api.sendInvoice(ctx.chat.id, {
        title: tool.name,
        description: tool.desc,
        payload: `tool_${tool.id}`,
        provider_token: "", // برای Stars خالی
        currency: "XTR",
        prices: [{ label: tool.name, amount: tool.price * 100 }],
        photo_url: tool.images[0],
        photo_size: 512,
        photo_width: 512,
        photo_height: 512,
        need_name: false,
        need_phone_number: false,
        need_email: false,
        need_shipping_address: false,
        is_flexible: false
      });
    }
  }
});

bot.start();
console.log('Golden TMA Pro Bot started with real Stars payment!');
