// Mobile nav toggle with accessibility & small UX improvements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu ? Array.from(navMenu.querySelectorAll('a')) : [];
let menuOpen = false;

function setNavAria(open) {
  if (navToggle) navToggle.setAttribute('aria-expanded', String(open));
  if (navMenu) {
    if (open) navMenu.classList.add('show');
    else navMenu.classList.remove('show');
  }
  menuOpen = !!open;
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    setNavAria(!menuOpen);
    if (menuOpen) navToggle.classList.add('open'); else navToggle.classList.remove('open');
  });

  // Close menu when a nav link is clicked (mobile)
  navLinks.forEach(a => {
    a.addEventListener('click', () => setNavAria(false));
  });

  // Close with Escape key for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) {
      setNavAria(false);
      navToggle.focus();
    }
  });
}

// Highlight active nav link on scroll / click
function updateActiveNav() {
  const fromTop = window.scrollY + 90; // offset to consider header height
  navLinks.forEach(link => {
    const hash = link.getAttribute('href');
    if (!hash || !hash.startsWith('#')) return;
    const section = document.querySelector(hash);
    if (!section) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (fromTop >= top && fromTop < bottom) link.classList.add('active');
    else link.classList.remove('active');
  });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
window.addEventListener('resize', updateActiveNav);

// Smooth scroll for internal anchors (improves behavior on some browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#0') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      // Close mobile menu if open
      setNavAria(false);
      // Smooth scroll with focus for accessibility
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // After scrolling, move focus for keyboard users
      setTimeout(() => {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }, 400);
    }
  });
});

// dynamic year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
