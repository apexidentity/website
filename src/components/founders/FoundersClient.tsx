'use client';
import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function FoundersClient({ children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fsI'); // Uses global scope from module nesting
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    const elements = rootRef.current?.querySelectorAll('.reveal-fs');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      {children}
    </div>
  );
}