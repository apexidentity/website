'use client'
import { useEffect, useRef } from 'react'

const sections = [
  {
    id: '01',
    title: 'Acceptance of Terms',
    tag: 'Eligibility',
    body: `By accessing or using Apex Identity, you confirm that you are at least 18 years of age and agree to be bound by these Terms of Service.

These terms apply to all users interacting with the platform, including any features related to identity creation, content generation, or system usage. If you do not agree to these terms, you should not use Apex Identity.`,
  },
  {
    id: '02',
    title: 'Nature of the Service',
    tag: 'Scope',
    body: `Apex Identity provides a digital identity system that allows users to create, refine, and operate a personalized Identity Model.

The platform may generate content, insights, or suggestions based on user-provided inputs. These outputs are dynamically generated and may evolve over time based on user interaction.

Apex Identity does not provide static deliverables as a one-time service, but rather an ongoing system experience.`,
  },
  {
    id: '03',
    title: 'User Input & Responsibility',
    tag: 'Obligations',
    body: `You are responsible for the accuracy and completeness of any information you provide inside Apex Identity.

The system relies on your inputs to generate outputs. Inaccurate or misleading inputs may result in outputs that do not reflect your intended identity.

You agree not to use the platform for unlawful, misleading, or harmful purposes.`,
  },
  {
    id: '04',
    title: 'Payments & Access',
    tag: 'Billing',
    body: `Access to certain features of Apex Identity may require payment or subscription.

All payments are processed upfront unless otherwise specified. Pricing, features, and access levels may change over time; however, any active subscription will continue to be honored in accordance with the terms agreed upon at the time of purchase`,
  },
  {
    id: '05',
    title: 'Intellectual Property',
    tag: 'Ownership',
    body: `All outputs generated specifically for you through Apex Identity are yours to use for personal or professional purposes.

However, the underlying system, models, workflows, and platform design remain the intellectual property of Apex Identity and may not be copied, reproduced, or reverse-engineered.`,
  },
  {
    id: '06',
    title: 'System Behavior & AI Limitations',
    tag: 'AI',
    body: `Apex Identity generates outputs using adaptive systems based on your inputs.

While we aim for high accuracy and consistency, outputs may not always be perfect, complete, or suitable for every situation. You are responsible for reviewing and validating all outputs before use.

The system should be used as an assistive tool, not as a sole decision-maker.`,
  },
  {
    id: '07',
    title: 'Confidentiality',
    tag: 'Privacy',
    body: `We treat your data and inputs as confidential and handle them in accordance with our Privacy Policy.

We do not share your personal data or identity model with other users or third parties without your consent, except where required to operate the service.`,
  },
  {
    id: '08',
    title: 'Limitation of Liability',
    tag: 'Liability',
    body: `Apex Identity is a digital identity and content assistance system. We do not guarantee specific outcomes such as career success, audience growth, or business results.

To the maximum extent permitted by law, our liability for any claim related to the use of the platform is limited to the amount you have paid for access to the service.`,
  },
  {
    id: '09',
    title: 'Termination & Access Control',
    tag: 'Access',
    body: `We reserve the right to suspend or terminate access to Apex Identity if the platform is used in violation of these terms or in a way that may harm the system or other users.

Users may also stop using the service at any time. Requests for data deletion are handled according to our Privacy Policy.`,
  },
  {
    id: '10',
    title: 'Governing Law & Updates',
    tag: 'Jurisdiction',
    body: `These Terms of Service are governed by the laws of the Arab Republic of Egypt.

We may update these terms from time to time. Continued use of Apex Identity after updates indicates acceptance of the revised terms.`,
  },
]

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  .tr2-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1);
  }
  .tr2-reveal.tr2-vis { opacity: 1; transform: none; }

  .tr2-section {
    font-family: 'DM Sans', sans-serif;
    background: #000;
    color: #fff;
    min-height: 100vh;
    padding: 8rem clamp(1.25rem,5vw,3.5rem) 7rem;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .tr2-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(90px);
  }
  .tr2-blob-1 {
    width: min(640px,90vw); height: min(560px,90vw);
    background: radial-gradient(ellipse, rgba(109,40,217,.22) 0%, transparent 70%);
    top: -12%; left: -8%;
  }
  .tr2-blob-2 {
    width: min(480px,75vw); height: min(480px,75vw);
    background: radial-gradient(ellipse, rgba(139,92,246,.14) 0%, transparent 70%);
    bottom: 4%; right: -6%;
  }
  .tr2-blob-3 {
    width: min(320px,60vw); height: min(320px,60vw);
    background: radial-gradient(ellipse, rgba(76,29,149,.16) 0%, transparent 70%);
    top: 45%; left: 60%;
  }

  .tr2-inner {
    max-width: 1160px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* Header */
  .tr2-header {
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: end;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(167,139,250,.1);
  }
  .tr2-eyebrow {
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
  .tr2-eyebrow-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: rgba(139,92,246,.9);
    box-shadow: 0 0 8px rgba(124,58,237,.8);
    animation: tr2-pulse 2.2s ease-in-out infinite;
  }
  @keyframes tr2-pulse {
    0%,100% { opacity: 1; box-shadow: 0 0 8px rgba(124,58,237,.8); }
    50% { opacity: .5; box-shadow: 0 0 4px rgba(124,58,237,.4); }
  }
  .tr2-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(3rem,6.5vw,5.5rem);
    line-height: 1.0;
    letter-spacing: -.03em;
    color: rgba(255,255,255,.95);
    margin: 0 0 1.75rem;
  }
  .tr2-title em {
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
  .tr2-meta { display: flex; flex-wrap: wrap; gap: .6rem; }
  .tr2-badge {
    font-size: .62rem; font-weight: 400; letter-spacing: .06em;
    color: rgba(196,170,255,.38);
    padding: .3rem .75rem;
    border: 1px solid rgba(139,92,246,.12);
    border-radius: 999px;
    background: rgba(255,255,255,.02);
  }
  .tr2-header-panel {
    text-align: right;
    display: flex; flex-direction: column;
    align-items: flex-end; gap: .75rem;
  }
  .tr2-count-ring {
    width: 64px; height: 64px; border-radius: 50%;
    border: 1px solid rgba(139,92,246,.2);
    background: rgba(109,40,217,.08);
    backdrop-filter: blur(12px);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    line-height: 1; gap: 1px;
  }
  .tr2-count-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem; font-weight: 300;
    color: rgba(196,170,255,.7);
  }
  .tr2-count-label {
    font-size: .46rem; letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(167,139,250,.3);
  }

  /* Grid */
  .tr2-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5px;
    background: linear-gradient(135deg, rgba(139,92,246,.08), rgba(109,40,217,.05));
    border: 1.5px solid rgba(167,139,250,.1);
    border-radius: 20px;
    overflow: hidden;
  }

  /* Card */
  .tr2-card {
    background: rgba(8,4,20,.6);
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
    padding: 2.25rem 2.25rem 2.5rem;
    position: relative;
    overflow: hidden;
    transition: background .3s;
    display: flex; flex-direction: column; gap: 0;
  }
  .tr2-card::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,.07) 0%, transparent 65%);
    opacity: 0; transition: opacity .4s;
    pointer-events: none;
  }
  .tr2-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,.3) 30%, rgba(196,170,255,.5) 50%, rgba(167,139,250,.3) 70%, transparent 100%);
    opacity: 0; transition: opacity .35s;
    pointer-events: none;
  }
  .tr2-card:hover { background: rgba(15,7,35,.7); }
  .tr2-card:hover::before { opacity: 1; }
  .tr2-card:hover::after { opacity: 1; }

  .tr2-card-head {
    display: flex; align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.1rem; gap: 1rem;
  }
  .tr2-card-left { flex: 1; }
  .tr2-card-tag {
    font-size: .5rem; letter-spacing: .24em;
    text-transform: uppercase;
    color: rgba(139,92,246,.5);
    margin-bottom: .55rem; display: block;
  }
  .tr2-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400; font-size: 1.3rem; line-height: 1.2;
    color: rgba(196,170,255,.55);
    margin: 0; transition: color .3s;
  }
  .tr2-card:hover .tr2-card-title { color: rgba(255,255,255,.9); }
  .tr2-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem; font-weight: 300; font-style: italic;
    color: rgba(109,40,217,.15);
    line-height: 1; flex-shrink: 0; transition: color .3s;
  }
  .tr2-card:hover .tr2-card-num { color: rgba(139,92,246,.25); }

  .tr2-card-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(139,92,246,.12) 0%, transparent 80%);
    margin-bottom: 1.1rem; transition: background .3s;
  }
  .tr2-card:hover .tr2-card-divider {
    background: linear-gradient(90deg, rgba(139,92,246,.25) 0%, transparent 80%);
  }
  .tr2-card-body {
    font-size: .745rem; font-weight: 300; line-height: 2;
    color: rgba(255,255,255,.26); margin: 0; white-space: pre-line;
    transition: color .3s;
  }
  .tr2-card:hover .tr2-card-body { color: rgba(255,255,255,.38); }

  /* Notice bar */
  .tr2-notice {
    margin-top: 1.5px;
    border: 1.5px solid rgba(167,139,250,.1);
    border-top: none;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    display: flex; align-items: center;
    gap: 2rem; padding: 1rem 1.75rem;
    background: rgba(8,4,20,.6);
    backdrop-filter: blur(20px);
    flex-wrap: wrap;
  }
  .tr2-notice-label {
    font-size: .55rem; letter-spacing: .24em;
    text-transform: uppercase;
    color: rgba(167,139,250,.25); flex-shrink: 0;
  }
  .tr2-notice-item {
    display: flex; align-items: center; gap: .5rem;
    font-size: .69rem; color: rgba(167,139,250,.32);
  }
  .tr2-notice-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(139,92,246,.8);
    box-shadow: 0 0 6px rgba(124,58,237,.6);
  }

  /* Bottom */
  .tr2-bottom {
    margin-top: 3rem; padding-top: 2rem;
    border-top: 1px solid rgba(167,139,250,.08);
    display: flex; align-items: center;
    justify-content: space-between; gap: 1rem; flex-wrap: wrap;
  }
  .tr2-back {
    font-size: .68rem; font-weight: 400;
    letter-spacing: .1em; text-transform: uppercase;
    color: rgba(167,139,250,.25); text-decoration: none;
    display: inline-flex; align-items: center; gap: .5rem;
    transition: color .25s;
  }
  .tr2-back:hover { color: rgba(196,170,255,.6); }
  .tr2-cta {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: .68rem; font-weight: 400;
    letter-spacing: .12em; text-transform: uppercase;
    padding: .7rem 1.75rem; border-radius: 999px;
    border: 1px solid rgba(167,139,250,.45);
    background: linear-gradient(135deg,
      rgba(109,40,217,.85) 0%,
      rgba(124,58,237,.9) 50%,
      rgba(139,92,246,.85) 100%
    );
    color: rgba(255,255,255,.92); text-decoration: none;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 24px rgba(109,40,217,.28), 0 1px 0 rgba(255,255,255,.06) inset;
    transition: box-shadow .3s, transform .2s, border-color .3s;
  }
  .tr2-cta::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.1) 0%, transparent 55%);
    opacity: 0; transition: opacity .3s;
  }
  .tr2-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(109,40,217,.45), 0 0 0 1px rgba(167,139,250,.35) inset;
    border-color: rgba(167,139,250,.7);
  }
  .tr2-cta:hover::after { opacity: 1; }

  @media (max-width: 768px) {
    .tr2-grid { grid-template-columns: 1fr; }
    .tr2-header { grid-template-columns: 1fr; }
    .tr2-header-panel { align-items: flex-start; flex-direction: row; }
    .tr2-section { padding-top: 6rem; }
  }
