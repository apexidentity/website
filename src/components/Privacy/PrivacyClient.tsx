'use client';

import React, { useEffect, useRef, memo } from 'react';
import styles from './privacy.module.css';

interface PrivacyClientProps {
  children: React.ReactNode;
}

const PrivacyClient = ({ children }: PrivacyClientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.pr2Vis);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = containerRef.current?.querySelectorAll(`.${styles.pr2Reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default memo(PrivacyClient);