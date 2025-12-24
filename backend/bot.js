// bot.js - Golden TMA Pro Admin Bot - نسخه فارسی فوق حرفه‌ای

const { Bot, InlineKeyboard } = require('grammy');
const fs = require('fs');
const path = require('path');

const bot = new Bot(process.env.BOT_TOKEN);
const ADMIN_ID = Number(process.env.ADMIN_ID); // ID ادمین (تو)

let stats = {
  visits: 0,
  dailyVisits: {},
  sales: {}, // { toolId: count }
  dailySales: {},
  totalIncome: 0,
  purchases: [] // [{ userId, username, toolId, date }]
};

if (fs.existsSync('./stats.json')) {
  stats = JSON.parse(fs.readFileSync('./stats.json', 'utf-8'));
}

const tools = JSON.parse(fs.readFileSync('./data.json', 'utf-8')).tools;

let welcomeMessage = "🌟 به Golden TMA Pro خوش آمدید!\n\nبهترین ابزارهای حرفه‌ای Telegram Mini App رو با پرداخت Stars بخرید.\nدکمه زیر رو بزنید و وارد فروشگاه بشید!";

function saveStats() {
  fs.writeFileSync('./stats.json', JSON.stringify(stats, null, 2));
}

// افزایش بازدید (از Mini App فراخوانی می‌شه)
bot.api.setWebhook(`https://your-render-url.onrender.com/webhook`); // یا polling استفاده کن

// خوش‌آمدگویی
bot.command('start', async (ctx) => {
  stats.visits++;
  const today = new Date().toISOString().split('T')[0];
  stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1;
  saveStats();

  await ctx.reply(welcomeMessage, {
    reply_markup: {
      inline_keyboard: [[{ text: "🛒 ورود به فروشگاه", web_app: { url: "https://your-miniapp-url.onrender.com" } }]]
    }
  });
});

// پنل ادمین
bot.command('admin', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return ctx.reply('⛔ دسترسی ممنوع است!');

  const keyboard = new InlineKeyboard()
    .text('📊 آمار و گزارش روزانه', 'stats').row()
    .text('💰 کیف پول و درآمد', 'wallet').row()
    .text('🎁 هدیه ابزار', 'gift').row()
    .text('📢 مدیریت پیام‌ها', 'messages').row()
    .text('🛠 مدیریت ابزارها', 'manage_tools').row()
    .text('🌐 داشبورد وب', 'web_dashboard');

  await ctx.reply('✨ **پنل مدیریت Golden TMA Pro** ✨\nتمام کنترل‌ها در دست شماست!', {
    reply_markup: keyboard,
    parse_mode: 'Markdown'
  });
});

// آمار و گزارش
bot.callbackQuery('stats', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;

  const today = new Date().toISOString().split('T')[0];
  let text = `📊 **گزارش کامل فروش و بازدید**\n\n`;
  text += `👥 بازدید کل: ${stats.visits}\n`;
  text += `👥 بازدید امروز: ${stats.dailyVisits[today] || 0}\n\n`;
  text += `💸 فروش کل: ${Object.values(stats.sales).reduce((a, b) => a + b, 0)} مورد\n`;
  text += `💸 فروش امروز: ${stats.dailySales[today] || 0} مورد\n`;
  text += `⭐ درآمد کل: ${stats.totalIncome} Stars\n\n`;
  text += `🔥 پرفروش‌ترین ابزارها:\n`;

  const sorted = Object.entries(stats.sales).sort((a, b) => b[1] - a[1]).slice(0, 10);
  sorted.forEach(([id, count]) => {
    const tool = tools.find(t => t.id === Number(id));
    text += `• ${tool?.name || id}: ${count} فروش\n`;
  });

  await ctx.editMessageText(text, { parse_mode: 'Markdown' });
});

// کیف پول
bot.callbackQuery('wallet', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;

  try {
    const balance = await bot.api.getMyStarBalance();
    await ctx.editMessageText(`💰 **کیف پول Golden TMA Pro**\n\nموجودی فعلی: ${balance.amount} Stars\nدرآمد ثبت‌شده: ${stats.totalIncome} Stars\n\nبرای برداشت به @BotFather یا پشتیبانی تلگرام مراجعه کنید.`, {
      parse_mode: 'Markdown'
    });
  } catch (error) {
    await ctx.editMessageText('⚠️ خطا در دریافت موجودی Stars. بعداً امتحان کنید.');
  }
});

