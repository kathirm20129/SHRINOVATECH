import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MessageSquare, Play } from 'lucide-react';

import TechIcon from '../../../components/TechIcon/TechIcon';


export default function ProjectVideoModal({ project, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-start justify-center pt-16 pb-6 px-4 sm:px-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0b162c] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 text-white mt-4 mb-8"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/80 bg-[#071228]/80">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-bold border border-cyan-400/30">
                {project.categoryLabel || project.category}
              </span>
              {project.stats && (
                <span className="text-xs text-slate-300 font-medium hidden sm:inline-block">
                  · {project.stats}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Media Player / Live Website Preview Area */}
          <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
            {project.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : project.liveUrl ? (
              <div className="relative w-full h-full group flex items-center justify-center">
                {project.bannerImage && (
                  <img 
                    src={project.bannerImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top opacity-55" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c] via-[#0b162c]/65 to-[#0b162c]/40" />
                <div className="relative z-10 text-center px-4 max-w-lg">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold mb-3 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Production Store
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5">
                    Developed &amp; deployed by SHRINOVATECH
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062ff] hover:bg-sky-400 text-white hover:text-slate-950 font-heading text-sm font-bold shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
                  >
                    <span>Visit Live Website ({project.liveUrl.replace('https://', '').replace('/', '')})</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                <Play size={48} className="text-cyan-400 mb-3" />
                <p className="text-sm">Video demo available upon project request.</p>
              </div>
            )}
          </div>

          {/* Modal Details & Action */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            {project.tags && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2.5">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                    >
                      <TechIcon name={tag} size={14} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Project Inquiry CTAs */}
            <div className="pt-4 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <ExternalLink size={16} />
                  <span>Open Live Website</span>
                </a>
              ) : (
                <a
                  href={`https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hello%20Shrinovatech,%20I%20am%20interested%20in%20the%20${encodeURIComponent(project.title)}%20project%20code%20and%20documentation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Request Full Source Code & PPT</span>
                </a>
              )}

              {project.youtubeUrl ? (
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <a
                  href={`https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hello%20Shrinovatech,%20I%20am%20inquiring%20about%20your%20project:%20${encodeURIComponent(project.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>Inquire on WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
