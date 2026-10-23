import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const progressPercent = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
      setScrollProgress(progressPercent);

      // Show scroll-to-top button once scrolled past 120px
      if (currentScroll > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 283 is the circumference for r = 45 (2 * PI * 45 ≈ 282.74)
  const circumference = 283;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* 1. Viewport Top Edge Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-slate-200/40 pointer-events-none">
        <div 
          className="progress-bar h-full bg-gradient-to-r from-[#0062ff] via-cyan-400 to-[#38bdf8] shadow-[0_1px_6px_rgba(0,98,255,0.4)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Circular Progress Ring & Scroll-To-Top Button */}
      <div 
        className={`scroll-to-top fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          className="group relative w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg hover:shadow-cyan-500/25 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-[#0062ff] dark:hover:text-cyan-300 transition-all duration-300 hover:scale-110 cursor-pointer"
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          {/* Circular SVG Progress Ring */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" 
            viewBox="0 0 100 100"
          >
            {/* Track Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              className="text-slate-200/60 dark:text-slate-800"
            />
            {/* Dynamic Progress Circle */}
            <circle
              className="progress-circle-bar text-[#0062ff] dark:text-cyan-400 transition-all duration-100 ease-out"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#scrollGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
            {/* Vibrant Gradient Def */}
            <defs>
              <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0062ff" />
                <stop offset="50%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Upward Icon */}
          <ChevronUp 
            size={20} 
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" 
          />
        </button>
      </div>
    </>
  );
}
