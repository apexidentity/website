'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
)

const socials = [
  { icon: <FacebookIcon />,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61587712056151' },
  { icon: <LinkedInIcon />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/apexidentity' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/apexidentity.eg' },
  { icon: <TikTokIcon />,    label: 'TikTok',    href: 'https://www.tiktok.com/@apexidentity.eg' },
]

const navCols = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us',  href: '#about' },
      { label: 'Our Team',  href: '#founders' },
      { label: 'Our Work',  href: '#portfolio' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'CV & LinkedIn',     href: '#services' },
      { label: 'Career Strategy',   href: '#services' },
      { label: 'Personal Branding', href: '#services' },
      { label: 'Interview Prep',    href: '#services' },
    ],
  },
  {
    heading: 'Packages',
    links: [
      { label: 'CV & Profile',    href: '#packages' },
      { label: 'Career Strategy', href: '#packages' },
      { label: 'Job Search',      href: '#packages' },
      { label: 'Branding',        href: '#packages' },
    ],
  },
]

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  .ft2-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
  }
  .ft2-reveal.ft2-vis { opacity: 1; transform: none; }

  .ft2-root {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .ft2-blob-l {
    position: absolute;
    width: min(560px,80vw); height: min(480px,80vw);
    border-radius: 50%;
    background: rgba(109,40,217,.18);
    filter: blur(80px);
    pointer-events: none;
    top: -10%; left: -10%;
  }
  .ft2-blob-r {
    position: absolute;
    width: min(420px,70vw); height: min(420px,70vw);
    border-radius: 50%;
    background: rgba(139,92,246,.12);
    filter: blur(80px);
    pointer-events: none;
    bottom: 0; right: -8%;
  }

  /* ── Pre-footer CTA ── */
  .ft2-cta-wrap {
    border-top:    1px solid rgba(167,139,250,.12);
    border-bottom: 1px solid rgba(167,139,250,.12);
    position: relative; z-index: 1;
  }
  .ft2-cta {
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(4rem,8vw,7rem) 1.5rem;
    text-align: center;
  }
  .ft2-cta-eyebrow {
    font-size: .62rem;
    letter-spacing: .28em;
    text-transform: uppercase;
    color: rgba(167,139,250,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    margin-bottom: 2rem;
  }
  .ft2-cta-eyebrow-line {
    width: 2rem; height: .5px;
    background: linear-gradient(to right, transparent, rgba(167,139,250,.25));
  }
  .ft2-cta-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(3rem,7vw,6rem);
    line-height: 1.05;
    letter-spacing: -.02em;
    color: rgba(255,255,255,.95);
    margin: 0 0 2.5rem;
  }
  .ft2-cta-heading em {
    font-style: italic;
    background: linear-gradient(135deg,
      rgba(255,255,255,.97) 0%,
      rgba(196,170,255,.9)  45%,
      rgba(139,92,246,.85)  100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .ft2-cta-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .ft2-btn-primary {
    font-size: .72rem; font-weight: 500;
    letter-spacing: .1em; text-transform: uppercase;
    padding: .9rem 2.2rem; border-radius: 999px;
    border: 1px solid rgba(167,139,250,.6);
    background: linear-gradient(135deg,
      rgba(109,40,217,.9)  0%,
      rgba(139,92,246,.95) 50%,
      rgba(124,58,237,.9)  100%
    );
    color: rgba(255,255,255,.95);
    text-decoration: none;
    display: inline-flex; align-items: center; gap: 7px;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 24px rgba(109,40,217,.35), inset 0 1px 0 rgba(255,255,255,.12);
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }
  .ft2-btn-primary::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.08) 0%, transparent 60%);
    opacity: 0; transition: opacity .3s;
  }
  .ft2-btn-primary:hover {
    box-shadow: 0 6px 36px rgba(109,40,217,.55), 0 0 0 1px rgba(167,139,250,.4), inset 0 1px 0 rgba(255,255,255,.15);
    transform: translateY(-2px);
    border-color: rgba(167,139,250,.8);
  }
  .ft2-btn-primary:hover::before { opacity: 1; }
  .ft2-btn-ghost {
    font-size: .72rem; font-weight: 400;
    letter-spacing: .1em; text-transform: uppercase;
    padding: .9rem 1.8rem; border-radius: 999px;
    border: 1px solid rgba(167,139,250,.16);
    background: rgba(167,139,250,.07);
    color: rgba(167,139,250,.5);
    text-decoration: none;
    display: inline-flex; align-items: center; gap: 7px;
    backdrop-filter: blur(12px);
    transition: border-color .25s, color .25s, transform .2s, box-shadow .25s;
  }
  .ft2-btn-ghost:hover {
    border-color: rgba(167,139,250,.32);
    color: rgba(196,170,255,.85);
    transform: translateY(-2px);
    box-shadow: 0 4px 24px rgba(109,40,217,.2);
  }

  /* ── Main footer body ── */
  .ft2-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem 2.5rem;
    position: relative;
    z-index: 1;
  }

  /* Desktop grid: brand col + 3 nav cols */
  .ft2-grid {
    display: grid;
    grid-template-columns: 1.8fr repeat(3,1fr);
    gap: 3.5rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(167,139,250,.12);
  }

  .ft2-logo-img {
    height: 32px; width: auto;
    object-fit: contain; opacity: .65;
    display: block; margin-bottom: 1.4rem;
    transition: opacity .3s;
  }
  .ft2-logo-img:hover { opacity: 1; }

  .ft2-brand-desc {
    font-size: .76rem; font-weight: 300;
    line-height: 1.85;
    color: rgba(255,255,255,.28);
    max-width: 26ch; margin: 0 0 2rem;
  }

  .ft2-socials { display: flex; flex-direction: row; gap: .5rem; margin-top: 1.5rem; }
  .ft2-social-link {
    width: 32px; height: 32px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.3);
    text-decoration: none;
    transition: border-color .25s, background .25s, color .25s, transform .2s, box-shadow .25s;
  }
  .ft2-social-link:hover {
    border-color: rgba(167,139,250,.35);
    background: rgba(109,40,217,.12);
    color: rgba(196,170,255,.85);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(109,40,217,.22);
  }

  .ft2-col-heading {
    font-size: .58rem;
    letter-spacing: .26em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 1.4rem;
    display: block;
  }
  .ft2-nav-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .8rem; }
  .ft2-nav-link {
    font-size: .78rem; font-weight: 300;
    color: rgba(255,255,255,0.20);
    text-decoration: none;
    display: flex; align-items: center;
    transition: color .22s, transform .2.5s;
  }
  .ft2-nav-link::before {
    content: '';
    display: inline-block;
    width: 0; height: .5px;
    background: rgba(167,139,250,.5);
    margin-right: 0; flex-shrink: 0;
    transition: width .25s cubic-bezier(.16,1,.3,1), margin-right .25s cubic-bezier(.16,1,.3,1);
  }
  .ft2-nav-link:hover { color: rgba(196,170,255,.75); }
  .ft2-nav-link:hover::before { width: 10px; margin-right: 7px; }

  /* ── Bottom bar ── */
  .ft2-bottom {
    display: flex; align-items: center; justify-content: space-between;
    padding-top: 2rem; gap: 1rem; flex-wrap: wrap;
  }
  .ft2-bottom-left { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
  .ft2-copy {
    font-size: .7rem; font-weight: 300;
    color: rgba(255,255,255,0.20);
    letter-spacing: .03em; margin: 0;
  }
  .ft2-divider { width: 1px; height: 10px; background: rgba(167,139,250,.12); }
  .ft2-legal-link {
    font-size: .7rem; font-weight: 300;
    color: rgba(255,255,255,0.20);
    text-decoration: none; transition: color .2s;
  }
  .ft2-legal-link:hover { color: rgba(167,139,250,.45); }

  .ft2-bottom-right { display: flex; align-items: center; gap: .6rem; }
  .ft2-dot-sm {
    width: 3px; height: 3px; border-radius: 50%;
    background: rgba(139,92,246,.35);
    box-shadow: 0 0 6px rgba(124,58,237,.4);
    flex-shrink: 0;
  }
  .ft2-motto {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic; font-weight: 300; font-size: .8rem;
    color: rgba(255,255,255,0.20);
    letter-spacing: .04em;
  }

  /* ── Responsive ── */

  /* Tablet: brand full-width, 3 nav cols in 2nd row */
  @media (max-width:1023px) {
    .ft2-grid {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2.5rem;
    }
    .ft2-brand-col { grid-column: span 3; }
    .ft2-brand-desc { max-width: 40ch; }
  }

  /* Mobile: brand col + 2×2 nav grid */
  @media (max-width:639px) {
    .ft2-grid {
      grid-template-columns: 1fr 1fr;
      gap: 2rem 1.5rem;
    }
    /* Brand col spans both columns */
    .ft2-brand-col { grid-column: span 2; }

    /* Nav cols sit 2-per-row naturally */

    .ft2-cta-heading { font-size: clamp(2.4rem,10vw,3.5rem); }

    /* Bottom bar: stack left group + motto on same row, motto inline */
    .ft2-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: .75rem;
    }

    /* Motto row: dots + text inline */
    .ft2-bottom-right {
      width: 100%;
      justify-content: center; /* يخلي الدوت + النص في النص */
      margin-top: 10px;
      margin-bottom: -10px;
    }
  }
