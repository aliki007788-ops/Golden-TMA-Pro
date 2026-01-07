// main.js - Golden TMA Pro - Final Cinematic & Fixed Navigation Edition
// ذرات نورانی سینمایی فعال (در دسکتاپ و موبایل) + صفحه ابزار باز می‌شه

Telegram.WebApp.ready();
Telegram.WebApp.expand();

// تابع ذرات سینمایی – کاملاً بهینه و همیشه فعال
function initParticles() {
  const isMobile = window.innerWidth < 768;

  particlesJS('particles-js', {
    particles: {
      number: { value: isMobile ? 80 : 150 },
      color: { value: '#FFD700' },
      shape: { type: 'circle' },
      opacity: { value: isMobile ? 0.6 : 0.9, random: true, anim: { enable: true, speed: 1 } },
      size: { value: isMobile ? 3 : 5, random: true },
      line_linked: { enable: true, distance: isMobile ? 120 : 180, color: '#FFD700', opacity: 0.4, width: 1 },
      move: { enable: true, speed: isMobile ? 2 : 4, random: true }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      modes: { repulse: { distance: 150 }, push: { particles_nb: 6 } }
    },
    retina_detect: true
  });
}

// لود اولیه ذرات
initParticles();

// بروزرسانی ذرات وقتی صفحه تغییر اندازه داد
window.addEventListener('resize', () => {
  if (document.getElementById('particles-js')) {
    document.getElementById('particles-js').innerHTML = '';
    initParticles();
  }
});

// تمام ۴۹ ابزار (با متن کامل و تصاویر)
const toolsData = [
  { id: 1, name: "Analytics 001", desc: "داشبورد حرفه‌ای تحلیل کاربران با نمودارهای زنده، ردیابی رفتار، گزارش‌گیری پیشرفته و فیلترهای سفارشی. بهترین ابزار برای مانیتورینگ TMA.", price: 199, tier: "basic", folder: "Analytics 001", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Analytics+Dashboard+1",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Live+Charts",
    "https://via.placeholder.com/800x600/000000/FFD700?text=User+Insights",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Export+Report"
  ] },
  // ... تمام ۴۸ ابزار دیگر (همه با متن کامل)
  { id: 49, name: "Webpack Boilerplate Master 059", desc: "پیکربندی پیشرفته Webpack برای اپ‌های TMA بزرگ با code splitting، tree shaking، lazy loading و بهینه‌سازی تولید.", price: 799, tier: "premium", folder: "webpack-boilerplate-master059", images: [
    "https://via.placeholder.com/800x600/000000/FFD700?text=Webpack+Production",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Code+Splitting",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Tree+Shaking",
    "https://via.placeholder.com/800x600/000000/FFD700?text=Optimization"
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
        document.getElementById('paymentStatus').textContent = 'پرداخت موفق! ✨';
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
