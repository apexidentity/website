import React from 'react';
import { SERVICES, TEMPLATES } from '../../data/services';
import ServicesClient from './ServicesClient';
import styles from './services.module.css';

export default function ServicesSection() {
  return (
    <div className={styles.globalWrapper}>

      {/* ── GALLERY SECTION ── */}
      <section id="work" className={styles.glSection}>

        {/* Vignette masks */}
        <div className={`${styles.glVignette} ${styles.glVignetteLeft}`} aria-hidden="true" />
        <div className={`${styles.glVignette} ${styles.glVignetteRight}`} aria-hidden="true" />

        {/* Ambient glows */}
        <div className={`${styles.glGlow} ${styles.glGlow1}`} aria-hidden="true" />
        <div className={`${styles.glGlow} ${styles.glGlow2}`} aria-hidden="true" />

        {/* Top accent line */}
        <div className={styles.glTopLine} aria-hidden="true" />

        {/* Heading block */}
        <div className={styles.glInner}>
          <div className={styles.glEyebrow}>
            <span className={styles.glEyebrowDot} />
            Our Work
          </div>
          <h2 className={styles.svHeading}>
            Crafted to <em>perform.</em>
          </h2>
          <p className={styles.svSub}>
            A selection of documents from our portfolio.
          </p>
        </div>

        {/* Client: Carousel + Accordion */}
        <ServicesClient templates={TEMPLATES} services={SERVICES} />

      </section>
    </div>
  );
}