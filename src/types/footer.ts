import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface SocialLink {
  icon: ReactNode;
  label: string;
  href: string;
}