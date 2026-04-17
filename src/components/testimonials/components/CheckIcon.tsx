import React, { memo } from 'react';

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.3" />
    <path d="M3.5 6L5.2 7.8L8.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default memo(CheckIcon);