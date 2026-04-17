import React from 'react';
import { TESTIMONIALS, EMPTY_MESSAGES } from '../../data/testimonials';
import TestimonialCard from './components/TestimonialCard';
import TestimonialsClient from './TestimonialsClient';
import styles from './testimonials.module.css';

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);
  const row3 = TESTIMONIALS.slice(8, 12);

  const renderTrack = (items: typeof row1, animationClass: string) => (
    <div className={styles.tmTrackWrap}>
      <div className={`${styles.tmTrack} ${animationClass}`}>
        {[...items, ...items].map((t, i) => (
          <TestimonialCard 
            key={`${t.id}-${i}`} 
            testimonial={t} 
            emptyMsg={EMPTY_MESSAGES[i % EMPTY_MESSAGES.length]} 
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap"
      />
      
      <TestimonialsClient>
        <section id="testimonials" className={styles.tmSection}>
          <div className={`${styles.tmBgBlob} ${styles.tmBlob1}`} />
          <div className={`${styles.tmBgBlob} ${styles.tmBlob2}`} />

          <div className={styles.tmInner}>
            <header className={`${styles.tmHeader} ${styles.pf} reveal-pf`}>
              <span className={styles.tmEyebrow}>Client Results</span>
              <h2 className={styles.tmTitle}>Real People.<br /><em>Real Results.</em></h2>
              <p className={styles.tmSub}>What our clients say after the transformation.</p>
            </header>
          </div>

          <div className={styles.tmRows}>
            {renderTrack(row1, styles.tmTrackLeft)}
            {renderTrack(row2, styles.tmTrackRight)}
            {renderTrack(row3, styles.tmTrackLeft2)}
          </div>
        </section>
      </TestimonialsClient>
    </>
  );
}