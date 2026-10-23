import React, { useEffect, useRef } from 'react';
import { FileText, BookOpen, Zap, ShieldCheck, Code2 } from 'lucide-react';
import { gsap } from 'gsap';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../../../../data/stats';

const iconMap = {
  FileText: FileText,
  BookOpen: BookOpen,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Code2: Code2
};

function AnimatedStat({ value, label, icon, bgImage }) {
  const cardRef = useRef(null);
  const numRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-20px" });
  const hasAnimated = useRef(false);
  const IconComponent = iconMap[icon] || FileText;

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericPart = parseInt(value, 10) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: numericPart,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = `${Math.floor(obj.val)}${suffix}`;
          }
        }
      });
    });

    return () => ctx.revert();
  }, [isInView, value]);

  return (
    <div 
      ref={cardRef}
      className="relative overflow-hidden rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-200/80 hover:border-blue-300 group cursor-pointer bg-slate-50/70 min-h-[92px] flex items-center"
    >
      {/* Shimmer Light Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none z-10" />
      {/* Crisp Visible Thematic Background Image with Soft Gradient Mask */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
          <img 
            src={bgImage} 
            alt={label} 
            className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 ease-out" 
          />
          {/* Subtle White Left-to-Right Lightening Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 group-hover:from-white/90 group-hover:via-white/70 group-hover:to-white/30 transition-all duration-300" />
        </div>
      )}

      {/* Foreground Content with High Contrast Text */}
      <div className="relative z-10 flex items-center gap-4 w-full">
        <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#0062ff] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,98,255,0.4)] shadow-xs">
          <IconComponent size={24} />
        </div>
        <div className="flex flex-col">
          <span 
            ref={numRef} 
            className="font-heading text-2xl lg:text-3xl font-extrabold text-[#0a1128] group-hover:text-[#0062ff] transition-colors leading-none"
          >
            {value}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1.5 group-hover:text-slate-900 transition-colors">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-xl p-3 sm:p-4 mt-4 md:mt-6 relative z-10 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statsData.map((stat, idx) => (
          <AnimatedStat 
            key={stat.id || idx} 
            value={stat.value} 
            label={stat.label} 
            icon={stat.icon} 
            bgImage={stat.bgImage}
          />
        ))}
      </div>
    </div>
  );
}
