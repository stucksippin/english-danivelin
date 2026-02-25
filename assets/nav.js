// Sidebar navigation — подключать через <script src="../assets/nav.js"></script>
// или через <script src="assets/nav.js"></script> на главной

(function () {
    const NAV = [
        {
            label: 'Основы',
            items: [
                { icon: '🔤', name: 'Артикли', sub: 'a/an, the, zero', href: 'topics/articles.html' },
                { icon: '👤', name: 'Местоимения', sub: 'pronouns', href: 'topics/pronouns.html' },
                { icon: '🔵', name: 'To Be', sub: 'Present Simple', href: 'topics/to-be.html' },
                { icon: '📊', name: 'Степени сравнения', sub: 'comparatives & superlatives', href: 'topics/adjectives-comparison.html' },
            ]
        },
        {
            label: 'Глаголы',
            items: [
                { icon: '⏱️', name: 'Present Simple', sub: 'общие факты, привычки', href: '#', locked: true },
                { icon: '🎬', name: 'Present Continuous', sub: 'сейчас', href: '#', locked: true },
                { icon: '⏮️', name: 'Past Simple', sub: 'прошедшее', href: '#', locked: true },
            ]
        },
        {
            label: 'Синтаксис',
            items: [
                { icon: '🔀', name: 'Word Order', sub: 'порядок слов', href: 'topics/word-order.html' },
                { icon: '❓', name: 'Questions', sub: 'вопросительные', href: 'topics/questions.html' },
            ]
        }
    ];

    // Определяем текущую страницу
    const path = window.location.pathname;

    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
    <div class="sidebar-logo">
      <a href="${path.includes('topics') ? '../index.html' : 'index.html'}">
        <span class="logo-label">English</span>
        <span class="logo-title">Grammar<br>Book</span>
      </a>
    </div>
    <nav class="sidebar-nav">
      ${NAV.map(section => `
        <div class="nav-section">
          <span class="nav-section-label">${section.label}</span>
          ${section.items.map(item => {
        const href = path.includes('topics') && !item.href.startsWith('#')
            ? item.href.replace('topics/', '')
            : item.href;
        const isActive = path.includes(item.href.replace('topics/', ''));
        return `
              <a href="${href}" class="nav-item${item.locked ? ' coming-soon' : ''}${isActive ? ' active' : ''}">
                <span class="nav-icon">${item.icon}</span>
                <span>${item.name}</span>
                ${item.locked ? '<span class="nav-badge">скоро</span>' : ''}
              </a>
            `;
    }).join('')}
        </div>
      `).join('')}
    </nav>
  `;

    // Вставляем sidebar в начало .layout
    const layout = document.querySelector('.layout');
    if (layout) layout.prepend(sidebar);
})();