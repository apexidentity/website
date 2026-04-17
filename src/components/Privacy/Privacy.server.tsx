import React from 'react';
import PrivacyClient from './PrivacyClient';
import { SECTIONS } from '../../data/privacy';
import { CheckIcon, LockIcon, ShieldIcon, ShieldCheckIcon } from './components/Icons';
import styles from './privacy.module.css';

const COMMITMENTS = [
  { icon: <CheckIcon />, text: 'We never sell your data' },
  { icon: <LockIcon />, text: 'End-to-end encryption' },
  { icon: <ShieldIcon />, text: 'Deletion within 30 days on request' },
];

export default function Privacy() {
  return (
    <section className={styles.pr2Section}>
      <div className={`${styles.pr2Blob} ${styles.pr2Blob1}`} />
      <div className={`${styles.pr2Blob} ${styles.pr2Blob2}`} />
      <div className={`${styles.pr2Blob} ${styles.pr2Blob3}`} />

      <PrivacyClient>
        <div className={styles.pr2Inner}>
          {/* Header */}
          <header className={`${styles.pr2Header} ${styles.pr2Reveal}`}>
            <div>
              <div className={styles.pr2Eyebrow}>
                <span className={styles.pr2EyebrowDot} />
                Legal Document
              </div>
              <h1 className={styles.pr2Title}>
                Privacy<br /><em>Policy</em>
              </h1>
              <div className={styles.pr2Meta}>
                <span className={styles.pr2Badge}>April 2026</span>
                <span className={styles.pr2Badge}>Apex Identity</span>
                <span className={styles.pr2Badge}>Cairo, Egypt</span>
              </div>
            </div>
            <div className={styles.pr2HeaderPanel}>
              <div className={styles.pr2CountRing}>
                <span className={styles.pr2CountNum}>10</span>
                <span className={styles.pr2CountLabel}>Sections</span>
              </div>
            </div>
          </header>

          {/* Grid */}
          <div className={styles.pr2Grid}>
            {SECTIONS.map((s, i) => (
              <article
                key={s.id}
                className={`${styles.pr2Card} ${styles.pr2Reveal}`}
                style={{ transitionDelay: `${0.04 + i * 0.04}s` }}
              >
                <div className={styles.pr2CardHead}>
                  <div className={styles.pr2CardLeft}>
                    <span className={styles.pr2CardTag}>{s.tag}</span>
                    <h2 className={styles.pr2CardTitle}>{s.title}</h2>
                  </div>
                  <span className={styles.pr2CardNum}>{s.id}</span>
                </div>
                <div className={styles.pr2CardDivider} />
                <p className={styles.pr2CardBody}>{s.body}</p>
              </article>
            ))}
          </div>

          {/* Commitments */}
          <div className={`${styles.pr2Footer} ${styles.pr2Reveal}`} style={{ transitionDelay: '.46s' }}>
            <div className={styles.pr2Commitments}>
              {COMMITMENTS.map((c, i) => (
                <div className={styles.pr2CommitItem} key={i}>
                  <div className={styles.pr2CommitIcon}>{c.icon}</div>
                  <span className={styles.pr2CommitText}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pledge Card */}
          <div className={`${styles.pr2Pledge} ${styles.pr2Reveal}`} style={{ transitionDelay: '.52s' }}>
            <div className={styles.pr2PledgeIcon}><ShieldCheckIcon /></div>
            <div>
              <p className={styles.pr2PledgeTitle}>Our privacy commitment</p>
              <p className={styles.pr2PledgeBody}>
                Your career data is personal. We treat it that way. Your information is used only to build your professional identity — never for advertising, analytics resale, or any purpose beyond the service you hired us for.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <footer className={`${styles.pr2Bottom} ${styles.pr2Reveal}`} style={{ transitionDelay: '.58s' }}>
            <a href="/" className={styles.pr2Back}>
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </a>
            <a href="https://wa.me/201067394942" target="_blank" rel="noopener noreferrer" className={styles.pr2Cta}>
              Questions? Contact us
            </a>
          </footer>
        </div>
      </PrivacyClient>
    </section>
  );
}