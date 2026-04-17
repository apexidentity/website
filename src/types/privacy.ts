import { ReactNode } from 'react';

export interface Section {
  id: string;
  title: string;
  tag: string;
  body: string;
}

export interface Commitment {
  icon: ReactNode;
  text: string;
}