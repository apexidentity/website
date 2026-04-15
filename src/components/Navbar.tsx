'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import type { MouseEvent } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Work',     href: '#portfolio' },
  { label: 'Team',     href: '#founders' },
]

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  .nb-root {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    font-family: 'DM Sans', sans-serif;
    transition: background .5s cubic-bezier(.16,1,.3,1),
                border-color .5s cubic-bezier(.16,1,.3,1),
                backdrop-filter .5s;
  }

  .nb-root.nb-scrolled {
    background: rgba(255,255,255,.04);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    border-bottom: 1px solid rgba(255,255,255,.06);
  }

  .nb-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    transition: height .4s cubic-bezier(.16,1,.3,1);
  }
  .nb-root.nb-scrolled .nb-inner { height: 58px; }

  .nb-logo {
    display: flex; align-items: center;
    text-decoration: none; flex-shrink: 0;
    cursor: pointer; background: none; border: none; padding: 0;
  }
  .nb-logo-img {
    height: 34px; width: auto;
    object-fit: contain; opacity: .9;
    transition: opacity .3s;
  }
  .nb-logo:hover .nb-logo-img { opacity: 1; }

  .nb-links { display: flex; align-items: center; gap: 2.25rem; }

  .nb-link {
    font-size: .72rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.60);
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    transition: color .22s;
  }

  .nb-link::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: .5px;
    background: linear-gradient(90deg, rgba(196,170,255,.9), rgba(167,139,250,.6));
    transition: width .28s cubic-bezier(.16,1,.3,1);
  }

  .nb-link:hover { color: rgba(196,170,255,.9); }
  .nb-link:hover::after { width: 100%; }

  .nb-cta {
    font-size: .7rem;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: .65rem 1.6rem;
    border-radius: 999px;
    border: 1px solid rgba(167,139,250,.6);
    background: linear-gradient(135deg,
      rgba(109,40,217,.9)  0%,
      rgba(139,92,246,.95) 50%,
      rgba(124,58,237,.9)  100%
    );
    color: rgba(255,255,255,.95);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(109,40,217,.3),
      inset 0 1px 0 rgba(255,255,255,.12);
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }

  .nb-burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 6px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nb-burger span {
    display: block;
    width: 22px;
    height: .5px;
    background: rgba(255,255,255,.55);
    border-radius: 1px;
    transition: transform .35s cubic-bezier(.16,1,.3,1), opacity .25s;
    transform-origin: center;
  }

  .nb-drawer {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height .45s cubic-bezier(.16,1,.3,1), opacity .35s;
  }

  .nb-drawer.nb-open {
    max-height: 800px;
    opacity: 1;
  }

  .nb-drawer-inner {
    margin: 2.3rem 1.5rem 3.5rem;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255,.07);
    backdrop-filter: blur(20px);
  }

  .nb-m-link {
    font-size: .78rem;
    letter-spacing: .07em;
    text-transform: uppercase;
    color: rgba(255,255,255,.45);
    text-decoration: none;
    padding: .9rem 0;
    border-bottom: 1px solid rgba(255,255,255,.08);
    display: block;
  }

  .nb-m-cta {
    margin-top: 1.25rem;
    display: block;
    text-align: center;
    font-size: .72rem;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: .8rem 1.5rem;
    border-radius: 999px;
    border: 1px solid rgba(167,139,250,.6);
    background: linear-gradient(135deg,
      rgba(109,40,217,.9)  0%,
      rgba(139,92,246,.95) 50%,
      rgba(124,58,237,.9)  100%
    );
    color: rgba(255,255,255,.95);
    text-decoration: none;
  }

  @media (max-width:767px) {
    .nb-links, .nb-cta { display: none; }
    .nb-burger { display: flex; }
  }
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // FIXED TYPE ONLY (no style changes)
  const handleLogoClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const top = open ? 'translateY(5.5px) rotate(45deg)' : 'none'
  const bottom = open ? 'translateY(-5.5px) rotate(-45deg)' : 'none'

  return (
    <nav className={['nb-root', scrolled ? 'nb-scrolled' : ''].join(' ')}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="nb-inner">
        <button className="nb-logo" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Apex Identity" className="nb-logo-img" />
        </button>

        <div className="nb-links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nb-link">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#packages" className="nb-cta">
          Get Started
        </a>

        <button
          className="nb-burger"
          onClick={() => setOpen(v => !v)}
        >
          <span style={{ transform: top }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: bottom }} />
        </button>
      </div>

      <div className={['nb-drawer', open ? 'nb-open' : ''].join(' ')}>
        <div className="nb-drawer-inner">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nb-m-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#packages"
            className="nb-m-cta"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}