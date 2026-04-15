'use client'
import { useState, useRef, useEffect } from 'react'

const services = [
  {
    num: '01',
    name: 'ATS-Optimized CV',
    tag: 'CV Design',
    description:
      'A precisely engineered CV that passes Applicant Tracking Systems and impresses human recruiters — built to perform before a human ever reads it.',
    need: 'Most CVs are rejected before a human ever reads them. Ours ensures yours gets through — and stands out.',
  },
  {
    num: '02',
    name: 'LinkedIn Profile',
    tag: 'LinkedIn',
    description:
      'A fully optimized LinkedIn presence — headline, summary, keywords, and visual identity that recruiters find first.',
    need: 'Recruiters search LinkedIn 200M+ times a day. Without optimization, you are invisible.',
  },
  {
    num: '03',
    name: 'Personal Branding',
    tag: 'Branding',
    description:
      'A cohesive personal brand across LinkedIn, portfolio, and digital presence that tells your professional story memorably.',
    need: 'Your online presence is your first impression. A strong brand makes you memorable — and hirable.',
  },
  {
    num: '04',
    name: 'Career Roadmap',
    tag: 'Strategy',
    description:
      'A strategic career plan mapping your current position to your target role — with clear, actionable milestones at every step.',
    need: 'Without a clear strategy, career growth is guesswork. We give you a precise roadmap.',
  },
  {
    num: '05',
    name: 'Job Search System',
    tag: 'Job Search',
    description:
      'A systematic approach — outreach templates, tracking system, and hidden opportunity sourcing that lands interviews consistently.',
    need: 'Random applications waste time. Our system gives you a repeatable process that converts.',
  },
  {
    num: '06',
    name: 'Interview Prep',
    tag: 'Interview',
    description:
      'Comprehensive coaching — behavioral, technical, and negotiation — so you walk in confident, prepared, and impossible to overlook.',
    need: 'Most candidates lose roles they are qualified for due to poor interview performance. We make sure that is never you.',
  },
]

const templates = [
  { id: 1,  src: './temp01.jpg', alt: 'ATS-Optimized CV template' },
  { id: 2,  src: './temp02.jpg', alt: 'ATS-Optimized CV template' },
  { id: 3,  src: './temp03.jpg', alt: 'ATS-Optimized CV template' },
  { id: 4,  src: './temp04.jpg', alt: 'ATS-Optimized CV template' },
  { id: 5,  src: './temp05.jpg', alt: 'ATS-Optimized CV template' },
  { id: 6,  src: './temp06.jpg', alt: 'ATS-Optimized CV template' },
  { id: 7,  src: './temp07.jpg', alt: 'ATS-Optimized CV template' },
  { id: 8,  src: './temp08.jpg', alt: 'ATS-Optimized CV template' },
  { id: 9,  src: './temp09.jpg', alt: 'ATS-Optimized CV template' },
  { id: 10, src: './temp10.jpg', alt: 'ATS-Optimized CV template' },
  { id: 11, src: './temp11.jpg', alt: 'ATS-Optimized CV template' },
  { id: 12, src: './temp12.jpg', alt: 'ATS-Optimized CV template' },
  { id: 13, src: './temp13.jpg', alt: 'ATS-Optimized CV template' },
  { id: 14, src: './temp14.jpg', alt: 'ATS-Optimized CV template' },
]

