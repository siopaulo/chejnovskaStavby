document.addEventListener('DOMContentLoaded', () => {
  const insert = (id, file) => {
    const el = document.getElementById(id);
    if (!el) return;
    fetch(file)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
          // Burger menu toggle + animace
          if (id === 'header-placeholder') {
            const burger = document.getElementById('navbar-toggle');
            const mobileNavbar = document.getElementById('mobile-navbar');
            if (burger && mobileNavbar) {
              burger.addEventListener('click', () => {
                const isOpen = mobileNavbar.classList.contains('opacity-100');
                if (!isOpen) {
                  mobileNavbar.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
                  mobileNavbar.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto', 'slide-fade-down');
                  burger.setAttribute('aria-expanded', 'true');
                } else {
                  mobileNavbar.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'slide-fade-down');
                  mobileNavbar.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                  burger.setAttribute('aria-expanded', 'false');
                }
              });
              // Zavřít po kliku na odkaz (lepší UX)
              mobileNavbar.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                  mobileNavbar.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'slide-fade-down');
                  mobileNavbar.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                  burger.setAttribute('aria-expanded', 'false');
                });
              });
              // Start state (schované menu)
              mobileNavbar.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
              mobileNavbar.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'slide-fade-down');
            }
          }
        });
  };
  insert('header-placeholder', 'header.html');
  insert('footer-placeholder', 'footer.html');
});
