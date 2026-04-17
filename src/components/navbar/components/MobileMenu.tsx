'use client';

import React, { useState, memo, useCallback, useEffect } from 'react';
import { NavLink } from '../../../types/navbar';
import styles from '../navbar.module.css';

interface Props {
  links: NavLink[];
  onOpenChange?: (isOpen: boolean) => void;
}

const MobileMenu = ({ links, onOpenChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(v => {
      const next = !v;
      onOpenChange?.(next);
      return next;
    });
  }, [onOpenChange]);

  const close = useCallback(() => {
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  /* Lock body scroll when overlay is open */
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Close on Escape key */
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, close]);

  return (
    <>
      {/* Burger Button — z-index: 51 في الـ CSS عشان يبان فوق الـ overlay */}
      <button
        className={`${styles.nbBurger} ${isOpen ? styles.nbOpen : ''}`}
        onClick={toggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Fullscreen Glass Overlay */}
      <div
        className={`${styles.nbDrawer} ${isOpen ? styles.nbDrawerOpen : ''}`}
        aria-hidden={!isOpen}
        /* ضغطة على الخلفيه بره الكارت تقفل المنيو */
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className={styles.nbDrawerInner}>

          {/* Nav Links */}
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={styles.nbMLink}
              onClick={close}
              tabIndex={isOpen ? 0 : -1}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity .38s ease ${i * 60}ms, transform .45s cubic-bezier(.16,1,.3,1) ${i * 60}ms, color .22s ease`,
              }}
            >
              {l.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#packages"
            className={styles.nbMCta}
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity .4s ease ${links.length * 60 + 80}ms, transform .5s cubic-bezier(.16,1,.3,1) ${links.length * 60 + 80}ms`,
            }}
          >
            Get Started
          </a>

        </div>
      </div>
    </>
  );
};

export default memo(MobileMenu);