function ImagePlaceholder() {
  return (
    <div className="gl-placeholder">
      <div className="gl-ph-shimmer" />
      {[88, 68, 76, 52, 62, 44, 70, 55, 80, 60, 45, 72].map((w, i) => (
        <div key={i} className="gl-ph-line" style={{ width: `${w}%`, top: `${7 + i * 7.7}%` }} />
      ))}
    </div>
  )
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .pf3 {
    opacity: 0; transform: translateY(18px);
    transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
  }
  .pf3.pv3 { opacity: 1; transform: none; }

  @keyframes driftA { from{transform:translate(0,0)} to{transform:translate(3%,4%)} }
  @keyframes driftB { from{transform:translate(0,0)} to{transform:translate(-4%,-3%)} }
  @keyframes accentPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
  @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(300%)} }

  /* ══ GALLERY ══ */

  .gl-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    padding: 5rem 0 6rem;
    color: #fff;
    position: relative;
    overflow: hidden;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    box-sizing: border-box;
  }

  /*
    Full-section-height vignettes — absolute, cover entire section.
    No "cut-off" because they span top→bottom, not just the stage.
  */
  .gl-vignette {
    position: absolute;
    top: 0; bottom: 0;
    width: clamp(80px, 11vw, 180px);
    z-index: 20;
    pointer-events: none;
  }
  .gl-vignette--left {
    left: 0;
    background: linear-gradient(to right, #000 0%, rgba(0,0,0,.8) 45%, transparent 100%);
  }
  .gl-vignette--right {
    right: 0;
    background: linear-gradient(to left, #000 0%, rgba(0,0,0,.8) 45%, transparent 100%);
  }

  .gl-bg-blob {
    position: absolute; border-radius: 50%;
    filter: blur(80px); pointer-events: none; z-index: 0;
  }
  .gl-blob-1 {
    width: 500px; height: 500px; top: -100px; right: -80px;
    background: rgba(109,40,217,0.18);
    animation: driftB 18s ease-in-out infinite alternate;
  }
  .gl-blob-2 {
    width: 380px; height: 380px; bottom: 0; left: -60px;
    background: rgba(139,92,246,0.12);
    animation: driftA 22s ease-in-out infinite alternate;
  }
  .gl-top-line {
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(139,92,246,0) 15%, rgba(139,92,246,.45) 50%, rgba(139,92,246,0) 85%, transparent 100%);
    animation: accentPulse 4s ease-in-out infinite; z-index: 1;
  }

  .gl-inner {
    max-width: 960px; margin: 0 auto;
    padding: 0 clamp(1.25rem,5vw,3rem);
    position: relative; z-index: 1;
  }
  .sv-eyebrow {
    font-size: .63rem; letter-spacing: .3em; text-transform: uppercase;
    color: rgba(167,139,250,0.6); margin-bottom: 1.1rem; display: block; text-align: center;
  }
  .sv-heading {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: clamp(2.2rem,5vw,3.8rem); line-height: 1.08;
    color: rgba(255,255,255,.95); margin: 0 0 .6rem; text-align: center;
  }
  .sv-heading em { font-style: italic; color: rgba(167,139,250,0.9); -webkit-text-fill-color: rgba(167,139,250,0.9); }
  .sv-sub { font-size: .78rem; color: rgba(255,255,255,.25); letter-spacing: .07em; text-align: center; }

  /* ══ STAGE
      Card positions — mathematically back-to-back (edges touch, no gap):

      gl-c  scale=1.00  center=0
      gl-l  scale=0.74  M=0.87  → right edge = center left edge
      gl-ll scale=0.50  M=1.49  → right edge = near-left left edge
      (mirror for right side)
  ══ */

  .gl-stage {
    --cw: min(320px, 26vw);
    position: relative;
    width: 100%;
    height: calc(var(--cw) * 297 / 210);
    margin: clamp(2.5rem,5vw,4rem) 0 0;
    overflow: visible;
  }

  .gl-item {
    position: absolute; top: 50%; left: 50%;
    width: var(--cw); aspect-ratio: 210 / 297;
    border-radius: 10px; overflow: hidden;
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition:
      transform .55s cubic-bezier(.23,1,.32,1),
      opacity   .55s cubic-bezier(.23,1,.32,1);
  }

  .gl-c {
    transform: translate3d(-50%,-50%,0) scale(1);
    opacity: 1; z-index: 5; cursor: default;
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.45);
    box-shadow: 0 32px 64px rgba(0,0,0,.65), 0 0 48px rgba(109,40,217,.14);
  }
  .gl-l {
    transform: translate3d(calc(-50% - var(--cw) * 0.87),-50%,0) scale(0.74);
    opacity: .48; z-index: 4; cursor: pointer;
    border: 1px solid rgba(255,255,255,0.04);
    border-top: 1px solid rgba(167,139,250,0.14);
  }
  .gl-l:hover { opacity: .62; }
  .gl-r {
    transform: translate3d(calc(-50% + var(--cw) * 0.87),-50%,0) scale(0.74);
    opacity: .48; z-index: 4; cursor: pointer;
    border: 1px solid rgba(255,255,255,0.04);
    border-top: 1px solid rgba(167,139,250,0.14);
  }
  .gl-r:hover { opacity: .62; }
  .gl-ll {
    transform: translate3d(calc(-50% - var(--cw) * 1.49),-50%,0) scale(0.5);
    opacity: .2; z-index: 3; cursor: pointer;
    border: 1px solid rgba(255,255,255,0.025);
  }
  .gl-ll:hover { opacity: .32; }
  .gl-rr {
    transform: translate3d(calc(-50% + var(--cw) * 1.49),-50%,0) scale(0.5);
    opacity: .2; z-index: 3; cursor: pointer;
    border: 1px solid rgba(255,255,255,0.025);
  }
  .gl-rr:hover { opacity: .32; }
  .gl-h {
    transform: translate3d(-50%,-50%,0) scale(0.3);
    opacity: 0; z-index: 1; pointer-events: none;
  }

  .gl-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }

  .gl-placeholder {
    width: 100%; height: 100%;
    background: rgba(25,15,45,0.95);
    position: relative; overflow: hidden;
  }
  .gl-ph-shimmer {
    position: absolute; top: -50%; left: -50%;
    width: 60%; height: 200%;
    background: linear-gradient(105deg, transparent 40%, rgba(167,139,250,0.05) 50%, transparent 60%);
    animation: shimmer 3.5s ease-in-out infinite;
  }
  .gl-ph-line { position: absolute; height: 1px; left: 8%; right: 8%; background: rgba(167,139,250,.06); }

  .gl-controls {
    display: flex; align-items: center; justify-content: center;
    gap: 1.25rem; margin-top: clamp(1.5rem,3vw,2.5rem);
    padding: 0 clamp(1.25rem,5vw,3rem);
    position: relative; z-index: 25;
  }
  .gl-btn {
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.22);
    color: rgba(167,139,250,.55);
    display: flex; align-items: center; justify-content: center; cursor: pointer;
    transition: background .25s, color .25s, transform .2s, box-shadow .25s;
  }
  .gl-btn:hover {
    background: rgba(255,255,255,0.07); color: rgba(196,170,255,.9);
    transform: translateY(-2px); box-shadow: 0 12px 32px rgba(109,40,217,.2);
  }
  .gl-dots { display: flex; gap: 7px; align-items: center; }
  .gl-dot {
    width: 5px; height: 5px; border-radius: 50%; border: none; padding: 0;
    background: rgba(167,139,250,.18); cursor: pointer;
    transition: background .3s, transform .3s, box-shadow .3s;
  }
  .gl-dot--active {
    background: rgba(167,139,250,.8); transform: scale(1.4);
    box-shadow: 0 0 6px rgba(124,58,237,.55);
  }

  /* ══ ACCORDION ══ */

  .acc-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    padding: clamp(4rem, 8vw, 7rem) 0;
    color: #fff;
    position: relative; overflow: hidden;
    width: 100vw; margin-left: calc(-50vw + 50%); box-sizing: border-box;
  }
  .acc-bg-blob {
    position: absolute; border-radius: 50%;
    filter: blur(80px); pointer-events: none; z-index: 0;
  }
  .acc-blob-1 {
    width: 520px; height: 520px; top: -120px; left: -100px;
    background: rgba(109,40,217,0.18); animation: driftA 20s ease-in-out infinite alternate;
  }
  .acc-blob-2 {
    width: 380px; height: 380px; bottom: 0; right: -80px;
    background: rgba(139,92,246,0.12); animation: driftB 16s ease-in-out infinite alternate;
  }
  .acc-section::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(139,92,246,0) 15%, rgba(139,92,246,.35) 50%, rgba(139,92,246,0) 85%, transparent 100%);
    animation: accentPulse 4s ease-in-out infinite;
  }

  .acc-inner {
    max-width: 1200px; margin: 0 auto;
    padding: 0 clamp(1.5rem, 1vw, 5rem);
    position: relative; z-index: 1;
  }

  /* Professional header: badge with flanking rules */
  .acc-header-block { margin-bottom: clamp(2.5rem, 5vw, 4.5rem); }

  .acc-eyebrow-wrap {
    display: flex; align-items: center; gap: 1.4rem;
    justify-content: center; margin-bottom: 1.8rem;
  }
  .acc-eyebrow-rule {
    flex: 1; max-width: 140px; height: 1px;
    background: linear-gradient(to right, transparent, rgba(139,92,246,.28));
  }
  .acc-eyebrow-rule--r {
    background: linear-gradient(to left, transparent, rgba(139,92,246,.28));
  }
  .acc-eyebrow-badge {
    font-size: .58rem; letter-spacing: .34em; text-transform: uppercase;
    color: rgba(167,139,250,.65);
    border: 1px solid rgba(167,139,250,.16);
    background: rgba(109,40,217,.07);
    padding: .5em 2em; border-radius: 999px; white-space: nowrap;
  }

  .acc-heading {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: clamp(2rem, 4.8vw, 4.8rem); line-height: 1.08;
    color: rgba(255,255,255,.93); text-align: center; margin: 0 0 .9rem;
  }
  .acc-heading em { font-style: italic; color: rgba(167,139,250,.9); -webkit-text-fill-color: rgba(167,139,250,.9); }
  .acc-sub {
    font-size: clamp(.7rem,.85vw,.82rem);
    color: rgba(255,255,255,.2); letter-spacing: .08em; text-align: center;
  }

  .acc-list { position: relative; }
  .acc-list-border {
    width: 100%; height: 1px; background: rgba(255,255,255,0.055); position: relative;
  }
  .acc-list-border::after {
    content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 220px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139,92,246,.48), transparent);
  }

  .acc-item {
    border-bottom: 1px solid rgba(255,255,255,0.045);
    position: relative; transition: background .25s;
  }
  .acc-item:hover { background: rgba(255,255,255,0.022); }
  .acc-item--open {
    background: rgba(255,255,255,0.028);
    border-bottom-color: rgba(167,139,250,0.09);
  }
  .acc-item--open::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, transparent, rgba(139,92,246,.6), transparent);
  }

  .acc-hdr {
    display: grid; grid-template-columns: 2.5rem 1fr auto; align-items: center;
    gap: clamp(.75rem,2vw,1.5rem);
    padding: clamp(1.1rem,2.2vw,1.5rem) clamp(1rem,3vw,1.75rem);
    cursor: pointer; user-select: none;
    background: none; border: none; width: 100%; text-align: left;
  }
  .acc-num {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: .68rem; letter-spacing: .14em;
    color: rgba(167,139,250,.19); transition: color .3s;
  }
  .acc-item--open .acc-num { color: rgba(167,139,250,.48); }
  .acc-title-row { display: flex; align-items: center; gap: .8rem; flex-wrap: wrap; }
  .acc-name {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: clamp(1rem,2.1vw,1.32rem);
    color: rgba(255,255,255,.62); letter-spacing: -.01em; transition: color .3s;
  }
  .acc-item--open .acc-name { color: rgba(255,255,255,.94); }
  .acc-tag {
    font-size: .5rem; letter-spacing: .15em; text-transform: uppercase;
    color: rgba(167,139,250,.26); border: 1px solid rgba(167,139,250,.09);
    background: rgba(167,139,250,.035); padding: .25em .7em; border-radius: 999px; white-space: nowrap;
    transition: border-color .3s, color .3s, background .3s;
  }
  .acc-item--open .acc-tag {
    border-color: rgba(167,139,250,.22); color: rgba(196,170,255,.56); background: rgba(109,40,217,.08);
  }
  .acc-chevron {
    width: 26px; height: 26px; border-radius: 50%;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.055);
    border-top: 1px solid rgba(167,139,250,0.14);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    transition: transform .4s cubic-bezier(.23,1,.32,1), border-color .3s, background .3s;
  }
  .acc-item--open .acc-chevron {
    transform: rotate(45deg); background: rgba(255,255,255,0.055);
    border-top-color: rgba(167,139,250,.48);
  }
  .acc-chevron svg { opacity: .32; transition: opacity .3s; }
  .acc-item--open .acc-chevron svg { opacity: .82; }

  .acc-body {
    display: grid; grid-template-rows: 0fr;
    transition: grid-template-rows .42s cubic-bezier(.23,1,.32,1); overflow: hidden;
  }
  .acc-item--open .acc-body { grid-template-rows: 1fr; }
  .acc-body-inner { min-height: 0; }
  .acc-body-content {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: clamp(1rem,3vw,3rem);
    padding: .2rem clamp(1rem,3vw,1.75rem) 1.75rem clamp(3rem,5vw,4.75rem);
  }
  .acc-desc {
    font-weight: 300; font-size: .77rem; line-height: 1.9;
    color: rgba(255,255,255,.48); margin: 0;
  }
  .acc-need-label {
    font-size: .5rem; letter-spacing: .2em; text-transform: uppercase;
    color: rgba(167,139,250,.26); margin-bottom: .5rem;
  }
  .acc-need {
    font-weight: 300; font-size: .75rem; line-height: 1.8;
    color: rgba(255,255,255,.33); margin: 0;
    padding-left: .85rem; border-left: 1px solid rgba(167,139,250,.16);
  }
  .acc-cta-link {
    display: inline-flex; align-items: center; gap: .4rem;
    font-size: .63rem; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(167,139,250,.42); text-decoration: none;
    margin-top: 1rem; border-bottom: 1px solid rgba(167,139,250,.11);
    padding-bottom: .12rem; transition: color .25s, border-color .25s;
  }
  .acc-cta-link:hover { color: rgba(196,170,255,.82); border-color: rgba(167,139,250,.32); }

  .acc-cta-wrap {
    display: flex; flex-direction: column; align-items: center;
    gap: 1.5rem; margin-top: clamp(3rem, 6vw, 5rem);
  }
  .acc-cta-line {
    width: 1px; height: 3rem;
    background: linear-gradient(to bottom, transparent, rgba(139,92,246,.35), transparent);
  }
  .acc-cta-btn {
    font-weight: 500; font-size: .8rem; letter-spacing: .09em; text-transform: uppercase;
    padding: .95rem 2.4rem; border-radius: 999px;
    border: 1px solid rgba(167,139,250,.48);
    background: linear-gradient(135deg, rgba(109,40,217,.88) 0%, rgba(139,92,246,.94) 50%, rgba(124,58,237,.88) 100%);
    color: rgba(255,255,255,.93); text-decoration: none;
    display: inline-flex; align-items: center; gap: .55rem;
    box-shadow: 0 4px 24px rgba(109,40,217,.28), inset 0 1px 0 rgba(255,255,255,.1);
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }
  .acc-cta-btn:hover {
    box-shadow: 0 8px 40px rgba(109,40,217,.48), inset 0 1px 0 rgba(255,255,255,.14);
    transform: translateY(-2px); border-color: rgba(167,139,250,.7);
  }

  /* ══ RESPONSIVE ══ */

  /* Tablet — 3 cards */
  @media (max-width: 900px) {
    .gl-stage { --cw: min(230px, 30vw); }
    .gl-ll, .gl-rr { opacity: 0 !important; pointer-events: none !important; }
  }

  /* Mobile — 3 cards, GPU-only transition, no expensive filters */
  @media (max-width: 640px) {
    .gl-stage { --cw: min(60vw, 260px); }
    .gl-vignette { width: clamp(55px, 14vw, 90px); }

    /* Snappy 380ms transition — removes lag feeling */
    .gl-item {
      transition:
        transform .38s cubic-bezier(.25,.46,.45,.94),
        opacity   .38s cubic-bezier(.25,.46,.45,.94);
      border-radius: 8px;
    }
    .gl-l {
      transform: translate3d(calc(-50% - var(--cw) * 0.87),-50%,0) scale(0.74) !important;
      opacity: 0.62 !important; pointer-events: auto !important;
    }
    .gl-r {
      transform: translate3d(calc(-50% + var(--cw) * 0.87),-50%,0) scale(0.74) !important;
      opacity: 0.62 !important; pointer-events: auto !important;
    }
    .gl-ll, .gl-rr { opacity: 0 !important; pointer-events: none !important; }

    /* Accordion responsive */
    .acc-inner { padding: 0 1.25rem; max-width: 100%; }
    .acc-heading { font-size: clamp(1.9rem, 7vw, 2.5rem); }
    .acc-body-content { grid-template-columns: 1fr; padding-left: 2rem; gap: 1rem; }
    .acc-tag { display: none; }
    .acc-eyebrow-rule { max-width: 60px; }
  }
