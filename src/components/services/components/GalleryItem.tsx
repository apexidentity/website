'use client';

import React, { memo, useMemo } from 'react';
import Image from 'next/image';
import { Template } from '../../../types/services';
import styles from '../services.module.css';

interface Props {
  template: Template;
  index: number;
  active: number;
  total: number;
  goNext: () => void;
  goPrev: () => void;
}

function getSlot(index: number, active: number, total: number): number {
  let d = index - active;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

const isAbsoluteUrl = (src: string): boolean =>
  src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/');

const GalleryItem = memo(
  ({ template, index, active, total, goNext, goPrev }: Props) => {
    const slot = useMemo(
      () => getSlot(index, active, total),
      [index, active, total]
    );

    const isCenter   = slot === 0;
    const isNear     = slot >= -2 && slot <= 2;
    const isAdjacent = slot >= -1 && slot <= 1;
    const clickHandler = slot < 0 ? goPrev : slot > 0 ? goNext : undefined;

    const slotClass =
      slot === 0  ? styles.glC  :
      slot === -1 ? styles.glL  :
      slot === 1  ? styles.glR  :
      slot === -2 ? styles.glLL :
      slot === 2  ? styles.glRR :
                    styles.glH;

    return (
      <div
        className={`${styles.glItem} ${slotClass}`}
        onClick={isNear && !isCenter ? clickHandler : undefined}
        aria-hidden={!isCenter}
        style={{ willChange: 'transform, opacity' }}
      >
        {isCenter && <div className={styles.glReflection} aria-hidden="true" />}

        {isAbsoluteUrl(template.src) ? (
          <Image
            src={template.src}
            alt={isCenter ? template.alt : ''}
            width={480}
            height={680}
            quality={isCenter ? 80 : 50}
            priority={index === 0 || isAdjacent}
            loading={index === 0 || isAdjacent ? 'eager' : 'lazy'}
            sizes="(max-width: 640px) 70vw, 300px"
            className={styles.glImg}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.glPlaceholder}>
            <div className={styles.glPhHeader} />
            <div className={styles.glPhBody}>
              {[88, 72, 80, 55, 65, 90, 48, 70, 60, 82, 50, 75].map((w, i) => (
                <div
                  key={i}
                  className={`${styles.glPhLine} ${i % 4 === 0 ? styles.glPhLineAccent : ''}`}
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
            <div className={styles.glPhFooter} />
          </div>
        )}
        {/* glLabel removed — no "Template 00" text on cards */}
      </div>
    );
  },
  (prev, next) => {
    return (
      getSlot(prev.index, prev.active, prev.total) ===
      getSlot(next.index, next.active, next.total)
    );
  }
);

GalleryItem.displayName = 'GalleryItem';
export default GalleryItem;