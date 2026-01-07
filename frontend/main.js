// main.js - Golden TMA Pro - Ultimate Cinematic Particles Fixed Edition
// ذرات نورانی طلایی سینمایی – همیشه فعال، درخشان و بدون مشکل

Telegram.WebApp.ready();
Telegram.WebApp.expand();

// تابع ذرات سینمایی – کاملاً بهینه و همیشه لود می‌شه
function initParticles() {
  if (typeof particlesJS === 'undefined') {
    setTimeout(initParticles, 500);
    return;
  }

  const canvas = document.getElementById('particles-js');
  if (!canvas) {
    setTimeout(initParticles, 500);
    return;
  }

  const isMobile = window.innerWidth < 768;

  particlesJS('particles-js', {
    particles: {
      number: { value: isMobile ? 70 : 140, density: { enable: true, value_area: 800 } },
      color: { value: '#FFD700' },
      shape: { type: 'circle' },
      opacity: { value: isMobile ? 0.5 : 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
      size: { value: isMobile ? 3 : 5, random: true, anim: { enable: true, speed: 40, size_min: 0.1 } },
      line_linked: { enable: true, distance: isMobile ? 100 : 160, color: '#FFD700', opacity: 0.4, width: 1 },
      move: { enable: true, speed: isMobile ? 2 : 4, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { repulse: { distance: isMobile ? 100 : 150, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}

// لود اولیه با تاخیر برای اطمینان
setTimeout(initParticles, 100);

// بروزرسانی وقتی صفحه تغییر اندازه داد
window.addEventListener('resize', () => {
  const canvas = document.getElementById('particles-js');
  if (canvas) {
    canvas.innerHTML = '';
    initParticles();
  }
});

// تمام ۴۹ ابزار واقعی – با توضیح کامل انگلیسی، عملکرد، ویژگی‌ها و ۴ تصویر placeholder حرفه‌ای
const toolsData = [
  { id: 1, name: "Analytics 001", desc: "Professional real-time analytics dashboard with advanced charts, user tracking, export features and customizable reports for TMA monitoring.", price: 199, tier: "basic", folder: "Analytics 001", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Analytics+Dashboard",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Live+Charts",
    "https://via.placeholder.com/800x600/000000/FFD700?text=User+Insights",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Export+Report"
  ] },
  { id: 2, name: "Awesome TMA 002", desc: "Curated collection of the best TMA resources, templates, libraries and community projects for developers.", price: 299, tier: "basic", folder: "Awesome TMA 002", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Awesome+Collection",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Best+Templates",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Community+Projects",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Resources+List"
  ] },
  { id: 3, name: "ChessNowBot 004", desc: "Live multiplayer chess game with real-time moves, chat and tournament support for TMA.", price: 599, tier: "pro", folder: "ChessNowBot 004", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Chess+Board",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Live+Game",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Chat+Feature",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tournament+Mode"
  ] },
  { id: 4, name: "Cloud Debug 007", desc: "Advanced debugging tool for Telegram Cloud Storage with real-time inspection and data management.", price: 349, tier: "basic", folder: "Cloud Debug 007", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Cloud+Inspector",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Storage+View",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Debug+Console",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Real-time+Data"
  ] },
  { id: 5, name: "Demo Mini App 005", desc: "Basic demo template to learn TMA development from scratch with simple features.", price: 149, tier: "basic", folder: "Demo Mini App 005", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Demo+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Template+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Learning+Guide"
  ] },
  { id: 6, name: "Init Data Go 008", desc: "Init data validation utilities in Go language for secure TMA authentication.", price: 399, tier: "pro", folder: "Init Data Go 008", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Go+Validation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Init+Data+Check",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Security+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Example"
  ] },
  { id: 7, name: "Issues Tracker 009", desc: "Project issue tracking and management system with labels, milestones and collaboration.", price: 299, tier: "basic", folder: "Issues Tracker 009", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Issue+Board",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Task+Management",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Bug+Tracking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Report+View"
  ] },
  { id: 8, name: "JS TSDK 012", desc: "JavaScript template with TypeScript SDK integration for TMA development.", price: 349, tier: "pro", folder: "JS TSDK 012", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=JS+TSDK+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Example",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features"
  ] },
  { id: 9, name: "JS Template 011", desc: "Simple JavaScript boilerplate for quick TMA prototyping.", price: 249, tier: "basic", folder: "JS Template 011", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=JS+Template+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Start",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Simple+Features"
  ] },
  { id: 10, name: "Mark42 UI 013", desc: "Lightweight tree-shakable UI library for TMA with custom components.", price: 449, tier: "pro", folder: "Mark42 UI 013", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Mark42+Components",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tree+Shaking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Lightweight+UI",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Styles"
  ] },
  { id: 11, name: "Mini Events 016", desc: "Python framework for event-based Mini Apps with real-time updates.", price: 349, tier: "pro", folder: "Mini Events 016", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Event+Framework",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Python+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Event+Handling",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Integration+Guide"
  ] },
  { id: 12, name: "Mini Woo 017", desc: "WooCommerce integration for TMA stores with product sync and checkout.", price: 599, tier: "pro", folder: "Mini Woo 017", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Woo+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Store+Dashboard",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Product+Listing",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Checkout+Flow"
  ] },
  { id: 13, name: "Next.js JS 018", desc: "Next.js template with JavaScript for server-side rendering in TMA.", price: 699, tier: "premium", folder: "Next.js JS 018", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next.js+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SSR+Example",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Routing+System",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance+Features"
  ] },
  { id: 14, name: "Next.js TS 020", desc: "Next.js with TypeScript and advanced features for type-safe TMA apps.", price: 699, tier: "premium", folder: "Next.js TS 020", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next.js+TS+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Type+Safety",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Routing",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Routes"
  ] },
  { id: 15, name: "Next.js TSDK 019", desc: "Next.js with TMA SDK integration for full WebApp features.", price: 749, tier: "premium", folder: "Next.js TSDK 019", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next+TSDK+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=WebApp+API",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Stack+Example"
  ] },
  { id: 16, name: "Next.js Template 021", desc: "Elite Next.js template with TON Connect and wallet integration.", price: 799, tier: "premium", folder: "Next.js Template 021", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Elite+Next+Template",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TON+Connect",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Wallet+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features"
  ] },
  { id: 17, name: "SDK-master029", desc: "Core TMA SDK with full API support and documentation.", price: 699, tier: "premium", folder: "SDK-master029", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+SDK+Overview",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Documentation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Examples",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Usage"
  ] },
  { id: 18, name: "TCalculator-master037", desc: "Advanced calculator with custom functions and scientific mode.", price: 299, tier: "basic", folder: "TCalculator-master037", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Calculator+UI",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Functions",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Scientific+Mode",
    "https://via.placeholder.com/800x600/000000/FFD700?text=History+Feature"
  ] },
  { id: 19, name: "TRide-master049", desc: "Ride booking concept with map integration and real-time tracking.", price: 499, tier: "pro", folder: "TRide-master049", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Ride+Booking+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Map+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Driver+Tracking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Payment+Flow"
  ] },
  { id: 20, name: "TeleOTP-main047", desc: "Secure one-time password generator with time sync and multiple accounts.", price: 349, tier: "pro", folder: "TeleOTP-main047", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=OTP+Generator",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Secure+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Time+Sync",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Multiple+Accounts"
  ] },
  { id: 21, name: "Telegram-Web-App-master044", desc: "Full Web App example with all TMA features and API usage.", price: 399, tier: "pro", folder: "Telegram-Web-App-master044", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=WebApp+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Usage",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 22, name: "nextjs-tsdk-template-master022", desc: "Next.js with advanced TSDK integration and TypeScript support.", price: 749, tier: "premium", folder: "nextjs-tsdk-template-master022", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next+TSDK+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Support",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Stack"
  ] },
  { id: 23, name: "react-telegram-web-app-master028", desc: "React hooks for Telegram WebApp API with custom utilities.", price: 499, tier: "pro", folder: "react-telegram-web-app-master028", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+Hooks",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Utilities",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Usage+Example"
  ] },
  { id: 24, name: "reactjs-js-template-master024", desc: "React template with JavaScript for TMA development.", price: 599, tier: "pro", folder: "reactjs-js-template-master024", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Component+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=State+Management",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Routing"
  ] },
  { id: 25, name: "reactjs-js-tsdk-template-master025", desc: "React with JS and TSDK for TMA features.", price: 649, tier: "pro", folder: "reactjs-js-tsdk-template-master025", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+JS+TSDK",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Integration+Guide",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Example"
  ] },
  { id: 26, name: "reactjs-template-master026", desc: "Core React template for TMA with Vite setup.", price: 599, tier: "pro", folder: "reactjs-template-master026", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+TMA+Core",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vite+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Component+Library",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Deployment+Guide"
  ] },
  { id: 27, name: "reactjs-tsdk-template-master027", desc: "React with TSDK integration and TypeScript support.", price: 649, tier: "pro", folder: "reactjs-tsdk-template-master027", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+TSDK",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Support",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Integration"
  ] },
  { id: 28, name: "solidjs-js-template-master030", desc: "Solid.js with JavaScript for reactive TMA apps.", price: 499, tier: "pro", folder: "solidjs-js-template-master030", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Reactive+System",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Example"
  ] },
  { id: 29, name: "solidjs-js-tsdk-template-master031", desc: "Solid.js with JS and TSDK for TMA.", price: 549, tier: "pro", folder: "solidjs-js-tsdk-template-master031", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+JS+TSDK",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Integration+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Reactive+API",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Usage"
  ] },
  { id: 30, name: "solidjs-template-master032", desc: "Core Solid.js template for TMA with fine-grained reactivity.", price: 499, tier: "pro", folder: "solidjs-template-master032", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+TMA+Core",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Fine+Grained+Reactivity",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance+Test",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Setup+Guide"
  ] },
  { id: 31, name: "solidjs-tsdk-template-master033", desc: "Solid.js with TSDK integration and TypeScript support.", price: 549, tier: "pro", folder: "solidjs-tsdk-template-master033", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+TSDK",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Support",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 32, name: "sticky-app-master034", desc: "Interactive sticky note app with drag & drop and color options for TMA.", price: 399, tier: "pro", folder: "sticky-app-master034", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Sticky+Notes+Board",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Create+Note",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Color+Options",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Drag+Drop"
  ] },
  { id: 33, name: "stkrz_bot-main035", desc: "Personalized sticker creator with custom design and pack export.", price: 449, tier: "pro", folder: "stkrz_bot-main035", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Sticker+Creator",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Design",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Pack+Creation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Export+Pack"
  ] },
  { id: 34, name: "tap-to-earn-telegram-mini-app-main036", desc: "Complete Tap-to-Earn game template with upgrades and leaderboard.", price: 649, tier: "pro", folder: "tap-to-earn-telegram-mini-app-main036", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tap+Game+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Coin+Earning",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Upgrades+Shop",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Leaderboard"
  ] },
  { id: 35, name: "telegram-mini-app-stars-payments-master039", desc: "Advanced Stars payment system with invoice creation and success handling.", price: 899, tier: "premium", folder: "telegram-mini-app-stars-payments-master039", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Stars+Payment+Flow",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Invoice+Creation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Payment+Success",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features"
  ] },
  { id: 36, name: "telegram-webapp-auth-master042", desc: "Secure WebApp authentication with init data check and session management.", price: 399, tier: "pro", folder: "telegram-webapp-auth-master042", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Auth+Login",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Secure+Session",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Init+Data+Check",
    "https://via.placeholder.com/800x600/000000/FFD700?text=User+Verification"
  ] },
  { id: 37, name: "telegram-webapp-bot-main043", desc: "Bot integration with WebApp features and data exchange.", price: 399, tier: "pro", folder: "telegram-webapp-bot-main043", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Bot+WebApp+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Menu+Button",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Data+Exchange",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 38, name: "telegram-webapps-master045", desc: "Collection of TMA examples and templates for quick start.", price: 499, tier: "pro", folder: "telegram-webapps-master045", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+Collection",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Multiple+Examples",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Template+Gallery",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Samples"
  ] },
  { id: 39, name: "telegram-wishlist-miniapp-main046", desc: "Wishlist app with sharing and collaborative editing features.", price: 349, tier: "pro", folder: "telegram-wishlist-miniapp-main046", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Wishlist+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Add+Item",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Share+List",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Collaborative+Edit"
  ] },
  { id: 40, name: "twa-template-main051", desc: "Telegram Web App base template with essential features.", price: 299, tier: "basic", folder: "twa-template-main051", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TWA+Base+Template",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Connection",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Start"
  ] },
  { id: 41, name: "typescript-template-master052", desc: "TypeScript boilerplate for TMA with type safety.", price: 399, tier: "pro", folder: "typescript-template-master052", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+TMA",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Type+Safety",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Config+Files",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Build+Process"
  ] },
  { id: 42, name: "typescript-tsdk-template-master053", desc: "TypeScript with TSDK integration for advanced TMA features.", price: 449, tier: "pro", folder: "typescript-tsdk-template-master053", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TS+TSDK+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Types",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 43, name: "vanilla-js-boilerplate-master054", desc: "Vanilla JS boilerplate for lightweight TMA apps.", price: 249, tier: "basic", folder: "vanilla-js-boilerplate-master054", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vanilla+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=No+Framework",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Lightweight+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Setup"
  ] },
  { id: 44, name: "vanillajs-template-master055", desc: "Pure Vanilla JS template for minimal TMA projects.", price: 249, tier: "basic", folder: "vanillajs-template-master055", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Pure+Vanilla+JS",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Minimal+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance+Focus",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Features"
  ] },
  { id: 45, name: "vanillajs-tsdk-template-master056", desc: "Vanilla JS with TSDK for TMA features without frameworks.", price: 349, tier: "pro", folder: "vanillajs-tsdk-template-master056", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vanilla+TSDK",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=No+Framework",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Lightweight+Integration"
  ] },
  { id: 46, name: "vite-boilerplate-master057", desc: "Vite boilerplate for fast TMA development with hot reload.", price: 299, tier: "basic", folder: "vite-boilerplate-master057", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vite+Fast+Build",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Hot+Reload",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Modern+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Start"
  ] },
  { id: 47, name: "vuejs-template-master058", desc: "Vue 3 professional template for TMA with composition API.", price: 549, tier: "pro", folder: "vuejs-template-master058", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vue+3+TMA",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Composition+API",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Component+Library",
    "https://via.placeholder.com/800x600/000000/FFD700?text=State+Management"
  ] },
  { id: 48, name: "webpack-boilerplate-master059", desc: "Advanced Webpack configuration for production TMA apps with optimization.", price: 799, tier: "premium", folder: "webpack-boilerplate-master059", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Webpack+Production",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Splitting",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tree+Shaking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Optimization"
  ] },
  { id: 49, name: "TMA Starter Pro 060", desc: "Ultimate starter kit for professional TMA development with all essential tools.", price: 999, tier: "premium", folder: "TMA-Starter-Pro-060", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Starter+Kit+Dashboard",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Development+Tools",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Template+Collection",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features"
  ] }
];

