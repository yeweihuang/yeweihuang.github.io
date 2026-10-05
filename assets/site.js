(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (header && toggle && nav) {
    header.classList.add('enhanced');
    toggle.hidden = false;
    const closeMenu = () => toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
  }
  const sharkButton = document.querySelector('.shark-button');
  if (sharkButton) {
    sharkButton.hidden = false;
    sharkButton.addEventListener('click', () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (document.querySelector('.swimming-shark')) return;
      for (let i = 0; i < 5; i++) {
        const shark = document.createElement('span');
        shark.className = 'swimming-shark';
        shark.setAttribute('aria-hidden', 'true');
        shark.textContent = '🦈';
        shark.style.top = `${18 + i * 13}%`;
        shark.style.animationDelay = `${i * 0.16}s`;
        document.body.appendChild(shark);
        window.setTimeout(() => shark.remove(), 3000);
      }
    });
  }
})();
