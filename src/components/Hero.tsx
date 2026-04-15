'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   Floating orb data
───────────────────────────────────────────── */
const orbs = [
  {
    id: 1,
    top: '12%', left: '5%',
    delay: '0s', dur: '7s',
    label: 'LinkedIn Optimized',
    sub: 'Profile that converts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <rect width="24" height="24" rx="5" fill="rgba(180,140,255,0.12)" />
        <path d="M8 10H5.5v8H8v-8Zm-1.25-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 4c-1.4 0-2.3.7-2.75 1.4V10H10.5v8H13v-4.25c0-1.1.65-1.75 1.75-1.75S16.5 13.4 16.5 14.75V18H19v-4.1c0-2.6-1.5-3.9-3.25-3.9Z" fill="rgba(200,170,255,0.7)" />
      </svg>
    ),
  },
  {
    id: 2,
    top: '8%', right: '6%',
    delay: '1.2s', dur: '9s',
    label: 'ATS-Proof CV',
    sub: '98% pass-through rate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="rgba(190,155,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    top: '44%', left: '3%',
    delay: '0.6s', dur: '8s',
    label: 'Fast Turnaround',
    sub: '48-hour delivery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="rgba(190,155,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    top: '42%', right: '4%',
    delay: '2s', dur: '10s',
    label: 'Personal Branding',
    sub: 'Own your narrative',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M5 3l14 9-14 9V3z" stroke="rgba(190,155,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    bottom: '22%', left: '7%',
    delay: '1.8s', dur: '11s',
    label: '500+ Clients Placed',
    sub: 'Proven track record',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="rgba(190,155,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    bottom: '18%', right: '6%',
    delay: '3s', dur: '8.5s',
    label: 'Recruiter Visibility',
    sub: '3× more interviews',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="rgba(190,155,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

/* ─────────────────────────────────────────────
   Stats row
───────────────────────────────────────────── */
const stats = [
  { value: '50+', label: 'Careers Elevated' },
  { value: '98%',  label: 'ATS Pass Rate' },
  { value: '3×',   label: 'More Interviews' },
  { value: '72h',  label: 'Avg. Delivery' },
]

/* ─── CSS ──────────────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes driftV {
    0%   { transform: translate(0,0) scale(1); opacity:.9; }
    50%  { transform: translate(40px,30px) scale(1.12); opacity:1; }
    100% { transform: translate(-20px,60px) scale(.95); opacity:.8; }
  }
  @keyframes driftV2 {
    0%   { transform: translate(0,0) scale(1); }
    100% { transform: translate(-30px,-40px) scale(1.1); }
  }
  @keyframes driftA {
    0%   { transform: translate(0,0) scale(1); }
    50%  { transform: translate(60px,40px) scale(1.08); }
    100% { transform: translate(-30px,80px) scale(.95); }
  }
  @keyframes driftB {
    0%   { transform: translate(0,0) scale(1); }
    50%  { transform: translate(-50px,-30px) scale(1.05); }
    100% { transform: translate(40px,-60px) scale(1.1); }
  }
  @keyframes shimmerPulse {
    0%,100% { opacity:0; transform:translateY(-20px); }
    50%      { opacity:1; transform:translateY(20px); }
  }
  @keyframes floatOrb {
    0%   { transform:translateY(0px) rotate(-1deg); }
    100% { transform:translateY(-12px) rotate(1deg); }
  }
  @keyframes pulseRing {
    0%,100% { opacity:0; transform:scale(1); }
    50%      { opacity:1; transform:scale(1.12); }
  }
  @keyframes dotPulse {
    0%,100% { transform:scale(1);   opacity:.55; box-shadow:0 0 6px rgba(124,58,237,.55); }
    50%      { transform:scale(1.5); opacity:1;   box-shadow:0 0 14px rgba(124,58,237,.85); }
  }
  @keyframes accentPulse {
    0%,100% { opacity:.4; }
    50%      { opacity:1; }
  }
  @keyframes scrollDrop {
    0%,100% { opacity:0; transform:scaleY(.5) translateY(-8px); }
    50%      { opacity:1; transform:scaleY(1) translateY(0); }
  }

  /* ── Section shell — pure #000 matching Testimonials ── */
  .hero-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    color: #fff;
    min-height: 100svh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 1.5rem 4rem;
  }

  /* noise grain — unchanged, subtle texture */
  .hero-section::before {
    content: '';
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    opacity: .025;
    pointer-events: none;
    z-index: 1;
  }

  /* ── Ambient blobs — same blur(80px) system as Testimonials ── */
  .hero-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    will-change: transform;
  }
  .hero-blob-1 {
    width: min(640px,80vw); height: min(640px,80vw);
    background: rgba(109,40,217,0.18);
    top: 5%; left: 15%;
    animation: driftV 16s ease-in-out infinite alternate;
  }
  .hero-blob-2 {
    width: min(420px,60vw); height: min(420px,60vw);
    background: rgba(139,92,246,0.12);
    bottom: 5%; right: 10%;
    animation: driftV2 20s ease-in-out infinite alternate;
  }
  .hero-blob-3 {
    width: min(600px,80vw); height: min(600px,80vw);
    background: rgba(109,40,217,0.08);
    top: -15%; left: -10%;
    animation: driftA 18s ease-in-out infinite alternate;
  }
  .hero-blob-4 {
    width: min(500px,70vw); height: min(500px,70vw);
    background: rgba(139,92,246,0.07);
    bottom: -20%; right: -10%;
    animation: driftB 22s ease-in-out infinite alternate;
  }

  /* top accent pulse line */
  .hero-top-line {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(139,92,246,0) 15%,
      rgba(139,92,246,.6) 40%,
      rgba(167,139,250,.8) 50%,
      rgba(139,92,246,.6) 60%,
      rgba(139,92,246,0) 85%,
      transparent 100%
    );
    animation: accentPulse 4s ease-in-out infinite;
    z-index: 5;
  }

  /* shimmer streaks */
  .hero-shimmer {
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
    filter: blur(16px);
    opacity: 0;
    animation: shimmerPulse 8s ease-in-out infinite;
  }
  .hs-1 { width:2px; height:300px; background:linear-gradient(to bottom,transparent,rgba(167,139,250,.22),transparent); top:10%; left:55%; animation-delay:0s; }
  .hs-2 { width:1px; height:200px; background:linear-gradient(to bottom,transparent,rgba(167,139,250,.14),transparent); top:40%; left:25%; animation-delay:3s; }
  .hs-3 { width:2px; height:250px; background:linear-gradient(to bottom,transparent,rgba(255,255,255,.08),transparent); top:20%; right:20%; animation-delay:5.5s; }
  .hs-4 { width:1px; height:180px; background:linear-gradient(to bottom,transparent,rgba(139,92,246,.3),transparent); top:60%; left:60%; animation-delay:2s; }

  /* ── Floating Orbs — glass circles matching Testimonials avatar ── */
  .orb {
    position: absolute;
    z-index: 20;
    animation: floatOrb var(--dur,8s) ease-in-out infinite alternate;
    animation-delay: var(--delay,0s);
  }

  .orb-circle {
    width: 44px; height: 44px;
    border-radius: 50%;
    /* glass — same recipe as Testimonials cards */
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.28);
    display: flex; align-items: center; justify-content: center;
    cursor: default;
    position: relative;
    transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
    box-shadow: 0 8px 32px rgba(0,0,0,.5);
  }
  .orb-circle:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.58);
    transform: scale(1.12);
    box-shadow: 0 16px 48px rgba(109,40,217,.2);
  }

  /* pulse ring */
  .orb-circle::before {
    content: '';
    position: absolute; inset: -5px;
    border-radius: 50%;
    border: 1px solid rgba(139,92,246,.15);
    animation: pulseRing 3s ease-in-out infinite;
    animation-delay: var(--delay,0s);
  }

  /* tooltip — glass matching Testimonials card language */
  .orb-tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.28);
    border-radius: 10px;
    padding: .45rem .75rem;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity .25s, transform .25s;
    z-index: 30;
    box-shadow: 0 16px 48px rgba(109,40,217,.15);
  }
  .orb-circle:hover .orb-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  .orb-tooltip-label {
    font-size: .68rem; font-weight: 500;
    color: rgba(196,170,255,.88);
    display: block;
  }
  .orb-tooltip-sub {
    font-size: .6rem;
    color: rgba(167,139,250,.4);
    display: block; margin-top: .1rem;
  }
  /* tooltip caret */
  .orb-tooltip::after {
    content: '';
    position: absolute;
    top: 100%; left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(167,139,250,.2);
  }

  /* ── Center content ── */
  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 720px;
  }

  /* Badge — glass pill */
  .hero-badge {
    display: inline-flex; align-items: center; gap: .5rem;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.28);
    border-radius: 999px;
    padding: .3rem .9rem .3rem .5rem;
    margin-bottom: 2rem;
  }
  .hero-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: rgba(167,139,250,1);
    box-shadow: 0 0 8px rgba(124,58,237,.55);
    animation: dotPulse 2.5s ease-in-out infinite;
  }
  .hero-badge-text {
    font-size: .65rem; letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(196,170,255,.75);
  }

  /* eyebrow */
  .hero-eyebrow {
    font-size: .68rem; letter-spacing: .28em;
    text-transform: uppercase;
    color: rgba(167,139,250,.6);
  }
  .hero-eyebrow-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 8px rgba(124,58,237,.55);
    animation: dotPulse 2.5s ease-in-out infinite;
  }
  .hero-divider {
    width: 1px; height: 1.8rem;
    background: linear-gradient(to bottom,transparent,rgba(167,139,250,.2),transparent);
  }

  /* heading — same Cormorant system */
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(3.2rem,7vw,6.5rem);
    line-height: 1.05;
    letter-spacing: -.01em;
    color: rgba(255,255,255,.95);
    margin-bottom: 1.75rem;
  }
  .hero-title em {
    font-style: italic;
    font-weight: 600;
    /* same gradient as Testimonials .tm-title em */
    color: rgba(167,139,250,.9);
    -webkit-text-fill-color: rgba(167,139,250,.9);
  }

  .hero-sub {
    font-weight: 300;
    color: rgba(255,255,255,.28);
    line-height: 1.75;
    max-width: 38ch;
    margin: 0 auto 2.75rem;
    font-size: 1.05rem;
  }

  /* ── Buttons ── */
  .hero-btn-primary {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500; font-size: .8rem;
    letter-spacing: .1em; text-transform: uppercase;
    padding: 1rem 2.2rem; border-radius: 999px;
    border: 1px solid rgba(167,139,250,.6);
    background: linear-gradient(135deg,
      rgba(109,40,217,.9) 0%,
      rgba(139,92,246,.95) 50%,
      rgba(124,58,237,.9) 100%
    );
    color: rgba(255,255,255,.95);
    cursor: pointer;
    text-decoration: none;
    display: inline-flex; align-items: center; gap: .5rem;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 24px rgba(109,40,217,.35), inset 0 1px 0 rgba(255,255,255,.12);
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }
  .hero-btn-primary:hover {
    box-shadow: 0 8px 40px rgba(109,40,217,.55), 0 0 0 1px rgba(167,139,250,.4), inset 0 1px 0 rgba(255,255,255,.15);
    transform: translateY(-2px);
    border-color: rgba(167,139,250,.8);
  }

  /* ghost — glass matching cards */
  .hero-btn-ghost {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400; font-size: .8rem;
    letter-spacing: .1em; text-transform: uppercase;
    padding: 1rem 2.2rem; border-radius: 999px;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.22);
    color: rgba(196,170,255,.75);
    cursor: pointer;
    text-decoration: none;
    display: inline-flex; align-items: center; gap: .5rem;
    transition: background .25s, border-color .25s, color .25s, transform .2s, box-shadow .25s;
  }
  .hero-btn-ghost:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.55);
    color: rgba(196,170,255,.95);
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(109,40,217,.2);
  }

  /* ── Stats — glass strip matching Packages summary bar ── */
  .hero-stats {
    display: flex; flex-wrap: wrap; gap: 0;
    justify-content: center;
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.07);
    border-top: 1px solid rgba(167,139,250,0.22);
    border-radius: 16px;
    padding: 1.6rem 0;
    margin-top: 2.5rem;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .hero-stat {
    flex: 1; min-width: 100px;
    text-align: center; padding: 0 1.5rem;
    border-right: 1px solid rgba(167,139,250,.08);
  }
  .hero-stat:last-child { border-right: none; }

  .hero-stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(1.6rem,3vw,2.2rem);
    color: rgba(255,255,255,.88);
    letter-spacing: -.02em; line-height: 1;
  }
  .hero-stat-label {
    font-size: .62rem; letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(167,139,250,.35);
    margin-top: .4rem;
  }

  /* ── Scroll hint ── */
  .hero-scroll {
    position: absolute; bottom: 2rem; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column;
    align-items: center; gap: .5rem;
    z-index: 10; opacity: .4;
  }
  .hero-scroll-line {
    width: 1px; height: 3rem;
    background: linear-gradient(to bottom,transparent,rgba(139,92,246,.7),transparent);
    animation: scrollDrop 2.4s ease-in-out infinite;
  }
  .hero-scroll-label {
    font-size: .6rem; letter-spacing: .25em;
    text-transform: uppercase;
    color: rgba(167,139,250,.4);
  }

  /* ── Responsive ── */
  @media (max-width: 1023px) { .orb { display: none; } }
  @media (max-width: 767px) {
    .hero-section { padding: 5rem 1.25rem 3.5rem; }
    .hero-title { font-size: clamp(2.8rem,11vw,4.5rem) !important; }
    .hero-sub { font-size: .95rem !important; max-width: 30ch; }
    .hero-cta-row { flex-direction: column; width: 100%; }
    .hero-btn-primary, .hero-btn-ghost { width: 100%; justify-content: center; }
    .hero-stat { border-right: none; border-bottom: 1px solid rgba(167,139,250,.08); padding: .75rem 0; min-width: 45%; flex: unset; }
    .hero-stat:last-child { border-bottom: none; }
    .hero-stats { border-radius: 12px; }
  }
