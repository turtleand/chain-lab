(() => {
  const k = 'chain-lab-theme';
  const r = document.documentElement;
  const m = window.matchMedia('(prefers-color-scheme: dark)');
  const g = () => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  };
  const a = (t) => {
    r.dataset.theme = t;
    try {
      localStorage.setItem(k, t);
    } catch {}
  };

  a(g() || (m.matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', () => {
    const b = document.querySelector('[data-theme-toggle]');
    if (b) b.addEventListener('click', () => a(r.dataset.theme === 'dark' ? 'light' : 'dark'));
  });
})();
