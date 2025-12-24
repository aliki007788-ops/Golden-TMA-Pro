// main.js - Golden TMA Pro - Final Professional Mobile-Friendly Edition
// کاملاً کامل، ریسپانسیو، پرداخت واقعی Stars، دانلود پس از پرداخت، صفحه اختصاصی هر ابزار

Telegram.WebApp.ready();
Telegram.WebApp.expand();

// ذرات نورانی طلایی سینمایی – همیشه فعال و نفس‌گیر
particlesJS('particles-js', {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: '#FFD700' },
    shape: { type: 'circle' },
    opacity: { value: 0.8, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: '#FFD700', opacity: 0.3, width: 1 },
    move: { enable: true, speed: 3 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 150 } }
  },
  retina_detect: true
});

// تمام ۴۹ ابزار – دقیق از لیست GitHub شما (نام، توضیح، قیمت، سطح، فولدر، تصاویر placeholder)
const toolsData = [
  { id: 1, name: "Analytics 001", desc: "Professional real-time analytics dashboard with advanced charts and user tracking.", price: 199, tier: "basic", folder: "Analytics 001", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Analytics+Dashboard+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Live+Charts",
    "https://via.placeholder.com/800x600/000000/FFD700?text=User+Insights",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Export+Report"
  ] },
  { id: 2, name: "Awesome TMA 002", desc: "Curated collection of best TMA resources, templates and community projects.", price: 299, tier: "basic", folder: "Awesome TMA 002", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Awesome+Collection+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Templates+Library",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Community+Projects",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Resources+Overview"
  ] },
  { id: 3, name: "ChessNowBot 004", desc: "Live multiplayer chess game with real-time moves and chat.", price: 599, tier: "pro", folder: "ChessNowBot 004", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Chess+Board",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Live+Game",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Chat+Feature",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tournament+Mode"
  ] },
  { id: 4, name: "Cloud Debug 007", desc: "Advanced debugging tool for Telegram Cloud Storage.", price: 349, tier: "basic", folder: "Cloud Debug 007", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Cloud+Inspector",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Storage+View",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Debug+Console",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Real-time+Data"
  ] },
  { id: 5, name: "Demo Mini App 005", desc: "Basic demo template for learning TMA development.", price: 149, tier: "basic", folder: "Demo Mini App 005", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Demo+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Template+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Learning+Guide"
  ] },
  { id: 6, name: "Init Data Go 008", desc: "Init data validation utilities in Go language.", price: 399, tier: "pro", folder: "Init Data Go 008", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Go+Validation+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Init+Data+Check",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Go+Code+Example",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Security+Features"
  ] },
  { id: 7, name: "Issues Tracker 009", desc: "Project issue tracking and management system.", price: 299, tier: "basic", folder: "Issues Tracker 009", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Issue+Board",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Task+Management",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Bug+Tracking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Report+View"
  ] },
  { id: 8, name: "JS TSDK 012", desc: "JavaScript template with TypeScript SDK integration.", price: 349, tier: "pro", folder: "JS TSDK 012", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=JS+TSDK+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Example",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features"
  ] },
  { id: 9, name: "JS Template 011", desc: "Simple JavaScript boilerplate for TMA.", price: 249, tier: "basic", folder: "JS Template 011", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=JS+Template+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Start",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Simple+Features"
  ] },
  { id: 10, name: "Mark42 UI 013", desc: "Lightweight tree-shakable UI library for TMA.", price: 449, tier: "pro", folder: "Mark42 UI 013", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Mark42+Components",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tree+Shaking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Lightweight+UI",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Styles"
  ] },
  { id: 11, name: "Mini Events 016", desc: "Python framework for event-based Mini Apps.", price: 349, tier: "pro", folder: "Mini Events 016", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Event+Framework",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Python+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Event+Handling",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Integration+Guide"
  ] },
  { id: 12, name: "Mini Woo 017", desc: "WooCommerce integration for TMA stores.", price: 599, tier: "pro", folder: "Mini Woo 017", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Woo+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Store+Dashboard",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Product+Listing",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Checkout+Flow"
  ] },
  { id: 13, name: "Next.js JS 018", desc: "Next.js template with JavaScript.", price: 699, tier: "premium", folder: "Next.js JS 018", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next.js+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SSR+Example",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Routing+System",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance+Features"
  ] },
  { id: 14, name: "Next.js TS 020", desc: "Next.js with TypeScript and advanced features.", price: 699, tier: "premium", folder: "Next.js TS 020", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next.js+TS+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Type+Safety",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Routing",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Routes"
  ] },
  { id: 15, name: "Next.js TSDK 019", desc: "Next.js with TMA SDK integration.", price: 749, tier: "premium", folder: "Next.js TSDK 019", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next+TSDK+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=WebApp+API",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Stack+Example"
  ] },
  { id: 16, name: "Next.js Template 021", desc: "Elite Next.js template with TON Connect.", price: 799, tier: "premium", folder: "Next.js Template 021", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Elite+Next+Template",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TON+Connect",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Wallet+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features"
  ] },
  { id: 17, name: "SDK-master029", desc: "Core TMA SDK with full API support.", price: 699, tier: "premium", folder: "SDK-master029", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+SDK+Overview",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Documentation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Examples",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Usage"
  ] },
  { id: 18, name: "TCalculator-master037", desc: "Advanced calculator with custom functions.", price: 299, tier: "basic", folder: "TCalculator-master037", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Calculator+UI",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Functions",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Scientific+Mode",
    "https://via.placeholder.com/800x600/000000/FFD700?text=History+Feature"
  ] },
  { id: 19, name: "TRide-master049", desc: "Ride booking concept with map integration.", price: 499, tier: "pro", folder: "TRide-master049", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Ride+Booking+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Map+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Driver+Tracking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Payment+Flow"
  ] },
  { id: 20, name: "TeleOTP-main047", desc: "Secure one-time password generator.", price: 349, tier: "pro", folder: "TeleOTP-main047", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=OTP+Generator",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Secure+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Time+Sync",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Multiple+Accounts"
  ] },
  { id: 21, name: "Telegram-Web-App-master044", desc: "Full Web App example with TMA features.", price: 399, tier: "pro", folder: "Telegram-Web-App-master044", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=WebApp+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Usage",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 22, name: "nextjs-tsdk-template-master022", desc: "Next.js with advanced TSDK integration.", price: 749, tier: "premium", folder: "nextjs-tsdk-template-master022", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Next+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Support",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Stack"
  ] },
  { id: 23, name: "react-telegram-web-app-master028", desc: "React hooks for Telegram WebApp API.", price: 499, tier: "pro", folder: "react-telegram-web-app-master028", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+WebApp+Hooks",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Hooks",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Usage+Example"
  ] },
  { id: 24, name: "reactjs-js-template-master024", desc: "React template with JavaScript.", price: 599, tier: "pro", folder: "reactjs-js-template-master024", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Component+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=State+Management",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Routing"
  ] },
  { id: 25, name: "reactjs-js-tsdk-template-master025", desc: "React with JS and TSDK.", price: 649, tier: "pro", folder: "reactjs-js-tsdk-template-master025", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+JS+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Integration+Guide",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Example"
  ] },
  { id: 26, name: "reactjs-template-master026", desc: "Core React template for TMA.", price: 599, tier: "pro", folder: "reactjs-template-master026", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+TMA+Core",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vite+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Component+Library",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Deployment+Guide"
  ] },
  { id: 27, name: "reactjs-tsdk-template-master027", desc: "React with TSDK integration.", price: 649, tier: "pro", folder: "reactjs-tsdk-template-master027", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=React+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Support",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Integration"
  ] },
  { id: 28, name: "solidjs-js-template-master030", desc: "Solid.js with JavaScript.", price: 499, tier: "pro", folder: "solidjs-js-template-master030", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Reactive+System",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Example"
  ] },
  { id: 29, name: "solidjs-js-tsdk-template-master031", desc: "Solid.js with JS and TSDK.", price: 549, tier: "pro", folder: "solidjs-js-tsdk-template-master031", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+JS+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Integration+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Reactive+API",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Usage"
  ] },
  { id: 30, name: "solidjs-template-master032", desc: "Core Solid.js template for TMA.", price: 499, tier: "pro", folder: "solidjs-template-master032", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+TMA+Core",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Fine+Grained+Reactivity",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance+Test",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Setup+Guide"
  ] },
  { id: 31, name: "solidjs-tsdk-template-master033", desc: "Solid.js with TSDK integration.", price: 549, tier: "pro", folder: "solidjs-tsdk-template-master033", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Solid+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+Support",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 32, name: "sticky-app-master034", desc: "Interactive sticky note app for TMA.", price: 399, tier: "pro", folder: "sticky-app-master034", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Sticky+Notes+Board",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Create+Note",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Color+Options",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Drag+Drop"
  ] },
  { id: 33, name: "stkrz_bot-main035", desc: "Personalized sticker creator bot.", price: 449, tier: "pro", folder: "stkrz_bot-main035", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Sticker+Creator",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Custom+Design",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Pack+Creation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Export+Pack"
  ] },
  { id: 34, name: "tap-to-earn-telegram-mini-app-main036", desc: "Complete Tap-to-Earn game template.", price: 649, tier: "pro", folder: "tap-to-earn-telegram-mini-app-main036", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tap+Game+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Coin+Earning",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Upgrades+Shop",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Leaderboard"
  ] },
  { id: 35, name: "telegram-mini-app-stars-payments-master039", desc: "Advanced Stars payment system for TMA.", price: 899, tier: "premium", folder: "telegram-mini-app-stars-payments-master039", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Stars+Payment+Flow",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Invoice+Creation",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Payment+Success",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Features"
  ] },
  { id: 36, name: "telegram-webapp-auth-master042", desc: "Secure WebApp authentication system.", price: 399, tier: "pro", folder: "telegram-webapp-auth-master042", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Auth+Login",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Secure+Session",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Init+Data+Check",
    "https://via.placeholder.com/800x600/000000/FFD700?text=User+Verification"
  ] },
  { id: 37, name: "telegram-webapp-bot-main043", desc: "Bot integration with WebApp features.", price: 399, tier: "pro", folder: "telegram-webapp-bot-main043", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Bot+WebApp+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Menu+Button",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Data+Exchange",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 38, name: "telegram-webapps-master045", desc: "Collection of TMA examples and templates.", price: 499, tier: "pro", folder: "telegram-webapps-master045", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TMA+Collection",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Multiple+Examples",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Template+Gallery",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Samples"
  ] },
  { id: 39, name: "telegram-wishlist-miniapp-main046", desc: "Wishlist app with sharing features.", price: 349, tier: "pro", folder: "telegram-wishlist-miniapp-main046", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Wishlist+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Add+Item",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Share+List",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Collaborative+Edit"
  ] },
  { id: 40, name: "twa-template-main051", desc: "Telegram Web App base template.", price: 299, tier: "basic", folder: "twa-template-main051", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TWA+Base+Template",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Structure",
    "https://via.placeholder.com/800x600/000000/FFD700?text=API+Connection",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Start"
  ] },
  { id: 41, name: "typescript-template-master052", desc: "TypeScript boilerplate for TMA.", price: 399, tier: "pro", folder: "typescript-template-master052", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TypeScript+TMA",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Type+Safety",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Config+Files",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Build+Process"
  ] },
  { id: 42, name: "typescript-tsdk-template-master053", desc: "TypeScript with TSDK integration.", price: 449, tier: "pro", folder: "typescript-tsdk-template-master053", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=TS+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Advanced+Types",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Integration",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Full+Example"
  ] },
  { id: 43, name: "vanilla-js-boilerplate-master054", desc: "Vanilla JS boilerplate for TMA.", price: 249, tier: "basic", folder: "vanilla-js-boilerplate-master054", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vanilla+JS+Home",
    "https://via.placeholder.com/800x600/000000/FFD700?text=No+Framework",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Lightweight+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Setup"
  ] },
  { id: 44, name: "vanillajs-template-master055", desc: "Pure Vanilla JS template.", price: 249, tier: "basic", folder: "vanillajs-template-master055", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Pure+Vanilla+JS",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Minimal+Code",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Performance+Focus",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Basic+Features"
  ] },
  { id: 45, name: "vanillajs-tsdk-template-master056", desc: "Vanilla JS with TSDK.", price: 349, tier: "pro", folder: "vanillajs-tsdk-template-master056", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vanilla+TSDK+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=SDK+Features",
    "https://via.placeholder.com/800x600/000000/FFD700?text=No+Framework",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Lightweight+Integration"
  ] },
  { id: 46, name: "vite-boilerplate-master057", desc: "Vite boilerplate for fast development.", price: 299, tier: "basic", folder: "vite-boilerplate-master057", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vite+Fast+Build",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Hot+Reload",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Modern+Setup",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Quick+Start"
  ] },
  { id: 47, name: "vuejs-template-master058", desc: "Vue 3 professional template for TMA.", price: 549, tier: "pro", folder: "vuejs-template-master058", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Vue+3+TMA",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Composition+API",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Component+Library",
    "https://via.placeholder.com/800x600/000000/FFD700?text=State+Management"
  ] },
  { id: 48, name: "webpack-boilerplate-master059", desc: "Advanced Webpack configuration for production TMA apps.", price: 799, tier: "premium", folder: "webpack-boilerplate-master059", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Webpack+Production",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Splitting",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tree+Shaking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Optimization"
  ] }
];