let currentTier = 'basic';

// صفحه اصلی
if (document.getElementById('toolsList')) {
  document.querySelectorAll('.tier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showTier(btn.dataset.tier);
    });
  });

  function showTier(tier) {
    currentTier = tier;
    const filtered = toolsData.filter(t => t.tier === tier);
    const list = document.getElementById('toolsList');
    list.innerHTML = '';

    filtered.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';

      let imagesHtml = '';
      tool.images.forEach(img => {
        imagesHtml += `<img src="${img}" class="preview-img" onerror="this.src='https://via.placeholder.com/400x300/333333/FFD700?text=Loading...'">`;
      });

      card.innerHTML = `
        <div class="preview-grid">${imagesHtml}</div>
        <h3>${tool.id}. ${tool.name}</h3>
        <p>${tool.desc.substring(0, 150)}...</p>
        <p class="price">${tool.price} Stars</p>
        <button onclick="window.location.href='tool.html?id=${tool.id}'">View Details & Buy</button>
      `;
      list.appendChild(card);
    });
  }

  showTier('basic');
}

// صفحه جزئیات ابزار
if (document.getElementById('toolName')) {
  const params = new URLSearchParams(window.location.search);
  const toolId = params.get('id');
  if (toolId) loadToolDetail(parseInt(toolId));
}

