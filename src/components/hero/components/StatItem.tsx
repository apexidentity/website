import React, { memo } from 'react'
import styles from '../hero.module.css'

interface StatItemProps {
  value: string
  label: string
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className={styles.heroStat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

export default memo(StatItem)