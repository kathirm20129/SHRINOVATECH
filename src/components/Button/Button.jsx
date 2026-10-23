import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  rounded = 'lg',
  showArrow = false,
  arrowType = 'arrow',
  href, 
  onClick, 
  className = '', 
  ...props 
}) {
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  }[rounded] || rounded;

  // Base styling with relative overflow-hidden for shimmer & micro-interactions
  const baseClasses = `group relative overflow-hidden inline-flex items-center justify-center font-heading font-semibold ${roundedClasses} transition-all duration-300 cursor-pointer whitespace-nowrap select-none`;

  // Size styling
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-[0.9375rem] gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  }[size] || "px-6 py-2.5 text-sm gap-2";

  // Variant styling with glowing shadows and hover feedback
  const variantClasses = {
    primary: "bg-[#0062ff] hover:bg-[#0051d9] text-white shadow-md hover:shadow-[0_10px_25px_rgba(0,98,255,0.4)] border border-[#0062ff]",
    secondary: "bg-white hover:bg-blue-50/60 text-[#0062ff] border-2 border-[#0062ff] hover:shadow-md",
    outline: "bg-white hover:bg-blue-50/50 text-slate-800 hover:text-[#0062ff] border border-slate-300 hover:border-[#0062ff] shadow-sm",
    white: "bg-white hover:bg-slate-50 text-[#0062ff] border border-white shadow-lg hover:shadow-2xl",
    link: "bg-transparent text-[#0062ff] hover:text-[#0051d9] p-0 text-sm font-semibold hover:underline shadow-none",
  }[variant] || "";

  const buttonClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const renderContent = () => (
    <>
      {/* Glossy Shimmer Light Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

      <span className="relative z-10">{children}</span>
      {showArrow && arrowType === 'arrow' && (
        <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" size={16} />
      )}
      {showArrow && arrowType === 'chevron' && (
        <ChevronRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" size={16} />
      )}
    </>
  );

  const springProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={buttonClasses} 
        onClick={onClick} 
        {...springProps}
        {...props}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type="button" 
      className={buttonClasses} 
      onClick={onClick} 
      {...springProps}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
}
