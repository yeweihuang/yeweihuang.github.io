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
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const formations = ['chevron', 'diamond', 'line', 'diagonal', 'school'];
    const random = (min, max) => min + Math.random() * (max - min);
    let previousFormation;
    let activeTeam;
    let cleanupTimer;
    const clearTeam = () => {
      window.clearTimeout(cleanupTimer);
      if (activeTeam) activeTeam.remove();
      activeTeam = null;
    };
    motionPreference.addEventListener('change', () => {
      if (motionPreference.matches) clearTeam();
    });
    sharkButton.hidden = false;
    sharkButton.addEventListener('click', () => {
      clearTeam();
      if (motionPreference.matches) return;
      const choices = formations.filter(formation => formation !== previousFormation);
      const formation = choices[Math.floor(Math.random() * choices.length)];
      previousFormation = formation;
      const count = formation === 'diamond' ? (Math.random() < .5 ? 4 : 8)
        : formation === 'chevron' ? (Math.random() < .5 ? 5 : 7)
        : Math.floor(random(3, 8));
      const spacing = random(40, 58);
      const size = random(29, 43);
      const duration = random(3.8, 5.8);
      const positions = Array.from({ length: count }, (_, i) => {
        if (formation === 'chevron') {
          const rank = Math.ceil(i / 2);
          return [rank * .85, rank * (i % 2 ? .65 : -.65)];
        }
        if (formation === 'diamond') {
          const edge = i / count * 4;
          const part = edge % 1;
          return [[part, -1 + part], [1 - part, part], [-part, 1 - part], [-1 + part, -part]][Math.floor(edge)];
        }
        if (formation === 'line') return [i, 0];
        if (formation === 'diagonal') return [i * .7, i * .55];
        return [Math.floor(i / 3) + random(-.12, .12), (i % 3) + random(-.12, .12)];
      });
      const minX = Math.min(...positions.map(position => position[0]));
      const minY = Math.min(...positions.map(position => position[1]));
      const rawWidth = (Math.max(...positions.map(position => position[0])) - minX) * spacing + size * 1.2;
      const rawHeight = (Math.max(...positions.map(position => position[1])) - minY) * spacing + size * 1.2;
      const topMargin = Math.min(110, window.innerHeight * .2);
      const scale = Math.min(1, (window.innerWidth - 32) / rawWidth, (window.innerHeight - topMargin - 24) / rawHeight);
      const overlay = document.createElement('div');
      overlay.className = 'shark-parade';
      overlay.setAttribute('aria-hidden', 'true');
      const team = document.createElement('div');
      team.className = 'shark-team';
      team.dataset.formation = formation;
      team.style.width = `${rawWidth * scale}px`;
      team.style.height = `${rawHeight * scale}px`;
      team.style.top = `${random(topMargin, Math.max(topMargin, window.innerHeight - rawHeight * scale - 24))}px`;
      team.style.animationDuration = `${duration}s`;
      positions.forEach(([x, y]) => {
        const shark = document.createElement('span');
        shark.className = 'swimming-shark';
        shark.textContent = '🦈';
        shark.style.left = `${(x - minX) * spacing * scale}px`;
        shark.style.top = `${(y - minY) * spacing * scale}px`;
        shark.style.fontSize = `${size * random(.85, 1.15) * scale}px`;
        team.appendChild(shark);
      });
      overlay.appendChild(team);
      document.body.appendChild(overlay);
      activeTeam = overlay;
      team.addEventListener('animationend', () => {
        if (activeTeam === overlay) clearTeam();
      }, { once: true });
      cleanupTimer = window.setTimeout(clearTeam, duration * 1000 + 200);
    });
  }
})();
