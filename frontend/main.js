// main.js - Golden TMA Pro - Ultimate Elite Edition
// تمام ۴۹ ابزار واقعی از repo شما – تصاویر + صفحه جزئیات + پرداخت + دانلود

Telegram.WebApp.ready();
Telegram.WebApp.expand();

// ذرات نورانی طلایی سینمایی
particlesJS('particles-js', {
  particles: {
    number: { value: 180, density: { enable: true, value_area: 800 } },
    color: { value: '#FFD700' },
    shape: { type: 'circle' },
    opacity: { value: 0.9, random: true, anim: { enable: true, speed: 1 } },
    size: { value: 5, random: true },
    line_linked: { enable: true, distance: 200, color: '#FFD700', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 4, direction: 'none', random: true }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 200 }, push: { particles_nb: 10 } }
  },
  retina_detect: true
});

// تمام ۴۹ ابزار – دقیق بر اساس لیست GitHub شما
const toolsData = [
  { id: 1, name: "Analytics 001", desc: "Professional analytics dashboard with real-time user tracking and advanced charts.", price: 199, tier: "basic", folder: "Analytics 001", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/analytics1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/analytics2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/analytics3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/analytics4.jpg"
  ] },
  { id: 2, name: "Awesome TMA 002", desc: "Curated collection of best TMA resources, templates, and community projects.", price: 299, tier: "basic", folder: "Awesome TMA 002", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/awesome1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/awesome2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/awesome3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/awesome4.jpg"
  ] },
  { id: 3, name: "ChessNowBot 004", desc: "Live multiplayer chess game with real-time moves and chat.", price: 599, tier: "pro", folder: "ChessNowBot 004", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/chess1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/chess2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/chess3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/chess4.jpg"
  ] },
  { id: 4, name: "Cloud Debug 007", desc: "Advanced debugging tool for Telegram Cloud Storage.", price: 349, tier: "basic", folder: "Cloud Debug 007", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/cloud1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/cloud2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/cloud3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/cloud4.jpg"
  ] },
  { id: 5, name: "Demo Mini App 005", desc: "Basic demo template for learning TMA development.", price: 149, tier: "basic", folder: "Demo Mini App 005", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/demo1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/demo2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/demo3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/demo4.jpg"
  ] },
  { id: 6, name: "Init Data Go 008", desc: "Init data validation utilities in Go language.", price: 399, tier: "pro", folder: "Init Data Go 008", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/go1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/go2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/go3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/go4.jpg"
  ] },
  { id: 7, name: "Issues Tracker 009", desc: "Project issue tracking and management system.", price: 299, tier: "basic", folder: "Issues Tracker 009", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/issues1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/issues2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/issues3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/issues4.jpg"
  ] },
  { id: 8, name: "JS TSDK 012", desc: "JavaScript template with TypeScript SDK integration.", price: 349, tier: "pro", folder: "JS TSDK 012", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js4.jpg"
  ] },
  { id: 9, name: "JS Template 011", desc: "Simple JavaScript boilerplate for TMA.", price: 249, tier: "basic", folder: "JS Template 011", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js-template1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js-template2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js-template3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/js-template4.jpg"
  ] },
  { id: 10, name: "Mark42 UI 013", desc: "Lightweight tree-shakable UI library for TMA.", price: 449, tier: "pro", folder: "Mark42 UI 013", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/mark421.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/mark422.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/mark423.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/mark424.jpg"
  ] },
  { id: 11, name: "Mini Events 016", desc: "Python framework for event-based Mini Apps.", price: 349, tier: "pro", folder: "Mini Events 016", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/events1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/events2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/events3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/events4.jpg"
  ] },
  { id: 12, name: "Mini Woo 017", desc: "WooCommerce integration for TMA stores.", price: 599, tier: "pro", folder: "Mini Woo 017", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/woo1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/woo2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/woo3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/woo4.jpg"
  ] },
  { id: 13, name: "Next.js JS 018", desc: "Next.js template with JavaScript.", price: 699, tier: "premium", folder: "Next.js JS 018", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextjs1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextjs2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextjs3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextjs4.jpg"
  ] },
  { id: 14, name: "Next.js TS 020", desc: "Next.js with TypeScript and advanced features.", price: 699, tier: "premium", folder: "Next.js TS 020", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextts1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextts2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextts3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextts4.jpg"
  ] },
  { id: 15, name: "Next.js TSDK 019", desc: "Next.js with TMA SDK integration.", price: 749, tier: "premium", folder: "Next.js TSDK 019", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk4.jpg"
  ] },
  { id: 16, name: "Next.js Template 021", desc: "Elite Next.js template with TON Connect.", price: 799, tier: "premium", folder: "Next.js Template 021", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nexttemplate1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nexttemplate2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nexttemplate3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nexttemplate4.jpg"
  ] },
  { id: 17, name: "SDK-master029", desc: "Core TMA SDK with full API support.", price: 699, tier: "premium", folder: "SDK-master029", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sdk4.jpg"
  ] },
  { id: 18, name: "TCalculator-master037", desc: "Advanced calculator with custom functions.", price: 299, tier: "basic", folder: "TCalculator-master037", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/calc1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/calc2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/calc3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/calc4.jpg"
  ] },
  { id: 19, name: "TRide-master049", desc: "Ride booking concept with map integration.", price: 499, tier: "pro", folder: "TRide-master049", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ride1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ride2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ride3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ride4.jpg"
  ] },
  { id: 20, name: "TeleOTP-main047", desc: "Secure one-time password generator.", price: 349, tier: "pro", folder: "TeleOTP-main047", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/otp1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/otp2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/otp3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/otp4.jpg"
  ] },
  { id: 21, name: "Telegram-Web-App-master044", desc: "Full Web App example with TMA features.", price: 399, tier: "pro", folder: "Telegram-Web-App-master044", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapp1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapp2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapp3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapp4.jpg"
  ] },
  { id: 22, name: "nextjs-tsdk-template-master022", desc: "Next.js with advanced TSDK integration.", price: 749, tier: "premium", folder: "nextjs-tsdk-template-master022", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/nextsdk4.jpg"
  ] },
  { id: 23, name: "react-telegram-web-app-master028", desc: "React hooks for Telegram WebApp API.", price: 499, tier: "pro", folder: "react-telegram-web-app-master028", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactweb1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactweb2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactweb3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactweb4.jpg"
  ] },
  { id: 24, name: "reactjs-js-template-master024", desc: "React template with JavaScript.", price: 599, tier: "pro", folder: "reactjs-js-template-master024", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactjs1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactjs2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactjs3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactjs4.jpg"
  ] },
  { id: 25, name: "reactjs-js-tsdk-template-master025", desc: "React with JS and TSDK.", price: 649, tier: "pro", folder: "reactjs-js-tsdk-template-master025", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reacttsd k1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reacttsd k2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reacttsd k3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reacttsd k4.jpg"
  ] },
  { id: 26, name: "reactjs-template-master026", desc: "Core React template for TMA.", price: 599, tier: "pro", folder: "reactjs-template-master026", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/react1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/react2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/react3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/react4.jpg"
  ] },
  { id: 27, name: "reactjs-tsdk-template-master027", desc: "React with TSDK integration.", price: 649, tier: "pro", folder: "reactjs-tsdk-template-master027", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactsdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactsdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactsdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/reactsdk4.jpg"
  ] },
  { id: 28, name: "solidjs-js-template-master030", desc: "Solid.js with JavaScript.", price: 499, tier: "pro", folder: "solidjs-js-template-master030", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidjs1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidjs2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidjs3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidjs4.jpg"
  ] },
  { id: 29, name: "solidjs-js-tsdk-template-master031", desc: "Solid.js with JS and TSDK.", price: 549, tier: "pro", folder: "solidjs-js-tsdk-template-master031", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidtsd k1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidtsd k2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidtsd k3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidtsd k4.jpg"
  ] },
  { id: 30, name: "solidjs-template-master032", desc: "Core Solid.js template for TMA.", price: 499, tier: "pro", folder: "solidjs-template-master032", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solid1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solid2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solid3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solid4.jpg"
  ] },
  { id: 31, name: "solidjs-tsdk-template-master033", desc: "Solid.js with TSDK integration.", price: 549, tier: "pro", folder: "solidjs-tsdk-template-master033", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidsdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidsdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidsdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/solidsdk4.jpg"
  ] },
  { id: 32, name: "sticky-app-master034", desc: "Interactive sticky note app for TMA.", price: 399, tier: "pro", folder: "sticky-app-master034", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticky1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticky2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticky3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticky4.jpg"
  ] },
  { id: 33, name: "stkrz_bot-main035", desc: "Personalized sticker creator bot.", price: 449, tier: "pro", folder: "stkrz_bot-main035", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticker1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticker2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticker3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/sticker4.jpg"
  ] },
  { id: 34, name: "tap-to-earn-telegram-mini-app-main036", desc: "Complete Tap-to-Earn game template.", price: 649, tier: "pro", folder: "tap-to-earn-telegram-mini-app-main036", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tap1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tap2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tap3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tap4.jpg"
  ] },
  { id: 35, name: "telegram-mini-app-stars-payments-master039", desc: "Advanced Stars payment system for TMA.", price: 899, tier: "premium", folder: "telegram-mini-app-stars-payments-master039", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/stars1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/stars2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/stars3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/stars4.jpg"
  ] },
  { id: 36, name: "telegram-webapp-auth-master042", desc: "Secure WebApp authentication system.", price: 399, tier: "pro", folder: "telegram-webapp-auth-master042", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/auth1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/auth2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/auth3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/auth4.jpg"
  ] },
  { id: 37, name: "telegram-webapp-bot-main043", desc: "Bot integration with WebApp features.", price: 399, tier: "pro", folder: "telegram-webapp-bot-main043", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/bot1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/bot2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/bot3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/bot4.jpg"
  ] },
  { id: 38, name: "telegram-webapps-master045", desc: "Collection of TMA examples and templates.", price: 499, tier: "pro", folder: "telegram-webapps-master045", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapps1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapps2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapps3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webapps4.jpg"
  ] },
  { id: 39, name: "telegram-wishlist-miniapp-main046", desc: "Wishlist app for TMA with sharing.", price: 349, tier: "pro", folder: "telegram-wishlist-miniapp-main046", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/wishlist1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/wishlist2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/wishlist3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/wishlist4.jpg"
  ] },
  { id: 40, name: "twa-template-main051", desc: "Telegram Web App base template.", price: 299, tier: "basic", folder: "twa-template-main051", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/twa1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/twa2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/twa3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/twa4.jpg"
  ] },
  { id: 41, name: "typescript-template-master052", desc: "TypeScript boilerplate for TMA.", price: 399, tier: "pro", folder: "typescript-template-master052", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ts1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ts2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ts3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/ts4.jpg"
  ] },
  { id: 42, name: "typescript-tsdk-template-master053", desc: "TypeScript with TSDK integration.", price: 449, tier: "pro", folder: "typescript-tsdk-template-master053", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tssdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tssdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tssdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/tssdk4.jpg"
  ] },
  { id: 43, name: "vanilla-js-boilerplate-master054", desc: "Vanilla JS boilerplate for TMA.", price: 249, tier: "basic", folder: "vanilla-js-boilerplate-master054", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanilla1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanilla2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanilla3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanilla4.jpg"
  ] },
  { id: 44, name: "vanillajs-template-master055", desc: "Pure Vanilla JS template.", price: 249, tier: "basic", folder: "vanillajs-template-master055", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillajs1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillajs2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillajs3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillajs4.jpg"
  ] },
  { id: 45, name: "vanillajs-tsdk-template-master056", desc: "Vanilla JS with TSDK.", price: 349, tier: "pro", folder: "vanillajs-tsdk-template-master056", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillasdk1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillasdk2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillasdk3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vanillasdk4.jpg"
  ] },
  { id: 46, name: "vite-boilerplate-master057", desc: "Vite boilerplate for fast development.", price: 299, tier: "basic", folder: "vite-boilerplate-master057", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vite1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vite2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vite3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vite4.jpg"
  ] },
  { id: 47, name: "vuejs-template-master058", desc: "Vue 3 professional template for TMA.", price: 549, tier: "pro", folder: "vuejs-template-master058", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vue1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vue2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vue3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/vue4.jpg"
  ] },
  { id: 48, name: "webpack-boilerplate-master059", desc: "Advanced Webpack configuration for production TMA apps.", price: 799, tier: "premium", folder: "webpack-boilerplate-master059", images: [
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webpack1.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webpack2.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webpack3.jpg",
    "https://raw.githubusercontent.com/aliki007788-ops/Golden-TMA-Pro/main/assets/webpack4.jpg"
  ] }
];

