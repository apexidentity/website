'use client';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

  // Scroll reveal — pf3 / pv3 (first-file pattern)
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
    sectionRef.current?.querySelectorAll(`.${styles.pf3}`).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goPrev = useCallback(() => setActive(i => (i - 1 + n) % n), [n]);
  const goNext = useCallback(() => setActive(i => (i + 1) % n), [n]);

  const toggleAccordion = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  }, []);

  const accordionHandlers = useMemo(
    () => services.map((_, i) => () => toggleAccordion(i)),
    [services, toggleAccordion]
  );

  return (
    <>
      {/* ── GALLERY STAGE ── */}
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

      {/* ── CONTROLS — dots (first-file style) ── */}
      <div className={styles.glControls}>
        <button className={styles.glBtn} onClick={goPrev} aria-label="Previous">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── ACCORDION SECTION ── */}
      <section id="services" className={styles.accSection} ref={sectionRef}>
        <div className={`${styles.accGlow} ${styles.accGlow1}`} aria-hidden="true" />
        <div className={`${styles.accGlow} ${styles.accGlow2}`} aria-hidden="true" />

        <div className={styles.accInner}>

          {/* Header — eyebrow badge with rules (first-file style) */}
          <div className={`${styles.accHeaderBlock} ${styles.pf3}`}>
            <div className={styles.accEyebrowWrap}>
              <div className={styles.accEyebrowRule} />
              <span className={styles.accEyebrowBadge}>What We Do</span>
              <div className={`${styles.accEyebrowRule} ${styles.accEyebrowRuleR}`} />
            </div>
            <h2 className={styles.accHeading}>
              Every tool you need to<br />
              <em>land the role you deserve.</em>
            </h2>
            <p className={styles.accSub}>
              Six services. One outcome —{' '}
              <span className={styles.accSubEm}>your career, elevated.</span>
            </p>
          </div>

          {/* List */}
          <div className={`${styles.accList} ${styles.pf3}`} style={{ transitionDelay: '.16s' }}>
            <div className={styles.accListBorder} />
            {services.map((s, i) => (
              <AccordionItem
                key={s.num}
                service={s}
                isOpen={openIndex === i}
                onClick={accordionHandlers[i]}
                index={i}
              />
            ))}
          </div>

          {/* CTA — line + button (first-file style) */}
          <div className={`${styles.accCtaWrap} ${styles.pf3}`} style={{ transitionDelay: '.2s' }}>
            <div className={styles.accCtaLine} />
            <a href="#packages" className={styles.accCtaBtn}>
              Start Your Elevation
              <span className={styles.accCtaBtnIcon} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}