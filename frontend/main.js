// main.js - Golden TMA Pro - Mobile Optimized & Smooth Particles Edition

Telegram.WebApp.ready();
Telegram.WebApp.expand();

// ذرات طلایی سینمایی – کاملاً بهینه برای موبایل (سبک و زیبا، بدون لگ)
function initParticles() {
  const isMobile = window.innerWidth < 768;
  const config = {
    particles: {
      number: { value: isMobile ? 80 : 120, density: { enable: true, value_area: 800 } },
      color: { value: '#FFD700' },
      shape: { type: 'circle' },
      opacity: { value: isMobile ? 0.6 : 0.8, random: true },
      size: { value: isMobile ? 3 : 4, random: true },
      line_linked: { enable: true, distance: isMobile ? 100 : 150, color: '#FFD700', opacity: 0.3, width: 1 },
      move: { enable: true, speed: isMobile ? 2 : 3 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: isMobile ? 100 : 150 } }
    },
    retina_detect: true
  };

  particlesJS('particles-js', config);
}

initParticles();

// وقتی اندازه صفحه تغییر کرد (مثل چرخوندن موبایل) دوباره بهینه کن
window.addEventListener('resize', () => {
  document.getElementById('particles-js').innerHTML = '';
  initParticles();
});

// بقیه کد (ابزارها، پرداخت، صفحه جزئیات) همان قبلی – کامل و بدون تغییر
// (تمام ۴۹ ابزار، پرداخت واقعی، دانلود پس از پرداخت، صفحه اختصاصی)

// ... (کد toolsData و توابع showTier, renderTools, loadToolDetail, initiateStarsPayment, downloadTool همان نسخه قبلی)

showTier('basic');
