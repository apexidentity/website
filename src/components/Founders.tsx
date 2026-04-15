'use client'
import { useEffect, useRef, useState } from 'react'

/* ── Icons ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.464 0 .104 5.36.101 11.946c-.001 2.107.549 4.162 1.594 5.977L0 24l6.234-1.637a11.93 11.93 0 005.713 1.453h.005c6.585 0 11.946-5.361 11.948-11.947.001-3.189-1.24-6.184-3.437-8.381zM12.05 21.785h-.004a9.916 9.916 0 01-5.053-1.38l-.362-.215-3.761.986 1.003-3.661-.236-.376a9.908 9.908 0 01-1.518-5.288C2.121 6.447 6.624 1.944 12.054 1.944c2.627.001 5.097 1.025 6.952 2.882a9.788 9.788 0 012.876 6.955c-.002 5.432-4.505 9.004-9.832 9.004zm5.39-7.352c-.296-.148-1.751-.864-2.023-.963-.271-.1-.468-.148-.665.149-.197.296-.764.963-.937 1.161-.173.198-.345.222-.641.074-1.76-.879-2.915-1.568-4.072-3.558-.308-.529.308-.491.879-1.637.098-.196.049-.369-.025-.518-.074-.148-.665-1.601-.911-2.192-.24-.576-.484-.496-.665-.505l-.566-.01c-.197 0-.518.074-.789.37-.271.296-1.035 1.013-1.035 2.466s1.059 2.861 1.207 3.058c.148.197 2.081 3.178 5.04 4.459.704.304 1.253.485 1.681.621.706.225 1.349.193 1.857.117.566-.084 1.751-.715 1.998-1.406.247-.691.247-1.284.173-1.407-.074-.122-.271-.197-.566-.345z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13.5 8.5h-1A.5.5 0 0012 9v2h2.5L14 13.5h-2V20h-2.5v-6.5H8V11h1.5V9a3 3 0 013-3h1.5v2.5z" fill="currentColor" />
  </svg>
)

/* ── Data ── */
interface Founder {
  id: string
  name: string
  title: string
  initials: string
  img: string
  description: string
  whatsapp: string
  instagram: string
  facebook: string
}

const founders: Founder[] = [
  {
    id: '01', name: 'Sherif Osama', title: 'Head of Quality Control',
    initials: 'SO', img: './so.svg',
    description: 'Leads every deliverable with precision, ensuring every CV and strategy meets the highest standard before it reaches the client.',
    whatsapp: 'https://wa.me/201025602076', instagram: 'https://www.instagram.com/sherifosama75', facebook: 'https://www.facebook.com/shryf.asamt.602830',
  },
  {
    id: '02', name: 'Muhammed Abdelaty', title: 'Technical Head',
    initials: 'MA', img: './ma.svg',
    description: 'Architect of the digital tools and ATS optimization strategies that power our personal branding pipeline.',
    whatsapp: 'https://wa.me/201012857997', instagram: 'https://www.instagram.com/abdel2ty', facebook: 'https://www.facebook.com/abdel2ty',
  },
  {
    id: '03', name: 'Ahmed Khalil', title: 'Social Media & Finance',
    initials: 'AK', img: './ak.svg',
    description: 'Drives brand visibility and manages the business operations that keep Apex Identity running at peak performance.',
    whatsapp: 'https://wa.me/201090205892', instagram: 'https://www.instagram.com/ahmedkhalilp', facebook: 'https://www.facebook.com/ahmed.khalil.468963',
  },
  {
    id: '04', name: 'Zyad Shata', title: 'Sales & Client Relations',
    initials: 'ZZ', img: './zs.svg',
    description: 'The first voice clients hear. Zyad builds genuine relationships and makes sure every engagement exceeds expectations.',
    whatsapp: 'https://wa.me/201207708299', instagram: 'https://www.instagram.com/ziyad_shata_7', facebook: 'https://www.facebook.com/ziyad.shata',
  },
]

