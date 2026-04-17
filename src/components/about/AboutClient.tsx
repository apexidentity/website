'use client';

import React, { useEffect, useRef } from 'react';
import styles from './about.module.css';

interface AboutClientProps {
  children: React.ReactNode;
}

/**
 * Handles only the IntersectionObserver logic.
 * Keeps the main component server-side.
 */
export default function AboutClient({ children }: AboutClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = containerRef.current?.querySelectorAll(
      `.${styles.fadeAnim}, .${styles.cardAnim}`
    );

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}