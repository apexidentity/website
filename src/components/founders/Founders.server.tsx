import React from 'react';
import { FOUNDERS } from '../../data/founders';
import FounderCell from './components/FounderCell';
import FoundersClient from './FoundersClient';
import styles from './founders.module.css';

export default function Founders() {
  return (
    <FoundersClient>
      <section id="founders" className={styles.fsRoot}>
        <div className={`${styles.fsBlob} ${styles.fsBlobA}`} />
        <div className={`${styles.fsBlob} ${styles.fsBlobB}`} />

        <div className={styles.fsWrap}>
          <header className={`${styles.fsHd} ${styles.fsA} reveal-fs`}>
            <div>
              <div className={styles.fsLabel}>
                <span className={styles.fsPip} />
                The Team
              </div>
              <h2 className={styles.fsH2}>
                The minds behind<br />
                <em>every success story.</em>
              </h2>
            </div>

            <div className={styles.fsHdMeta} aria-hidden="true">
              <div className={styles.fsHdCount}>
                {String(FOUNDERS.length).padStart(2, '0')}
              </div>
              <span className={styles.fsHdSub}>Co-founders</span>
            </div>
          </header>

          <div className={styles.fsGrid}>
            {FOUNDERS.map((f, i) => (
              <FounderCell 
                key={f.id} 
                f={f} 
                delay={i * 0.07 + 0.1} 
              />
            ))}
          </div>

          <footer 
            className={`${styles.fsFoot} ${styles.fsA} reveal-fs`} 
            style={{ transitionDelay: '.45s' }}
          >
            <div className={styles.fsFl} />
            <span className={styles.fsFt}>Apex Identity</span>
            <div className={styles.fsFr} />
          </footer>
        </div>
      </section>
    </FoundersClient>
  );
}