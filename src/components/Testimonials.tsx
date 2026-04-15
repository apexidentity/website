'use client'
import { useEffect, useRef } from 'react'

const testimonials = [
  { id: 1, name: 'Nour El-Din Hassan', role: 'Software Engineer', company: 'Hired at Cairo Tech', initials: 'NH', reviewUrl: '/soon' },
  { id: 2, name: 'Sara Mahmoud', role: 'Marketing Manager', company: 'Promoted internally', initials: 'SM', reviewUrl: '/soon' },
  { id: 3, name: 'Kareem Farouk', role: 'Product Manager', company: 'Career Pivot Success', initials: 'KF', reviewUrl: '/soon' },
  { id: 4, name: 'Laila Atef', role: 'UX Designer', company: 'Remote at European firm', initials: 'LA', reviewUrl: '/soon' },
  { id: 5, name: 'Omar Saleh', role: 'Financial Analyst', company: 'First role after graduation', initials: 'OS', reviewUrl: '/soon' },
  { id: 6, name: 'Rania Gamal', role: 'HR Director', company: 'Leadership transition', initials: 'RG', reviewUrl: '/soon' },
  { id: 7, name: 'Ahmed Tarek', role: 'Data Scientist', company: 'Joined a London startup', initials: 'AT', reviewUrl: '/soon' },
  { id: 8, name: 'Dina Mostafa', role: 'Operations Lead', company: 'Regional promotion', initials: 'DM', reviewUrl: '/soon' },
  { id: 9, name: 'Youssef Adel', role: 'Civil Engineer', company: 'GCC opportunity secured', initials: 'YA', reviewUrl: '/soon' },
  { id: 10, name: 'Mona Khaled', role: 'Content Strategist', company: 'Freelance to full-time', initials: 'MK', reviewUrl: '/soon' },
  { id: 11, name: 'Bassem Nader', role: 'Sales Director', company: 'Executive level secured', initials: 'BN', reviewUrl: '/soon' },
  { id: 12, name: 'Hana Samir', role: 'Graphic Designer', company: 'Portfolio relaunched', initials: 'HS', reviewUrl: '/soon' },
]

