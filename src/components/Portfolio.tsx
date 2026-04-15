'use client'
import { useEffect, useRef } from 'react'

const portfolioItems = [
  {
    id: 1,
    service: 'Coming Soon',
    title: 'Your Project Could Be Here',
    description: 'This space is reserved for a future success story. Be the first to showcase your transformation with us.',
    tags: ['Your Brand', 'Your Growth', 'Your Story'],
    year: '2026',
    href: '/soon',
  },
  {
    id: 2,
    service: 'Coming Soon',
    title: 'Next Personal Brand Case Study',
    description: 'We’re preparing to feature our first client transformation. This could be your profile, your impact, your results.',
    tags: ['Branding', 'Positioning', 'Authority'],
    year: '2026',
    href: '/soon',
  },
  {
    id: 3,
    service: 'Coming Soon',
    title: 'Future Career Breakthrough',
    description: 'A powerful career shift story will be highlighted here. Start your journey and be the first featured success.',
    tags: ['Career Growth', 'Strategy', 'Opportunity'],
    year: '2026',
    href: '/soon',
  },
  {
    id: 4,
    service: 'Coming Soon',
    title: 'Upcoming Portfolio Highlight',
    description: 'This section is waiting for a standout project. Let it be yours — crafted, built, and showcased to the world.',
    tags: ['Creative', 'Execution', 'Impact'],
    year: '2026',
    href: '/soon',
  },
];

