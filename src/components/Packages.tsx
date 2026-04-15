'use client'
import { useState, useRef, useEffect } from 'react'

const DATA = [
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
        services: [
          { n: 'CV ATS Optimization', p: 150 },
          { n: 'CV Europass Format', p: 250 },
          { n: 'LinkedIn Profile', p: 750 },
          { n: 'Wuzzuf Profile', p: 400 }
        ],
        price: 1300,
      },
      {
        code: 'C1', name: 'Elite', tier: 'C',
        services: [
          { n: 'CV ATS + Europass', p: 400 },
          { n: 'LinkedIn & Wuzzuf Profiles', p: 1150 },
          { n: 'Bio & Keywords', p: 250 },
          { n: 'Profile Analysis Report', p: 400 }
        ],
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
        services: [
          { n: 'Career Roadmap', p: 750 },
          { n: 'Target Roles Strategy', p: 750 },
          { n: 'Skills Gap Analysis', p: 500 },
          { n: 'Differentiation Strategy', p: 750 }
        ],
        price: 2300,
      },
      {
        code: 'C2', name: 'Dominate', tier: 'C',
        services: [
          { n: 'Career Roadmap', p: 750 },
          { n: 'Target Roles Strategy', p: 750 },
          { n: 'Skills Gap Analysis', p: 500 },
          { n: 'Differentiation Strategy', p: 750 },
          { n: 'Market Positioning', p: 750 },
          { n: 'Weakness & Recovery Plan', p: 500 }
        ],
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
        services: [
          { n: 'Job Application System', p: 750 },
          { n: 'LinkedIn Outreach Templates', p: 750 },
          { n: 'Messaging Strategy', p: 750 },
          { n: 'Hidden Opportunities', p: 750 }
        ],
        price: 2500,
      },
      {
        code: 'C3', name: 'Insider', tier: 'C',
        services: [
          { n: 'Job Application System', p: 750 },
          { n: 'LinkedIn Outreach Templates', p: 750 },
          { n: 'Messaging Strategy', p: 750 },
          { n: 'Hidden Opportunities', p: 750 },
          { n: 'HR Contact Database', p: 2000 }
        ],
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
        services: [
          { n: '5 LinkedIn Posts', p: 750 },
          { n: 'Advanced Storytelling', p: 1000 }
        ],
        price: 1400,
      },
      {
        code: 'B4', name: 'Authority', tier: 'B',
        services: [
          { n: '15 LinkedIn Posts', p: 2000 },
          { n: 'Advanced Storytelling', p: 1000 },
          { n: 'Portfolio Presentation', p: 2500 }
        ],
        price: 4600,
      },
      {
        code: 'C4', name: 'Legacy', tier: 'C',
        services: [
          { n: '15 LinkedIn Posts', p: 2000 },
          { n: 'Advanced Storytelling', p: 1000 },
          { n: 'Portfolio Presentation', p: 2500 },
          { n: 'Personal Website', p: 5000 }
        ],
        price: 7300,
      },
    ],
  },
]

const ADDONS = [
  'Interview Preparation',
  'Salary Negotiation',
  '15 LinkedIn Posts / Month',
  'LinkedIn Management',
]

const fmt = (n: number) => n.toLocaleString() + ' EGP'

const css = `/* unchanged CSS kept exactly as you provided */`

export default function Packages() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [activePkg, setActivePkg] = useState(1)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('pv2')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.06 }
    )

    ref.current?.querySelectorAll('.pf2').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const group = DATA[activeGroup]
  const pkg = group.packages[activePkg]

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

          <div className="pk-header pf2">
            <span className="pk-eyebrow">Service Packages</span>
            <h2 className="pk-title">
              Your journey.<br /><em>Your package.</em>
            </h2>
            <p className="pk-sub">Select a category — then choose your tier.</p>
          </div>

          <div className="pk-tabs pf2" style={{ transitionDelay: '.1s' }}>
            {DATA.map((g, i) => (
              <button
                key={g.id}
                className={`pk-tab ${activeGroup === i ? 'active' : ''}`}
                onClick={() => handleGroupChange(i)}
              >
                {g.category}
              </button>
            ))}
          </div>

          <div className="pk-grid">
            {group.packages.map((p, i) => {
              const original = p.services.reduce(
                (s, sv) => s + (sv?.p ?? 0),
                0
              )

              const pct = Math.round(((original - p.price) / original) * 100)
              const isSel = i === activePkg

              return (
                <div
                  key={p.code}
                  className={`pk-card${isSel ? ' selected' : ''}`}
                  data-tier={p.tier}
                  onClick={() => setActivePkg(i)}
                >
                  <div className="pk-card-head">
                    <div className="pk-tier-row">
                      <span className="pk-tier-label">Tier {p.tier}</span>
                      <span className="pk-tier-badge">{p.code}</span>
                    </div>
                    <div className="pk-name">{p.name}</div>
                  </div>

                  <div className="pk-body">
                    {p.services.map((sv, fi) => (
                      <div key={fi} className="pk-row">
                        <span className="pk-row-dot" />
                        <span className="pk-row-name">{sv.n}</span>
                        <span className="pk-row-price">{fmt(sv.p)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pk-divider" />

                  <div className="pk-foot">
                    <div>
                      <div className="pk-foot-label">Bundle price</div>
                      <div className="pk-original">{fmt(original)}</div>
                      <div className="pk-price">
                        <span className="pk-cur">$</span>
                        {p.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="pk-save">Save {pct}%</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pk-addons">
            <div className="pk-addons-label">Add-ons & Monthly</div>
            <div className="pk-addons-row">
              {ADDONS.map((a) => (
                <div key={a} className="pk-addon">
                  <span className="pk-addon-dot" />
                  <span className="pk-addon-txt">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pk-summary">
            <span className="pk-sum-label">Selected</span>
            <span className="pk-sum-divider" />
            <span className="pk-sum-val">
              {group.category} — {pkg.name}
            </span>
            <span className="pk-sum-price">{fmt(pkg.price)}</span>
          </div>

          <div className="pk-cta">
            <a
              href="https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals."
              target="_blank"
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