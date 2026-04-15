'use client'
import { useEffect, useRef, useState } from 'react'

/* ─── Icon components (matches Footer exactly) ──────────────────────────── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
)

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
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
  @keyframes shimmerPulse {
    0%,100% { opacity:0; transform:translateY(-20px); }
    50%      { opacity:1; transform:translateY(20px); }
  }
  @keyframes dotPulse {
    0%,100% { transform:scale(1);   opacity:.55; box-shadow:0 0 6px rgba(124,58,237,.55); }
    50%      { transform:scale(1.5); opacity:1;   box-shadow:0 0 14px rgba(124,58,237,.85); }
  }
  @keyframes accentPulse {
    0%,100% { opacity:.4; }
    50%      { opacity:1; }
  }
  @keyframes tickerLine {
    0%,100% { opacity:.25; transform:scaleX(.4); }
    50%      { opacity:.7;  transform:scaleX(1); }
  }
  @keyframes orbFloat {
    0%   { transform:translateY(0px) rotate(-1deg); }
    100% { transform:translateY(-14px) rotate(1deg); }
  }
  @keyframes statusBlink {
    0%,100% { opacity:.5; }
    50%      { opacity:1; }
  }

  .cs-section {
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
    padding: 6rem 1.5rem 5rem;
  }

  .cs-section::before {
    content: '';
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    opacity: .025;
    pointer-events: none;
    z-index: 1;
  }

  .cs-top-line {
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

  .cs-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    will-change: transform;
  }
  .cs-blob-1 {
    width: min(580px,75vw); height: min(580px,75vw);
    background: rgba(109,40,217,0.16);
    top: 0%; left: 10%;
    animation: driftV 18s ease-in-out infinite alternate;
  }
  .cs-blob-2 {
    width: min(400px,55vw); height: min(400px,55vw);
    background: rgba(139,92,246,0.1);
    bottom: 0%; right: 8%;
    animation: driftV2 22s ease-in-out infinite alternate;
  }
  .cs-blob-3 {
    width: min(300px,50vw); height: min(300px,50vw);
    background: rgba(109,40,217,0.07);
    top: 50%; left: 50%; transform: translate(-50%,-50%);
  }

  .cs-shimmer {
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
    filter: blur(16px);
    opacity: 0;
    animation: shimmerPulse 8s ease-in-out infinite;
  }
  .cs-s1 { width:2px; height:280px; background:linear-gradient(to bottom,transparent,rgba(167,139,250,.2),transparent); top:15%; left:60%; animation-delay:0s; }
  .cs-s2 { width:1px; height:200px; background:linear-gradient(to bottom,transparent,rgba(167,139,250,.13),transparent); top:45%; left:20%; animation-delay:3.2s; }
  .cs-s3 { width:2px; height:240px; background:linear-gradient(to bottom,transparent,rgba(255,255,255,.07),transparent); top:25%; right:18%; animation-delay:5.8s; }

  .cs-content {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 680px;
  }

  .cs-eyebrow-row {
    display: flex; align-items: center; justify-content: center;
    gap: .75rem; margin-bottom: 2rem;
  }
  .cs-divider {
    width: 1px; height: 1.8rem;
    background: linear-gradient(to bottom,transparent,rgba(167,139,250,.2),transparent);
  }
  .cs-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 8px rgba(124,58,237,.55);
    animation: dotPulse 2.5s ease-in-out infinite;
  }
  .cs-eyebrow {
    font-size: .65rem; letter-spacing: .28em;
    text-transform: uppercase;
    color: rgba(167,139,250,.6);
  }

  .cs-icon-wrap {
    width: 88px; height: 88px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.3);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 2.5rem;
    position: relative;
    animation: orbFloat 7s ease-in-out infinite alternate;
    box-shadow: 0 16px 48px rgba(0,0,0,.55);
  }
  .cs-icon-wrap::before {
    content: '';
    position: absolute; inset: -8px;
    border-radius: 50%;
    border: 1px solid rgba(139,92,246,.12);
    animation: dotPulse 3.5s ease-in-out infinite;
  }
  .cs-icon-wrap::after {
    content: '';
    position: absolute; inset: -16px;
    border-radius: 50%;
    border: 1px solid rgba(139,92,246,.06);
    animation: dotPulse 3.5s ease-in-out infinite 1.2s;
  }

  .cs-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(3rem,6.5vw,5.8rem);
    line-height: 1.06;
    letter-spacing: -.01em;
    color: rgba(255,255,255,.95);
    margin-bottom: 1.6rem;
  }
  .cs-title em {
    font-style: italic;
    font-weight: 600;
    color: rgba(167,139,250,.9);
    -webkit-text-fill-color: rgba(167,139,250,.9);
  }

  .cs-sub {
    font-weight: 300;
    color: rgba(255,255,255,.28);
    line-height: 1.8;
    max-width: 36ch;
    margin: 0 auto 3rem;
    font-size: 1rem;
  }

  .cs-status {
    display: inline-flex; align-items: center; gap: .55rem;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.28);
    border-radius: 999px;
    padding: .45rem 1.1rem .45rem .65rem;
    margin-bottom: 3rem;
  }
  .cs-status-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(167,139,250,1);
    box-shadow: 0 0 8px rgba(124,58,237,.7);
    animation: statusBlink 2s ease-in-out infinite;
  }
  .cs-status-text {
    font-size: .67rem; letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(196,170,255,.7);
  }

  /* ── Social card — glass ── */
  .cs-social-card {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.07);
    border-top: 1px solid rgba(167,139,250,0.22);
    border-radius: 18px;
    padding: 2.25rem 2rem;
    position: relative;
    overflow: hidden;
  }
  .cs-social-card::before {
    content: '';
    position: absolute;
    top: 0; left: 20%; right: 20%; height: 1px;
    background: linear-gradient(90deg,transparent,rgba(167,139,250,.18),transparent);
    animation: tickerLine 5s ease-in-out infinite;
  }

  .cs-social-label {
    font-size: .68rem; letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(167,139,250,.4);
    display: block; margin-bottom: 1.5rem;
  }

  .cs-socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .6rem;
  }

  .cs-social-link {
    width: 40px; height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.30);
    text-decoration: none;
    transition: border-color .25s, background .25s, color .25s, transform .2s, box-shadow .25s;
  }
  .cs-social-link:hover {
    border-color: rgba(167,139,250,.35);
    background: rgba(109,40,217,.12);
    color: rgba(196,170,255,.85);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(109,40,217,.22);
  }

  .cs-social-names {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    margin-top: .65rem;
  }
  .cs-social-name-item {
    width: 40px;
    font-size: .55rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(167,139,250,.28);
    text-align: center;
    line-height: 1;
  }

  @media (max-width: 600px) {
    .cs-section { padding: 5rem 1.25rem 4rem; }
    .cs-title { font-size: clamp(2.6rem,10vw,4rem) !important; }
    .cs-social-card { padding: 1.75rem 1.25rem; }
  }
