import React, { memo } from 'react'
import { Orb as OrbType } from '@/types/hero'
import styles from '../hero.module.css'

interface OrbProps {
  data: OrbType
  px: number
  py: number
}

const Orb = ({ data, px, py }: OrbProps) => {
  const { top, left, right, bottom, delay, dur, icon, label, sub } = data

  return (
    <div
      className={styles.orb}
      style={{
        top, left, right, bottom,
        '--delay': delay,
        '--dur': dur,
        transform: `translate(${px * 0.35}px, ${py * 0.25}px)`,
        transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
      } as React.CSSProperties}
    >
      <div className={styles.orbCircle}>
        {icon}
        <div className={styles.orbTooltip}>
          <span className={styles.orbTooltipLabel}>{label}</span>
          <span className={styles.orbTooltipSub}>{sub}</span>
        </div>
      </div>
    </div>
  )
}

export default memo(Orb)