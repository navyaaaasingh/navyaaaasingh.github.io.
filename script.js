/* =========================
   MOBILE NAV TOGGLE
========================= */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
let isOpen = false;

function toggleNav(open) {
  if (!navMenu || !navToggle) return;
  isOpen = open;
  navMenu.classList.toggle("show", open);
  navToggle.setAttribute("aria-expanded", open);
}

if (navToggle) {
  navToggle.addEventListener("click", () => toggleNav(!isOpen));
  navLinks.forEach(link => link.addEventListener("click", () => toggleNav(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      toggleNav(false);
      navToggle.focus();
    }
  });
}

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  navLinks.forEach(link => {
    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) return;
    const section = document.querySelector(id);
    if (!section) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

/* =========================
   SCROLL REVEAL
========================= */
const revealEls = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("is-visible"));
}

/* =========================
   FOOTER YEAR
========================= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
