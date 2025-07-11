import React from 'react';

const BuildingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V3.663l1.262-.841a2.25 2.25 0 0 1 2.474 0l1.262.841V21m-4.5 0h4.5" />
  </svg>
);

export default BuildingIcon;
