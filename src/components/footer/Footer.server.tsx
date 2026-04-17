import React from 'react';
import Link from 'next/link';
import FooterClient from './FooterClient';
import { NAV_COLUMNS, SOCIAL_LINKS } from '../../data/footer';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterClient>
      <div className={styles.ft2BlobL} />
      <div className={styles.ft2BlobR} />

      {/* Pre-footer CTA */}
      <div className={styles.ft2CtaWrap}>
        <div className={`${styles.ft2Cta} ${styles.ft2Reveal}`}>
          <div className={styles.ft2CtaEyebrow}>
            <span className={styles.ft2CtaEyebrowLine} />
            Ready to begin?
            <span className={styles.ft2CtaEyebrowLine} style={{ transform: 'scaleX(-1)' }} />
          </div>
          <h2 className={styles.ft2CtaHeading}>
            Your peak career<br />
            starts <em>with one call.</em>
          </h2>
          <div className={styles.ft2CtaBtns}>
            <a 
              href="https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ft2BtnPrimary}
            >
              Book free consultation
            </a>
            <a href="#packages" className={styles.ft2BtnGhost}>
              View packages
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className={styles.ft2Body}>
        <div className={styles.ft2Grid}>
          
          <div className={`${styles.ft2BrandCol} ${styles.ft2Reveal}`} style={{ transitionDelay: '.05s' } as React.CSSProperties}>
            <Link href="/">
              <img src="/logo.webp" alt="Apex Identity" className={styles.ft2LogoImg} />
            </Link>
            <p className={styles.ft2BrandDesc}>
              Premium career identity services for ambitious professionals across Egypt, the Gulf, and beyond.
            </p>
            <div className={styles.ft2Socials}>
              {SOCIAL_LINKS.map(s => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.ft2SocialLink} 
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {NAV_COLUMNS.map((col, i) => (
            <div 
              key={col.heading} 
              className={styles.ft2Reveal} 
              style={{ transitionDelay: `${.1 + i * .07}s` } as React.CSSProperties}
            >
              <span className={styles.ft2ColHeading}>{col.heading}</span>
              <ul className={styles.ft2NavList}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className={styles.ft2NavLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className={`${styles.ft2Bottom} ${styles.ft2Reveal}`} style={{ transitionDelay: '.3s' } as React.CSSProperties}>
          <div className={styles.ft2BottomLeft}>
            <p className={styles.ft2Copy}>© {currentYear} Apex Identity. All rights reserved.</p>
            <div className={styles.ft2Divider} />
            <Link href="/privacy" className={styles.ft2LegalLink}>Privacy</Link>
            <div className={styles.ft2Divider} />
            <Link href="/terms" className={styles.ft2LegalLink}>Terms</Link>
          </div>
          
          <div className={styles.ft2BottomRight}>
            <span className={styles.ft2DotSm} />
            <span className={styles.ft2Motto}>Where Your Career Reaches Its Peak</span>
            <span className={styles.ft2DotSm} />
          </div>
        </div>
      </div>
    </FooterClient>
  );
}