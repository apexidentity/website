'use client';
import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function TestimonialsClient({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pv');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    const revealElements = containerRef.current?.querySelectorAll('.reveal-pf');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}