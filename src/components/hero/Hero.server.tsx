import React from 'react'
import styles from './hero.module.css'
import { orbs, stats } from '@/data/hero'
import HeroClient from './HeroClient'
import StatItem from './components/StatItem'

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Top accent line */}
      <div className={styles.heroTopLine} />

      {/* Shimmer streaks - purely CSS */}
      <div className={`${styles.heroShimmer} ${styles.hs1}`} />
      <div className={`${styles.heroShimmer} ${styles.hs2}`} />
      <div className={`${styles.heroShimmer} ${styles.hs3}`} />
      <div className={`${styles.heroShimmer} ${styles.hs4}`} />

      {/* Interactive Layer (Client Component) */}
      <HeroClient orbsData={orbs} />

      {/* Center content - Server Side */}
      <div className={styles.heroContent}>
        
        {/* Eyebrow */}
        <div className={styles.heroEyebrowRow}>
          <div className={styles.heroDivider} />
          <div className={styles.heroEyebrowDot} />
          <span className={styles.heroEyebrow}>Crafting Futures Since 2026</span>
          <div className={styles.heroEyebrowDot} />
          <div className={styles.heroDivider} />
        </div>

        {/* Heading */}
        <h1 className={styles.heroTitle}>
          Your next role<br />
          starts with&nbsp;<em>how</em><br />
          you present yourself.
        </h1>

        {/* Sub */}
        <p className={styles.heroSub}>
          We craft the documents, profiles, and narratives that make recruiters stop scrolling — and start calling.
        </p>

        {/* CTAs */}
        <div className={styles.heroCtaRow}>
          <a href="#packages" className={styles.btnPrimary}>
            Elevate My Career
          </a>
          <a href="#services" className={styles.btnGhost}>
            View Services
          </a>
        </div>

        {/* Stats Strip */}
        <div className={styles.heroStats}>
          {stats.map(s => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.heroScroll}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}