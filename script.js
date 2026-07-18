// ============================================
// FOOTER YEAR
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// NAV SCROLL STATE
// ============================================
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ============================================
// MOBILE MENU
// ============================================
const burger = document.getElementById("navBurger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// ============================================
// CURSOR GLOW (desktop only)
// ============================================
const cursorGlow = document.getElementById("cursorGlow");
const isTouch = window.matchMedia("(pointer: coarse)").matches;
if (!isTouch) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });
} else {
  cursorGlow.style.display = "none";
}

// ============================================
// SCROLL REVEAL
// ============================================
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

revealEls.forEach(el => revealObserver.observe(el));

// ============================================
// ANIMATED STAT COUNTERS
// ============================================
const statEls = document.querySelectorAll(".stat__num");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statEls.forEach(el => statObserver.observe(el));

function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const isDecimal = target % 1 !== 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = target * eased;
    el.textContent = (isDecimal ? value.toFixed(2) : Math.round(value)) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = (isDecimal ? target.toFixed(2) : target) + suffix;
  }
  requestAnimationFrame(tick);
}

// ============================================
// PHOTO UPLOAD
// ============================================
const photoInput = document.getElementById("photoUpload");
const portraitImg = document.getElementById("portraitImg");
const portraitPlaceholder = document.getElementById("portraitPlaceholder");

photoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    portraitImg.src = ev.target.result;
    portraitImg.style.display = "block";
    portraitPlaceholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

// ============================================
// HERO CANVAS — animated neural network / constellation
// ============================================
const canvas = document.getElementById("webCanvas");
const ctx = canvas.getContext("2d");
let width, height, nodes;
const NODE_COUNT_BASE = 55;
const LINK_DIST = 140;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
  const hero = document.querySelector(".hero");
  width = canvas.width = hero.offsetWidth;
  height = canvas.height = hero.offsetHeight;
}

function initNodes() {
  const count = Math.max(24, Math.min(NODE_COUNT_BASE, Math.floor((width * height) / 22000)));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    r: Math.random() * 1.6 + 0.6
  }));
}

function drawFrame() {
  ctx.clearRect(0, 0, width, height);

  // update
  nodes.forEach(n => {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > width) n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;
  });

  // links
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < LINK_DIST) {
        const alpha = (1 - dist / LINK_DIST) * 0.45;
        ctx.strokeStyle = `rgba(233, 30, 99, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  // nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(214, 51, 132, 0.6)";
    ctx.fill();
  });

  if (!reducedMotion) requestAnimationFrame(drawFrame);
}

function setupCanvas() {
  resizeCanvas();
  initNodes();
  drawFrame();
}

window.addEventListener("resize", () => {
  clearTimeout(window.__resizeTO);
  window.__resizeTO = setTimeout(() => {
    resizeCanvas();
    initNodes();
    if (reducedMotion) drawFrame();
  }, 200);
});

setupCanvas();
