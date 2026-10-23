import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left'} ${className}`}>
      {badge && (
        <span className={`inline-block font-heading text-xs md:text-sm font-bold tracking-wider uppercase mb-2 ${isDark ? 'text-accent-sky' : 'text-brand-600'}`}>
          {badge}
        </span>
      )}
      {title && (
        <h2 className={`font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[#0b1528]'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-sm md:text-base leading-relaxed mt-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
