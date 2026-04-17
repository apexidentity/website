import React from 'react';
import styles from './terms.module.css';
import { termsData } from '../../data/terms';
import TermsClient from './TermsClient';
import TermCard from './components/TermCard';

export default function TermsServer() {
  return (
    <section className={styles.section}>
      {/* Background Decor */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <TermsClient>
        <div className={styles.inner}>
          {/* Header */}
          <header className={`${styles.header} ${styles.reveal}`}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Legal Document
              </div>
              <h1 className={styles.title}>
                Terms of<br /><em>Service</em>
              </h1>
              <div className={styles.meta}>
                <span className={styles.badge}>April 2026</span>
                <span className={styles.badge}>Apex Identity</span>
                <span className={styles.badge}>Cairo, Egypt</span>
              </div>
            </div>
            <div className={styles.headerPanel}>
              <div className={styles.countRing}>
                <span className={styles.countNum}>{termsData.length}</span>
                <span className={styles.countLabel}>Sections</span>
              </div>
            </div>
          </header>

          {/* Grid */}
          <div className={styles.grid}>
            {termsData.map((section, i) => (
              <TermCard key={section.id} section={section} index={i} />
            ))}
          </div>

          {/* Notice Bar */}
          <div 
            className={`${styles.notice} ${styles.reveal}`} 
            style={{ transitionDelay: '.46s' }}
          >
            <span className={styles.noticeLabel}>Note</span>
            <div className={styles.noticeItem}>
              <span className={styles.noticeDot} />
              These terms are subject to change
            </div>
            <div className={styles.noticeItem}>
              <span className={styles.noticeDot} />
              Last updated April 2026
            </div>
          </div>

          {/* Footer Navigation */}
          <footer className={`${styles.bottom} ${styles.reveal}`} style={{ transitionDelay: '.52s' }}>
            <a href="/" className={styles.back}>
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </a>
            <a 
              href="https://wa.me/201067394942" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.cta}
            >
              Questions? Contact us
            </a>
          </footer>
        </div>
      </TermsClient>
    </section>
  );
}