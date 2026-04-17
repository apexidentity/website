'use client';

import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { CONTACTS } from '../../../data/floating-buttons';
import { WhatsAppIcon, CloseIcon } from './Icons';
import styles from '../floating-buttons.module.css';

interface WhatsAppMenuProps {
  visible: boolean;
}

const WhatsAppMenu = ({ visible }: WhatsAppMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const waRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (waRef.current && !waRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, closeMenu]);

  return (
    <div className={`${styles.fbSide} ${styles.fbSideRight}`} ref={waRef}>
      <div className={`${styles.fbMenu} ${menuOpen ? styles.fbMenuOpen : ''}`}>
        <div className={styles.fbMenuHeader}>
          <span className={styles.fbMenuDot} />
          <span className={styles.fbMenuHeaderTxt}>How can we help?</span>
        </div>
        {CONTACTS.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fbMenuItem}
            onClick={closeMenu}
          >
            <span className={styles.fbItemLabel}>{c.label}</span>
            <span className={styles.fbItemSub}>{c.sub}</span>
          </a>
        ))}
      </div>

      <button
        aria-label="Chat on WhatsApp"
        onClick={toggleMenu}
        className={`${styles.fbBtn} ${styles.fbWaBtn} ${visible ? styles.fbVisible : ''} ${menuOpen ? styles.fbActive : ''}`}
      >
        {menuOpen ? <CloseIcon /> : <WhatsAppIcon />}
      </button>
    </div>
  );
};

export default memo(WhatsAppMenu);