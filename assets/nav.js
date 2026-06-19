// Sidebar navigation — подключать через <script src="../assets/nav.js"></script>
// или через <script src="assets/nav.js"></script> на главной

(function () {
    const NAV = [
        {
            label: 'Основы',
            items: [
                { icon: '🔤', name: 'Артикли',          sub: 'a/an, the, zero',                href: 'topics/articles.html' },
                { icon: '👤', name: 'Местоимения',      sub: 'pronouns',                       href: 'topics/pronouns.html' },
                { icon: '🔵', name: 'To Be',             sub: 'am / is / are',                  href: 'topics/to-be.html' },
                { icon: '📊', name: 'Степени сравн.',   sub: 'comparatives & superlatives',    href: 'topics/adjectives-comparison.html' },
                { icon: '🔢', name: 'Числительные',     sub: 'cardinal & ordinal',             href: 'topics/numerals.html',    locked: true },
                { icon: '📍', name: 'Предлоги',         sub: 'in / on / at',                   href: 'topics/prepositions.html', locked: true },
            ]
        },
        {
            label: 'Глаголы',
            items: [
                { icon: '📅', name: 'Все времена',      sub: 'обзор 12 времён',                href: 'topics/tenses.html' },
                { icon: '💬', name: 'Модальные',        sub: 'can / must / should',            href: 'topics/modal-verbs.html',      locked: true },
                { icon: '↔️', name: 'Инфинитив / Герундий', sub: 'to V vs V-ing',             href: 'topics/infinitive-gerund.html', locked: true },
                { icon: '📋', name: 'Прав. и неправ.',  sub: 'regular & irregular',            href: 'topics/irregular-verbs.html',  locked: true },
                { icon: '🔁', name: 'Пассивный залог',  sub: 'passive voice',                  href: 'topics/passive-voice.html',    locked: true },
            ]
        },
        {
            label: 'Present',
            items: [
                { icon: '⏱️', name: 'Present Simple',            sub: 'факты, привычки',       href: 'topics/present-simple.html' },
                { icon: '🎬', name: 'Present Continuous',        sub: 'сейчас / временно',     href: 'topics/present-continuous.html' },
                { icon: '✅', name: 'Present Perfect',           sub: 'результат в настоящем', href: 'topics/present-perfect.html' },
                { icon: '🔄', name: 'Present Perfect Cont.',     sub: 'длится с прошлого',     href: 'topics/present-perfect-continuous.html' },
            ]
        },
        {
            label: 'Past',
            items: [
                { icon: '⏮️', name: 'Past Simple',               sub: 'завершено в прошлом',   href: 'topics/past-simple.html' },
                { icon: '🎞️', name: 'Past Continuous',           sub: 'процесс в прошлом',     href: 'topics/past-continuous.html' },
                { icon: '📼', name: 'Past Perfect',              sub: 'до прошлого события',   href: 'topics/past-perfect.html' },
                { icon: '⏳', name: 'Past Perfect Cont.',        sub: 'длительность до пр.',   href: 'topics/past-perfect-continuous.html' },
            ]
        },
        {
            label: 'Future',
            items: [
                { icon: '🔮', name: 'Future Simple',             sub: 'will + V1',             href: 'topics/future-simple.html' },
                { icon: '🌐', name: 'Future Continuous',         sub: 'will be + V-ing',       href: 'topics/future-continuous.html' },
                { icon: '🎯', name: 'Future Perfect',            sub: 'will have + V3',        href: 'topics/future-perfect.html' },
                { icon: '⌛', name: 'Future Perfect Cont.',      sub: 'will have been + V-ing', href: 'topics/future-perfect-continuous.html' },
            ]
        },
        {
            label: 'Синтаксис',
            items: [
                { icon: '🔀', name: 'Word Order',        sub: 'порядок слов',          href: 'topics/word-order.html' },
                { icon: '❓', name: 'Questions',         sub: 'типы вопросов',         href: 'topics/questions.html' },
                { icon: '💬', name: 'Косвенная речь',    sub: 'reported speech',       href: 'topics/reported-speech.html', locked: true },
                { icon: '↕️', name: 'Условные пред.',   sub: 'conditionals 0-3',      href: 'topics/conditionals.html',    locked: true },
                { icon: '🧩', name: 'Придаточные',       sub: 'relative & noun cl.',   href: 'topics/clauses.html',         locked: true },
            ]
        },
        {
            label: 'Справочники',
            items: [
                { icon: '📋', name: 'Неправ. глаголы',  sub: 'V1 → V2 → V3',         href: 'topics/irregular-verbs-table.html', locked: true },
                { icon: '🔗', name: 'Фразовые глаголы', sub: 'phrasal verbs',         href: 'topics/phrasal-verbs.html',         locked: true },
                { icon: '➡️', name: 'Связующие слова',  sub: 'linking words',         href: 'topics/linking-words.html',         locked: true },
                { icon: '⚠️', name: 'Частые ошибки',    sub: 'common mistakes',       href: 'topics/common-mistakes.html',       locked: true },
            ]
        },
    ];

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
              const isActive = path.endsWith(item.href.replace('topics/', ''));
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

    const layout = document.querySelector('.layout');
    if (layout) layout.prepend(sidebar);
})();