function loadToolDetail(id) {
  const tool = toolsData.find(t => t.id === id);
  if (!tool) {
    document.body.innerHTML = '<h1 style="text-align:center;color:#FFD700;margin-top:100px;">Tool not found</h1>';
    return;
  }

  document.getElementById('toolName').textContent = tool.name;
  document.getElementById('toolDesc').textContent = tool.desc;
  document.getElementById('toolPrice').textContent = `${tool.price} Stars`;

  const imagesContainer = document.getElementById('toolImages');
  imagesContainer.innerHTML = '';
  tool.images.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.alt = tool.name;
    imgElement.onerror = () => imgElement.src = 'https://via.placeholder.com/800x600/333333/FFD700?text=Image+Not+Found';
    imagesContainer.appendChild(imgElement);
  });

  const payBtn = document.getElementById('payBtn');
  payBtn.onclick = () => initiateStarsPayment(tool.id, tool.price);
}

// پرداخت واقعی
async function initiateStarsPayment(id, price) {
  const tool = toolsData.find(t => t.id === id);

  const invoice = {
    title: tool.name,
    description: tool.desc.substring(0, 255),
    payload: `golden_tool_${id}`,
    provider_token: "",
    currency: "XTR",
    prices: [{ label: tool.name, amount: price * 100 }]
  };

  try {
    Telegram.WebApp.invokeInvoice(invoice);

    Telegram.WebApp.onEvent('invoiceClosed', (event) => {
      if (event.status === 'paid') {
        document.getElementById('payBtn').style.display = 'none';
        document.getElementById('downloadBtn').style.display = 'block';
        document.getElementById('paymentStatus').textContent = 'پرداخت موفق! ابزار آماده دانلود است ✨';
        document.getElementById('paymentStatus').style.display = 'block';
      } else {
        document.getElementById('paymentStatus').textContent = 'پرداخت ناموفق بود.';
        document.getElementById('paymentStatus').style.display = 'block';
      }
    });
  } catch (error) {
    alert('خطا در پرداخت. دوباره امتحان کنید.');
  }
}

// دانلود ZIP
function downloadTool(folder) {
  const zipUrl = `https://github.com/aliki007788-ops/Golden-TMA-Pro/raw/main/tools/${folder}/${folder}.zip`;
  window.open(zipUrl, '_blank');
}
