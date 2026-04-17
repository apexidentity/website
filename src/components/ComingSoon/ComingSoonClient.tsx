'use client';

import { useEffect, useRef, useState, ReactNode, memo } from 'react';
import styles from './coming-soon.module.css';

interface ComingSoonClientProps {
  children: ReactNode;
}

const ComingSoonClient = ({ children }: ComingSoonClientProps) => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMouse({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const px = (mouse.x - 0.5) * 28;
  const py = (mouse.y - 0.5) * 16;

  return (
    <>
      <div 
        className={`${styles.blob} ${styles.blob1}`} 
        style={{ transform: `translate(${px * 0.5}px,${py * 0.4}px)` }} 
      />
      <div 
        className={`${styles.blob} ${styles.blob2}`} 
        style={{ transform: `translate(${-px * 0.4}px,${-py * 0.35}px)` }} 
      />
      {children}
    </>
  );
};

export default memo(ComingSoonClient);