// داشبورد وب
bot.callbackQuery('web_dashboard', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;

  await ctx.editMessageText(`🌐 **داشبورد وب**\n\nلینک امن داشبورد (فقط برای ادمین):\nhttps://your-render-url.onrender.com/admin-dashboard\n\nرمز عبور: your_secret_password`, {
    parse_mode: 'Markdown'
  });
});

// هدیه ابزار
bot.callbackQuery('gift', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;

  let text = '🎁 **هدیه ابزار**\n\nابزار رو با دستور زیر انتخاب کنید:\n';
  tools.forEach(tool => {
    text += `/gift_${tool.id} ${tool.name}\n`;
  });

  await ctx.editMessageText(text, { parse_mode: 'Markdown' });
});

// پردازش هدیه
tools.forEach(tool => {
  bot.command(`gift_${tool.id}`, async (ctx) => {
    if (ctx.from.id !== ADMIN_ID) return;

    await ctx.reply(`ابزار "${tool.name}" انتخاب شد.\nحالا @username کاربر رو بفرستید یا پیامش رو فوروارد کنید.`);
    
    bot.on('message', async (msg) => {
      if (msg.from.id !== ADMIN_ID) return;

      let targetUser;
      if (msg.reply_to_message) {
        targetUser = msg.reply_to_message.from;
      } else if (msg.text && msg.text.startsWith('@')) {
        targetUser = { username: msg.text.trim() };
      }

      if (targetUser) {
        const zipPath = path.join(__dirname, '../tools', tool.folder, `${tool.folder}.zip`);
        try {
          await bot.api.sendDocument(targetUser.id || targetUser.username, {
            source: fs.readFileSync(zipPath),
            filename: `${tool.name}.zip`
          });
          await ctx.reply(`🎁 ابزار "${tool.name}" با موفقیت به ${targetUser.username || targetUser.first_name} ارسال شد!`);
        } catch (err) {
          await ctx.reply('⚠️ خطا در ارسال فایل. کاربر بلاک کرده یا فایل موجود نیست.');
        }
      }
    });
  });
});

// مدیریت پیام‌ها
bot.callbackQuery('messages', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;

  await ctx.editMessageText(`📢 **مدیریت پیام‌ها**\n\nپیام خوش‌آمدگویی فعلی:\n${welcomeMessage}\n\nبرای تغییر: /setwelcome متن جدید`, {
    parse_mode: 'Markdown'
  });
});

bot.command('setwelcome', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;

  const newMessage = ctx.message.text.replace('/setwelcome ', '');
  if (newMessage.length < 10) return ctx.reply('متن خیلی کوتاهه!');

  welcomeMessage = newMessage;
  await ctx.reply('✅ پیام خوش‌آمدگویی بروز شد!');
});

// گزارش روزانه (هر روز ساعت ۹ صبح)
setInterval(async () => {
  const hour = new Date().getHours();
  if (hour === 9) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const dailySale = stats.dailySales[yesterday] || 0;

    await bot.api.sendMessage(ADMIN_ID, `📅 **گزارش روزانه ${yesterday}**\n\nفروش: ${dailySale} مورد\nبازدید: ${stats.dailyVisits[yesterday] || 0}\nدرآمد تقریبی: ${dailySale * 500} Stars (متوسط)\n\nفروش کل تا حالا: ${stats.totalIncome} Stars`);
  }
}, 3600000); // هر ساعت چک می‌کنه

// پرداخت موفق – ثبت آمار
bot.on('successful_payment', async (ctx) => {
  const payload = ctx.message.successful_payment.invoice_payload;
  const toolId = Number(payload.replace('golden_tool_', ''));

  const today = new Date().toISOString().split('T')[0];
  stats.sales[toolId] = (stats.sales[toolId] || 0) + 1;
  stats.dailySales[today] = (stats.dailySales[today] || 0) + 1;
  stats.totalIncome += tools.find(t => t.id === toolId).price;
  stats.purchases.push({
    userId: ctx.from.id,
    username: ctx.from.username || ctx.from.first_name,
    toolId,
    date: new Date().toISOString()
  });
  saveStats();

  // ارسال فایل به کاربر
  const tool = tools.find(t => t.id === toolId);
  const zipPath = path.join(__dirname, '../tools', tool.folder, `${tool.folder}.zip`);
  await ctx.replyWithDocument({ source: fs.readFileSync(zipPath), filename: `${tool.name}.zip` });
  await ctx.reply('🎉 پرداخت موفق! فایل ابزار با موفقیت ارسال شد.\nممنون از خرید شما!');
});

bot.start();
console.log('بات ادمین Golden TMA Pro با زبان فارسی و تمام ویژگی‌ها فعال شد! ✨');
