'use client'
import { useEffect, useRef } from 'react'

const sections = [
  {
    id: '01',
    title: 'Information We Collect',
    tag: 'Data',
    body: `When you use Apex Identity, we only collect the information you choose to provide.

This may include: your name, email, professional background, goals, preferences, writing style, communication tone, and any content, prompts, or inputs you submit داخل the platform.

We do not collect sensitive personal data, technical identifiers, or tracking data without your knowledge.`,
  },
  {
    id: '02',
    title: 'How We Use Your Information',
    tag: 'Usage',
    body: `Your data is used solely to build and operate your personalized Identity Model inside Apex Identity.

This includes: generating outputs aligned with your voice and positioning, adapting responses based on your inputs, and delivering the features and services you request.

We do not use your data for advertising, and we never sell, rent, or trade your data to any third party.`,
  },
  {
    id: '03',
    title: 'Identity Modeling & AI Processing',
    tag: 'AI',
    body: `Apex Identity uses your inputs to create an adaptive Identity Model that reflects your communication style, thinking patterns, and positioning.

This model evolves based on your interactions and is used exclusively to improve your own experience.

Your data is not shared, reused, or used to train systems for other users.`,
  },
  {
    id: '04',
    title: 'Data Storage & Security',
    tag: 'Security',
    body: `Your data is stored securely and protected using appropriate technical and organizational measures.

Access is strictly limited to systems required to operate your identity and, where necessary, authorized personnel involved in delivering the service.

We take reasonable steps to prevent unauthorized access, misuse, or disclosure.`,
  },
  {
    id: '05',
    title: 'Third-Party Services',
    tag: 'Partners',
    body: `We may use trusted third-party services (such as communication tools or infrastructure providers) to operate Apex Identity.

These providers process data only as necessary to support the service and do not have independent rights to use your information.`,
  },
  {
    id: '06',
    title: 'Data Retention',
    tag: 'Duration',
    body: `We retain your data only for as long as necessary to operate your Identity Model and provide our services.

You may request deletion of your data at any time. Upon a valid request, your data will be removed within 30 days unless retention is required by law.`,
  },
  {
    id: '07',
    title: 'Your Rights',
    tag: 'Rights',
    body: `You have the right to access your data, request corrections, request deletion, and withdraw your consent at any time.

All requests can be submitted through our official contact channels and will be handled within 30 days.`,
  },
  {
    id: '08',
    title: 'Portfolio & Case Studies',
    tag: 'Consent',
    body: `We may request your permission to showcase results generated through Apex Identity.

This will never happen without your explicit consent. Any shared data will be anonymized unless you choose otherwise.`,
  },
  {
    id: '09',
    title: 'Cookies',
    tag: 'Tracking',
    body: `We do not use tracking technologies, advertising cookies, or behavioral monitoring tools.

Any minimal functionality-related storage used within the platform does not track users across services.`,
  },
  {
    id: '10',
    title: 'Changes to This Policy',
    tag: 'Updates',
    body: `We may update this Privacy Policy to reflect changes in Apex Identity or legal requirements.

Continued use of the platform after updates indicates acceptance of the revised policy.`,
  },
]

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  /* ── Reveal ── */
  .pr2-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1);
  }
  .pr2-reveal.pr2-vis { opacity: 1; transform: none; }

  /* ── Wrapper ── */
  .pr2-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    color: #fff;
    min-height: 100vh;
    padding: 8rem clamp(1.25rem,5vw,3.5rem) 7rem;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  /* ── Ambient blobs ── */
  .pr2-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(90px);
  }
  .pr2-blob-1 {
    width: min(640px,90vw); height: min(560px,90vw);
    background: radial-gradient(ellipse, rgba(109,40,217,.22) 0%, transparent 70%);
    top: -12%; left: -8%;
  }
  .pr2-blob-2 {
    width: min(480px,75vw); height: min(480px,75vw);
    background: radial-gradient(ellipse, rgba(139,92,246,.14) 0%, transparent 70%);
    bottom: 4%; right: -6%;
  }
  .pr2-blob-3 {
    width: min(320px,60vw); height: min(320px,60vw);
    background: radial-gradient(ellipse, rgba(76,29,149,.16) 0%, transparent 70%);
    top: 40%; left: 55%;
  }

  .pr2-inner {
    max-width: 1160px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Header ── */
  .pr2-header {
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: end;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(167,139,250,.1);
  }

  .pr2-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    font-size: .6rem;
    letter-spacing: .32em;
    text-transform: uppercase;
    color: rgba(167,139,250,.5);
    margin-bottom: 1.5rem;
    padding: .35rem .85rem .35rem .6rem;
    border: 1px solid rgba(167,139,250,.12);
    border-radius: 999px;
    background: rgba(109,40,217,.08);
    backdrop-filter: blur(8px);
    width: fit-content;
  }
  .pr2-eyebrow-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: rgba(139,92,246,.9);
    box-shadow: 0 0 8px rgba(124,58,237,.8);
    animation: pr2-pulse 2.2s ease-in-out infinite;
  }
  @keyframes pr2-pulse {
    0%,100% { opacity: 1; box-shadow: 0 0 8px rgba(124,58,237,.8); }
    50% { opacity: .5; box-shadow: 0 0 4px rgba(124,58,237,.4); }
  }

  .pr2-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(3rem,6.5vw,5.5rem);
    line-height: 1.0;
    letter-spacing: -.03em;
    color: rgba(255,255,255,.95);
    margin: 0 0 1.75rem;
  }
  .pr2-title em {
    font-style: italic;
    background: linear-gradient(125deg,
      rgba(255,255,255,1) 0%,
      rgba(196,170,255,.95) 40%,
      rgba(139,92,246,.88) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pr2-meta {
    display: flex;
    flex-wrap: wrap;
    gap: .6rem;
  }
  .pr2-badge {
    font-size: .62rem;
    font-weight: 400;
    letter-spacing: .06em;
    color: rgba(196,170,255,.38);
    padding: .3rem .75rem;
    border: 1px solid rgba(139,92,246,.12);
    border-radius: 999px;
    background: rgba(255,255,255,.02);
  }

  /* header side panel */
  .pr2-header-panel {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .75rem;
  }
  .pr2-count-ring {
    width: 64px; height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(139,92,246,.2);
    background: rgba(109,40,217,.08);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1;
    gap: 1px;
  }
  .pr2-count-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: rgba(196,170,255,.7);
  }
  .pr2-count-label {
    font-size: .46rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(167,139,250,.3);
  }

  /* ── Grid ── */
  .pr2-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5px;
    background: linear-gradient(135deg,
      rgba(139,92,246,.08) 0%,
      rgba(109,40,217,.05) 100%
    );
    border: 1.5px solid rgba(167,139,250,.1);
    border-radius: 20px;
    overflow: hidden;
  }

  /* ── Card ── */
  .pr2-card {
    background: rgba(8,4,20,.6);
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
    padding: 2.25rem 2.25rem 2.5rem;
    position: relative;
    overflow: hidden;
    transition: background .3s;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* inner glow on hover */
  .pr2-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,.07) 0%, transparent 65%);
    opacity: 0;
    transition: opacity .4s;
    pointer-events: none;
  }
  /* shimmer line */
  .pr2-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,.3) 30%, rgba(196,170,255,.5) 50%, rgba(167,139,250,.3) 70%, transparent 100%);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
  }
  .pr2-card:hover {
    background: rgba(15,7,35,.7);
  }
  .pr2-card:hover::before { opacity: 1; }
  .pr2-card:hover::after { opacity: 1; }

  /* Card head row */
  .pr2-card-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.1rem;
    gap: 1rem;
  }
  .pr2-card-left { flex: 1; }
  .pr2-card-tag {
    font-size: .5rem;
    letter-spacing: .24em;
    text-transform: uppercase;
    color: rgba(139,92,246,.5);
    margin-bottom: .55rem;
    display: block;
  }
  .pr2-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.2;
    color: rgba(196,170,255,.55);
    margin: 0;
    transition: color .3s;
  }
  .pr2-card:hover .pr2-card-title {
    color: rgba(255,255,255,.9);
  }
  .pr2-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 300;
    font-style: italic;
    color: rgba(109,40,217,.15);
    line-height: 1;
    flex-shrink: 0;
    transition: color .3s;
  }
  .pr2-card:hover .pr2-card-num {
    color: rgba(139,92,246,.25);
  }

  /* Divider */
  .pr2-card-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(139,92,246,.12) 0%, transparent 80%);
    margin-bottom: 1.1rem;
    transition: background .3s;
  }
  .pr2-card:hover .pr2-card-divider {
    background: linear-gradient(90deg, rgba(139,92,246,.25) 0%, transparent 80%);
  }

  .pr2-card-body {
    font-size: .745rem;
    font-weight: 300;
    line-height: 2;
    color: rgba(255,255,255,.26);
    margin: 0;
    white-space: pre-line;
    transition: color .3s;
  }
  .pr2-card:hover .pr2-card-body {
    color: rgba(255,255,255,.38);
  }

  /* ── Footer strip ── */
  .pr2-footer {
    margin-top: 1.5px;
    border: 1.5px solid rgba(167,139,250,.1);
    border-top: none;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
  }

  .pr2-commitments {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    background: linear-gradient(135deg, rgba(139,92,246,.08), rgba(109,40,217,.05));
  }
  .pr2-commit-item {
    background: rgba(8,4,20,.6);
    backdrop-filter: blur(20px);
    padding: 1.1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  .pr2-commit-icon {
    width: 28px; height: 28px; border-radius: 50%;
    border: 1px solid rgba(139,92,246,.2);
    background: rgba(109,40,217,.1);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .pr2-commit-text {
    font-size: .68rem;
    font-weight: 300;
    color: rgba(196,170,255,.35);
    line-height: 1.4;
  }

  /* ── Commitment card ── */
  .pr2-pledge {
    margin-top: 2rem;
    padding: 2rem 2.25rem;
    background: rgba(8,4,20,.6);
    backdrop-filter: blur(20px);
    border: 1.5px solid rgba(167,139,250,.1);
    border-top: 1.5px solid rgba(167,139,250,.2);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.75rem;
    align-items: start;
    transition: border-color .3s, background .3s;
  }
  .pr2-pledge::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(167,139,250,.4), rgba(196,170,255,.6), rgba(167,139,250,.4), transparent);
  }
  .pr2-pledge:hover {
    border-color: rgba(167,139,250,.2);
    background: rgba(15,7,35,.7);
  }
  .pr2-pledge-icon {
    width: 44px; height: 44px; border-radius: 12px;
    border: 1px solid rgba(139,92,246,.2);
    background: rgba(109,40,217,.12);
    display: flex; align-items: center; justify-content: center;
  }
  .pr2-pledge-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    font-weight: 400;
    color: rgba(196,170,255,.6);
    margin: 0 0 .5rem;
  }
  .pr2-pledge-body {
    font-size: .72rem;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255,255,255,.27);
    margin: 0;
  }

  /* ── Bottom bar ── */
  .pr2-bottom {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(167,139,250,.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .pr2-back {
    font-size: .68rem;
    font-weight: 400;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(167,139,250,.25);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    transition: color .25s;
  }
  .pr2-back:hover { color: rgba(196,170,255,.6); }

  .pr2-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: .68rem;
    font-weight: 400;
    letter-spacing: .12em;
    text-transform: uppercase;
    padding: .7rem 1.75rem;
    border-radius: 999px;
    border: 1px solid rgba(167,139,250,.45);
    background: linear-gradient(135deg,
      rgba(109,40,217,.85) 0%,
      rgba(124,58,237,.9) 50%,
      rgba(139,92,246,.85) 100%
    );
    color: rgba(255,255,255,.92);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    box-shadow:
      0 4px 24px rgba(109,40,217,.28),
      0 1px 0 rgba(255,255,255,.06) inset;
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }
  .pr2-cta::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.1) 0%, transparent 55%);
    opacity: 0;
    transition: opacity .3s;
  }
  .pr2-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(109,40,217,.45), 0 0 0 1px rgba(167,139,250,.35) inset;
    border-color: rgba(167,139,250,.7);
  }
  .pr2-cta:hover::after { opacity: 1; }

  @media (max-width: 768px) {
    .pr2-grid { grid-template-columns: 1fr; }
    .pr2-header { grid-template-columns: 1fr; }
    .pr2-header-panel { align-items: flex-start; flex-direction: row; }
    .pr2-commitments { grid-template-columns: 1fr; }
    .pr2-pledge { grid-template-columns: 1fr; gap: 1rem; }
    .pr2-section { padding-top: 6rem; }
  }