const emptyMessages = [
  { line1: 'No one has reviewed this yet.', line2: 'Be the first — your words carry weight.' },
  { line1: "This story hasn't been told yet.", line2: 'Be the first to review and make it real.' },
  { line1: 'No review here yet.', line2: 'The first voice is always the loudest.' },
  { line1: 'Still waiting for the first review.', line2: 'Step up — be the one who starts it.' },
]

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 6L5.2 7.8L8.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Card({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const msg = emptyMessages[index % emptyMessages.length]

  return (
    <div className="tm-card">
      <div className="tm-empty">
        <p className="tm-empty-line1">{msg.line1}</p>
        <p className="tm-empty-line2">{msg.line2}</p>
      </div>
      <div className="tm-divider" />
      <div className="tm-person">
        <div className="tm-avatar">{t.initials}</div>
        <div className="tm-person-info">
          <p className="tm-name">{t.name}</p>
          <p className="tm-role">{t.role} · {t.company}</p>
        </div>
      </div>
      <a className="tm-verify-btn" href={t.reviewUrl} target="_blank" rel="noopener noreferrer">
        <CheckIcon />
        Verify this review
      </a>
    </div>
  )
}

const ROW1 = testimonials.slice(0, 4)
const ROW2 = testimonials.slice(4, 8)
const ROW3 = testimonials.slice(8, 12)

const css = [
  '.tm-section {',
  '  font-family: "DM Sans", sans-serif;',
  '  background: #000;',
  '  padding: 4rem 0 5rem;',
  '  color: #fff;',
  '  overflow: hidden;',
  '  position: relative;',
  '}',
  '.tm-bg-blob {',
  '  position: absolute;',
  '  border-radius: 50%;',
  '  filter: blur(80px);',
  '  pointer-events: none;',
  '  z-index: 0;',
  '}',
  '.tm-blob-1 { width:500px; height:500px; top:-100px; left:-100px; background:rgba(109,40,217,0.18); }',
  '.tm-blob-2 { width:400px; height:400px; bottom:0; right:0; background:rgba(139,92,246,0.12); }',
  '.tm-inner { max-width:1200px; margin:0 auto; padding:0 1.5rem; position:relative; z-index:1; }',
  '.pf { opacity:0; transform:translateY(18px); transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1); }',
  '.pf.pv { opacity:1; transform:none; }',
  '.tm-header { text-align:center; margin-bottom:3.5rem; }',
  '.tm-eyebrow { font-size:.63rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(167,139,250,0.6); margin-bottom:1.1rem; display:block; }',
  '.tm-title { font-family:"Cormorant Garamond",serif; font-weight:300; font-size:clamp(2.6rem,5vw,4rem); line-height:1.08; color:rgba(255,255,255,0.95); margin:0 0 .6rem; }',
  '.tm-title em { font-style:italic; color:rgba(167,139,250,0.9); -webkit-text-fill-color:rgba(167,139,250,0.9); }',
  '.tm-sub { font-size:.78rem; color:rgba(255,255,255,0.25); letter-spacing:.07em; }',
  '.tm-rows { display:flex; flex-direction:column; gap:1.1rem; position:relative; z-index:1; }',
  '.tm-track-wrap { width:100%; overflow:hidden; mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent); -webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent); }',
  '.tm-track { display:flex; gap:1.1rem; width:max-content; }',
  '.tm-track.left  { animation:scrollLeft  38s linear infinite; }',
  '.tm-track.right { animation:scrollRight 43s linear infinite; }',
  '.tm-track.left2 { animation:scrollLeft  49s linear infinite; }',
  '@keyframes scrollLeft  { from { transform:translateX(0); } to { transform:translateX(-50%); } }',
  '@keyframes scrollRight { from { transform:translateX(-50%); } to { transform:translateX(0); } }',
  '.tm-track-wrap:hover .tm-track { animation-play-state:paused; }',

  /* Card */
  '.tm-card {',
  '  background: rgba(255,255,255,0.04);',
  '  backdrop-filter: blur(16px);',
  '  -webkit-backdrop-filter: blur(16px);',
  '  border: 1px solid rgba(255,255,255,0.08);',
  '  border-top: 1px solid rgba(167,139,250,0.25);',
  '  border-radius: 16px;',
  '  padding: 1.5rem 1.6rem;',
  '  width: 310px;',
  '  flex-shrink: 0;',
  '  display: flex;',
  '  flex-direction: column;',
  '  gap: .85rem;',
  '  position: relative;',
  '  overflow: hidden;',
  '  transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;',
  '  cursor: default;',
  '}',
  '.tm-card:hover {',
  '  background: rgba(255,255,255,0.07);',
  '  border-color: rgba(167,139,250,0.35);',
  '  border-top-color: rgba(167,139,250,0.55);',
  '  box-shadow: 0 16px 48px rgba(109,40,217,0.2);',
  '}',

  /* Empty state */
  '.tm-empty { display:flex; flex-direction:column; gap:.4rem; flex:1; }',
  '.tm-empty-line1 {',
  '  font-size:.85rem;',
  '  font-weight:300;',
  '  font-family:"Cormorant Garamond",serif;',
  '  font-style:italic;',
  '  line-height:1.55;',
  '  color:rgba(255,255,255,0.5);',
  '  margin:0;',
  '}',
  '.tm-empty-line2 {',
  '  font-size:.68rem;',
  '  font-weight:300;',
  '  color:rgba(167,139,250,0.4);',
  '  letter-spacing:.04em;',
  '  margin:0;',
  '}',

  /* Divider */
  '.tm-divider { width:100%; height:1px; background:rgba(167,139,250,0.12); }',

  /* Person row */
  '.tm-person { display:flex; align-items:center; gap:.85rem; }',
  '.tm-avatar {',
  '  width:36px; height:36px; border-radius:50%;',
  '  border:1px solid rgba(167,139,250,0.3);',
  '  background:rgba(139,92,246,0.12);',
  '  display:flex; align-items:center; justify-content:center;',
  '  font-size:.6rem; font-weight:500; letter-spacing:.07em;',
  '  color:rgba(196,170,255,0.85); flex-shrink:0;',
  '}',
  '.tm-person-info { display:flex; flex-direction:column; gap:2px; }',
  '.tm-name { font-size:.79rem; font-weight:400; color:rgba(255,255,255,0.9); margin:0; }',
  '.tm-role { font-size:.66rem; font-weight:300; color:rgba(167,139,250,0.55); margin:0; }',

  /* Verify button */
  '.tm-verify-btn {',
  '  display: flex;',
  '  align-items: center;',
  '  justify-content: center;',
  '  gap: 6px;',
  '  width: 100%;',
  '  padding: 7px 0;',
  '  border-radius: 8px;',
  '  border: 1px solid rgba(167,139,250,0.2);',
  '  background: rgba(139,92,246,0.06);',
  '  color: rgba(167,139,250,0.6);',
  '  font-size: .64rem;',
  '  font-weight: 500;',
  '  letter-spacing: .1em;',
  '  text-transform: uppercase;',
  '  text-decoration: none;',
  '  transition: background .2s, border-color .2s, color .2s;',
  '  cursor: pointer;',
  '}',
  '.tm-verify-btn:hover {',
  '  background: rgba(139,92,246,0.14);',
  '  border-color: rgba(167,139,250,0.45);',
  '  color: rgba(196,170,255,0.95);',
  '}',
].join('\n')

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('pv'); io.unobserve(e.target) }
      }),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.pf').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section id="testimonials" className="tm-section" ref={ref}>
        <div className="tm-bg-blob tm-blob-1" />
        <div className="tm-bg-blob tm-blob-2" />

        <div className="tm-inner">
          <div className="tm-header pf">
            <span className="tm-eyebrow">Client Results</span>
            <h2 className="tm-title">Real People.<br /><em>Real Results.</em></h2>
            <p className="tm-sub">What our clients say after the transformation.</p>
          </div>
        </div>

        <div className="tm-rows">
          <div className="tm-track-wrap">
            <div className="tm-track left">
              {[...ROW1, ...ROW1].map((t, i) => <Card key={i} t={t} index={i} />)}
            </div>
          </div>

          <div className="tm-track-wrap">
            <div className="tm-track right">
              {[...ROW2, ...ROW2].map((t, i) => <Card key={i} t={t} index={i} />)}
            </div>
          </div>

          <div className="tm-track-wrap">
            <div className="tm-track left2">
              {[...ROW3, ...ROW3].map((t, i) => <Card key={i} t={t} index={i} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}