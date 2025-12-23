// bot.js - TMA Toolkit Pro Admin Bot
// نسخه فوق حرفه‌ای، سینمایی، فارسی/انگلیسی - کامل و نفس‌گیر
// ساخته‌شده برای کنترل کامل ابزارها از داخل بات

const { Bot, InlineKeyboard } = require('grammy');
const fs = require('fs');

const bot = new Bot('YOUR_BOT_TOKEN_HERE'); // توکن بات رو از @BotFather بگذار

const ADMIN_ID = 123456789; // ID تلگرام ادمین (خودت رو بگذار - از initDataUnsafe.user.id بگیر)

const DATA_FILE = './data.json';

// بارگذاری دیتابیس
let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

// زبان پیش‌فرض ادمین
let adminLang = 'fa';

// تابع ترجمه (فارسی/انگلیسی)
const t = (fa, en) => adminLang === 'fa' ? fa : en;

// ذخیره تغییرات دائمی
function saveData() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  console.log('تغییرات ذخیره شد ✨');
}

// دستور ورود ادمین - شروع منوی سینمایی
bot.command('admin', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) {
    return ctx.reply('⛔ دسترسی ممنوع! شما ادمین نیستید.');
  }

  const keyboard = new InlineKeyboard()
    .text('⚡ مدیریت ابزارها', 'admin_tools').row()
    .text('🌐 تغییر زبان', 'admin_lang').row()
    .text('📊 آمار و گزارش', 'admin_stats').row()
    .text('➕ اضافه کردن ابزار جدید', 'add_tool').row()
    .text('✖️ خروج', 'admin_exit');

  await ctx.reply('✨ **پنل کنترل Elite TMA Toolkit Pro** ✨\nکنترل کامل ابزارها در دست شماست!', {
    reply_markup: keyboard,
    parse_mode: 'Markdown'
  });
});

// هندل کردن تمام دکمه‌ها
bot.on('callback_query:data', async (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return ctx.answerCallbackQuery('⛔ دسترسی ندارید!');

  const data = ctx.callbackQuery.data;

  // لیست ابزارها
  if (data === 'admin_tools') {
    let text = '📋 **لیست ابزارها** (۵۹ مورد):\n\n';
    data.tools.forEach(tool => {
      text += `${tool.id}. ${tool.name} | ${tool.tier.toUpperCase()} | ${tool.active ? '✅ فعال' : '❌ غیرفعال'} | ${tool.price} ⭐\n`;
    });

    const keyboard = new InlineKeyboard()
      .text('✏️ ویرایش سطح', 'edit_tier').row()
      .text('🔄 فعال/غیرفعال', 'toggle_active').row()
      .text('💰 تغییر قیمت', 'change_price').row()
      .text('➕ اضافه / ❌ حذف', 'add_remove').row()
      .text('🔙 بازگشت', 'admin_back');

    await ctx.editMessageText(text, { reply_markup: keyboard, parse_mode: 'Markdown' });
  }

  // تغییر زبان
  if (data === 'admin_lang') {
    adminLang = adminLang === 'fa' ? 'en' : 'fa';
    await ctx.answerCallbackQuery(t('زبان تغییر کرد به ' + (adminLang === 'fa' ? 'فارسی' : 'انگلیسی') + ' ✨', 'Language changed to ' + (adminLang === 'fa' ? 'Persian' : 'English') + ' ✨'));
  }

  // آمار کلی
  if (data === 'admin_stats') {
    const active = data.tools.filter(t => t.active).length;
    const total = data.tools.length;
    const basic = data.tools.filter(t => t.tier === 'basic').length;
    const pro = data.tools.filter(t => t.tier === 'pro').length;
    const premium = data.tools.filter(t => t.tier === 'premium').length;

    const text = t(
      `📊 **آمار Elite**\n\nکل ابزارها: ${total}\nفعال: ${active}\nBasic: ${basic}\nPro: ${pro}\nPremium: ${premium}\n\n✨ کنترل کامل در دست شماست!`,
      `📊 **Elite Stats**\n\nTotal Tools: ${total}\nActive: ${active}\nBasic: ${basic}\nPro: ${pro}\nPremium: ${premium}\n\n✨ Full control in your hands!`
    );

    await ctx.editMessageText(text, {
      reply_markup: new InlineKeyboard().text(t('بازگشت', 'Back'), 'admin_back'),
      parse_mode: 'Markdown'
    });
  }

  // بازگشت به منوی اصلی
  if (data === 'admin_back') {
    const keyboard = new InlineKeyboard()
      .text('⚡ مدیریت ابزارها', 'admin_tools').row()
      .text('🌐 تغییر زبان', 'admin_lang').row()
      .text('📊 آمار', 'admin_stats').row()
      .text('➕ اضافه ابزار', 'add_tool').row()
      .text('✖️ خروج', 'admin_exit');

    await ctx.editMessageText(t('✨ پنل Elite TMA Toolkit Pro ✨', '✨ TMA Toolkit Pro Elite Panel ✨'), {
      reply_markup: keyboard,
      parse_mode: 'Markdown'
    });
  }

  // خروج
  if (data === 'admin_exit') {
    await ctx.deleteMessage();
    await ctx.answerCallbackQuery('خروج موفق ✨');
  }

  // ... (قابلیت‌های ویرایش سطح، قیمت، اضافه/حذف رو بعداً گسترش می‌دیم - فعلاً منو کامل آماده است)
});

// شروع بات - نفس‌گیر و حرفه‌ای
bot.start();
console.log('✨ بات Elite TMA Toolkit Pro شروع شد! ✨');
console.log('ادمین آماده کنترل کامل است...');