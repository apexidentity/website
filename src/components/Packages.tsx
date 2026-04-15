'use client'
import { useState, useRef, useEffect } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Service {
  n: string
  p: number
}

interface Package {
  code: string
  name: string
  tier: string
  services: Service[]
  price: number
}

interface Group {
  id: number
  category: string
  packages: Package[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const DATA: Group[] = [
  {
    id: 1,
    category: 'CV & Profile',
    packages: [
      {
        code: 'A1', name: 'Essentials', tier: 'A',
        services: [{ n: 'CV ATS Optimization', p: 150 }, { n: 'LinkedIn Profile Setup', p: 750 }],
        price: 750,
      },
      {
        code: 'B1', name: 'Professional', tier: 'B',
        services: [{ n: 'CV ATS Optimization', p: 150 }, { n: 'CV Europass Format', p: 250 }, { n: 'LinkedIn Profile', p: 750 }, { n: 'Wuzzuf Profile', p: 400 }],
        price: 1300,
      },
      {
        code: 'C1', name: 'Elite', tier: 'C',
        services: [{ n: 'CV ATS + Europass', p: 400 }, { n: 'LinkedIn & Wuzzuf Profiles', p: 1150 }, { n: 'Bio & Keywords', p: 250 }, { n: 'Profile Analysis Report', p: 400 }],
        price: 1900,
      },
    ],
  },
  {
    id: 2,
    category: 'Career Strategy',
    packages: [
      {
        code: 'A2', name: 'Direction', tier: 'A',
        services: [{ n: 'Career Roadmap', p: 750 }, { n: 'Target Roles Strategy', p: 750 }],
        price: 1200,
      },
      {
        code: 'B2', name: 'Accelerate', tier: 'B',
        services: [{ n: 'Career Roadmap', p: 750 }, { n: 'Target Roles Strategy', p: 750 }, { n: 'Skills Gap Analysis', p: 500 }, { n: 'Differentiation Strategy', p: 750 }],
        price: 2300,
      },
      {
        code: 'C2', name: 'Dominate', tier: 'C',
        services: [{ n: 'Career Roadmap', p: 750 }, { n: 'Target Roles Strategy', p: 750 }, { n: 'Skills Gap Analysis', p: 500 }, { n: 'Differentiation Strategy', p: 750 }, { n: 'Market Positioning', p: 750 }, { n: 'Weakness & Recovery Plan', p: 500 }],
        price: 3500,
      },
    ],
  },
  {
    id: 3,
    category: 'Job Search',
    packages: [
      {
        code: 'A3', name: 'Outreach', tier: 'A',
        services: [{ n: 'Job Application System', p: 750 }, { n: 'LinkedIn Outreach Templates', p: 750 }],
        price: 1200,
      },
      {
        code: 'B3', name: 'Visibility', tier: 'B',
        services: [{ n: 'Job Application System', p: 750 }, { n: 'LinkedIn Outreach Templates', p: 750 }, { n: 'Messaging Strategy', p: 750 }, { n: 'Hidden Opportunities', p: 750 }],
        price: 2500,
      },
      {
        code: 'C3', name: 'Insider', tier: 'C',
        services: [{ n: 'Job Application System', p: 750 }, { n: 'LinkedIn Outreach Templates', p: 750 }, { n: 'Messaging Strategy', p: 750 }, { n: 'Hidden Opportunities', p: 750 }, { n: 'HR Contact Database', p: 2000 }],
        price: 4300,
      },
    ],
  },
  {
    id: 4,
    category: 'Personal Branding',
    packages: [
      {
        code: 'A4', name: 'Presence', tier: 'A',
        // FIX: removed the accidental double comma (,,) that created an undefined element
        services: [{ n: '5 LinkedIn Posts', p: 750 }, { n: 'Advanced Storytelling', p: 1000 }],
        price: 1400,
      },
      {
        code: 'B4', name: 'Authority', tier: 'B',
        services: [{ n: '15 LinkedIn Posts', p: 2000 }, { n: 'Advanced Storytelling', p: 1000 }, { n: 'Portfolio Presentation', p: 2500 }],
        price: 4600,
      },
      {
        code: 'C4', name: 'Legacy', tier: 'C',
        services: [{ n: '15 LinkedIn Posts', p: 2000 }, { n: 'Advanced Storytelling', p: 1000 }, { n: 'Portfolio Presentation', p: 2500 }, { n: 'Personal Website', p: 5000 }],
        price: 7300,
      },
    ],
  },
]

const ADDONS: string[] = [
  'Interview Preparation',
  'Salary Negotiation',
  '15 LinkedIn Posts / Month',
  'LinkedIn Management',
]

// FIX: consistent EGP formatting used everywhere (no stray $ symbol in JSX)
const fmt = (n: number) => n.toLocaleString() + ' EGP'

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .pf2 { opacity:0; transform:translateY(18px); transition:opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1); }
  .pf2.pv2 { opacity:1; transform:none; }

