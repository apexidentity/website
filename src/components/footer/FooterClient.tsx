'use client';

import React, { useEffect, useRef, ReactNode, memo } from 'react';
import styles from './footer.module.css';

interface FooterClientProps {
  children: ReactNode;
}

const FooterClient = ({ children }: FooterClientProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.ft2Vis);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    const revealElements = ref.current?.querySelectorAll(`.${styles.ft2Reveal}`);
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.ft2Root} ref={ref}>
      {children}
    </footer>
  );
};

export default memo(FooterClient);