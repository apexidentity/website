'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '50+', label: 'Careers Elevated',  sub: 'And counting' },
  { value: '95%',  label: 'Success Rate',       sub: 'Proven outcomes' },
  { value: '4',    label: 'Expert Founders',    sub: 'One shared mission' },
  { value: '3×',   label: 'Interview Rate',     sub: 'Avg. boost per client' },
]

const pillars = ['No Templates', 'Bespoke Strategy', 'Real Results']

/* ─────────────────────────────────────────────
   CSS — same token system as Testimonials
───────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  /* ── Entrance animations (mirrors .pf / .pv) ── */
  .ab-fade {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
  }
  .ab-fade.ab-visible { opacity: 1; transform: none; }

  .ab-card-anim {
    opacity: 0;
    transform: translateY(32px) scale(0.97);
    transition: opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1);
  }
  .ab-card-anim.ab-visible { opacity: 1; transform: none; }
  .ab-card-anim:nth-child(2) { transition-delay: .1s; }
  .ab-card-anim:nth-child(3) { transition-delay: .2s; }
  .ab-card-anim:nth-child(4) { transition-delay: .3s; }

  /* ── Section shell ── */
  .ab-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    padding: clamp(5rem, 10vw, 9rem) 0;
    color: #fff;
    overflow: hidden;
    position: relative;
  }

  /* top shimmer line — same as tm-section border treatment */
  .ab-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(139,92,246,.0) 20%,
      rgba(139,92,246,.35) 50%,
      rgba(139,92,246,.0) 80%,
      transparent 100%
    );
  }

  /* ── Ambient blobs (same blur/opacity as Testimonials) ── */
  .ab-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .ab-blob-1 {
    width: min(560px, 80vw); height: min(480px, 80vw);
    top: -120px; left: -100px;
    background: rgba(109,40,217,.18);
  }
  .ab-blob-2 {
    width: min(420px, 70vw); height: min(420px, 70vw);
    bottom: 0; right: -80px;
    background: rgba(139,92,246,.12);
  }

  .ab-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 1;
  }

  /* ── Two-column grid ── */
  .ab-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(3rem, 6vw, 6rem);
    align-items: center;
  }
  @media (max-width: 767px) {
    .ab-grid          { grid-template-columns: 1fr; gap: 3rem; }
    .ab-stats-grid    { grid-template-columns: 1fr 1fr !important; }
    .ab-heading       { font-size: clamp(2.4rem,9vw,3rem) !important; }
    .ab-body          { max-width: 100% !important; }
  }

  /* ── Eyebrow ── */
  .ab-eyebrow {
    font-size: .63rem;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: rgba(167,139,250,.6);
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  .ab-eyebrow-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 8px rgba(124,58,237,.6);
    animation: abDotPulse 2.5s ease-in-out infinite;
  }
  @keyframes abDotPulse {
    0%,100% { opacity:.55; box-shadow: 0 0 5px rgba(124,58,237,.5); }
    50%      { opacity:1;   box-shadow: 0 0 12px rgba(124,58,237,.9); }
  }
  .ab-eyebrow-line {
    width: 2rem; height: 1px;
    background: linear-gradient(to right, transparent, rgba(167,139,250,.25));
  }

  /* ── Heading — Cormorant light, same as .tm-title ── */
  .ab-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    line-height: 1.08;
    letter-spacing: -.01em;
    color: rgba(255,255,255,.95);
    margin: 0 0 1.75rem;
  }
  /* italic accent — same gradient as .tm-title em */
  .ab-heading em {
    font-style: italic;
    font-weight: 600;
    background: linear-gradient(135deg,
      rgba(255,255,255,.97) 0%,
      rgba(196,170,255,.88) 45%,
      rgba(139,92,246,.85) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Body copy ── */
  .ab-body {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(255,255,255,.32);
    max-width: 40ch;
    margin: 0 0 1.5rem;
  }

  /* ── Pillar pills ── */
  .ab-pillars {
    display: flex;
    flex-wrap: wrap;
    gap: .6rem;
    margin: 1.75rem 0 2rem;
  }
  .ab-pill {
    font-size: .66rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(196,170,255,.82);
    opacity: .65;
    padding: .42rem 1rem;
    border: 1px solid rgba(167,139,250,.16);
    border-radius: 999px;
    backdrop-filter: blur(8px);
    background: rgba(167,139,250,.07);
    transition: border-color .3s, opacity .3s, box-shadow .3s;
    cursor: default;
  }
  .ab-pill:hover {
    border-color: rgba(167,139,250,.32);
    opacity: 1;
    box-shadow: 0 0 14px rgba(109,40,217,.16);
  }

  /* ── CTA link — ghost pill (same pattern as tm-card hover) ── */
  .ab-cta {
    font-size: .78rem;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(196,170,255,.88);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: .65rem;
    padding: .9rem 1.8rem;
    border: 1px solid rgba(167,139,250,.16);
    border-radius: 999px;
    backdrop-filter: blur(12px);
    background: rgba(167,139,250,.07);
    transition: border-color .3s, background .3s, transform .25s, box-shadow .3s;
  }
  .ab-cta:hover {
    border-color: rgba(167,139,250,.32);
    background: rgba(109,40,217,.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 24px rgba(109,40,217,.2);
  }

  /* ── Stats grid ── */
  .ab-stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* ── Stat card — identical glass recipe to .tm-card ── */
  .ab-stat-card {
    position: relative;
    overflow: hidden;
    background: rgba(255,255,255,.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,.08);
    border-top: 1px solid rgba(167,139,250,.25);
    border-radius: 16px;
    padding: 2rem 1.75rem;
    cursor: default;
    transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
  }
  /* shimmer top line — same as tm-card::after quotation mark approach */
  .ab-stat-card::after {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg,
      transparent,
      rgba(167,139,250,.28),
      transparent
    );
  }
  .ab-stat-card:hover {
    background: rgba(255,255,255,.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.55);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(109,40,217,.2);
  }

  /* corner violet dot — same as testimonials avatar treatment */
  .ab-stat-dot {
    position: absolute;
    top: 1rem; right: 1rem;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 8px rgba(124,58,237,.55);
    opacity: .5;
    transition: opacity .3s;
  }
  .ab-stat-card:hover .ab-stat-dot { opacity: 1; }

  /* stat value — Cormorant gradient, same as .tm-title */
  .ab-stat-val {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2.4rem, 4vw, 3rem);
    line-height: 1;
    background: linear-gradient(135deg,
      rgba(255,255,255,.92) 0%,
      rgba(196,170,255,.82) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -.02em;
    margin-bottom: .3rem;
  }
  .ab-stat-lbl {
    font-size: .8rem;
    font-weight: 500;
    color: rgba(255,255,255,.6);
    letter-spacing: .02em;
    margin-bottom: .2rem;
  }
  /* divider between label and sub — same as .tm-divider */
  .ab-stat-divider {
    width: 100%;
    height: 1px;
    background: rgba(167,139,250,.12);
    margin: .6rem 0;
  }
  .ab-stat-sub {
    font-size: .62rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(167,139,250,.3);
  }
`

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('ab-visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.ab-fade, .ab-card-anim').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section id="about" className="ab-section" ref={ref}>
        {/* Blobs — same positions/opacity as Testimonials */}
        <div className="ab-blob ab-blob-1" />
        <div className="ab-blob ab-blob-2" />

        <div className="ab-inner">
          <div className="ab-grid">

            {/* ── Left: Copy ── */}
            <div className="ab-fade">
              <div className="ab-eyebrow">
                <span className="ab-eyebrow-dot" />
                <span className="ab-eyebrow-line" />
                About Us
              </div>

              <h2 className="ab-heading">
                Four experts.<br />
                <em>One mission.</em>
              </h2>

              <p className="ab-body">
                We are four young professionals who believe every talented person deserves to be seen.
                Apex Identity was built on a single conviction — your career should reflect your true potential,
                not the limits of a generic template.
              </p>

              <div className="ab-pillars">
                {pillars.map(p => (
                  <span key={p} className="ab-pill">{p}</span>
                ))}
              </div>

              <p className="ab-body">
                We craft bespoke career identities — CVs, LinkedIn profiles, personal branding —
                that open real doors with measurable, lasting impact.
              </p>

              <a href="#founders" className="ab-cta">
                Meet The Founders
              </a>
            </div>

            {/* ── Right: Stat Cards ── */}
            <div className="ab-stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="ab-card-anim ab-stat-card">
                  <span className="ab-stat-dot" />
                  <div className="ab-stat-val">{s.value}</div>
                  <div className="ab-stat-lbl">{s.label}</div>
                  <div className="ab-stat-divider" />
                  <div className="ab-stat-sub">{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}