`

const commitments = [
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
        <path d="M4.5 7l1.8 1.8L9.5 5" stroke="rgba(167,139,250,0.65)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'We never sell your data',
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="5" width="10" height="7" rx="1.5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
        <path d="M4.5 5V3.5a2.5 2.5 0 015 0V5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
      </svg>
    ),
    text: 'End-to-end encryption',
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M7 2L2.5 4.5v3C2.5 10 4.5 12 7 12.5 9.5 12 11.5 10 11.5 7.5v-3L7 2z" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
      </svg>
    ),
    text: 'Deletion within 30 days on request',
  },
]

export default function Privacy() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('pr2-vis'); io.unobserve(e.target) }
      }),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.pr2-reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="pr2-section" ref={ref}>
        {/* Blobs */}
        <div className="pr2-blob pr2-blob-1" />
        <div className="pr2-blob pr2-blob-2" />
        <div className="pr2-blob pr2-blob-3" />

        <div className="pr2-inner">

          {/* Header */}
          <div className="pr2-header pr2-reveal">
            <div>
              <div className="pr2-eyebrow">
                <span className="pr2-eyebrow-dot" />
                Legal Document
              </div>
              <h1 className="pr2-title">
                Privacy<br /><em>Policy</em>
              </h1>
              <div className="pr2-meta">
                <span className="pr2-badge">April 2026</span>
                <span className="pr2-badge">Apex Identity</span>
                <span className="pr2-badge">Cairo, Egypt</span>
              </div>
            </div>
            <div className="pr2-header-panel">
              <div className="pr2-count-ring">
                <span className="pr2-count-num">10</span>
                <span className="pr2-count-label">Sections</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="pr2-grid">
            {sections.map((s, i) => (
              <div
                key={s.id}
                className="pr2-card pr2-reveal"
                style={{ transitionDelay: `${.04 + i * .04}s` }}
              >
                <div className="pr2-card-head">
                  <div className="pr2-card-left">
                    <span className="pr2-card-tag">{s.tag}</span>
                    <h2 className="pr2-card-title">{s.title}</h2>
                  </div>
                  <span className="pr2-card-num">{s.id}</span>
                </div>
                <div className="pr2-card-divider" />
                <p className="pr2-card-body">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Commitments footer */}
          <div className="pr2-footer pr2-reveal" style={{ transitionDelay: '.46s' }}>
            <div className="pr2-commitments">
              {commitments.map((c, i) => (
                <div className="pr2-commit-item" key={i}>
                  <div className="pr2-commit-icon">{c.icon}</div>
                  <span className="pr2-commit-text">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pledge card */}
          <div className="pr2-pledge pr2-reveal" style={{ transitionDelay: '.52s' }}>
            <div className="pr2-pledge-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5.5v4C3 13 5.5 15.5 9 16.5 12.5 15.5 15 13 15 9.5v-4L9 2z" stroke="rgba(167,139,250,0.45)" strokeWidth="1.2"/>
                <path d="M6 9l2 2 4-4" stroke="rgba(167,139,250,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="pr2-pledge-title">Our privacy commitment</p>
              <p className="pr2-pledge-body">
                Your career data is personal. We treat it that way. Your information is used only to build your professional identity — never for advertising, analytics resale, or any purpose beyond the service you hired us for. If you ever have concerns about how your data is used, contact us directly and we will respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pr2-bottom pr2-reveal" style={{ transitionDelay: '.58s' }}>
            <a href="/" className="pr2-back">
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </a>
            <a href="https://wa.me/201067394942" target="_blank" rel="noopener noreferrer" className="pr2-cta">
              Questions? Contact us
            </a>
          </div>

        </div>
      </section>
    </>
  )
}