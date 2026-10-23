import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import TechIcon from '../../../../components/TechIcon/TechIcon';
import { testimonials } from '../../../../data/testimonials';

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Responsive items per view
  const itemsPerPage = 3;
  const maxPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxPages) % maxPages);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [autoplay, maxPages]);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section 
      id="success" 
      className="pt-16 pb-6 sm:pt-20 sm:pb-8 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div data-content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-900/10 shadow-xs mb-3.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062ff]"></span>
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent">
                Student &amp; Client Reviews
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1128] tracking-tight">
              What Students &amp; Clients <span className="bg-gradient-to-r from-[#0062ff] to-[#00a6ff] bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 font-normal leading-relaxed">
              Real feedback from students and clients across Bengaluru, Chennai, Erode, and beyond who built projects with Shrinovatech.
            </p>
          </div>

          {/* Carousel Slider Navigation Controls */}
          {maxPages > 1 && (
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-[#0062ff] hover:border-[#0062ff] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                aria-label="Previous Testimonial Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-1.5 px-2">
                {[...Array(maxPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-7 bg-[#0062ff]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-[#0062ff] hover:border-[#0062ff] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                aria-label="Next Testimonial Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Testimonials 3-Column Grid with Animated Carousel Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((item, idx) => (
              <motion.div
                key={`${currentIndex}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Decorative Quote Watermark Icon */}
                <div className="absolute top-5 right-5 text-blue-50 group-hover:text-blue-100/70 transition-colors pointer-events-none -z-0">
                  <Quote size={46} className="rotate-180" />
                </div>

                <div className="relative z-10">
                  {/* Rating Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      <span>Verified Student</span>
                    </span>
                  </div>

                  {/* Student Review Quote */}
                  <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-normal italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info & City Badge */}
                <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img 
                      src={item.avatar} 
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-blue-100 shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h4 className="font-heading text-sm font-bold text-[#0a1128] group-hover:text-[#0062ff] transition-colors leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.role}
                      </p>
                      {item.college && (
                        <p className="text-[11px] text-slate-500 font-normal flex items-center gap-1 mt-0.5" title={item.college}>
                          <GraduationCap size={12} className="text-[#0062ff] shrink-0" />
                          <span className="truncate">{item.college}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location Tag */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-full shrink-0 self-start mt-0.5">
                    <MapPin size={11} className="text-[#0062ff]" />
                    <span>{item.location}</span>
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