/* ── Styles ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');

  .fs-root {
    font-family: 'Outfit', sans-serif;
    background: #050505;
    color: #fff;
    padding: clamp(4.5rem, 9vw, 8rem) 0;
    position: relative;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,.04);
  }

  .fs-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(110px);
    opacity: .65;
  }
  .fs-blob-a {
    width: min(520px, 75vw); height: min(520px, 75vw);
    top: -100px; right: -100px;
    background: rgba(109,40,217,.18);
  }
  .fs-blob-b {
    width: min(360px, 60vw); height: min(360px, 60vw);
    bottom: 0; left: -70px;
    background: rgba(139,92,246,.13);
  }

  .fs-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 2vw, 3rem);
    position: relative;
    z-index: 1;
  }

  /* ── Header ── */
  .fs-hd {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
  }

  .fs-label {
    font-size: .58rem;
    letter-spacing: .35em;
    text-transform: uppercase;
    color: rgba(167,139,250,.45);
    display: flex;
    align-items: center;
    gap: .65rem;
    margin-bottom: 1.1rem;
  }
  .fs-pip {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(139,92,246,1);
    box-shadow: 0 0 8px rgba(139,92,246,.85);
    flex-shrink: 0;
    animation: pipPulse 2.5s ease-in-out infinite;
  }
  @keyframes pipPulse {
    0%,100% { opacity:.45; box-shadow:0 0 5px rgba(139,92,246,.5); }
    50%      { opacity:1;   box-shadow:0 0 12px rgba(139,92,246,.9); }
  }

  .fs-h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2.6rem, 5vw, 4.5rem);
    line-height: 1.0;
    letter-spacing: -.025em;
    color: rgba(255,255,255,.93);
    margin: 0;
  }
  .fs-h2 em {
    font-style: italic;
    background: linear-gradient(125deg,
      rgba(255,255,255,.95) 0%,
      rgba(196,170,255,.88) 45%,
      rgba(139,92,246,.82) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .fs-hd-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .35rem;
    flex-shrink: 0;
  }
  .fs-hd-count {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(4.5rem, 9vw, 7.5rem);
    font-weight: 300;
    font-style: italic;
    color: rgba(139,92,246,.06);
    line-height: 1;
    letter-spacing: -.03em;
    user-select: none;
  }
  .fs-hd-sub {
    font-size: .55rem;
    letter-spacing: .28em;
    text-transform: uppercase;
    color: rgba(255,255,255,.1);
  }

  /* ── 2×2 Grid — border-collapse trick: no double borders ── */
  .fs-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid rgba(255,255,255,.07);
    border-left: 1px solid rgba(255,255,255,.07);
  }

  /* ── Cell ── */
  .fs-cell {
    border-right: 1px solid rgba(255,255,255,.07);
    border-bottom: 1px solid rgba(255,255,255,.07);
    padding: clamp(1.5rem, 3.5vw, 2.5rem) clamp(1.25rem, 3vw, 2.25rem);
    display: flex;
    gap: clamp(.85rem, 2vw, 1.5rem);
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: background .4s cubic-bezier(.16,1,.3,1);
  }
  .fs-cell:hover { background: rgba(139,92,246,.04); }

  /* Ghost numeral — decorative depth */
  .fs-ghost {
    position: absolute;
    bottom: -.5rem;
    right: .75rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(4.5rem, 9vw, 7rem);
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,.022);
    line-height: 1;
    pointer-events: none;
    user-select: none;
    letter-spacing: -.04em;
    transition: color .45s;
  }
  .fs-cell:hover .fs-ghost { color: rgba(139,92,246,.06); }

  /* ── Photo ── */
  .fs-photo {
    width: clamp(72px, 13vw, 108px);
    flex-shrink: 0;
    aspect-ratio: 3 / 4;
    border-radius: 7px;
    overflow: hidden;
    background: rgba(139,92,246,.1);
    position: relative;
  }
  .fs-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 7px;
    border: 1px solid rgba(167,139,250,0);
    transition: border-color .4s;
    pointer-events: none;
    z-index: 2;
  }
  .fs-cell:hover .fs-photo::after { border-color: rgba(167,139,250,.25); }

  .fs-photo img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    filter: grayscale(30%) brightness(.72);
    transition: filter .55s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1);
  }
  .fs-cell:hover .fs-photo img {
    filter: grayscale(0%) brightness(.9);
    transform: scale(1.06);
  }

  .fs-initials {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    color: rgba(196,170,255,.6);
    letter-spacing: .06em;
  }

  /* ── Body ── */
  .fs-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  .fs-num {
    font-size: .56rem;
    letter-spacing: .25em;
    color: rgba(167,139,250,.2);
    font-weight: 400;
    margin-bottom: .45rem;
    transition: color .35s;
  }
  .fs-cell:hover .fs-num { color: rgba(167,139,250,.52); }

  .fs-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.15rem, 2.4vw, 1.7rem);
    font-weight: 400;
    letter-spacing: -.015em;
    line-height: 1.15;
    color: rgba(255,255,255,.87);
    margin: 0 0 .35rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color .35s;
  }
  .fs-cell:hover .fs-name { color: rgba(255,255,255,1); }

  .fs-role {
    font-size: .565rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(167,139,250,.3);
    font-weight: 400;
    transition: color .35s;
    margin-bottom: .9rem;
  }
  .fs-cell:hover .fs-role { color: rgba(167,139,250,.6); }

  .fs-desc {
    font-size: .7rem;
    font-weight: 300;
    line-height: 1.85;
    color: rgba(255,255,255,.2);
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color .35s;
    margin-bottom: 1rem;
  }
  .fs-cell:hover .fs-desc { color: rgba(255,255,255,.35); }

  /* ── Socials — hidden until hover; always shown on touch ── */
  .fs-socs {
    display: flex;
    gap: .45rem;
    margin-top: auto;
    opacity: 0;
    transform: translateY(7px);
    transition: opacity .32s cubic-bezier(.16,1,.3,1), transform .32s cubic-bezier(.16,1,.3,1);
  }
  .fs-cell:hover .fs-socs { opacity: 1; transform: translateY(0); }
  @media (hover: none) {
    .fs-socs { opacity: 1 !important; transform: none !important; }
  }

  .fs-soc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px; height: 28px;
    border-radius: 50%;
    border: 1px solid rgba(167,139,250,.12);
    color: rgba(167,139,250,.3);
    text-decoration: none;
    transition: border-color .22s, color .22s, background .22s, transform .22s;
    flex-shrink: 0;
  }
  .fs-soc:hover {
    border-color: rgba(167,139,250,.5);
    color: rgba(167,139,250,.9);
    background: rgba(109,40,217,.2);
    transform: translateY(-2px);
  }

  /* ── Footer ── */
  .fs-foot {
    margin-top: clamp(2rem, 4vw, 3.5rem);
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .fs-fl { flex: 1; height: 1px; background: linear-gradient(to right, rgba(167,139,250,.12), transparent); }
  .fs-fr { flex: 1; height: 1px; background: linear-gradient(to left,  rgba(167,139,250,.12), transparent); }
  .fs-ft {
    font-size: .56rem;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: rgba(255,255,255,.09);
    white-space: nowrap;
  }

  /* ── Responsive ── */
  @media (max-width: 800px) {
    .fs-hd-meta { display: none; }
    .fs-desc { -webkit-line-clamp: 2; }
    .fs-photo { aspect-ratio: 1 / 1; }
  }

  @media (max-width: 540px) {
    .fs-grid { grid-template-columns: minmax(0, 1fr); }
    .fs-desc { display: none; }
    .fs-photo { width: 64px; aspect-ratio: 1 / 1; }
    .fs-name { font-size: 1.25rem; }
    .fs-socs { opacity: 1; transform: none; }
  }

  /* ── Entrance animation ── */
  .fs-a {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1);
  }
  .fs-i { opacity: 1 !important; transform: none !important; }
