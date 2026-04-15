'use client'
import { useState, useEffect, useRef } from 'react'

const contacts = [
  {
    label: 'Start My Profile Upgrade',
    sub: 'I want help choosing the best package for me',
    href: 'https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals.',
  },
  {
    label: 'Fix my CV / LinkedIn',
    sub: 'I already have one, just need it improved',
    href: 'https://wa.me/201067394942?text=Hi%2C%20I%20already%20have%20a%20CV%20or%20LinkedIn%20profile%2C%20but%20I%20want%20to%20improve%20it.%20Can%20you%20help%3F',
  },
  {
    label: 'Do you have bundle deals?',
    sub: 'If I take more than one service, multiple services?',
    href: 'https://wa.me/201067394942?text=Hi%2C%20if%20I%20take%20more%20than%20one%20service%2C%20do%20you%20have%20any%20offers%20or%20special%20price%3F',
  }
]

const css = `
  .fb-wrap {
    position: fixed;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    z-index: 40;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 2.5rem;
    pointer-events: none;
  }

  .fb-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: auto;
    position: relative;
  }

  .fb-side-right {
    align-items: flex-end;
  }

  .fb-btn {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 0.5px solid rgba(255,255,255,0.1);
    background: rgba(8,8,14,0.88);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: rgba(255,255,255,0.5);
    transition:
      opacity 0.45s cubic-bezier(0.16,1,0.3,1),
      transform 0.45s cubic-bezier(0.16,1,0.3,1),
      border-color 0.25s,
      background 0.25s,
      color 0.25s,
      box-shadow 0.25s;
    opacity: 0;
    pointer-events: none;
    transform: translateY(12px);
    flex-shrink: 0;
    position: relative;
    z-index: 2;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .fb-btn.fb-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .fb-btn:hover {
    border-color: rgba(255,255,255,0.22);
    background: rgba(14,14,22,0.97);
    color: rgba(255,255,255,0.88);
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  }

  .fb-wa-btn {
    border-color: rgba(37,211,102,0.3);
    color: rgba(37,211,102,0.9);
    box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(37,211,102,0.08);
  }

  .fb-wa-btn:hover {
    border-color: rgba(37,211,102,0.3);
    color: rgba(37,211,102,0.9);
    box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(37,211,102,0.08);
  }

  .fb-wa-btn.fb-active {
    border-color: rgba(37,211,102,0.35);
    color: rgba(37,211,102,0.85);
    background: rgba(10,18,12,0.95);
    transform: translateY(0) !important;
  }

  /* menu — opens above, anchored to right edge */
  .fb-menu {
    position: absolute;
    bottom: calc(100% + 0.7rem);
    right: 0;
    width: 265px;
    background: rgba(8,8,14,0.97);
    border: 0.5px solid rgba(255,255,255,0.09);
    border-radius: 14px;
    overflow: hidden;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4);
    transform-origin: bottom right;
    opacity: 0;
    transform: scale(0.94) translateY(8px);
    pointer-events: none;
    transition:
      opacity 0.3s cubic-bezier(0.16,1,0.3,1),
      transform 0.3s cubic-bezier(0.16,1,0.3,1);
  }

  .fb-menu.fb-menu-open {
    opacity: 1;
    transform: scale(1) translateY(0);
    pointer-events: auto;
  }

  .fb-menu-header {
    padding: 0.85rem 1.1rem 0.7rem;
    border-bottom: 0.5px solid rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .fb-menu-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(37,211,102,0.75);
    animation: fb-pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes fb-pulse {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.3; }
  }

  .fb-menu-header-txt {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.22);
  }

  .fb-menu-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.82rem 1.1rem;
    text-decoration: none;
    border-bottom: 0.5px solid rgba(255,255,255,0.04);
    transition: background 0.18s;
  }

  .fb-menu-item:last-child { border-bottom: none; }
  .fb-menu-item:hover { background: rgba(255,255,255,0.03); }

  .fb-item-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.76rem;
    font-weight: 400;
    color: rgba(255,255,255,0.62);
    line-height: 1;
    transition: color 0.18s;
  }
  .fb-menu-item:hover .fb-item-label { color: rgba(255,255,255,0.88); }

  .fb-item-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.62rem;
    font-weight: 300;
    color: rgba(255,255,255,0.17);
    line-height: 1;
  }

  @media (max-width: 639px) {
    .fb-wrap   { bottom: 1rem; padding: 0 1.25rem; }
    .fb-btn    { width: 48px; height: 48px; }
    .fb-menu   { width: 245px; }
  }
`

export default function FloatingButtons() {
  const [visible, setVisible]   = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const waRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (waRef.current && !waRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="fb-wrap">

        {/* LEFT — Scroll to top */}
        <div className="fb-side">
          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className={`fb-btn ${visible ? 'fb-visible' : ''}`}
          >
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
              <path d="M7 11V3M3 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* RIGHT — WhatsApp + menu */}
        <div className="fb-side fb-side-right" ref={waRef}>

          <div className={`fb-menu ${menuOpen ? 'fb-menu-open' : ''}`}>
            <div className="fb-menu-header">
              <span className="fb-menu-dot" />
              <span className="fb-menu-header-txt">How can we help?</span>
            </div>
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="fb-menu-item"
                onClick={() => setMenuOpen(false)}
              >
                <span className="fb-item-label">{c.label}</span>
                <span className="fb-item-sub">{c.sub}</span>
              </a>
            ))}
          </div>

          <button
            aria-label="Chat on WhatsApp"
            onClick={() => setMenuOpen(v => !v)}
            className={`fb-btn fb-wa-btn ${visible ? 'fb-visible' : ''} ${menuOpen ? 'fb-active' : ''}`}
          >
            {menuOpen ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.464 0 .104 5.36.101 11.946c-.001 2.107.549 4.162 1.594 5.977L0 24l6.234-1.637a11.93 11.93 0 005.713 1.453h.005c6.585 0 11.946-5.361 11.948-11.947.001-3.189-1.24-6.184-3.437-8.381zM12.05 21.785h-.004a9.916 9.916 0 01-5.053-1.38l-.362-.215-3.761.986 1.003-3.661-.236-.376a9.908 9.908 0 01-1.518-5.288C2.121 6.447 6.624 1.944 12.054 1.944c2.627.001 5.097 1.025 6.952 2.882a9.788 9.788 0 012.876 6.955c-.002 5.432-4.505 9.004-9.832 9.004zm5.39-7.352c-.296-.148-1.751-.864-2.023-.963-.271-.1-.468-.148-.665.149-.197.296-.764.963-.937 1.161-.173.198-.345.222-.641.074-1.76-.879-2.915-1.568-4.072-3.558-.308-.529.308-.491.879-1.637.098-.196.049-.369-.025-.518-.074-.148-.665-1.601-.911-2.192-.24-.576-.484-.496-.665-.505l-.566-.01c-.197 0-.518.074-.789.37-.271.296-1.035 1.013-1.035 2.466s1.059 2.861 1.207 3.058c.148.197 2.081 3.178 5.04 4.459.704.304 1.253.485 1.681.621.706.225 1.349.193 1.857.117.566-.084 1.751-.715 1.998-1.406.247-.691.247-1.284.173-1.407-.074-.122-.271-.197-.566-.345z"/>
              </svg>
            )}
          </button>
        </div>

      </div>
    </>
  )
}