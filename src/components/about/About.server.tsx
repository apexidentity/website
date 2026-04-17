import React from 'react';
import styles from './about.module.css';
import { aboutData } from '../../data/about';
import AboutClient from './AboutClient';
import StatCard from './components/StatCard';
import Pillar from './components/Pillar';

/**
 * High-performance Server Component wrapper.
 * Renders the layout and data without client-side JS overhead.
 */
export default function AboutServer() {
  const { stats, pillars } = aboutData;

  return (
    <section id="about" className={styles.section}>
      {/* Background blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <AboutClient>
        <div className={styles.inner}>
          <div className={styles.grid}>
            
            {/* Left: Content Area */}
            <div className={styles.fadeAnim}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span className={styles.eyebrowLine} />
                About Us
              </div>

              <h2 className={styles.heading}>
                Four experts.<br />
                <em>One mission.</em>
              </h2>

              <p className={styles.body}>
                We are four young professionals who believe every talented person deserves to be seen.
                Apex Identity was built on a single conviction — your career should reflect your true potential,
                not the limits of a generic template.
              </p>

              <div className={styles.pillars}>
                {pillars.map((p) => (
                  <Pillar key={p} text={p} />
                ))}
              </div>

              <p className={styles.body}>
                We craft bespoke career identities — CVs, LinkedIn profiles, personal branding —
                that open real doors with measurable, lasting impact.
              </p>

              <a href="#founders" className={styles.cta}>
                Meet The Founders
              </a>
            </div>

            {/* Right: Interaction/Stats Area */}
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <StatCard key={s.label} stat={s} index={i} />
              ))}
            </div>

          </div>
        </div>
      </AboutClient>
    </section>
  );
}