`

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [active, setActive]       = useState(0)
  const n = templates.length

  const glRef  = useRef<HTMLElement>(null)
  const accRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('pv3'); io.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    glRef.current?.querySelectorAll('.pf3').forEach(el  => io.observe(el))
    accRef.current?.querySelectorAll('.pf3').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))
  const goPrev = () => setActive(i => (i - 1 + n) % n)
  const goNext = () => setActive(i => (i + 1) % n)

  const getPosClass = (i: number) => {
    let d = i - active
    if (d > n / 2)  d -= n
    if (d < -n / 2) d += n
    if (d === 0)  return 'gl-c'
    if (d === -1) return 'gl-l'
    if (d === 1)  return 'gl-r'
    if (d === -2) return 'gl-ll'
    if (d === 2)  return 'gl-rr'
    return 'gl-h'
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ══════ GALLERY ══════ */}
      <section id="work" className="gl-section" ref={glRef}>

        {/* Full-height side vignettes — no cut-off at stage boundary */}
        <div className="gl-vignette gl-vignette--left"  aria-hidden="true" />
        <div className="gl-vignette gl-vignette--right" aria-hidden="true" />

        <div className="gl-bg-blob gl-blob-1" />
        <div className="gl-bg-blob gl-blob-2" />
        <div className="gl-top-line" />

        <div className="gl-inner">
          <span className="sv-eyebrow pf3">Our Work</span>
          <h2 className="sv-heading pf3" style={{ transitionDelay: '.08s' }}>
            Crafted to <em>perform.</em>
          </h2>
          <p className="sv-sub pf3" style={{ transitionDelay: '.14s' }}>
            A selection of documents from our portfolio.
          </p>
        </div>

        <div className="gl-stage">
          {templates.map((t, i) => {
            const pc = getPosClass(i)
            return (
              <div
                key={t.id}
                className={`gl-item ${pc}`}
                onClick={() => {
                  if (pc === 'gl-l' || pc === 'gl-ll') goPrev()
                  else if (pc === 'gl-r' || pc === 'gl-rr') goNext()
                }}
              >
                {t.src
                  ? <img src={t.src} alt={t.alt} className="gl-img" />
                  : <ImagePlaceholder />
                }
              </div>
            )
          })}
        </div>

        <div className="gl-controls">
          <button className="gl-btn" onClick={goPrev} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="gl-dots">
            {templates.map((_, i) => (
              <button
                key={i}
                className={`gl-dot${i === active ? ' gl-dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="gl-btn" onClick={goNext} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* ══════ ACCORDION ══════ */}
      <section id="services" className="acc-section" ref={accRef}>

        <div className="acc-bg-blob acc-blob-1" />
        <div className="acc-bg-blob acc-blob-2" />

        <div className="acc-inner">

          <div className="acc-header-block pf3">
            <div className="acc-eyebrow-wrap">
              <div className="acc-eyebrow-rule" />
              <span className="acc-eyebrow-badge">What We Do</span>
              <div className="acc-eyebrow-rule acc-eyebrow-rule--r" />
            </div>
            <h2 className="acc-heading">
              Every tool you need to<br />
              <em>land the role you deserve.</em>
            </h2>
            <p className="acc-sub">
              Six services. One outcome — your career, elevated.
            </p>
          </div>

          <div className="acc-list pf3" style={{ transitionDelay: '.16s' }}>
            <div className="acc-list-border" />

            {services.map((s, i) => {
              const isOpen = openIndex === i
              return (
                <div key={s.num} className={`acc-item${isOpen ? ' acc-item--open' : ''}`}>
                  <button className="acc-hdr" onClick={() => toggle(i)}>
                    <span className="acc-num">{s.num}</span>
                    <div className="acc-title-row">
                      <span className="acc-name">{s.name}</span>
                      <span className="acc-tag">{s.tag}</span>
                    </div>
                    <div className="acc-chevron">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.5 1v9M1 5.5h9" stroke="rgba(196,170,255,0.9)" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>

                  <div className="acc-body">
                    <div className="acc-body-inner">
                      <div className="acc-body-content">
                        <div>
                          <p className="acc-desc">{s.description}</p>
                          <a href="#start" className="acc-cta-link">
                            Get started
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                              <path d="M1 10L10 1M10 1H4M10 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <div className="acc-need-label">Why you need it</div>
                          <p className="acc-need">{s.need}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="acc-cta-wrap pf3" style={{ transitionDelay: '.2s' }}>
            <div className="acc-cta-line" />
            <a href="#packages" className="acc-cta-btn">
              Start Your Elevation
            </a>
          </div>

        </div>
      </section>
    </>
  )
}