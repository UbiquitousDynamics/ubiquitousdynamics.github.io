const pages = [
  ['Contact', 'contact.html']
];

function currentFile() {
  return location.pathname.split('/').pop() || 'index.html';
}

function ensureThemeMeta() {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.append(meta);
  }
  return meta;
}

function setTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  ensureThemeMeta().content = dark ? '#000000' : '#ffffff';
  localStorage.setItem('ud-theme', theme);

  const button = document.getElementById('theme-toggle');
  if (!button) return;
  button.setAttribute('aria-pressed', String(dark));
  button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  button.querySelector('[data-theme-label]').textContent = dark ? 'Light' : 'Dark';
}

function renderHeader() {
  const target = document.querySelector('[data-site-header]');
  if (!target) return;

  const current = currentFile();
  target.innerHTML = `<a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand" href="index.html" aria-label="Ubiquitous Dynamics home"><span class="brand-logo" aria-hidden="true"><img class="brand-logo-light" src="static/images/logo-light.png" alt="" width="40" height="40"><img class="brand-logo-dark" src="static/images/logo-dark.png" alt="" width="40" height="40"></span><span class="brand-name">Ubiquitous Dynamics</span></a>
        <div class="controls">
          <nav class="nav-links" id="main-nav" aria-label="Primary navigation">${pages.map(([name, href]) => `<a href="${href}" ${current === href ? 'aria-current="page"' : ''}>${name}</a>`).join('')}</nav>
          <a class="github-link" href="https://github.com/UbiquitousDynamics?tab=repositories" target="_blank" rel="noreferrer">GitHub &nearr;</a>
          <button class="theme-button" id="theme-toggle" type="button" aria-label="Switch to dark theme" aria-pressed="false"><span class="theme-icon" aria-hidden="true"></span><span data-theme-label>Dark</span></button>
        </div>
      </div>
    </header>`;

  document.getElementById('theme-toggle').addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

function renderFooter() {
  const target = document.querySelector('[data-site-footer]');
  if (!target) return;

  target.innerHTML = `<footer class="site-footer"><div class="shell">
    <p>Independent laboratory exploring resource-aware Physical AI, local language interaction and human oversight.</p>
    <div class="footer-links"><a href="https://github.com/UbiquitousDynamics?tab=repositories" target="_blank" rel="noreferrer">GitHub &nearr;</a><a href="contact.html">Contact</a></div>
  </div></footer>`;
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `${data.get('topic')} : ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:ubiquitous.dynamics@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function matchPreviewSize() {
  const card = document.querySelector('.home .area-card');
  if (!card) return;
  const sync = () => document.documentElement.style.setProperty('--focus-card-height', `${card.getBoundingClientRect().height}px`);
  new ResizeObserver(sync).observe(card);
  sync();
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  matchPreviewSize();
  setupContactForm();
  setTheme(localStorage.getItem('ud-theme') || 'light');
});
