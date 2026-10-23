import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  ExternalLink,
  Brain, 
  Shield, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  Gamepad2,
  Monitor,
  Cloud,
  Smartphone,
  Megaphone,
  FileBadge,
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
  TrendingUp,
  Search
} from 'lucide-react';
import TechIcon from '../../../components/TechIcon/TechIcon';

const projectIcons = {
  Brain,
  Shield,
  ShieldCheck,
  BarChart3,
  Globe,
  Gamepad2,
  Monitor,
  Cloud,
  Smartphone,
  Megaphone,
  FileBadge,
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
  TrendingUp,
  Search
};

export default function ProjectCard({ project, index = 0, onPlayVideo }) {
  const IconComponent = projectIcons[project.icon] || Trophy;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={() => {
        if (project.liveUrl && !project.youtubeId) {
          window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
        } else if (onPlayVideo) {
          onPlayVideo(project);
        }
      }}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-500 hover:border-cyan-400/70 hover:shadow-[0_20px_50px_rgba(0,180,255,0.22)] cursor-pointer overflow-hidden text-slate-900"
    >
      {/* Shimmer Light Sweep on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-20" />

      {/* 1. Dynamic Dark Background Layer (Reveals Only on Hover) */}
      <div className="absolute inset-0 bg-[#0b162c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none z-0" />

      {/* 2. Respective Project Background Banner Image (Fades In on Hover) */}
      {project.bannerImage && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <img 
            src={project.bannerImage} 
            alt="" 
            className="w-full h-72 object-cover object-top opacity-35 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b162c]/65 via-35% to-[#0b162c] to-75%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c] via-[#0b162c]/40 via-80% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b162c]/60 via-transparent to-[#0b162c]/60" />
        </div>
      )}

      {/* Main Card Content */}
      <div className="relative z-10">
        {/* Top Icon Badge & Category Pill with Dynamic Wobble */}
        <div className="flex items-center justify-between gap-3.5 mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0062ff] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#0062ff] group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(0,98,255,0.5)]">
            <IconComponent size={24} />
          </div>

          <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wide shrink-0 whitespace-nowrap transition-all duration-300 group-hover:bg-[#0062ff]/20 group-hover:border-blue-400/40 group-hover:text-sky-300">
            {project.categoryLabel || project.category}
          </span>
        </div>

        {/* Title (Highlights with Get Started Brand Blue on Hover) */}
        <h3 className="font-heading text-xl sm:text-[1.3rem] font-bold text-[#0a1128] mb-3 leading-snug transition-colors duration-300 group-hover:text-[#38bdf8]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal transition-colors duration-300 group-hover:text-slate-200">
          {project.description}
        </p>

        {/* Stats Highlight Pill */}
        {project.stats && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/15 group-hover:text-sky-200 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0062ff] transition-all duration-300 group-hover:bg-[#0062ff] group-hover:shadow-[0_0_10px_rgba(0,98,255,0.9)]" />
            <span>{project.stats}</span>
          </div>
        )}
      </div>

      <div className="relative z-10">
        {/* Tags Pill Row with Tech Logos */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, tIdx) => (
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

        {/* Action Link */}
        <div className="pt-4 border-t border-slate-100 transition-colors duration-300 group-hover:border-white/10 flex items-center justify-between">
          {project.liveUrl ? (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-heading text-sm font-bold text-[#0062ff] transition-colors duration-300 group-hover:text-[#38bdf8] inline-flex items-center gap-2"
            >
              <span>Visit Live Website</span>
              <span className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#0062ff]/20 text-[#0062ff] group-hover:text-[#38bdf8] border border-blue-200 group-hover:border-blue-400/40 flex items-center justify-center transition-all">
                <ExternalLink size={11} />
              </span>
            </a>
          ) : (
            <span className="font-heading text-sm font-bold text-[#0062ff] transition-colors duration-300 group-hover:text-[#38bdf8] inline-flex items-center gap-2">
              <span>Watch Live Demo</span>
              <span className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#0062ff]/20 text-[#0062ff] group-hover:text-[#38bdf8] border border-blue-200 group-hover:border-blue-400/40 flex items-center justify-center transition-all">
                <Play size={10} className="fill-current ml-0.5" />
              </span>
            </span>
          )}
          <span className="text-[11px] font-semibold text-slate-400 transition-colors duration-300 group-hover:text-sky-200/80 uppercase tracking-wider">
            {project.liveUrl ? 'Live Client Site' : 'SHRINOVATECH'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
