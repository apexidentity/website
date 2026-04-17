'use client';
import React, { useState, memo } from 'react';
import styles from '../founders.module.css';

interface Props {
  img: string;
  name: string;
  initials: string;
}

const FounderPhoto = ({ img, name, initials }: Props) => {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className={styles.fsPhoto}>
      {!imgErr ? (
        <img 
          src={img} 
          alt={name} 
          loading="lazy" 
          onError={() => setImgErr(true)} 
        />
      ) : (
        <div className={styles.fsInitials}>{initials}</div>
      )}
    </div>
  );
};

export default memo(FounderPhoto);