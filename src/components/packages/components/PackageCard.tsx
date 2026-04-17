import React, { memo } from 'react';
import styles from '../packages.module.css';
import { Package } from '../../../types/packages';
import { fmt } from '../../../data/packages';

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: () => void;
}

const PackageCard = ({ pkg, isSelected, onSelect }: PackageCardProps) => {
  const originalPrice = pkg.services.reduce((acc, s) => acc + s.p, 0);
  const savePct = Math.round(((originalPrice - pkg.price) / originalPrice) * 100);

  return (
    <div 
      className={`${styles.card} ${isSelected ? styles.selected : ''}`} 
      onClick={onSelect}
      data-tier={pkg.tier}
    >
      <div className={styles.cardHead}>
        <div className={styles.tierRow}>
          <span className={styles.tierLabel}>Tier {pkg.tier}</span>
          <span className={styles.tierBadge}>{pkg.code}</span>
        </div>
        <div className={styles.name}>{pkg.name}</div>
      </div>

      <div className={styles.body}>
        {pkg.services.map((s, i) => (
          <div key={i} className={styles.row}>
            <span className={styles.rowDot} />
            <span className={styles.rowName}>{s.n}</span>
            <span className={styles.rowPrice}>{fmt(s.p)}</span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.foot}>
        <div>
          <div className={styles.footLabel}>Bundle price</div>
          <div className={styles.original}>{fmt(originalPrice)}</div>
          <div className={styles.price}>
            <span className={styles.cur}>EGP</span>{' '}
            {pkg.price.toLocaleString()}
          </div>
        </div>
        <div className={styles.save}>Save {savePct}%</div>
      </div>
    </div>
  );
};

export default memo(PackageCard);