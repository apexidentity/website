import React from 'react';
import styles from './coming-soon.module.css';
import { socialLinks } from '../../data/coming-soon';
import ComingSoonClient from './ComingSoonClient';

export default function ComingSoonServer() {
  return (
    <section className={styles.section}>
      <div className={styles.topLine} />

      <ComingSoonClient>
        {/* Blob 3 is static, so we keep it outside the client logic if possible 
            or inside if it needs layering context. Keeping inside for visual flow. */}
        <div className={`${styles.blob} ${styles.blob3}`} />

        <div className={`${styles.shimmer} ${styles.s1}`} />
        <div className={`${styles.shimmer} ${styles.s2}`} />
        <div className={`${styles.shimmer} ${styles.s3}`} />

        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <div className={styles.divider} />
            <div className={styles.dot} />
            <span className={styles.eyebrow}>Something is coming</span>
            <div className={styles.dot} />
            <div className={styles.divider} />
          </div>

          <div className={styles.iconWrap}>
            <svg viewBox="0 0 32 32" fill="none" width="34" height="34">
              <path
                d="M16 3C10.48 3 6 7.48 6 13v2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1h-2v-2c0-5.52-4.48-10-10-10Zm0 2c4.41 0 8 3.59 8 8v2H8v-2c0-4.41 3.59-8 8-8Zm0 12a3 3 0 0 1 1 5.83V25a1 1 0 0 1-2 0v-2.17A3.001 3.001 0 0 1 16 17Z"
                fill="rgba(167,139,250,.65)"
              />
            </svg>
          </div>

          <h1 className={styles.title}>
            No work to show<br />
            <em>just yet.</em>
          </h1>

          <p className={styles.sub}>
            We're putting the finishing touches on something worth your time.
            Great careers are built quietly before they're celebrated loudly.
          </p>

          <div className={styles.statusWrapper}>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Work in progress — Stay tuned</span>
            </div>
          </div>

          <div className={styles.socialCard}>
            <span className={styles.socialLabel}>Follow us for updates</span>
            <div className={styles.socials}>
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </ComingSoonClient>
    </section>
  );
}