`

/* ─── Component ───────────────────────────────────────────────────────────── */
export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const px = (mouse.x - 0.5) * 30
  const py = (mouse.y - 0.5) * 18

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="hero-section">

        {/* Top accent line */}
        <div className="hero-top-line" />

        {/* Ambient blobs */}
        <div className="hero-blob hero-blob-1" style={{ transform: `translate(${px * 0.5}px,${py * 0.4}px)` }} />
        <div className="hero-blob hero-blob-2" style={{ transform: `translate(${-px * 0.4}px,${-py * 0.3}px)` }} />
        <div className="hero-blob hero-blob-3" style={{ transform: `translate(${px * 0.4}px,${py * 0.3}px)` }} />
        <div className="hero-blob hero-blob-4" style={{ transform: `translate(${-px * 0.3}px,${-py * 0.25}px)` }} />

        {/* Shimmer streaks */}
        <div className="hero-shimmer hs-1" />
        <div className="hero-shimmer hs-2" />
        <div className="hero-shimmer hs-3" />
        <div className="hero-shimmer hs-4" />

        {/* Floating Orbs — desktop only */}
        {orbs.map(o => (
          <div
            key={o.id}
            className="orb"
            style={{
              top: (o as any).top,
              left: (o as any).left,
              right: (o as any).right,
              bottom: (o as any).bottom,
              '--delay': o.delay,
              '--dur': o.dur,
              transform: `translate(${px * 0.35}px,${py * 0.25}px)`,
              transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
            } as React.CSSProperties}
          >
            <div className="orb-circle">
              {o.icon}
              <div className="orb-tooltip">
                <span className="orb-tooltip-label">{o.label}</span>
                <span className="orb-tooltip-sub">{o.sub}</span>
              </div>
            </div>
          </div>
        ))}

        {/* ── Center content ── */}
        <div className="hero-content">

          {/* Badge */}
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Career Elevation Platform</span>
            </div>
          </div> */}

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '.75rem', marginBottom: '2rem',
          }}>
            <div className="hero-divider" />
            <div className="hero-eyebrow-dot" />
            <span className="hero-eyebrow">Crafting Futures Since 2026</span>
            <div className="hero-eyebrow-dot" />
            <div className="hero-divider" />
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Your next role<br />
            starts with&nbsp;<em>how</em><br />
            you present yourself.
          </h1>

          {/* Sub */}
          <p className="hero-sub">
            We craft the documents, profiles, and narratives that make recruiters stop scrolling — and start calling.
          </p>

          {/* CTAs */}
          <div
            className="hero-cta-row"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.85rem', flexWrap: 'wrap' }}
          >
            <a href="#packages" className="hero-btn-primary">
              Elevate My Career
            </a>
            <a href="#services" className="hero-btn-ghost">
              View Services
            </a>
          </div>

          {/* Stats — glass strip */}
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll hint */}
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-label">Scroll</span>
        </div>

      </section>
    </>
  )
}