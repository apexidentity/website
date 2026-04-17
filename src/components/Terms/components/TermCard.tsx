import React, { memo } from 'react';
import { TermSection } from '../../../types/terms';
import styles from '../terms.module.css';

interface TermCardProps {
  section: TermSection;
  index: number;
}

const TermCard = ({ section, index }: TermCardProps) => {
  return (
    <div
      className={`${styles.card} ${styles.reveal}`}
      style={{ transitionDelay: `${0.04 + index * 0.04}s` }}
    >
      <div className={styles.cardHead}>
        <div className={styles.cardLeft}>
          <span className={styles.cardTag}>{section.tag}</span>
          <h2 className={styles.cardTitle}>{section.title}</h2>
        </div>
        <span className={styles.cardNum}>{section.id}</span>
      </div>
      <div className={styles.cardDivider} />
      <p className={styles.cardBody}>{section.body}</p>
    </div>
  );
};

export default memo(TermCard);