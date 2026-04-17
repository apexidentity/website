import React from 'react';
import { SERVICES, TEMPLATES } from '../../data/services';
import ServicesClient from './ServicesClient';
import styles from './services.module.css';

export default function ServicesSection() {
  return (
    <div className={styles.globalWrapper}>
      {/* Gallery Section */}
      <section id="work" className={styles.glSection}>
        <div className={`${styles.glVignette} ${styles.glVignetteLeft}`} aria-hidden="true" />
        <div className={`${styles.glVignette} ${styles.glVignetteRight}`} aria-hidden="true" />
        
        <div className={`${styles.glBgBlob} ${styles.glBlob1}`} />
        <div className={`${styles.glBgBlob} ${styles.glBlob2}`} />
        <div className={styles.glTopLine} />

        <div className={styles.glInner}>
          <span className={`${styles.svEyebrow} pf3`}>Our Work</span>
          <h2 className={`${styles.svHeading} pf3`} style={{ transitionDelay: '.08s' }}>
            Crafted to <em>perform.</em>
          </h2>
          <p className={`${styles.svSub} pf3`} style={{ transitionDelay: '.14s' }}>
            A selection of documents from our portfolio.
          </p>
        </div>

        {/* Client side interaction for Carousel and Accordion */}
        <ServicesClient templates={TEMPLATES} services={SERVICES} />
      </section>
    </div>
  );
}