`

/* ── Founder Cell ── */
function FounderCell({ f, delay }: { f: Founder; delay: number }) {
  const [imgErr, setImgErr] = useState(false)

  const socials = [
    { href: f.whatsapp,  label: 'WhatsApp',  Icon: WhatsAppIcon  },
    { href: f.instagram, label: 'Instagram', Icon: InstagramIcon },
    { href: f.facebook,  label: 'Facebook',  Icon: FacebookIcon  },
  ]

  return (
    <div className="fs-cell fs-a" style={{ transitionDelay: `${delay}s` }}>
      <span className="fs-ghost" aria-hidden="true">{f.id}</span>

      <div className="fs-photo">
        {!imgErr
          ? <img src={f.img} alt={f.name} onError={() => setImgErr(true)} />
          : <div className="fs-initials">{f.initials}</div>
        }
      </div>

      <div className="fs-body">
        <span className="fs-num">{f.id}</span>
        <p className="fs-name">{f.name}</p>
        <span className="fs-role">{f.title}</span>
        <p className="fs-desc">{f.description}</p>

        <div className="fs-socs">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} className="fs-soc"
              target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Section ── */
export default function Founders() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('fs-i')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.06 }
    )
    rootRef.current?.querySelectorAll('.fs-a').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section id="founders" className="fs-root" ref={rootRef}>
        <div className="fs-blob fs-blob-a" />
        <div className="fs-blob fs-blob-b" />

        <div className="fs-wrap">
          <div className="fs-hd fs-a">
            <div>
              <div className="fs-label">
                <span className="fs-pip" />
                The Team
              </div>
              <h2 className="fs-h2">
                The minds behind<br />
                <em>every success story.</em>
              </h2>
            </div>

            <div className="fs-hd-meta" aria-hidden="true">
              <div className="fs-hd-count">04</div>
              <span className="fs-hd-sub">Co-founders</span>
            </div>
          </div>

          <div className="fs-grid">
            {founders.map((f, i) => (
              <FounderCell key={f.id} f={f} delay={i * 0.07 + 0.1} />
            ))}
          </div>

          <div className="fs-foot fs-a" style={{ transitionDelay: '.45s' }}>
            <div className="fs-fl" />
            <span className="fs-ft">Apex Identity</span>
            <div className="fs-fr" />
          </div>
        </div>
      </section>
    </>
  )
}