/* ─── CSS ──────────────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');

  /* ── Scroll-reveal — same cubic-bezier as Testimonials ── */
  .pf4 {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
  }
  .pf4.pv4 { opacity: 1; transform: none; }

  .pc4 {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1);
  }
  .pc4.pv4 { opacity: 1; transform: none; }

  @keyframes dotPulse4 {
    0%,100% { transform:scale(1);   opacity:.55; box-shadow:0 0 6px rgba(124,58,237,.55); }
    50%      { transform:scale(1.5); opacity:1;   box-shadow:0 0 14px rgba(124,58,237,.85); }
  }
  @keyframes accentPulse4 {
    0%,100% { opacity:.4; }
    50%      { opacity:1; }
  }
  @keyframes shimmer4 {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(300%); }
  }

  /* ── Section shell — pure black matching Testimonials ── */
  .port {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    padding: 5rem 1.5rem 6rem;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  /* ambient blobs — same blur(80px) system */
  .port-bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }
  .port-blob-1 {
    width: 500px; height: 500px;
    top: -100px; left: -100px;
    background: rgba(109,40,217,0.18);
  }
  .port-blob-2 {
    width: 400px; height: 400px;
    bottom: 0; right: -80px;
    background: rgba(139,92,246,0.12);
  }

  /* top accent pulse line */
  .port-top-line {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(139,92,246,0) 15%,
      rgba(139,92,246,.45) 50%,
      rgba(139,92,246,0) 85%,
      transparent 100%
    );
    animation: accentPulse4 4s ease-in-out infinite;
    z-index: 1;
  }

  .port-inner {
    max-width: 1150px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Header — identical pattern to Testimonials ── */
  .port-header { text-align: center; margin-bottom: 3.5rem; }

  .port-eyebrow {
    font-size: .63rem;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: rgba(167,139,250,0.6);
    margin-bottom: 1.1rem;
    display: block;
  }

  .port-h {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2.4rem, 5vw, 4rem);
    line-height: 1.08;
    color: rgba(255,255,255,.95);
    margin: 0 0 .6rem;
  }
  .port-h em {
    font-style: italic;
    color: rgba(167,139,250,0.9);
    -webkit-text-fill-color: rgba(167,139,250,0.9);
  }

  .port-sub {
    font-size: .78rem;
    color: rgba(255,255,255,.25);
    letter-spacing: .07em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }
  .port-sub-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 8px rgba(124,58,237,.55);
    flex-shrink: 0;
    animation: dotPulse4 2.5s ease-in-out infinite;
  }

  /* ── Grid — 2 col, gap 1.1rem matching Testimonials card gap ── */
  .port-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.1rem;
    margin-bottom: 1.1rem;
  }

  /* ── Card — pure glass matching Testimonials ── */
  .port-card {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.25);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
    cursor: default;
  }

  .port-card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.55);
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(109,40,217,.2);
  }

  /* shimmer on hover — same as Packages selected */
  .port-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(
      105deg,
      transparent 35%,
      rgba(167,139,250,0.04) 50%,
      transparent 65%
    );
    opacity: 0;
    transition: opacity .3s;
    pointer-events: none;
  }
  .port-card:hover::before {
    opacity: 1;
    animation: shimmer4 2s ease-in-out infinite;
  }

  /* ── Card head ── */
  .port-card-head {
    padding: 1.6rem 1.75rem 1.3rem;
    border-bottom: 1px solid rgba(167,139,250,0.08);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .port-service {
    font-size: .58rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(167,139,250,.35);
    transition: color .3s;
  }
  .port-card:hover .port-service { color: rgba(167,139,250,.6); }

  .port-year {
    font-size: .6rem;
    letter-spacing: .08em;
    font-weight: 300;
    color: rgba(167,139,250,.2);
    flex-shrink: 0;
    transition: color .3s;
  }
  .port-card:hover .port-year { color: rgba(167,139,250,.38); }

  /* ── Card body ── */
  .port-card-body {
    padding: 1.3rem 1.75rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  .port-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(1.2rem, 2vw, 1.65rem);
    line-height: 1.15;
    letter-spacing: -.01em;
    color: rgba(255,255,255,.35);
    margin: 0;
    transition: color .3s;
  }
  .port-card:hover .port-title { color: rgba(255,255,255,.88); }

  .port-desc {
    font-size: .77rem;
    font-weight: 300;
    line-height: 1.85;
    color: rgba(255,255,255,.22);
    margin: 0;
    transition: color .3s;
  }
  .port-card:hover .port-desc { color: rgba(255,255,255,.5); }

  /* ── Divider — same as Testimonials tm-divider ── */
  .port-divider {
    width: 100%;
    height: 1px;
    background: rgba(167,139,250,.1);
  }

  /* ── Card foot ── */
  .port-card-foot {
    padding: 1.2rem 1.75rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .port-tags { display: flex; flex-wrap: wrap; gap: .35rem; }

  .port-chip {
    font-size: .55rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    padding: .25rem .65rem;
    border-radius: 999px;
    border: 1px solid rgba(167,139,250,.12);
    background: rgba(167,139,250,.04);
    color: rgba(167,139,250,.32);
    transition: border-color .3s, color .3s, background .3s;
  }
  .port-card:hover .port-chip {
    border-color: rgba(167,139,250,.28);
    color: rgba(196,170,255,.72);
    background: rgba(109,40,217,.1);
  }

  .port-approved {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: .55rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(167,139,250,.35);
    margin-top: .5rem;
  }
  .port-approved-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 6px rgba(124,58,237,.55);
  }

  /* link icon — glass circle matching Testimonials avatar system */
  .port-link-icon {
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.22);
    display: flex; align-items: center; justify-content: center;
    color: rgba(167,139,250,.35);
    flex-shrink: 0;
    transition: background .25s, border-color .25s, color .25s, transform .25s, box-shadow .25s;
  }
  .port-card:hover .port-link-icon {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.55);
    color: rgba(196,170,255,.9);
    transform: translate(2px,-2px);
    box-shadow: 0 8px 24px rgba(109,40,217,.2);
  }

  /* ── Notice bar — glass strip matching add-ons in Packages ── */
  .port-notice {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.07);
    border-top: 1px solid rgba(167,139,250,0.15);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: .9rem 1.75rem;
    flex-wrap: wrap;
    margin-bottom: 2.8rem;
  }

  .port-notice-label {
    font-size: .58rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(167,139,250,.28);
    flex-shrink: 0;
  }

  .port-notice-item {
    display: flex;
    align-items: center;
    gap: .45rem;
    font-size: .72rem;
    font-weight: 300;
    color: rgba(167,139,250,.35);
  }

  .port-notice-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(139,92,246,.55);
    box-shadow: 0 0 6px rgba(124,58,237,.45);
  }

  /* ── CTA buttons — matching Packages ── */
  .port-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .port-btn-primary {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: .78rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: .95rem 2.4rem;
    border-radius: 999px;
    border: 1px solid rgba(167,139,250,.6);
    background: linear-gradient(135deg,
      rgba(109,40,217,.9)  0%,
      rgba(139,92,246,.95) 50%,
      rgba(124,58,237,.9)  100%
    );
    color: rgba(255,255,255,.95);
    cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    text-decoration: none;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 24px rgba(109,40,217,.35), inset 0 1px 0 rgba(255,255,255,.12);
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }
  .port-btn-primary:hover {
    box-shadow: 0 8px 40px rgba(109,40,217,.55), 0 0 0 1px rgba(167,139,250,.4), inset 0 1px 0 rgba(255,255,255,.15);
    transform: translateY(-2px);
    border-color: rgba(167,139,250,.8);
  }

  /* Ghost — glass matching cards */
  .port-btn-ghost {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: .78rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: .95rem 1.8rem;
    border-radius: 999px;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.22);
    color: rgba(196,170,255,.75);
    cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    text-decoration: none;
    transition: background .25s, border-color .25s, color .25s, transform .2s, box-shadow .25s;
  }
  .port-btn-ghost:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.55);
    color: rgba(196,170,255,.95);
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(109,40,217,.2);
  }

  @media (max-width: 640px) {
    .port-grid { grid-template-columns: 1fr; }
    .port-card-head,
    .port-card-body,
    .port-card-foot { padding-left: 1.25rem; padding-right: 1.25rem; }
    .port-notice { gap: 1rem; }
  }