  @keyframes pkDotPulse {
    0%,100% { opacity:.55; box-shadow:0 0 5px rgba(124,58,237,.55); }
    50%      { opacity:1;   box-shadow:0 0 12px rgba(124,58,237,.85); }
  }
  @keyframes accentPulse {
    0%,100% { opacity:.4; }
    50%      { opacity:1; }
  }
  @keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .pk-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    padding: 5rem 2rem 6rem;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .pk-bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }
  .pk-blob-1 { width:520px; height:520px; top:-120px; right:-100px; background:rgba(109,40,217,0.18); }
  .pk-blob-2 { width:400px; height:400px; bottom:0;   left:-80px;  background:rgba(139,92,246,0.12); }

  .pk-top-line {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(139,92,246,0) 15%,
      rgba(139,92,246,.45) 50%,
      rgba(139,92,246,0) 85%,
      transparent 100%
    );
    animation: accentPulse 4s ease-in-out infinite;
    z-index: 1;
  }

  .pk-inner {
    max-width: 1150px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .pk-header { text-align: center; margin-bottom: 3.5rem; }

  .pk-eyebrow {
    font-size: .63rem;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: rgba(167,139,250,0.6);
    margin-bottom: 1.1rem;
    display: block;
  }
  .pk-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2.6rem, 5vw, 4rem);
    line-height: 1.08;
    color: rgba(255,255,255,0.95);
    margin: 0 0 .6rem;
  }
  .pk-title em {
    font-style: italic;
    color: rgba(167,139,250,0.9);
    -webkit-text-fill-color: rgba(167,139,250,0.9);
  }
  .pk-sub {
    font-size: .78rem;
    color: rgba(255,255,255,0.25);
    letter-spacing: .07em;
  }

  .pk-tabs {
    display: flex;
    justify-content: center;
    gap: 4px;
    max-width: 680px;
    margin: 0 auto 3.5rem;
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.07);
    border-top: 1px solid rgba(167,139,250,0.2);
    border-radius: 999px;
    padding: 5px;
  }

  .pk-tab {
    flex: 1;
    background: none;
    border: none;
    cursor: pointer;
    padding: .65rem 1rem;
    font-family: 'DM Sans', sans-serif;
    font-size: .68rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(167,139,250,.35);
    border-radius: 999px;
    transition: background .3s, color .3s, box-shadow .3s;
    white-space: nowrap;
  }
  .pk-tab.active {
    background: rgba(109,40,217,.18);
    color: rgba(196,170,255,.9);
    border: 1px solid rgba(167,139,250,.22);
    box-shadow: 0 0 18px rgba(109,40,217,.22);
  }

  .pk-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
    margin-bottom: 1.1rem;
  }

  .pk-card {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.18);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
  }

  .pk-card:not(.selected):hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(167,139,250,0.22);
    border-top-color: rgba(167,139,250,0.38);
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(109,40,217,0.15);
  }

  .pk-card.selected {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,0.28);
    border-top-color: rgba(167,139,250,0.65);
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(109,40,217,0.28);
  }

  .pk-card.selected::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(
      105deg,
      transparent 35%,
      rgba(167,139,250,0.04) 50%,
      transparent 65%
    );
    animation: shimmer 3s ease-in-out infinite;
    pointer-events: none;
  }

  .pk-card::after {
    content: attr(data-tier);
    position: absolute;
    bottom: .8rem; right: 1.2rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem;
    font-weight: 300;
    font-style: italic;
    line-height: 1;
    color: rgba(167,139,250,0.07);
    pointer-events: none;
    transition: color .3s;
  }
  .pk-card.selected::after {
    color: rgba(167,139,250,0.12);
  }

  .pk-card-head {
    padding: 1.8rem 1.8rem 1.4rem;
    border-bottom: 1px solid rgba(167,139,250,0.08);
  }

  .pk-tier-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .pk-tier-label {
    font-size: .58rem;
    letter-spacing: .25em;
    text-transform: uppercase;
    color: rgba(167,139,250,.28);
    transition: color .3s;
  }
  .pk-card.selected .pk-tier-label { color: rgba(167,139,250,.65); }

  .pk-tier-badge {
    width: 22px; height: 22px;
    border-radius: 50%;
    border: 1px solid rgba(167,139,250,.12);
    display: flex; align-items: center; justify-content: center;
    font-size: .54rem;
    color: rgba(167,139,250,.22);
    transition: all .3s;
  }
  .pk-card.selected .pk-tier-badge {
    background: rgba(109,40,217,.22);
    border-color: rgba(167,139,250,.35);
    color: rgba(196,170,255,.9);
    box-shadow: 0 0 10px rgba(109,40,217,.3);
  }

  .pk-name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 2.1rem;
    line-height: 1;
    color: rgba(255,255,255,.28);
    transition: color .3s;
  }
  .pk-card.selected .pk-name {
    color: rgba(255,255,255,.92);
  }

  .pk-body {
    padding: 1.4rem 1.8rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .7rem;
  }

  .pk-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .75rem;
  }

  .pk-row-dot {
    width: 3px; height: 3px;
    border-radius: 50%;
    background: rgba(167,139,250,.14);
    flex-shrink: 0;
    margin-bottom: 2px;
    transition: background .3s, box-shadow .3s;
  }
  .pk-card.selected .pk-row-dot {
    background: rgba(167,139,250,.5);
    box-shadow: 0 0 5px rgba(124,58,237,.45);
  }

  .pk-row-name {
    font-size: .77rem;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255,255,255,.22);
    flex: 1;
    transition: color .3s;
  }
  .pk-card.selected .pk-row-name { color: rgba(255,255,255,.72); }

  .pk-row-price {
    font-size: .7rem;
    color: rgba(167,139,250,.16);
    white-space: nowrap;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    transition: color .3s;
  }
  .pk-card.selected .pk-row-price { color: rgba(167,139,250,.38); }

  .pk-divider {
    width: 100%;
    height: 1px;
    background: rgba(167,139,250,.1);
    margin: 0;
  }

  .pk-foot {
    padding: 1.3rem 1.8rem 1.8rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
  }

  .pk-foot-label {
    font-size: .54rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(167,139,250,.2);
    margin-bottom: .35rem;
  }

  .pk-original {
    font-size: .76rem;
    color: rgba(255,255,255,.15);
    text-decoration: line-through;
    margin-bottom: .12rem;
    transition: color .3s;
  }
  .pk-card.selected .pk-original { color: rgba(255,255,255,.28); }

  .pk-price {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 2.6rem;
    line-height: 1;
    color: rgba(255,255,255,.22);
    transition: color .3s;
  }
  .pk-card.selected .pk-price { color: rgba(255,255,255,.92); }

  .pk-cur {
    font-size: .75rem;
    vertical-align: super;
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
  }

  .pk-save {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(167,139,250,.1);
    border-radius: 999px;
    padding: .28rem .7rem;
    font-size: .58rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(167,139,250,.25);
    white-space: nowrap;
    align-self: flex-end;
    transition: all .3s;
  }
  .pk-card.selected .pk-save {
    background: rgba(109,40,217,.2);
    border-color: rgba(167,139,250,.3);
    color: rgba(196,170,255,.88);
    box-shadow: 0 0 14px rgba(109,40,217,.2);
  }

  .pk-addons {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.07);
    border-top: 1px solid rgba(167,139,250,0.15);
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 1.1rem;
  }

  .pk-addons-label {
    font-size: .58rem;
    letter-spacing: .25em;
    text-transform: uppercase;
    color: rgba(167,139,250,.28);
    padding: 1rem 1.8rem .7rem;
    border-bottom: 1px solid rgba(167,139,250,.07);
  }

  .pk-addons-row {
    display: flex;
    padding: 1rem 1.8rem;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .pk-addon { display: flex; align-items: center; gap: .55rem; }
  .pk-addon-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(139,92,246,.5);
    box-shadow: 0 0 6px rgba(124,58,237,.45);
    animation: pkDotPulse 2.5s ease-in-out infinite;
  }
  .pk-addon-txt {
    font-size: .73rem;
    font-weight: 300;
    color: rgba(167,139,250,.4);
  }

  .pk-summary {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem 1.6rem;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-top: 1px solid rgba(167,139,250,0.28);
    border-radius: 999px;
    position: relative;
    overflow: hidden;
    margin-bottom: 2.8rem;
  }

  .pk-sum-label {
    font-size: .6rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(167,139,250,.55);
    flex-shrink: 0;
  }

  .pk-sum-divider {
    width: 1px; height: 1rem;
    background: rgba(167,139,250,.18);
    flex-shrink: 0;
  }

  .pk-sum-val {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 1.05rem;
    color: rgba(255,255,255,.6);
    flex: 1;
  }

  .pk-sum-price {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 1.15rem;
    color: rgba(196,170,255,.9);
    flex-shrink: 0;
  }

  .pk-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .pk-btn-primary {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: .78rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: .95rem 2.4rem;
    border-radius: 999px;
    border: 1px solid rgba(167,139,250,.55);
    background: linear-gradient(135deg,
      rgba(109,40,217,.9) 0%,
      rgba(139,92,246,.95) 50%,
      rgba(124,58,237,.9) 100%
    );
    color: rgba(255,255,255,.95);
    cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 24px rgba(109,40,217,.35), inset 0 1px 0 rgba(255,255,255,.12);
    transition: box-shadow .3s, transform .2s, border-color .3s;
    text-decoration: none;
  }
  .pk-btn-primary:hover {
    box-shadow: 0 8px 40px rgba(109,40,217,.55), 0 0 0 1px rgba(167,139,250,.4), inset 0 1px 0 rgba(255,255,255,.15);
    transform: translateY(-2px);
    border-color: rgba(167,139,250,.8);
  }

  .pk-btn-ghost {
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
    transition: background .25s, border-color .25s, color .25s, transform .2s, box-shadow .25s;
    text-decoration: none;
  }
  .pk-btn-ghost:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167,139,250,.35);
    border-top-color: rgba(167,139,250,.55);
    color: rgba(196,170,255,.95);
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(109,40,217,.2);
  }

  @media (max-width: 900px) {
    .pk-grid { grid-template-columns: 1fr; gap: .85rem; }
  }
  @media (max-width: 640px) {
    .pk-section { padding: 4rem 1.25rem 5rem; }
    .pk-tabs { max-width: 100%; }
    .pk-tab { font-size: .6rem; padding: .5rem .5rem; }
    .pk-card-head, .pk-body, .pk-foot { padding-left: 1.25rem; padding-right: 1.25rem; }
    .pk-addons-row { gap: 1.5rem; }
  }
