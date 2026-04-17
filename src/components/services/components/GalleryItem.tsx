import React, { memo } from 'react';
import { Template } from '../../../types/services';
import styles from '../services.module.css';

interface Props {
  template: Template;
  index: number;
  active: number;
  total: number;
  goNext: () => void;
  goPrev: () => void;
}

const GalleryItem = memo(({ template, index, active, total, goNext, goPrev }: Props) => {
  const getPosClass = () => {
    let d = index - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    if (d === 0) return styles.glC;
    if (d === -1) return styles.glL;
    if (d === 1) return styles.glR;
    if (d === -2) return styles.glLL;
    if (d === 2) return styles.glRR;
    return styles.glH;
  };

  const pc = getPosClass();

  const handleClick = () => {
    if (pc === styles.glL || pc === styles.glLL) goPrev();
    else if (pc === styles.glR || pc === styles.glRR) goNext();
  };

  return (
    <div className={`${styles.glItem} ${pc}`} onClick={handleClick}>
      {template.src ? (
        <img src={template.src} alt={template.alt} className={styles.glImg} loading="lazy" />
      ) : (
        <div className={styles.glPlaceholder}>
          <div className={styles.glPhShimmer} />
          {[88, 68, 76, 52, 62, 44, 70, 55, 80, 60, 45, 72].map((w, i) => (
            <div key={i} className={styles.glPhLine} style={{ width: `${w}%`, top: `${7 + i * 7.7}%` }} />
          ))}
        </div>
      )}
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';
export default GalleryItem;