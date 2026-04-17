import React, { memo } from 'react';
import { Founder } from '../../../types/founders';
import FounderPhoto from './FounderPhoto';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './SocialIcons';
import styles from '../founders.module.css';

interface Props {
  f: Founder;
  delay: number;
}

const FounderCell = ({ f, delay }: Props) => {
  const socials = [
    { href: f.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
    { href: f.instagram, label: 'Instagram', Icon: InstagramIcon },
    { href: f.facebook, label: 'Facebook', Icon: FacebookIcon },
  ];

  return (
    <div 
      className={`${styles.fsCell} ${styles.fsA} reveal-fs`} 
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className={styles.fsGhost} aria-hidden="true">{f.id}</span>

      <FounderPhoto img={f.img} name={f.name} initials={f.initials} />

      <div className={styles.fsBody}>
        <span className={styles.fsNum}>{f.id}</span>
        <h3 className={styles.fsName}>{f.name}</h3>
        <span className={styles.fsRole}>{f.title}</span>
        <p className={styles.fsDesc}>{f.description}</p>

        <div className={styles.fsSocs}>
          {socials.map(({ href, label, Icon }) => (
            <a 
              key={label} 
              href={href} 
              className={styles.fsSoc}
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(FounderCell);