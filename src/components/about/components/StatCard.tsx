import React, { memo } from 'react';
import styles from '../about.module.css';
import { Stat } from '../../../types/about';

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <div 
      className={`${styles.cardAnim} ${styles.statCard}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className={styles.statDot} />
      <div className={styles.statVal}>{stat.value}</div>
      <div className={styles.statLbl}>{stat.label}</div>
      <div className={styles.statDivider} />
      <div className={styles.statSub}>{stat.sub}</div>
    </div>
  );
};

export default memo(StatCard);