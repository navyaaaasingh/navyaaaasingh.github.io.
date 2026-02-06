// ===============================
// MOBILE NAV TOGGLE
// ===============================
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
let isMenuOpen = false;

function toggleMenu(open) {
  if (!navMenu || !navToggle) return;

  isMenuOpen = open;
  navMenu.classList.toggle("show", open);
  navToggle.setAttribute("aria-expanded", open);
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    toggleMenu(!isMenuOpen);
  });

  // Close menu when link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu(false);
      navToggle.focus();
    }
  });
}

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
function updateActiveNav() {
  const scrollPos = window.scrollY + 100;

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
window.addEventListener("resize", updateActiveNav);

// ===============================
// SMOOTH SCROLL + ACCESSIBILITY
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "#0") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    toggleMenu(false);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Focus for keyboard users
    setTimeout(() => {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }, 400);
  });
});

// ===============================
// FOOTER YEAR
// ===============================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
