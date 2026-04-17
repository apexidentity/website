import React from 'react';
import PortfolioClient from './PortfolioClient';
import PortfolioCard from './components/PortfolioCard';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import styles from './portfolio.module.css';

export default function Portfolio() {
  return (
    <>
      {/* Optimized Font Loading via Next.js Head or Layout is preferred, 
          but keeping link here for self-containment as per request */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap"
      />
      
      <PortfolioClient>
        <div className={styles.port}>
          {/* Ambient Background */}
          <div className={`${styles.portBgBlob} ${styles.portBlob1}`} />
          <div className={`${styles.portBgBlob} ${styles.portBlob2}`} />
          <div className={styles.portTopLine} />

          <div className={styles.portInner}>
            {/* Header */}
            <header className={`${styles.portHeader} pf4`}>
              <span className={styles.portEyebrow}>Previous Work</span>
              <h2 className={styles.portH}>
                Selected<br /><em>Work</em>
              </h2>
              <div className={styles.portSub}>
                <span className={styles.portSubDot} />
                Client data is private — only approved work shown
              </div>
            </header>

            {/* Grid */}
            <div className={styles.portGrid}>
              {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioCard 
                  key={item.id} 
                  item={item} 
                  index={index} 
                />
              ))}
            </div>

            {/* Notice Bar */}
            <div className={`${styles.portNotice} pf4`} style={{ transitionDelay: '.15s' }}>
              <span className={styles.portNoticeLabel}>Note</span>
              <div className={styles.portNoticeItem}>
                <span className={styles.portNoticeDot} />
                All clients approved display of their work
              </div>
              <div className={styles.portNoticeItem}>
                <span className={styles.portNoticeDot} />
                Personal data is fully anonymized
              </div>
            </div>

            {/* CTA */}
            <footer className={`${styles.portCta} pf4`} style={{ transitionDelay: '.2s' }}>
              <a 
                href="https://wa.me/201067394942?text=Hi..." 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Start your elevation
              </a>
              <a href="#packages" className={styles.btnGhost}>
                View packages
              </a>
            </footer>
          </div>
        </div>
      </PortfolioClient>
    </>
  );
}