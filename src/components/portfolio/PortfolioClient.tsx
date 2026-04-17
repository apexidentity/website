'use client';
import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PortfolioClient({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pv4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    const elements = sectionRef.current?.querySelectorAll('.pf4, .pc4');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="port-root" ref={sectionRef}>
      {children}
    </section>
  );
}