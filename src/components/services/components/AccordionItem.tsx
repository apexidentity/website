import React, { memo } from 'react';
import { Service } from '../../../types/services';
import styles from '../services.module.css';

interface Props {
  service: Service;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = memo(({ service, isOpen, onClick }: Props) => {
  return (
    <div className={`${styles.accItem} ${isOpen ? styles.accItemOpen : ''}`}>
      <button className={styles.accHdr} onClick={onClick}>
        <span className={styles.accNum}>{service.num}</span>
        <div className={styles.accTitleRow}>
          <span className={styles.accName}>{service.name}</span>
          <span className={styles.accTag}>{service.tag}</span>
        </div>
        <div className={styles.accChevron}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v9M1 5.5h9" stroke="rgba(196,170,255,0.9)" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <div className={styles.accBody}>
        <div className={styles.accBodyInner}>
          <div className={styles.accBodyContent}>
            <div>
              <p className={styles.accDesc}>{service.description}</p>
              <a href="#packages" className={styles.accCtaLink}>
                Get started
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 10L10 1M10 1H4M10 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div>
              <div className={styles.accNeedLabel}>Why you need it</div>
              <p className={styles.accNeed}>{service.need}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';
export default AccordionItem;