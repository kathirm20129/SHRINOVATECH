import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from '../../../../components/TechIcon/TechIcon';
import { whyChooseUsData } from '../../../../data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="pt-8 pb-14 sm:pt-10 sm:pb-18 bg-slate-50/50 border-t border-slate-200/60">
      <div data-content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest block mb-2 bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent animate-gradient-flow">
            OUR CORE ADVANTAGES
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a1128]">
            Why Choose <span className="bg-gradient-to-r from-[#1a3a6e] via-[#0062ff] to-[#00c6ff] bg-clip-text text-transparent animate-gradient-flow">SHRINOVATECH?</span>
          </h2>
        </div>

        {/* 6 Features Interactive Grid with Real Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {whyChooseUsData.map((item, idx) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
            >
              {/* Shimmer Light Sweep on Hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
              
              {/* Rounded Brand Logo Container with Hover Scaling & Tilt */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-50/80 group-hover:border-blue-200 group-hover:shadow-[0_0_20px_rgba(0,98,255,0.25)]">
                <TechIcon name={item.brandLogo} size={28} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xs sm:text-sm font-bold text-[#0a1128] mb-1.5 leading-snug group-hover:text-[#0062ff] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[0.75rem] text-slate-500 leading-snug font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
