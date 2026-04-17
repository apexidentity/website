import React, { memo } from 'react';

export const WhatsAppIcon = memo(() => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.464 0 .104 5.36.101 11.946c-.001 2.107.549 4.162 1.594 5.977L0 24l6.234-1.637a11.93 11.93 0 005.713 1.453h.005c6.585 0 11.946-5.361 11.948-11.947.001-3.189-1.24-6.184-3.437-8.381zM12.05 21.785h-.004a9.916 9.916 0 01-5.053-1.38l-.362-.215-3.761.986 1.003-3.661-.236-.376a9.908 9.908 0 01-1.518-5.288C2.121 6.447 6.624 1.944 12.054 1.944c2.627.001 5.097 1.025 6.952 2.882a9.788 9.788 0 012.876 6.955c-.002 5.432-4.505 9.004-9.832 9.004zm5.39-7.352c-.296-.148-1.751-.864-2.023-.963-.271-.1-.468-.148-.665.149-.197.296-.764.963-.937 1.161-.173.198-.345.222-.641.074-1.76-.879-2.915-1.568-4.072-3.558-.308-.529.308-.491.879-1.637.098-.196.049-.369-.025-.518-.074-.148-.665-1.601-.911-2.192-.24-.576-.484-.496-.665-.505l-.566-.01c-.197 0-.518.074-.789.37-.271.296-1.035 1.013-1.035 2.466s1.059 2.861 1.207 3.058c.148.197 2.081 3.178 5.04 4.459.704.304 1.253.485 1.681.621.706.225 1.349.193 1.857.117.566-.084 1.751-.715 1.998-1.406.247-.691.247-1.284.173-1.407-.074-.122-.271-.197-.566-.345z" />
  </svg>
));

export const InstagramIcon = memo(() => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
  </svg>
));

export const FacebookIcon = memo(() => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13.5 8.5h-1A.5.5 0 0012 9v2h2.5L14 13.5h-2V20h-2.5v-6.5H8V11h1.5V9a3 3 0 013-3h1.5v2.5z" fill="currentColor" />
  </svg>
));

WhatsAppIcon.displayName = 'WhatsAppIcon';
InstagramIcon.displayName = 'InstagramIcon';
FacebookIcon.displayName = 'FacebookIcon';