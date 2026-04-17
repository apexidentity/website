import React, { memo } from 'react';
import { PortfolioItem } from '../../../types/portfolio';
import styles from '../portfolio-card.module.css';

interface Props {
  item: PortfolioItem;
  index: number;
}

const PortfolioCard = ({ item, index }: Props) => {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.portCard} pc4`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.portCardHead}>
        <span className={styles.portService}>{item.service}</span>
        <span className={styles.portYear}>{item.year}</span>
      </div>

      <div className={styles.portCardBody}>
        <h3 className={styles.portTitle}>{item.title}</h3>
        <p className={styles.portDesc}>{item.description}</p>
      </div>

      <div className={styles.portDivider} />

      <div className={styles.portCardFoot}>
        <div className={styles.portFootInfo}>
          <div className={styles.portTags}>
            {item.tags.map((tag) => (
              <span key={tag} className={styles.portChip}>{tag}</span>
            ))}
          </div>
          <div className={styles.portApproved}>
            <span className={styles.portApprovedDot} />
            Approved
          </div>
        </div>
        <div className={styles.portLinkIcon}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 10L10 2M10 2H5M10 2V7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default memo(PortfolioCard);