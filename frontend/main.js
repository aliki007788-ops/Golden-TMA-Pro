Telegram.WebApp.ready();
Telegram.WebApp.expand();

// دریافت ابزارها از backend (data.json)
fetch('/backend/data.json')
  .then(res => res.json())
  .then(data => {
    const tools = data.tools.filter(t => t.active);
    const list = document.getElementById('toolsList');
    list.innerHTML = '';

    tools.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <h3>${tool.id}. ${tool.name}</h3>
        <p>${tool.desc}</p>
        <p class="price">${tool.price} استارز</p>
        <button onclick="buyTool('${tool.folder}', ${tool.price})">خرید و دانلود</button>
      `;
      list.appendChild(card);
    });
  })
  .catch(err => console.error('خطا در بارگذاری ابزارها:', err));

// تابع خرید
function buyTool(folder, price) {
  Telegram.WebApp.HapticFeedback.impactOccurred('medium');
  alert(`پرداخت ${price} استارز برای ${folder} - در حال پردازش!`);
  // بعداً backend برای invoice اضافه کن
}