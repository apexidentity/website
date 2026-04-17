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
  const [revealed, setRevealed] = useState(false);
  const n = templates.length;
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Scroll reveal with IntersectionObserver — class-based only
  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    if (!elements?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            requestAnimationFrame(() => {
              e.target.classList.add(styles.revealVisible);
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Gallery section entrance
  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel
  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, 4500);
  }, [n]);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + n) % n);
    resetAuto();
  }, [n, resetAuto]);

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % n);
    resetAuto();
  }, [n, resetAuto]);

  const toggleAccordion = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  const accordionHandlers = useMemo(
    () => services.map((_, i) => () => toggleAccordion(i)),
    [services, toggleAccordion]
  );

  return (
    <>
      {/* ── GALLERY ── */}
      <div className={`${styles.glStage} ${revealed ? styles.glStageVisible : ''}`}>
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

      {/* ── CONTROLS ── */}
      <div className={styles.glControls}>
        <button className={styles.glBtn} onClick={goPrev} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.glTrack}>
          <div
            className={styles.glTrackFill}
            style={{ width: `${((active + 1) / n) * 100}%` }}
          />
        </div>

        <span className={styles.glCount}>
          <span className={styles.glCountCurrent}>{String(active + 1).padStart(2, '0')}</span>
          <span className={styles.glCountSep}>/</span>
          <span className={styles.glCountTotal}>{String(n).padStart(2, '0')}</span>
        </span>

        <button className={styles.glBtn} onClick={goNext} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── ACCORDION ── */}
      <section id="services" className={styles.accSection} ref={sectionRef}>
        <div className={styles.accNoise} aria-hidden="true" />
        <div className={`${styles.accGlow} ${styles.accGlow1}`} aria-hidden="true" />
        <div className={`${styles.accGlow} ${styles.accGlow2}`} aria-hidden="true" />

        <div className={styles.accInner}>

          {/* Header */}
          <div className={`${styles.accHeaderBlock} ${styles.reveal}`}>
            <div className={styles.accPill}>
              <span className={styles.accPillDot} />
              What We Do
            </div>
            <h2 className={styles.accHeading}>
              Every tool you need to
              <span className={styles.accHeadingEm}> land the role you deserve.</span>
            </h2>
            <p className={styles.accSub}>
              Six services. One outcome —{' '}
              <span className={styles.accSubEm}>your career, elevated.</span>
            </p>
          </div>

          {/* List */}
          <div className={`${styles.accList} ${styles.reveal}`} style={{ transitionDelay: '0.16s' }}>
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

          {/* CTA */}
          <div className={`${styles.accCtaWrap} ${styles.reveal}`} style={{ transitionDelay: '0.24s' }}>
            <a href="#packages" className={styles.accCtaBtn}>
              <span className={styles.accCtaBtnText}>Start Your Elevation</span>
              <span className={styles.accCtaBtnIcon} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}