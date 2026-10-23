import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Monitor, 
  Cloud, 
  Megaphone 
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import ProjectCard from './components/ProjectCard';
import ProjectVideoModal from './components/ProjectVideoModal';
import CallToAction from '../../components/CallToAction/CallToAction';

const SUCCESS_CATEGORIES = [
  { 
    id: 'final-year', 
    label: 'Final Year Projects', 
    icon: GraduationCap,
    title: 'Final Year Projects',
    subtitle: '100% working IEEE & industry-standard projects with source code & documentation'
  },
  { 
    id: 'web-dev', 
    label: 'Web Development', 
    icon: Monitor,
    title: 'Web Development',
    subtitle: 'High-speed, responsive & custom e-commerce and full-stack web applications'
  },
  { 
    id: 'saas', 
    label: 'SaaS Products', 
    icon: Cloud,
    title: 'SaaS Products',
    subtitle: 'Scalable multi-tenant cloud platforms, automated analytics engines & telemetry'
  },
  { 
    id: 'digital-marketing', 
    label: 'Digital Marketing', 
    icon: Megaphone,
    title: 'Digital Marketing & SEO',
    subtitle: 'Targeted local SEO, keyword ranking campaigns, schema audits, and organic search traffic growth'
  },
];

export default function ProjectsPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('final-year');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeCategoryObj = SUCCESS_CATEGORIES.find((c) => c.id === activeCategory) || SUCCESS_CATEGORIES[0];
  const ActiveIcon = activeCategoryObj.icon;

  const handlePlayVideo = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filtered = projectsData.filter((p) => {
    const pCatKey = p.categoryKey || 'final-year';
    if (activeCategory === 'final-year') return pCatKey === 'final-year';
    if (activeCategory === 'web-dev') return pCatKey === 'web-dev';
    if (activeCategory === 'saas') return pCatKey === 'saas';
    if (activeCategory === 'digital-marketing') return pCatKey === 'digital-marketing' || pCatKey === 'seo';
    return pCatKey === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden py-10 sm:py-14 bg-[#071228]">
        {/* LEFT image with right-fade */}
        <div className="absolute inset-y-0 left-0 w-1/3 sm:w-2/5 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071228]/40 via-[#071228]/80 to-[#071228]" />
        </div>

        {/* RIGHT image with left-fade */}
        <div className="absolute inset-y-0 right-0 w-1/3 sm:w-2/5 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#071228]/40 via-[#071228]/80 to-[#071228]" />
        </div>

        {/* Soft top & bottom blend gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071228]/60 via-transparent to-[#071228] pointer-events-none z-0" />

        {/* Ambient glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0062ff]/15 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Our Success · Proven Results</span>
            </div>

            {/* Title with clean letter placing and spacing */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-normal leading-tight">
              <span>Explore Our</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#3b82f6]">
                Success Stories
              </span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal tracking-normal">
              Explore live commercial client websites, cloud SaaS applications, SEO campaigns, and real student project demo videos delivered by SHRINOVATECH.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter Tabs Bar (Clean Flex-Wrap Layout - No Scrollbars) ── */}
      <section className="relative bg-white border-b border-slate-200 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {SUCCESS_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            const count = projectsData.filter((p) => {
              const pCatKey = p.categoryKey || 'final-year';
              if (cat.id === 'final-year') return pCatKey === 'final-year';
              if (cat.id === 'web-dev') return pCatKey === 'web-dev';
              if (cat.id === 'saas') return pCatKey === 'saas';
              if (cat.id === 'digital-marketing') return pCatKey === 'digital-marketing' || pCatKey === 'seo';
              return pCatKey === cat.id;
            }).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative p-[2px] rounded-full transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0 cursor-pointer ${
                  isActive ? 'shadow-md shadow-blue-500/25 scale-[1.02]' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Rotating Conic Gradient Beam on Hover / Active */}
                <span className={`absolute w-[220%] h-[220%] bg-[conic-gradient(from_0deg,_#0062ff_0%,_#00e5ff_25%,_#6366f1_50%,_#00e5ff_75%,_#0062ff_100%)] animate-spin-beam transition-opacity duration-500 pointer-events-none ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />

                {/* Inner Pill Content */}
                <span className={`relative z-10 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0062ff] text-white shadow-inner'
                    : 'bg-slate-100/90 text-slate-700 group-hover:bg-slate-900 group-hover:text-cyan-300 border border-slate-200/80 group-hover:border-transparent'
                }`}>
                  <Icon size={14} className={`transition-transform duration-300 ${isActive ? 'text-white scale-110' : 'text-slate-600 group-hover:text-cyan-300 group-hover:scale-110'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold transition-colors duration-300 ${
                    isActive 
                      ? 'bg-white/25 text-white' 
                      : 'bg-slate-200 text-slate-600 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'
                  }`}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-12 sm:py-16 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header (Matching ServicesPage Layout) */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] shrink-0">
                <ActiveIcon size={22} />
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0a1128]">
                  {activeCategoryObj.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {activeCategoryObj.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-bold text-[#0062ff] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full hidden sm:inline-block">
                {filtered.length} Projects Available
              </span>
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onPlayVideo={handlePlayVideo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-heading text-lg font-bold text-slate-800 mb-1">
                No showcases available in this category
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* ── Global Call to Action ── */}
      <CallToAction navigate={navigate} />

      {/* ── Video Modal ── */}
      <ProjectVideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