`

export default function Terms() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('tr2-vis'); io.unobserve(e.target) }
      }),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.tr2-reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="tr2-section" ref={ref}>
        <div className="tr2-blob tr2-blob-1" />
        <div className="tr2-blob tr2-blob-2" />
        <div className="tr2-blob tr2-blob-3" />

        <div className="tr2-inner">

          {/* Header */}
          <div className="tr2-header tr2-reveal">
            <div>
              <div className="tr2-eyebrow">
                <span className="tr2-eyebrow-dot" />
                Legal Document
              </div>
              <h1 className="tr2-title">
                Terms of<br /><em>Service</em>
              </h1>
              <div className="tr2-meta">
                <span className="tr2-badge">April 2026</span>
                <span className="tr2-badge">Apex Identity</span>
                <span className="tr2-badge">Cairo, Egypt</span>
              </div>
            </div>
            <div className="tr2-header-panel">
              <div className="tr2-count-ring">
                <span className="tr2-count-num">10</span>
                <span className="tr2-count-label">Sections</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="tr2-grid">
            {sections.map((s, i) => (
              <div
                key={s.id}
                className="tr2-card tr2-reveal"
                style={{ transitionDelay: `${.04 + i * .04}s` }}
              >
                <div className="tr2-card-head">
                  <div className="tr2-card-left">
                    <span className="tr2-card-tag">{s.tag}</span>
                    <h2 className="tr2-card-title">{s.title}</h2>
                  </div>
                  <span className="tr2-card-num">{s.id}</span>
                </div>
                <div className="tr2-card-divider" />
                <p className="tr2-card-body">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="tr2-notice tr2-reveal" style={{ transitionDelay: '.46s' }}>
            <span className="tr2-notice-label">Note</span>
            <div className="tr2-notice-item">
              <span className="tr2-notice-dot" />
              These terms are subject to change
            </div>
            <div className="tr2-notice-item">
              <span className="tr2-notice-dot" />
              Last updated April 2026
            </div>
          </div>

          {/* Bottom */}
          <div className="tr2-bottom tr2-reveal" style={{ transitionDelay: '.52s' }}>
            <a href="/" className="tr2-back">
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </a>
            <a href="https://wa.me/201067394942" target="_blank" rel="noopener noreferrer" className="tr2-cta">
              Questions? Contact us
            </a>
          </div>

        </div>
      </section>
    </>
  )
}