`

/* ─── Component ───────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('pv4'); io.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.pf4, .pc4').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section id="portfolio" className="port" ref={ref}>

        {/* Ambient blobs */}
        <div className="port-bg-blob port-blob-1" />
        <div className="port-bg-blob port-blob-2" />

        {/* Top accent line */}
        <div className="port-top-line" />

        <div className="port-inner">

          {/* ── Header ── */}
          <div className="port-header pf4">
            <span className="port-eyebrow">Previous Work</span>
            <h2 className="port-h">
              Selected<br /><em>Work</em>
            </h2>
            <div className="port-sub">
              <span className="port-sub-dot" />
              Client data is private — only approved work shown
            </div>
          </div>

          {/* ── Cards grid ── */}
          <div className="port-grid">
            {portfolioItems.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="port-card pc4"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Head */}
                <div className="port-card-head">
                  <span className="port-service">{item.service}</span>
                  <span className="port-year">{item.year}</span>
                </div>

                {/* Body */}
                <div className="port-card-body">
                  <h3 className="port-title">{item.title}</h3>
                  <p className="port-desc">{item.description}</p>
                </div>

                {/* Divider — Testimonials pattern */}
                <div className="port-divider" />

                {/* Foot */}
                <div className="port-card-foot">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="port-tags">
                      {item.tags.map(t => (
                        <span key={t} className="port-chip">{t}</span>
                      ))}
                    </div>
                    <div className="port-approved">
                      <span className="port-approved-dot" />
                      Approved
                    </div>
                  </div>
                  <div className="port-link-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H5M10 2V7"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── Notice bar ── */}
          <div className="port-notice pf4" style={{ transitionDelay: '.15s' }}>
            <span className="port-notice-label">Note</span>
            <div className="port-notice-item">
              <span className="port-notice-dot" />
              All clients approved display of their work
            </div>
            <div className="port-notice-item">
              <span className="port-notice-dot" />
              Personal data is fully anonymized
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="port-cta pf4" style={{ transitionDelay: '.2s' }}>
            <a href="https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals." target='_blank' className="port-btn-primary">
              Start your elevation
            </a>
            <a href="#packages" className="port-btn-ghost">
              View packages
            </a>
          </div>

        </div>
      </section>
    </>
  )
}