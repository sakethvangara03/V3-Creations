document.addEventListener("DOMContentLoaded", () => {
    console.log("BrandConnect Loaded");
});
// Highlight current page in navbar
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // e.g., "about.html"
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu-overlay');

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      menu.classList.add('d-none');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.remove('d-none');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu-overlay');

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      menu.classList.add('d-none');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.remove('d-none');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close menu if click outside menu list
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menu.classList.add('d-none');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
});