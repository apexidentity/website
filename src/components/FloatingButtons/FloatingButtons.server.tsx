import React from 'react';
import FloatingButtonsClient from './FloatingButtonsClient';

/**
 * ENTRY POINT
 * This is a Server Component. It renders the Client Component 
 * which handles the scroll-based visibility and interactions.
 */
export default function FloatingButtons() {
  return <FloatingButtonsClient />;
}