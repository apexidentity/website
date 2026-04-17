import React from 'react';
import styles from './packages.module.css';
import { DATA, ADDONS } from '../../data/packages';
import PackagesClient from './PackagesClient';

/**
 * Main Entry Point - Server Component
 * Handles layout shell, background effects, and data injection.
 */
export default function Packages() {
  return (
    <section id="packages" className={styles.section}>
      {/* Background Blobs (Static) */}
      <div className={`${styles.bgBlob} ${styles.blob1}`} />
      <div className={`${styles.bgBlob} ${styles.blob2}`} />
      <div className={styles.topLine} />

      {/* Intersection observer and state logic moved to Client Component.
          Props are passed to maintain Server Side Rendering of the initial state.
      */}
      <PackagesClient data={DATA} addons={ADDONS} />
    </section>
  );
}