`

/* ─── Socials data ─────────────────────────────────────────────────────────── */
const socials = [
  { Icon: FacebookIcon,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61587712056151' },
  { Icon: LinkedInIcon,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/apexidentity' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/apexidentity.eg' },
  { Icon: TikTokIcon,    label: 'TikTok',    href: 'https://www.tiktok.com/@apexidentity.eg'   },
]

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function ComingSoon() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() =>
        setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
      )
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const px = (mouse.x - 0.5) * 28
  const py = (mouse.y - 0.5) * 16

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="cs-section">

        <div className="cs-top-line" />

        <div className="cs-blob cs-blob-1" style={{ transform: `translate(${px * 0.5}px,${py * 0.4}px)` }} />
        <div className="cs-blob cs-blob-2" style={{ transform: `translate(${-px * 0.4}px,${-py * 0.35}px)` }} />
        <div className="cs-blob cs-blob-3" />

        <div className="cs-shimmer cs-s1" />
        <div className="cs-shimmer cs-s2" />
        <div className="cs-shimmer cs-s3" />

        <div className="cs-content">

          <div className="cs-eyebrow-row">
            <div className="cs-divider" />
            <div className="cs-dot" />
            <span className="cs-eyebrow">Something is coming</span>
            <div className="cs-dot" />
            <div className="cs-divider" />
          </div>

          <div className="cs-icon-wrap">
            <svg viewBox="0 0 32 32" fill="none" width="34" height="34">
              <path
                d="M16 3C10.48 3 6 7.48 6 13v2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1h-2v-2c0-5.52-4.48-10-10-10Zm0 2c4.41 0 8 3.59 8 8v2H8v-2c0-4.41 3.59-8 8-8Zm0 12a3 3 0 0 1 1 5.83V25a1 1 0 0 1-2 0v-2.17A3.001 3.001 0 0 1 16 17Z"
                fill="rgba(167,139,250,.65)"
              />
            </svg>
          </div>

          <h1 className="cs-title">
            No work to show<br />
            <em>just yet.</em>
          </h1>

          <p className="cs-sub">
            We're putting the finishing touches on something worth your time.
            Great careers are built quietly before they're celebrated loudly.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="cs-status">
              <span className="cs-status-dot" />
              <span className="cs-status-text">Work in progress — Stay tuned</span>
            </div>
          </div>

          {/* Social card */}
          <div className="cs-social-card">
            <span className="cs-social-label">Follow us for updates</span>

            {/* Icon buttons row */}
            <div className="cs-socials">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-social-link"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Platform name labels beneath each icon */}
            {/* <div className="cs-social-names">
              {socials.map(({ label }) => (
                <span key={label} className="cs-social-name-item">{label}</span>
              ))}
            </div> */}
          </div>

        </div>
      </section>
    </>
  )
}