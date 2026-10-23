import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Award, 
  ChevronRight, 
  ChevronDown,
  Download,
  Home, 
  MessageSquare,
  BookOpen,
  Code2,
  FolderGit2
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import TechIcon from '../../components/TechIcon/TechIcon';
import CallToAction from '../../components/CallToAction/CallToAction';

// Syllabus PDF Imports
import aiMlPdf from '../../assets/Syllabus/AI_ML_Mastery_Syllabus.pdf';
import cloudPdf from '../../assets/Syllabus/Cloud_Infrastructure_Syllabus.pdf';
import cyberPdf from '../../assets/Syllabus/Cybersecurity_Bug_Bounty_Syllabus.pdf';
import dataSciencePdf from '../../assets/Syllabus/Data_Science_Business_Analytics_Syllabus.pdf';
import fullStackPdf from '../../assets/Syllabus/MERN_NextJS_Syllabus.pdf';
import mobilePdf from '../../assets/Syllabus/Mobile_App_Development_Syllabus.pdf';
import qaPdf from '../../assets/Syllabus/Software_Testing_QA_Automation_Syllabus.pdf';

const syllabusPdfs = {
  'ai-ml': aiMlPdf,
  'full-stack': fullStackPdf,
  'cyber-security': cyberPdf,
  'data-science': dataSciencePdf,
  'mobile-app': mobilePdf,
  'cloud-devops': cloudPdf,
  'software-testing': qaPdf,
};

export default function CourseDetailPage({ courseId, navigate }) {
  const course = coursesData.find(c => c.id === courseId) || coursesData[0];
  const syllabusPdf = syllabusPdfs[course?.id] || aiMlPdf;
  const [openModules, setOpenModules] = useState({ 0: true });

  const toggleModule = (idx) => {
    setOpenModules(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Scroll to top on load or when course changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenModules({ 0: true });
  }, [courseId]);

  if (!course) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 1. Hero Section (Right-Aligned Banner Image with Smooth Left Fade) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#071228] text-white relative overflow-hidden">
        
        {/* Right-Aligned High-Definition Background Image with Left Fade Effect */}
        {course.bannerImage && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img 
              src={course.bannerImage} 
              alt=""
              className="absolute right-0 top-0 w-full md:w-3/5 lg:w-[55%] h-full object-cover object-center opacity-80 lg:opacity-85"
            />
            {/* Horizontal Left-to-Right Fade Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071228] via-[#071228]/95 via-35% md:via-45% to-transparent to-90%" />
            {/* Vertical Blend Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-[#071228]/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#071228]/80 via-transparent to-[#071228]" />
          </div>
        )}

        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-1/3 w-[450px] h-[450px] bg-[#0062ff]/15 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-8">
            <button 
              onClick={() => {
                if (navigate) navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Home size={14} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="text-slate-600" />
            <button 
              onClick={() => {
                if (navigate) navigate('/courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Courses
            </button>
            <ChevronRight size={13} className="text-slate-600" />
            <span className="text-cyan-400 font-semibold">{course.title}</span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-bold uppercase tracking-widest text-cyan-400">
                  {course.badge || 'LIVE MENTORSHIP'}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300">
                  {course.duration || '8-12 Weeks Bootcamp'}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15]">
                {course.title}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                {course.heroSubtitle || course.description}
              </p>

              {/* Technologies Tag Bar */}
              {course.tags && (
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Skills & Technologies Mastered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-100 backdrop-blur-sm"
                      >
                        <TechIcon name={tag} size={14} className="shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hello%20Shrinovatech,%20I%20am%20interested%20in%20enrolling%20in%20the%20${encodeURIComponent(course.title)}%20course`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-heading text-sm font-bold shadow-lg shadow-cyan-400/25 transition-all cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Enroll on WhatsApp</span>
                </a>
                <a
                  href={syllabusPdf}
                  download={`${(course.title || 'Course').replace(/[^a-zA-Z0-9]/g, '_')}_Syllabus.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading text-sm font-semibold border border-white/20 transition-all cursor-pointer shadow-sm hover:border-cyan-400/50"
                >
                  <Download size={16} className="text-cyan-400" />
                  <span>Download Syllabus</span>
                </a>
              </div>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-4">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Award size={24} />
                  <span className="font-heading font-bold text-sm text-white">Course Inclusions</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>Live 1-on-1 Code Reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>3+ Production Capstone Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>Global Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>Placement & Referral Support</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Detailed Syllabus & Modules Section */}
      <section id="curriculum" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0062ff] block mb-2">
              COMPREHENSIVE SYLLABUS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1128] tracking-tight">
              What You Will Learn & Build
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 max-w-3xl">
              Designed from the ground up to take you from foundational principles to production-level engineering proficiency.
            </p>
          </div>

          {/* Modules List (Interactive Dropdown Accordion) */}
          <div className="space-y-3.5">
            {(course.modules || course.bullets || []).map((mod, idx) => {
              const isOpen = !!openModules[idx];
              const title = typeof mod === 'string' ? mod : mod.title;
              const topics = typeof mod === 'object' ? mod.topics : null;
              const desc = typeof mod === 'object' ? mod.desc : null;

              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#0062ff]/40 shadow-sm ring-1 ring-[#0062ff]/20' 
                      : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleModule(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      <span className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-heading font-extrabold text-sm shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-[#0062ff] text-white shadow-md shadow-[#0062ff]/25' 
                          : 'bg-blue-50 text-[#0062ff] border border-blue-100 group-hover:bg-blue-100/70'
                      }`}>
                        {idx + 1}
                      </span>
                      <h4 className="font-heading text-sm sm:text-base font-bold text-[#0a1128] tracking-tight">
                        {title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                      {topics && topics.length > 0 && (
                        <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-500 bg-slate-100/90 px-2.5 py-1 rounded-full border border-slate-200">
                          {topics.length} topics
                        </span>
                      )}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? 'bg-blue-50 text-[#0062ff]' : 'text-slate-400 group-hover:text-slate-700'
                      }`}>
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0062ff]' : ''}`} 
                        />
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Content */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 border-t border-slate-100 bg-gradient-to-b from-blue-50/20 to-transparent animate-fadeIn">
                      {desc && (
                        <p className="text-xs sm:text-sm text-slate-600 mb-3.5 leading-relaxed">
                          {desc}
                        </p>
                      )}
                      
                      {topics && topics.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {topics.map((topic, tIdx) => {
                            const cleanTopic = typeof topic === 'string' 
                              ? topic.replace(/^\d+(\.\d+)*[\s.:-]+\s*/, '') 
                              : topic;
                            return (
                              <div 
                                key={tIdx} 
                                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-xs sm:text-sm text-slate-700 font-medium shadow-xs"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0062ff] shrink-0" />
                                <span className="leading-snug">{cleanTopic}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Capstone Project Showcase */}
          {course.capstones && (
            <div className="pt-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0a1128] mb-4 flex items-center gap-2">
                <FolderGit2 size={22} className="text-[#0062ff]" />
                <span>Real-World Capstone Projects</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.capstones.map((cap, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h5 className="font-heading text-sm font-bold text-[#0a1128] mb-1">{cap.title}</h5>
                    <p className="text-xs text-slate-500">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. Global Call to Action */}
      <CallToAction navigate={navigate} />

    </div>
  );
}
