import { NavColumn, SocialLink } from '../types/footer';
import { FacebookIcon, LinkedInIcon, InstagramIcon, TikTokIcon } from '../components/footer/components/Icons';

export const NAV_COLUMNS: NavColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us',  href: '#about' },
      { label: 'Our Team',  href: '#founders' },
      { label: 'Our Work',  href: '#portfolio' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'CV & LinkedIn',     href: '#services' },
      { label: 'Career Strategy',   href: '#services' },
      { label: 'Personal Branding', href: '#services' },
      { label: 'Interview Prep',    href: '#services' },
    ],
  },
  {
    heading: 'Packages',
    links: [
      { label: 'CV & Profile',    href: '#packages' },
      { label: 'Career Strategy', href: '#packages' },
      { label: 'Job Search',      href: '#packages' },
      { label: 'Branding',        href: '#packages' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FacebookIcon />,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61587712056151' },
  { icon: <LinkedInIcon />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/apexidentity' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/apexidentity.eg' },
  { icon: <TikTokIcon />,    label: 'TikTok',    href: 'https://www.tiktok.com/@apexidentity.eg' },
];