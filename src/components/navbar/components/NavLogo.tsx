'use client';

import React, { memo, MouseEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../navbar.module.css';

const NavLogo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <button className={styles.nbLogo} onClick={handleLogoClick}>
      <img src="/logo.webp" alt="Apex Identity" className={styles.nbLogoImg} />
    </button>
  );
};

export default memo(NavLogo);