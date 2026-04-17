import React, { memo } from 'react';
import styles from '../about.module.css';

interface PillarProps {
  text: string;
}

const Pillar = ({ text }: PillarProps) => {
  return <span className={styles.pill}>{text}</span>;
};

export default memo(Pillar);