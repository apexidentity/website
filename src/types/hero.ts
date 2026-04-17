import { ReactNode } from 'react';

export interface Orb {
  id: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: string;
  dur: string;
  label: string;
  sub: string;
  icon: ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}

export interface MousePosition {
  x: number;
  y: number;
}