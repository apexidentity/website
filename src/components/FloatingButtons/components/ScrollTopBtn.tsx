'use client';

import React, { useCallback, memo } from 'react';
import { UpArrowIcon } from './Icons';
import styles from '../floating-buttons.module.css';

interface ScrollTopBtnProps {
  visible: boolean;
}

const ScrollTopBtn = ({ visible }: ScrollTopBtnProps) => {
  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`${styles.fbBtn} ${visible ? styles.fbVisible : ''}`}
    >
      <UpArrowIcon />
    </button>
  );
};

export default memo(ScrollTopBtn);