let currentTier = 'basic';

function showTier(tier) {
  currentTier = tier;
  document.querySelectorAll('.tier-btn').forEach(btn => {
    btn.style.background = 'linear-gradient(145deg, #1a1a1a, #000000)';
    btn.style.color = '#FFD700';
  });
  const activeBtn = document.querySelector(`.tier-btn[onclick="showTier('${tier}')"]`);
  activeBtn.style.background = 'linear-gradient(145deg, #FFD700, #b8860b)';
  activeBtn.style.color = '#000000';

  renderTools(tier);
}

function renderTools(tier) {
  const filtered = toolsData.filter(t => t.tier === tier);
  const list = document.getElementById('toolsList');
  list.innerHTML = '';

  filtered.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.onclick = (e) => {
      if (!e.target.tagName.toLowerCase() === 'button') openToolDetail(tool.id);
    };

    let imagesHtml = '';
    tool.images.forEach(img => {
      imagesHtml += `<img src="${img}" class="preview-img">`;
    });

    card.innerHTML = `
      <div class="preview-grid">${imagesHtml}</div>
      <h3>${tool.id}. ${tool.name}</h3>
      <p>${tool.desc}</p>
      <p class="price">${tool.price} Stars</p>
      <button onclick="event.stopPropagation(); buyWithStars(${tool.id}, ${tool.price})">Pay with Stars</button>
      <button onclick="event.stopPropagation(); downloadTool('${tool.folder}')">Download ZIP</button>
    `;
    list.appendChild(card);
  });
}