`

export default function Footer() {
  const ref  = useRef<HTMLElement>(null)
  const year = new Date().getFullYear()

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('ft2-vis'); io.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.ft2-reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <footer className="ft2-root" ref={ref}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="ft2-blob-l" />
      <div className="ft2-blob-r" />

      {/* Pre-footer CTA */}
      <div className="ft2-cta-wrap">
        <div className="ft2-cta ft2-reveal">
          <div className="ft2-cta-eyebrow">
            <span className="ft2-cta-eyebrow-line" />
            Ready to begin?
            <span className="ft2-cta-eyebrow-line" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <h2 className="ft2-cta-heading">
            Your peak career<br />
            starts <em>with one call.</em>
          </h2>
          <div className="ft2-cta-btns">
            <a href="https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals." target='_blank' className="ft2-btn-primary">
              Book free consultation
            </a>
            <a href="#packages" className="ft2-btn-ghost">
              View packages
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="ft2-body">
        <div className="ft2-grid">

          <div className="ft2-brand-col ft2-reveal" style={{ transitionDelay: '.05s' }}>
            <Link href="/">
              <img src="/logo.png" alt="Apex Identity" className="ft2-logo-img" />
            </Link>
            <p className="ft2-brand-desc">
              Premium career identity services for ambitious professionals across Egypt, the Gulf, and beyond.
            </p>
            <div className="ft2-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="ft2-social-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {navCols.map((col, i) => (
            <div key={col.heading} className="ft2-reveal" style={{ transitionDelay: `${.1 + i * .07}s` }}>
              <span className="ft2-col-heading">{col.heading}</span>
              <ul className="ft2-nav-list">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="ft2-nav-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="ft2-bottom ft2-reveal" style={{ transitionDelay: '.3s' }}>
          <div className="ft2-bottom-left">
            <p className="ft2-copy">© {year} Apex Identity. All rights reserved.</p>
            <div className="ft2-divider" />
            <Link href="/privacy" className="ft2-legal-link">Privacy</Link>
            <div className="ft2-divider" />
            <Link href="/terms" className="ft2-legal-link">Terms</Link>
          </div>
          {/* Motto inline — dots + text in one flex row, no wrapping */}
          <div className="ft2-bottom-right">
            <span className="ft2-dot-sm" />
            <span className="ft2-motto">Where Your Career Reaches Its Peak</span>
            <span className="ft2-dot-sm" />
          </div>
        </div>
      </div>
    </footer>
  )
}