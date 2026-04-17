'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Template, Service } from '../../types/services';
import GalleryItem from './components/GalleryItem';
import AccordionItem from './components/AccordionItem';
import styles from './services.module.css';

interface Props {
  templates: Template[];
  services: Service[];
}

export default function ServicesClient({ templates, services }: Props) {
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const n = templates.length;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.pv3);
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll('.pf3').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goPrev = useCallback(() => setActive(i => (i - 1 + n) % n), [n]);
  const goNext = useCallback(() => setActive(i => (i + 1) % n), [n]);
  const toggleAccordion = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  }, []);

  return (
    <>
      {/* Gallery Stage */}
      <div className={styles.glStage}>
        {templates.map((t, i) => (
          <GalleryItem 
            key={t.id} 
            template={t} 
            index={i} 
            active={active} 
            total={n}
            goNext={goNext}
            goPrev={goPrev}
          />
        ))}
      </div>

      <div className={styles.glControls}>
        <button className={styles.glBtn} onClick={goPrev} aria-label="Previous">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={styles.glDots}>
          {templates.map((_, i) => (
            <button
              key={i}
              className={`${styles.glDot} ${i === active ? styles.glDotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.glBtn} onClick={goNext} aria-label="Next">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Accordion Section */}
      <section id="services" className={styles.accSection} ref={sectionRef}>
        <div className={`${styles.accBgBlob} ${styles.accBlob1}`} />
        <div className={`${styles.accBgBlob} ${styles.accBlob2}`} />

        <div className={styles.accInner}>
          <div className={`${styles.accHeaderBlock} pf3`}>
            <div className={styles.accEyebrowWrap}>
              <div className={styles.accEyebrowRule} />
              <span className={styles.accEyebrowBadge}>What We Do</span>
              <div className={`${styles.accEyebrowRule} ${styles.accEyebrowRuleR}`} />
            </div>
            <h2 className={styles.accHeading}>
              Every tool you need to<br />
              <em>land the role you deserve.</em>
            </h2>
            <p className={styles.accSub}>Six services. One outcome — your career, elevated.</p>
          </div>

          <div className={`${styles.accList} pf3`} style={{ transitionDelay: '.16s' }}>
            <div className={styles.accListBorder} />
            {services.map((s, i) => (
              <AccordionItem 
                key={s.num} 
                service={s} 
                isOpen={openIndex === i} 
                onClick={() => toggleAccordion(i)} 
              />
            ))}
          </div>

          <div className={`${styles.accCtaWrap} pf3`} style={{ transitionDelay: '.2s' }}>
            <div className={styles.accCtaLine} />
            <a href="#packages" className={styles.accCtaBtn}>Start Your Elevation</a>
          </div>
        </div>
      </section>
    </>
  );
}