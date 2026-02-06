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
  navToggle.addEventListener("click", () => {
    toggleNav(!isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => toggleNav(false));
  });

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
   FOOTER YEAR
========================= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
