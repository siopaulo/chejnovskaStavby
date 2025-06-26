document.addEventListener('DOMContentLoaded', () => {
  const insert = (id, file) => {
    const el = document.getElementById(id);
    if (!el) return;
    fetch(file)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
        if (id === 'header-placeholder') {
          const btn = document.querySelector('[data-collapse-toggle]');
          if (btn) {
            btn.addEventListener('click', () => {
              const target = document.getElementById(btn.getAttribute('data-collapse-toggle'));
              if (target) target.classList.toggle('hidden');
            });
          }
        }
      });
  };
  insert('header-placeholder', 'header.html');
  insert('footer-placeholder', 'footer.html');
});
