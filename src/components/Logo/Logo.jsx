import React from 'react';
import logoImage from '../../assets/Logo.webp';
import logoWhiteTextImage from '../../assets/Logo-white-text.webp';

export default function Logo({ light = false, className = '' }) {
  return (
    <a 
      href="#home" 
      className={`inline-flex items-center no-underline select-none transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
      aria-label="SHRINOVATECH Home"
    >
      <img 
        src={light ? logoWhiteTextImage : logoImage} 
        alt="SHRINOVATECH - Innovate Learn Grow" 
        width="144"
        height="48"
        decoding="async"
        className={`h-11 sm:h-12 w-auto object-contain ${className}`}
      />
    </a>
  );
}