`

/* ─── Component ───────────────────────────────────────────────────────────── */
export default function Packages() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [activePkg, setActivePkg]     = useState(1)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('pv2'); io.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.pf2').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const group = DATA[activeGroup]
  const pkg   = group.packages[activePkg]

  const handleGroupChange = (i: number) => {
    setActiveGroup(i)
    setActivePkg(1)
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section id="packages" className="pk-section" ref={ref}>

        <div className="pk-bg-blob pk-blob-1" />
        <div className="pk-bg-blob pk-blob-2" />
        <div className="pk-top-line" />

        <div className="pk-inner">

          {/* ── Header ── */}
          <div className="pk-header pf2">
            <span className="pk-eyebrow">Service Packages</span>
            <h2 className="pk-title">
              Your journey.<br /><em>Your package.</em>
            </h2>
            <p className="pk-sub">Select a category — then choose your tier.</p>
          </div>

          {/* ── Category tabs ── */}
          <div className="pk-tabs pf2" style={{ transitionDelay: '.1s' }}>
            {DATA.map((g, i) => (
              <button
                key={g.id}
                className={`pk-tab${activeGroup === i ? ' active' : ''}`}
                onClick={() => handleGroupChange(i)}
              >
                {g.category}
              </button>
            ))}
          </div>

          {/* ── Cards grid ── */}
          <div className="pk-grid">
            {group.packages.map((p, i) => {
              // FIX: filter out any undefined/null entries defensively before reduce
              const validServices = p.services.filter(Boolean)
              const original = validServices.reduce((s, sv) => s + sv.p, 0)
              const pct      = Math.round(((original - p.price) / original) * 100)
              const isSel    = i === activePkg
              return (
                <div
                  key={p.code}
                  className={`pk-card${isSel ? ' selected' : ''}`}
                  data-tier={p.tier}
                  onClick={() => setActivePkg(i)}
                >
                  {/* Head */}
                  <div className="pk-card-head">
                    <div className="pk-tier-row">
                      <span className="pk-tier-label">Tier {p.tier}</span>
                      <span className="pk-tier-badge">{p.code}</span>
                    </div>
                    <div className="pk-name">{p.name}</div>
                  </div>

                  {/* Services — FIX: filter(Boolean) guards against undefined items */}
                  <div className="pk-body">
                    {validServices.map((sv, fi) => (
                      <div key={fi} className="pk-row">
                        <span className="pk-row-dot" />
                        <span className="pk-row-name">{sv.n}</span>
                        <span className="pk-row-price">{fmt(sv.p)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pk-divider" />

                  {/* Footer — FIX: removed stray $ symbol, use EGP consistently */}
                  <div className="pk-foot">
                    <div>
                      <div className="pk-foot-label">Bundle price</div>
                      <div className="pk-original">{fmt(original)}</div>
                      <div className="pk-price">
                        <span className="pk-cur">EGP</span>
                        {' '}{p.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="pk-save">Save {pct}%</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Add-ons strip ── */}
          <div className="pk-addons">
            <div className="pk-addons-label">Add-ons &amp; Monthly</div>
            <div className="pk-addons-row">
              {ADDONS.map((a) => (
                <div key={a} className="pk-addon">
                  <span className="pk-addon-dot" />
                  <span className="pk-addon-txt">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Summary bar ── */}
          <div className="pk-summary">
            <span className="pk-sum-label">Selected</span>
            <span className="pk-sum-divider" />
            <span className="pk-sum-val">
              {group.category} — {pkg.name}
            </span>
            <span className="pk-sum-price">{fmt(pkg.price)}</span>
          </div>

          {/* ── CTA ── */}
          <div className="pk-cta">
            <a
              href="https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals."
              target="_blank"
              rel="noopener noreferrer"
              className="pk-btn-primary"
            >
              Start your elevation
            </a>
            <a href="#services" className="pk-btn-ghost">
              View all services
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
