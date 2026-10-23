import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Cloud, 
  Smartphone, 
  ShieldCheck, 
  Megaphone, 
  GraduationCap, 
  FileBadge, 
  Briefcase, 
  UserCheck, 
  ArrowRight
} from 'lucide-react';
import TechIcon from '../../../components/TechIcon/TechIcon';

const serviceIcons = {
  Monitor,
  Cloud,
  Smartphone,
  ShieldCheck,
  Megaphone,
  GraduationCap,
  FileBadge,
  Briefcase,
  UserCheck
};

export default function ServiceCard({ service, index = 0, onSelectService, navigate }) {
  const IconComponent = serviceIcons[service.icon] || Monitor;

  const handleClick = (e) => {
    if (e) e.preventDefault();
    if (onSelectService) {
      onSelectService(service.id);
    } else if (navigate) {
      navigate('/services/' + service.id);
    } else {
      window.history.pushState({}, '', '/services/' + service.id);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      id={`service-${service.id}`}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={handleClick}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-500 hover:border-cyan-400/70 hover:shadow-[0_20px_50px_rgba(0,180,255,0.22)] target:border-cyan-400 target:ring-2 target:ring-cyan-400/30 scroll-mt-28 cursor-pointer overflow-hidden text-slate-900"
    >
      {/* Shimmer Light Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-20" />

      {/* 1. Dynamic Dark Background Layer (Reveals Only on Hover) */}
      <div className="absolute inset-0 bg-[#0b162c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none z-0" />

      {/* 2. Respective Service Background Banner Image (Fades In on Hover) */}
      {service.bannerImage && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <img 
            src={service.bannerImage} 
            alt="" 
            className="w-full h-72 object-cover object-top opacity-35 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          {/* Smooth Vertical & Edge Fade Merge Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b162c]/65 via-35% to-[#0b162c] to-75%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c] via-[#0b162c]/40 via-80% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b162c]/60 via-transparent to-[#0b162c]/60" />
        </div>
      )}

      {/* Main Card Content */}
      <div className="relative z-10">
        {/* Top Icon Badge with Dynamic Wobble */}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0062ff] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#0062ff] group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_22px_rgba(0,98,255,0.6)]">
          <IconComponent size={26} />
        </div>

        {/* Title (Highlights with Get Started Brand Blue on Hover) */}
        <h3 className="font-heading text-xl sm:text-[1.35rem] font-bold text-[#0a1128] mb-3 leading-snug transition-colors duration-300 group-hover:text-[#38bdf8]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal transition-colors duration-300 group-hover:text-slate-200">
          {service.description}
        </p>

        {/* Bullet Points */}
        {service.bullets && service.bullets.length > 0 && (
          <ul className="space-y-2.5 mb-7">
            {service.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-tight transition-colors duration-300 group-hover:text-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0062ff] shrink-0 mt-1.5 transition-all duration-300 group-hover:bg-[#0062ff] group-hover:shadow-[0_0_10px_rgba(0,98,255,0.9)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative z-10">
        {/* Tags Pill Row with Respective Tech Logos */}
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {service.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-slate-800/80 group-hover:text-sky-200"
              >
                <TechIcon name={tag} size={13} className="shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}

        {/* Action Link & Learn More */}
        <div className="pt-4 border-t border-slate-100 transition-colors duration-300 group-hover:border-white/10 flex items-center justify-between">
          <span className="font-heading text-sm font-bold text-[#0062ff] transition-colors duration-300 group-hover:text-[#38bdf8] inline-flex items-center gap-2">
            <span>Explore Service Details</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
          <span className="text-[11px] font-semibold text-slate-400 transition-colors duration-300 group-hover:text-sky-200/80 uppercase tracking-wider">
            SHRINOVATECH
          </span>
        </div>
      </div>
    </motion.div>
  );
}
