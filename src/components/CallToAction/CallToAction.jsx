import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction({ onOpenDemoModal, navigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onOpenDemoModal) {
      onOpenDemoModal();
    } else if (navigate) {
      navigate('/contact');
    }
  };

  return (
    <section id="contact" className="py-6 pb-12 bg-white overflow-hidden">
      <div data-content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group relative bg-gradient-to-r from-[#0052db] via-[#0062ff] to-[#00d2ff] rounded-2xl p-6 sm:p-8 md:p-9 overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,98,255,0.3)]">
          
          {/* Ambient Light Orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/15 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Decorative Paper Airplane & Looping Dashed Flight Trail */}
          <div className="absolute right-0 top-0 bottom-0 w-72 sm:w-96 md:w-[420px] pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <svg viewBox="0 0 380 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Main Looping Flight Trail */}
              <path 
                d="M30 145 C90 145, 140 140, 180 110 C220 80, 240 40, 210 25 C180 10, 150 40, 180 75 C210 110, 270 120, 315 65 C330 45, 340 30, 348 20" 
                stroke="rgba(255, 255, 255, 0.65)" 
                strokeWidth="1.6" 
                strokeDasharray="4 4" 
                strokeLinecap="round"
              />
              {/* Secondary Sky Loop Arc above/behind the plane */}
              <path 
                d="M315 65 C335 30, 365 15, 375 45 C382 70, 355 95, 330 75" 
                stroke="rgba(255, 255, 255, 0.4)" 
                strokeWidth="1.2" 
                strokeDasharray="3 3" 
                strokeLinecap="round"
              />
              {/* 3D Folded Origami Paper Airplane */}
              <g transform="translate(332, 10) rotate(-18)">
                {/* Left Outer Wing */}
                <path 
                  d="M40 0 L0 34 L18 24 Z" 
                  fill="rgba(255, 255, 255, 0.2)" 
                  stroke="white" 
                  strokeWidth="1.6" 
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]"
                />
                {/* Right Outer Wing */}
                <path 
                  d="M40 0 L32 42 L18 24 Z" 
                  fill="rgba(255, 255, 255, 0.35)" 
                  stroke="white" 
                  strokeWidth="1.6" 
                  strokeLinejoin="round"
                />
                {/* Bottom Center Keel Crease */}
                <path 
                  d="M18 24 L22 38 L32 42 Z" 
                  fill="rgba(255, 255, 255, 0.55)" 
                  stroke="white" 
                  strokeWidth="1.3" 
                  strokeLinejoin="round"
                />
                {/* Center Spine Crease Line */}
                <path 
                  d="M40 0 L18 24" 
                  stroke="white" 
                  strokeWidth="1.5" 
                />
              </g>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-xs mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white drop-shadow-xs">
                  Start Your Journey
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-extrabold text-white tracking-tight leading-snug">
                Have an Idea or Need Guidance?
              </h2>
              <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed font-normal">
                Let's turn your ideas into real solutions and your goals into achievements with industry-ready mentorship and technology.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={handleClick}
                className="group/btn relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0062ff] font-heading text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {/* Shimmer light reflection sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100/60 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />

                <span className="relative z-10">Get Started Now</span>
                <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
