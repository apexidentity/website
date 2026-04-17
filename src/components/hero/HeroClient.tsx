'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Orb as OrbType } from '@/types/hero'
import Orb from './components/Orb'
import styles from './hero.module.css'

interface HeroClientProps {
  orbsData: OrbType[]
}

export default function HeroClient({ orbsData }: HeroClientProps) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // We update state, but children use CSS variables for transforms to minimize paint cost
    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const px = (mouse.x - 0.5) * 30
  const py = (mouse.y - 0.5) * 18

  // We pass these variables down as CSS variables to avoid constant DOM re-writes
  const dynamicStyles = {
    '--move-x': `${px}px`,
    '--move-y': `${py}px`,
  } as React.CSSProperties

  return (
    <div className={styles.interactiveLayer} style={dynamicStyles}>
      {/* Ambient Blobs moved here for interactivity */}
      <div className={`${styles.heroBlob} ${styles.blob1}`} style={{ transform: `translate(calc(var(--move-x) * 0.5), calc(var(--move-y) * 0.4))` }} />
      <div className={`${styles.heroBlob} ${styles.blob2}`} style={{ transform: `translate(calc(var(--move-x) * -0.4), calc(var(--move-y) * -0.3))` }} />
      <div className={`${styles.heroBlob} ${styles.blob3}`} style={{ transform: `translate(calc(var(--move-x) * 0.4), calc(var(--move-y) * 0.3))` }} />
      <div className={`${styles.heroBlob} ${styles.blob4}`} style={{ transform: `translate(calc(var(--move-x) * -0.3), calc(var(--move-y) * -0.25))` }} />

      {/* Orbs */}
      {orbsData.map(o => (
        <Orb key={o.id} data={o} px={px} py={py} />
      ))}
    </div>
  )
}