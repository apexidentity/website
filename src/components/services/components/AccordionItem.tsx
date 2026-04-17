'use client';

import React, { memo } from 'react';
import { Service } from '../../../types/services';
import styles from '../services.module.css';

interface Props {
  service: Service;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const AccordionItem = memo(({ service, isOpen, onClick }: Props) => (
  <div className={`${styles.accItem} ${isOpen ? styles.accItemOpen : ''}`}>
    <button
      className={styles.accTrigger}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      {/* Number — styled like packages .tierLabel */}
      <span className={styles.accNum}>{service.num}</span>

      {/* Title + tag */}
      <span className={styles.accTitleGroup}>
        <span className={styles.accName}>{service.name}</span>
        <span className={styles.accTag}>{service.tag}</span>
      </span>

      {/* Chevron — styled like packages .tierBadge */}
      <span className={styles.accChevron} aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>

    {/* CSS max-height transition — zero JS height measurement */}
    <div className={styles.accBody} aria-hidden={!isOpen}>
      <div className={styles.accBodyInner}>
        <p className={styles.accDesc}>{service.description}</p>
        <div className={styles.accNeedWrap}>
          <span className={styles.accNeedIcon} aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.1" />
              <path d="M6.5 4v3.2M6.5 8.8v.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </span>
          <p className={styles.accNeed}>{service.need}</p>
        </div>
      </div>
    </div>
  </div>
));

AccordionItem.displayName = 'AccordionItem';
export default AccordionItem;