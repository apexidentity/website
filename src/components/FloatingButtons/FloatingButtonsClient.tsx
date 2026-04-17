'use client';

import React, { useState, useEffect, memo } from 'react';
import ScrollTopBtn from './components/ScrollTopBtn';
import WhatsAppMenu from './components/WhatsAppMenu';
import styles from './floating-buttons.module.css';

const FloatingButtonsClient = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldBeVisible = window.scrollY > window.innerHeight * 0.6;
      // Only trigger a state update if the value actually changes
      setVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.fbWrap}>
      {/* LEFT — Scroll to top */}
      <div className={styles.fbSide}>
        <ScrollTopBtn visible={visible} />
      </div>

      {/* RIGHT — WhatsApp + menu */}
      <WhatsAppMenu visible={visible} />
    </div>
  );
};

export default memo(FloatingButtonsClient);