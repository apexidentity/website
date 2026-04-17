'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './packages.module.css';
import { Group, Package } from '../../types/packages';
import PackageCard from './components/PackageCard';
import { fmt } from '../../data/packages';

interface PackagesClientProps {
  data: Group[];
  addons: string[];
}

export default function PackagesClient({ data, addons }: PackagesClientProps) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activePkg, setActivePkg] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.pv2);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    containerRef.current?.querySelectorAll(`.${styles.pf2}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleGroupChange = useCallback((index: number) => {
    setActiveGroup(index);
    setActivePkg(1); // Default to middle tier on group change
  }, []);

  const selectedGroup = data[activeGroup];
  const selectedPkg = selectedGroup.packages[activePkg];

  return (
    <div className={styles.inner} ref={containerRef}>
      {/* Header (Client handled for animation trigger) */}
      <div className={`${styles.header} ${styles.pf2}`}>
        <span className={styles.eyebrow}>Service Packages</span>
        <h2 className={styles.title}>
          Your journey.<br /><em>Your package.</em>
        </h2>
        <p className={styles.sub}>Select a category — then choose your tier.</p>
      </div>

      {/* Category Tabs */}
      <div className={`${styles.tabs} ${styles.pf2}`} style={{ transitionDelay: '.1s' }}>
        {data.map((g, i) => (
          <button
            key={g.id}
            className={`${styles.tab} ${activeGroup === i ? styles.tabActive : ''}`}
            onClick={() => handleGroupChange(i)}
          >
            {g.category}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className={styles.grid}>
        {selectedGroup.packages.map((p, i) => (
          <PackageCard 
            key={p.code} 
            pkg={p} 
            isSelected={activePkg === i} 
            onSelect={() => setActivePkg(i)} 
          />
        ))}
      </div>

      {/* Add-ons Strip */}
      <div className={styles.addons}>
        <div className={styles.addonsLabel}>Add-ons &amp; Monthly</div>
        <div className={styles.addonsRow}>
          {addons.map((a) => (
            <div key={a} className={styles.addon}>
              <span className={styles.addonDot} />
              <span className={styles.addonTxt}>{a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Bar */}
      <div className={styles.summary}>
        <span className={styles.sumLabel}>Selected</span>
        <span className={styles.sumDivider} />
        <span className={styles.sumVal}>
          {selectedGroup.category} — {selectedPkg.name}
        </span>
        <span className={styles.sumPrice}>{fmt(selectedPkg.price)}</span>
      </div>

      {/* CTA Section */}
      <div className={styles.cta}>
        <a
          href="https://wa.me/201067394942?text=Hi%2C%20I%20want%20help%20choosing%20the%20best%20package%20for%20my%20career%20level%20and%20goals."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          Start your elevation
        </a>
        <a href="#services" className={styles.btnGhost}>
          View all services
        </a>
      </div>
    </div>
  );
}