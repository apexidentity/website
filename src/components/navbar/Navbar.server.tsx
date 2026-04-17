import React from 'react';
import NavbarClient from './NavbarClient';
import NavLogo from './components/NavLogo';
import MobileMenu from './components/MobileMenu';
import { NAV_LINKS } from '../../data/navbar';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <NavbarClient>
      <div className={styles.nbInner}>
        {/* Client component for Logo (Router/Path logic) */}
        <NavLogo />

        {/* Static Links (Rendered on Server) */}
        <div className={styles.nbLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.nbLink}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Static CTA */}
        <a href="#packages" className={styles.nbCta}>
          Get Started
        </a>

        {/* Client component for Mobile Logic */}
        <MobileMenu links={NAV_LINKS} />
      </div>
    </NavbarClient>
  );
}