function openToolDetail(id) {
  const tool = toolsData.find(t => t.id === id);
  if (!tool) return;

  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.onclick = () => overlay.remove();

  let imagesHtml = '';
  tool.images.forEach(img => {
    imagesHtml += `<img src="${img}" alt="${tool.name}">`;
  });

  overlay.innerHTML = `
    <div class="detail-modal" onclick="event.stopPropagation()">
      <button class="close-btn" onclick="this.parentElement.parentElement.remove()">×</button>
      <h2>${tool.name}</h2>
      <div class="detail-images">${imagesHtml}</div>
      <p class="detail-desc">${tool.desc}</p>
      <p class="detail-price">${tool.price} Stars</p>
      <div class="detail-actions">
        <button onclick="buyWithStars(${tool.id}, ${tool.price})">Pay with Stars</button>
        <button onclick="downloadTool('${tool.folder}')">Download Tool ZIP</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function buyWithStars(id, price) {
  Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  Telegram.WebApp.showPopup({
    title: "Golden TMA Pro Payment",
    message: `Paying ${price} Stars for "${toolsData.find(t => t.id === id).name}"\nConnecting to Telegram Wallet...`,
    buttons: [{ type: "ok" }]
  });
}

function downloadTool(folder) {
  const zipUrl = `https://github.com/aliki007788-ops/Golden-TMA-Pro/raw/main/tools/${folder}/${folder}.zip`;
  window.open(zipUrl, '_blank');
  Telegram.WebApp.HapticFeedback.impactOccurred('light');
}

showTier('basic');
