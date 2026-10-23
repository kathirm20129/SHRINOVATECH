import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Handshake, 
  Trophy, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';

const successIcons = {
  GraduationCap,
  Code,
  Handshake,
  Trophy,
  Briefcase
};

export default function SuccessCard({ story }) {
  const IconComponent = successIcons[story.icon] || Trophy;

  return (
    <div className="group relative bg-white text-slate-900 border border-slate-200/90 rounded-2xl flex flex-col cursor-pointer
      transition-all duration-500 ease-out
      hover:-translate-y-2
      hover:border-cyan-400/60
      hover:shadow-[0_20px_50px_rgba(0,180,255,0.22)]
      overflow-hidden shadow-sm
    ">
      {/* Shimmer Light Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-20" />

      {/* 1. Dynamic Dark Background Layer (Reveals Only on Hover) */}
      <div className="absolute inset-0 bg-[#0b162c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none z-0" />

      {/* Top Image Container — expands on hover via max-height */}
      <div
        className="relative w-full overflow-hidden bg-slate-100 z-10"
        style={{
          height: '11rem',
          transition: 'height 0.5s cubic-bezier(0.4,0,0.2,1)',
        }}
        onMouseEnter={e => e.currentTarget.style.height = '15rem'}
        onMouseLeave={e => e.currentTarget.style.height = '11rem'}
      >
        {/* Image zooms in on hover */}
        <img 
          src={story.image} 
          alt={story.alt || story.title} 
          className="w-full h-full object-cover object-center
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
          loading="lazy"
        />

        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Hover floating title at bottom of image */}
        <div className="absolute bottom-4 left-4 right-4
          translate-y-3 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500 delay-75
        ">
          <span className="text-[#38bdf8] text-[0.6875rem] font-bold uppercase tracking-[0.12em] drop-shadow">
            {story.title}
          </span>
        </div>
      </div>

      {/* Floating Blue Icon Badge — sits below image */}
      <div className="relative z-20 ml-4 -mt-3.5 mb-0">
        <div className="w-8 h-8 rounded-lg bg-blue-50 border-2 border-white shadow-md flex items-center justify-center text-[#0062ff]
          transition-all duration-300 ease-out
          group-hover:bg-[#0062ff] group-hover:border-[#0b162c] group-hover:text-white
          group-hover:w-10 group-hover:h-10 group-hover:rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/50
        ">
          <IconComponent size={16} />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-2.5 pb-5 flex flex-col flex-grow text-left relative z-10">
        <h3 className="font-heading text-[0.9375rem] font-bold text-[#0a1128] mb-1.5 leading-snug
          transition-colors duration-300 group-hover:text-[#38bdf8]
        ">
          {story.title}
        </h3>
        <p className="text-xs sm:text-[0.8125rem] text-slate-600 leading-relaxed mb-4 flex-grow font-normal
          transition-colors duration-300 group-hover:text-slate-200
        ">
          {story.description}
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-[#0062ff] transition-colors duration-300 group-hover:text-[#38bdf8] group/link"
        >
          <span>{story.linkText || 'View Stories'}</span>
          <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1.5" />
        </a>
      </div>
    </div>
  );
}
