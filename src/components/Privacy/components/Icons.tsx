import React, { memo } from 'react';

export const CheckIcon = memo(() => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
    <path d="M4.5 7l1.8 1.8L9.5 5" stroke="rgba(167,139,250,0.65)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

export const LockIcon = memo(() => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="5" width="10" height="7" rx="1.5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
    <path d="M4.5 5V3.5a2.5 2.5 0 015 0V5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
  </svg>
));

export const ShieldIcon = memo(() => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M7 2L2.5 4.5v3C2.5 10 4.5 12 7 12.5 9.5 12 11.5 10 11.5 7.5v-3L7 2z" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
  </svg>
));

export const ShieldCheckIcon = memo(() => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L3 5.5v4C3 13 5.5 15.5 9 16.5 12.5 15.5 15 13 15 9.5v-4L9 2z" stroke="rgba(167,139,250,0.45)" strokeWidth="1.2"/>
    <path d="M6 9l2 2 4-4" stroke="rgba(167,139,250,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));