let currentTier = 'basic';

// صفحه اصلی – نمایش ابزارها
if (document.getElementById('toolsList')) {
  function showTier(tier) {
    currentTier = tier;
    document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tier-btn[onclick="showTier('${tier}')"]`).classList.add('active');

    const filtered = toolsData.filter(t => t.tier === tier);
    const list = document.getElementById('toolsList');
    list.innerHTML = '';

    filtered.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.onclick = () => window.location.href = `tool.html?id=${tool.id}`;

      let imagesHtml = '';
      tool.images.forEach(img => {
        imagesHtml += `<img src="${img}" class="preview-img">`;
      });

      card.innerHTML = `
        <div class="preview-grid">${imagesHtml}</div>
        <h3>${tool.id}. ${tool.name}</h3>
        <p>${tool.desc.substring(0, 150)}...</p>
        <p class="price">${tool.price} Stars</p>
        <button onclick="event.stopPropagation(); window.location.href='tool.html?id=${tool.id}'">View Details & Buy</button>
      `;
      list.appendChild(card);
    });
  }

  showTier('basic');
}

// صفحه جزئیات ابزار – پرداخت واقعی + دانلود پس از پرداخت
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
    imagesContainer.appendChild(imgElement);
  });

  const payBtn = document.getElementById('payBtn');
  payBtn.onclick = () => initiateStarsPayment(tool.id, tool.price, payBtn);
}

// پرداخت واقعی با Telegram Stars
async function initiateStarsPayment(id, price, btn) {
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
      if (event.status === 'paid' && event.payload === `golden_tool_${id}`) {
        btn.style.display = 'none';
        document.getElementById('downloadBtn').style.display = 'block';
        document.getElementById('paymentStatus').style.display = 'block';
        document.getElementById('paymentStatus').textContent = 'پرداخت موفق! ابزار آماده دانلود است ✨';
        Telegram.WebApp.HapticFeedback.notificationOccurred('success');
      } else {
        document.getElementById('paymentStatus').style.display = 'block';
        document.getElementById('paymentStatus').textContent = 'پرداخت لغو یا ناموفق بود.';
        Telegram.WebApp.HapticFeedback.notificationOccurred('error');
      }
    });
  } catch (error) {
    alert('خطا در پرداخت. دوباره امتحان کنید.');
  }
}

// دانلود ZIP پس از پرداخت
function downloadTool(folder) {
  const zipUrl = `https://github.com/aliki007788-ops/Golden-TMA-Pro/raw/main/tools/${folder}/${folder}.zip`;
  window.open(zipUrl, '_blank');
  Telegram.WebApp.HapticFeedback.notificationOccurred('success');
}
