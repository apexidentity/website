'use client';

import React, { useState, useEffect, memo } from 'react';
import styles from './navbar.module.css';

interface Props {
  children: React.ReactNode;
}

const NavbarClient = ({ children }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Passive scroll listener for better performance
      const isScrolled = window.scrollY > 40;
      setScrolled(v => v !== isScrolled ? isScrolled : v);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nbRoot} ${scrolled ? styles.nbScrolled : ''}`}>
      {children}
    </nav>
  );
};

export default memo(NavbarClient);