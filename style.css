/* ============================================
   TOKENS
============================================ */
:root{
  --bg: #0d0409;
  --bg-alt: #170810;
  --surface: #1e0e18;
  --surface-2: #26121f;
  --line: rgba(255,183,213,0.12);

  --pink: #ff3d7f;
  --pink-2: #ff6fa0;
  --pink-soft: #ffb9d1;
  --rose-gold: #e8b48f;
  --champagne: #f3d9c4;

  --text: #f8ecf1;
  --text-muted: #c8a9b6;
  --text-dim: #8a6b76;

  --serif: "Fraunces", "Times New Roman", serif;
  --sans: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --mono: "JetBrains Mono", "SFMono-Regular", Menlo, monospace;

  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --container: 1180px;
}

*{ box-sizing: border-box; margin:0; padding:0; }

html{ scroll-behavior: smooth; }

body{
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
  cursor: default;
}

::selection{ background: var(--pink); color: #fff; }

a{ color: inherit; text-decoration: none; }
ul{ list-style: none; }
img{ max-width: 100%; display:block; }

@media (prefers-reduced-motion: reduce){
  *{ animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}

:focus-visible{
  outline: 2px solid var(--pink-2);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ============================================
   BACKGROUND TEXTURE
============================================ */
.grain{
  position: fixed; inset: 0;
  pointer-events: none;
  z-index: 999;
  opacity: 0.035;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.cursor-glow{
  position: fixed;
  width: 420px; height: 420px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle, rgba(255,61,127,0.10) 0%, rgba(255,61,127,0) 70%);
  transform: translate(-50%,-50%);
  transition: opacity 0.4s ease;
  will-change: left, top;
}

body::before{
  content: "";
  position: fixed; inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 60% 40% at 15% 0%, rgba(255,61,127,0.12), transparent 60%),
    radial-gradient(ellipse 50% 35% at 100% 20%, rgba(232,180,143,0.08), transparent 60%);
  pointer-events: none;
}

/* ============================================
   NAV
============================================ */
.nav{
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 5vw;
  background: rgba(13,4,9,0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.4s ease, background 0.4s ease;
}
.nav.scrolled{
  border-bottom-color: var(--line);
  background: rgba(13,4,9,0.82);
}
.nav__mark{
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  color: var(--pink-soft);
}
.nav__links{
  display: flex;
  gap: 2.4rem;
}
.nav__links a{
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}
.nav__links a::after{
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 1px;
  background: var(--pink-2);
  transition: width 0.35s var(--ease);
}
.nav__links a:hover{ color: var(--text); }
.nav__links a:hover::after{ width: 100%; }

.nav__cta{
  font-size: 0.82rem;
  font-weight: 600;
  padding: 10px 20px;
  border: 1px solid var(--pink-2);
  border-radius: 100px;
  color: var(--pink-soft);
  transition: all 0.35s var(--ease);
  white-space: nowrap;
}
.nav__cta:hover{
  background: var(--pink-2);
  color: #170810;
  box-shadow: 0 0 24px rgba(255,111,160,0.5);
}

.nav__burger{
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.nav__burger span{
  width: 22px; height: 1.5px;
  background: var(--text);
  transition: all 0.3s ease;
}

.mobile-menu{
  position: fixed;
  top: 0; right: -100%;
  width: 78%;
  max-width: 320px;
  height: 100vh;
  background: var(--bg-alt);
  border-left: 1px solid var(--line);
  z-index: 150;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 100px 2.4rem;
  transition: right 0.45s var(--ease);
}
.mobile-menu.open{ right: 0; }
.mobile-menu a{
  font-family: var(--serif);
  font-size: 1.5rem;
  color: var(--text);
}

/* ============================================
   LAYOUT HELPERS
============================================ */
.section{
  position: relative;
  z-index: 2;
  max-width: var(--container);
  margin: 0 auto;
  padding: 130px 5vw 40px;
}
.section__head{
  margin-bottom: 60px;
}
.eyebrow{
  font-family: var(--mono);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--pink-2);
  margin-bottom: 14px;
}
.section h2{
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 3.4vw, 2.7rem);
  letter-spacing: -0.01em;
  color: var(--text);
}

/* ============================================
   REVEAL ANIMATION
============================================ */
.reveal{
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
}
.reveal.in-view{
  opacity: 1;
  transform: translateY(0);
}

/* ============================================
   HERO
============================================ */
.hero{
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 2rem;
  padding: 140px 5vw 60px;
  overflow: hidden;
}
.hero__web{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.55;
}
.hero__inner{
  position: relative;
  z-index: 2;
}
.hero__name{
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(3.4rem, 8vw, 6.4rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin: 18px 0 26px;
}
.hero__name-line{
  display: block;
}
.hero__name-line--accent{
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(100deg, var(--pink-2) 0%, var(--pink) 35%, var(--rose-gold) 70%, var(--pink-2) 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 7s ease-in-out infinite;
}
@keyframes shimmer{
  0%,100%{ background-position: 0% 50%; }
  50%{ background-position: 100% 50%; }
}
.hero__tagline{
  max-width: 520px;
  font-size: 1.06rem;
  color: var(--text-muted);
  margin-bottom: 2.6rem;
}
.hero__actions{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 28px;
  border-radius: 100px;
  font-size: 0.92rem;
  font-weight: 600;
  transition: all 0.4s var(--ease);
  position: relative;
  overflow: hidden;
}
.btn--primary{
  background: linear-gradient(120deg, var(--pink) 0%, #ff2f70 100%);
  color: #fff;
  box-shadow: 0 8px 30px -8px rgba(255,61,127,0.65);
}
.btn--primary:hover{
  transform: translateY(-2px);
  box-shadow: 0 14px 36px -8px rgba(255,61,127,0.85);
}
.btn--ghost{
  border: 1px solid var(--line);
  color: var(--text);
}
.btn--ghost:hover{
  border-color: var(--pink-2);
  background: rgba(255,111,160,0.08);
  transform: translateY(-2px);
}

/* PORTRAIT */
.hero__portrait{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portrait-ring{
  position: relative;
  width: min(340px, 70vw);
  aspect-ratio: 1/1;
}
.portrait-ring__svg{
  position: absolute;
  inset: -18px;
  width: calc(100% + 36px);
  height: calc(100% + 36px);
  fill: none;
}
.portrait-ring__svg circle{
  fill: none;
  stroke: var(--pink-2);
  stroke-width: 1;
  stroke-dasharray: 4 10;
  opacity: 0.55;
  animation: rotate 40s linear infinite;
  transform-origin: center;
}
@keyframes rotate{
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
}
.portrait-frame{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(160deg, var(--surface-2), var(--bg-alt));
  border: 1px solid var(--line);
  box-shadow:
    0 0 0 1px rgba(255,111,160,0.15),
    0 30px 80px -20px rgba(255,61,127,0.35),
    inset 0 0 40px rgba(0,0,0,0.4);
  animation: float 6s ease-in-out infinite;
}
@keyframes float{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-14px); }
}
.portrait-frame img{
  width: 100%; height: 100%;
  object-fit: cover;
}
.portrait-placeholder{
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif);
  font-size: 4rem;
  font-style: italic;
  color: var(--pink-soft);
  opacity: 0.5;
}
.portrait-upload{
  position: absolute;
  bottom: 12px; right: 12px;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(13,4,9,0.75);
  border: 1px solid var(--pink-2);
  color: var(--pink-soft);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
}
.portrait-upload:hover{
  background: var(--pink-2);
  color: #170810;
  transform: scale(1.08);
}

.floating-tag{
  position: absolute;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  padding: 8px 16px;
  border-radius: 100px;
  background: rgba(30,14,24,0.7);
  border: 1px solid var(--line);
  color: var(--pink-soft);
  backdrop-filter: blur(8px);
  animation: drift 8s ease-in-out infinite;
}
.floating-tag--1{ top: 6%; left: -4%; animation-delay: 0s; }
.floating-tag--2{ top: 18%; right: -8%; animation-delay: 1.3s; }
.floating-tag--3{ bottom: 14%; left: -10%; animation-delay: 2.6s; }
.floating-tag--4{ bottom: 2%; right: -2%; animation-delay: 3.9s; }
@keyframes drift{
  0%,100%{ transform: translateY(0px); }
  50%{ transform: translateY(-10px); }
}

.scroll-cue{
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px; height: 36px;
  border: 1px solid var(--text-dim);
  border-radius: 20px;
  z-index: 2;
}
.scroll-cue span{
  position: absolute;
  top: 6px; left: 50%;
  width: 3px; height: 8px;
  background: var(--pink-2);
  border-radius: 2px;
  transform: translateX(-50%);
  animation: scrollcue 1.8s ease-in-out infinite;
}
@keyframes scrollcue{
  0%{ opacity: 1; top: 6px; }
  70%{ opacity: 0; top: 18px; }
  100%{ opacity: 0; top: 6px; }
}

/* ============================================
   ABOUT
============================================ */
.about__grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about__lead{
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.55;
  color: var(--text);
}
.about__stats{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
}
.stat{
  border-top: 1px solid var(--line);
  padding-top: 14px;
}
.stat__num{
  display: block;
  font-family: var(--serif);
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--pink-2);
}
.stat__label{
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* ============================================
   TIMELINE
============================================ */
.timeline{
  position: relative;
  padding-left: 30px;
  border-left: 1px solid var(--line);
}
.timeline__item{
  position: relative;
  padding: 0 0 60px 34px;
}
.timeline__item:last-child{ padding-bottom: 0; }
.timeline__marker{
  position: absolute;
  left: -40px;
  top: 4px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 0 4px rgba(255,61,127,0.15), 0 0 20px rgba(255,61,127,0.6);
}
.timeline__date{
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--pink-2);
  letter-spacing: 0.04em;
}
.timeline__content h3{
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 500;
  margin: 8px 0 2px;
}
.timeline__org{
  font-size: 0.9rem;
  color: var(--rose-gold);
  font-weight: 600;
}
.timeline__content p{
  margin-top: 14px;
  color: var(--text-muted);
  max-width: 640px;
}
.timeline__tags{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.timeline__tags span{
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 5px 12px;
  border-radius: 100px;
  border: 1px solid var(--line);
  color: var(--text-muted);
}

/* ============================================
   PROJECTS
============================================ */
.project-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
}
.project-card{
  position: relative;
  padding: 2.4rem;
  border-radius: 20px;
  background: linear-gradient(160deg, var(--surface), var(--bg-alt));
  border: 1px solid var(--line);
  overflow: hidden;
  transition: transform 0.45s var(--ease), border-color 0.45s var(--ease), box-shadow 0.45s var(--ease);
}
.project-card:hover{
  transform: translateY(-6px);
  border-color: rgba(255,111,160,0.4);
  box-shadow: 0 24px 60px -20px rgba(255,61,127,0.35);
}
.project-card__glow{
  position: absolute;
  top: -60%; right: -30%;
  width: 260px; height: 260px;
  background: radial-gradient(circle, rgba(255,61,127,0.25), transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}
.project-card:hover .project-card__glow{ opacity: 1; }
.project-card__index{
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--text-dim);
}
.project-card h3{
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 500;
  margin: 14px 0 12px;
  position: relative;
}
.project-card p{
  color: var(--text-muted);
  font-size: 0.94rem;
  margin-bottom: 20px;
  position: relative;
}
.project-card__stack{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
}
.project-card__stack span{
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 5px 12px;
  border-radius: 100px;
  background: rgba(255,111,160,0.08);
  color: var(--pink-soft);
}

/* ============================================
   SKILLS
============================================ */
.skills__grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
}
.skill-group h4{
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--rose-gold);
  margin-bottom: 14px;
}
.skill-tags{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-tags span{
  font-size: 0.86rem;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid var(--line);
  color: var(--text);
  transition: all 0.3s ease;
}
.skill-tags span:hover{
  border-color: var(--pink-2);
  background: rgba(255,61,127,0.1);
  transform: translateY(-2px);
}

/* ============================================
   SPLIT (Education / Leadership)
============================================ */
.split{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
.split__col h2{ margin-bottom: 40px; }
.edu-item{
  padding: 20px 0;
  border-top: 1px solid var(--line);
}
.edu-item h3{
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 500;
}
.edu-item__meta{
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 4px;
}
.edu-item__meta--accent{
  color: var(--pink-2);
  font-family: var(--mono);
}

.lead-list li{
  padding: 20px 0;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.lead-list strong{
  font-family: var(--serif);
  font-size: 1.1rem;
  font-weight: 500;
}
.lead-list span{
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* ============================================
   CONTACT
============================================ */
.contact{
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.contact__inner{
  max-width: 640px;
  margin: 0 auto;
}
.contact h2{
  margin-bottom: 20px;
}
.contact__sub{
  color: var(--text-muted);
  margin-bottom: 40px;
}
.contact__email{
  display: inline-block;
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: var(--pink-soft);
  border-bottom: 1px solid var(--pink-2);
  padding-bottom: 8px;
  transition: all 0.4s ease;
}
.contact__email:hover{
  color: #fff;
  text-shadow: 0 0 24px rgba(255,111,160,0.7);
}
.contact__links{
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 36px;
  flex-wrap: wrap;
}
.contact__links a{
  font-size: 0.85rem;
  color: var(--text-muted);
  position: relative;
  padding-bottom: 3px;
}
.contact__links a::after{
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 1px;
  background: var(--pink-2);
  transition: width 0.3s ease;
}
.contact__links a:hover{ color: var(--text); }
.contact__links a:hover::after{ width: 100%; }

/* ============================================
   FOOTER
============================================ */
.footer{
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 30px 5vw 40px;
  font-size: 0.78rem;
  color: var(--text-dim);
  border-top: 1px solid var(--line);
  max-width: var(--container);
  margin: 0 auto;
}

/* ============================================
   RESPONSIVE
============================================ */
@media (max-width: 900px){
  .nav__links, .nav__cta{ display: none; }
  .nav__burger{ display: flex; }

  .hero{
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 120px;
  }
  .hero__inner{ order: 2; }
  .hero__portrait{ order: 1; margin-bottom: 2rem; }
  .hero__actions{ justify-content: center; }
  .hero__tagline{ margin: 0 auto 2.4rem; }

  .about__grid, .split, .skills__grid{
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }
  .project-grid{ grid-template-columns: 1fr; }
  .floating-tag{ display: none; }
  .footer{ flex-direction: column; gap: 8px; text-align: center; }
}

@media (max-width: 500px){
  .about__stats{ grid-template-columns: 1fr 1fr; }
  .skills__grid{ grid-template-columns: 1fr; }
}
