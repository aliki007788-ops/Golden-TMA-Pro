// main.js - Golden TMA Pro - نسخه فوق حرفه‌ای سینمایی انگلیسی
// لیست ۵۹ ابزار بر اساس فولدرهای repo شما

Telegram.WebApp.ready();
Telegram.WebApp.expand();

// ذرات نورانی معلق طلایی سینمایی (نفس‌گیر)
particlesJS('particles-js', {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: '#FFD700' },
    shape: { type: 'circle' },
    opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: '#FFD700', opacity: 0.3, width: 1 },
    move: { enable: true, speed: 3, direction: 'none', random: true }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 150 }, push: { particles_nb: 6 } }
  },
  retina_detect: true
});

// داده ابزارها - ۵۹ ابزار بر اساس فولدرهای repo شما
const toolsData = [
  // Basic Tier (99-299 Stars)
  { id: 1, name: "Vanilla JS Boilerplate", desc: "Simple & Fast Start Template", price: 199, tier: "basic" },
  { id: 2, name: "Vite Boilerplate", desc: "Modern Build Tool for TMA", price: 249, tier: "basic" },
  { id: 3, name: "JS Template", desc: "Basic JavaScript Setup", price: 199, tier: "basic" },
  { id: 4, name: "TWA Template", desc: "Telegram Web App Base", price: 299, tier: "basic" },
  { id: 5, name: "Issues Tracker", desc: "Project Issue Management", price: 249, tier: "basic" },

  // Pro Tier (399-699 Stars)
  { id: 6, name: "React.js Template", desc: "Advanced React + Vite", price: 599, tier: "pro" },
  { id: 7, name: "Vue.js Template", desc: "Vue 3 Professional Setup", price: 549, tier: "pro" },
  { id: 8, name: "Solid.js Template", desc: "High Performance Reactive", price: 499, tier: "pro" },
  { id: 9, name: "Telegram UI Kit", desc: "25+ Premium Components", price: 699, tier: "pro" },
  { id: 10, name: "Mark42 UI", desc: "Lightweight Tree-Shakable UI", price: 449, tier: "pro" },
  { id: 11, name: "Onboarding Kit", desc: "User Onboarding Flow", price: 399, tier: "pro" },
  { id: 12, name: "Memo Card", desc: "Spaced Repetition Learning", price: 399, tier: "pro" },
  { id: 13, name: "Telebook", desc: "Hotel Booking Concept", price: 499, tier: "pro" },
  { id: 14, name: "TeleOTP", desc: "One-Time Password Generator", price: 399, tier: "pro" },
  { id: 15, name: "Tap to Earn", desc: "Full Tap-to-Earn Game Base", price: 649, tier: "pro" },
  { id: 16, name: "Mini Woo", desc: "WooCommerce Integration", price: 599, tier: "pro" },
  { id: 17, name: "ChessNowBot", desc: "Live Online Chess Game", price: 599, tier: "pro" },
  { id: 18, name: "Stkrz Bot", desc: "Personalized Sticker Creator", price: 449, tier: "pro" },
  { id: 19, name: "TRide", desc: "Ride Booking Concept App", price: 499, tier: "pro" },
  { id: 20, name: "MedSync", desc: "Healthcare Booking System", price: 499, tier: "pro" },

  // Premium Tier (799-1499 Stars)
  { id: 21, name: "Next.js Elite", desc: "Next.js + TON Connect + SSR", price: 999, tier: "premium" },
  { id: 22, name: "Stars Payment Pro", desc: "Complete Stars Payment System", price: 1499, tier: "premium" },
  { id: 23, name: "TMA.js SDK Elite", desc: "Advanced TMA SDK with Examples", price: 899, tier: "premium" },
  { id: 24, name: "Turbo TON TRPC", desc: "Fullstack Monorepo with TON", price: 849, tier: "premium" },
  { id: 25, name: "DPXWallet Pro", desc: "Advanced Crypto Wallet", price: 799, tier: "premium" },
  // ... (بقیه ابزارها رو بر اساس فولدرهایت اضافه کن – همه ۵۹ تا رو پوشش می‌ده)
  { id: 59, name: "Webpack Boilerplate Elite", desc: "Advanced Webpack Configuration", price: 799, tier: "premium" }
];

let currentTier = 'basic';

// تغییر سطح
function showTier(tier) {
  currentTier = tier;

  // تغییر رنگ دکمه فعال
  document.querySelectorAll('.tier-btn').forEach(btn => {
    btn.style.background = 'linear-gradient(145deg, #1a1a1a, #000000)';
    btn.style.color = '#FFD700';
  });
  const activeBtn = document.querySelector(`.tier-btn[onclick="showTier('${tier}')"]`);
  activeBtn.style.background = 'linear-gradient(145deg, #FFD700, #b8860b)';
  activeBtn.style.color = '#000000';

  // فیلتر و نمایش ابزارها
  const filtered = toolsData.filter(t => t.tier === tier);
  const list = document.getElementById('toolsList');
  list.innerHTML = '';

  filtered.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <h3>${tool.id}. ${tool.name}</h3>
      <p>${tool.desc}</p>
      <p class="price">${tool.price} Stars</p>
      <button onclick="buyTool(${tool.id})">Purchase with Stars</button>
    `;
    list.appendChild(card);
  });
}

// خرید (تست – بعداً backend برای Stars اضافه کن)
function buyTool(id) {
  Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  alert(`Processing purchase of Tool #${id} with Telegram Stars... ✨\n\nTransaction in progress!`);
}

// شروع با Basic Tier
showTier('basic');
