import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Shield, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Home, 
  LayoutGrid, 
  Award, 
  Users, 
  Briefcase 
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import CourseCard from './components/CourseCard';
import CallToAction from '../../components/CallToAction/CallToAction';
import Button from '../../components/Button/Button';

const courseCommitments = [
  {
    title: '100% Practical & Live Coding',
    subtitle: 'Zero boring theory, build real systems from day 1'
  },
  {
    title: '1-on-1 Mentor Code Reviews',
    subtitle: 'Direct architecture feedback from senior engineers'
  },
  {
    title: 'Production Capstone Projects',
    subtitle: 'Deploy full-stack cloud projects to your GitHub'
  },
  {
    title: 'Placement & Referral Support',
    subtitle: 'ATS resume makeover, mock interviews & referrals'
  }
];

export default function CoursesPage({ navigate, onSelectCourse }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCardClick = (courseId) => {
    if (navigate) {
      navigate('/courses/' + courseId);
    } else if (onSelectCourse) {
      onSelectCourse(courseId);
    }
  };

  const categories = [
    { id: 'all', label: 'All Courses', icon: LayoutGrid, count: '7 Programs' },
    { id: 'software', label: 'Software & Web', icon: Code2, count: '2 Programs' },
    { id: 'ai-data', label: 'AI & Data Science', icon: Brain, count: '2 Programs' },
    { id: 'security-cloud', label: 'Security & Cloud', icon: Shield, count: '3 Programs' }
  ];

  const filteredCourses = coursesData.filter(course => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'software') {
      return ['full-stack', 'mobile-app'].includes(course.id);
    }
    if (activeCategory === 'ai-data') {
      return ['ai-ml', 'data-science'].includes(course.id);
    }
    if (activeCategory === 'security-cloud') {
      return ['cyber-security', 'software-testing', 'cloud-devops'].includes(course.id);
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 1. Page Header & Breadcrumbs with Right-Aligned Background Image & Left Fade (DARK BANNER) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#071228] text-white relative overflow-hidden">
        
        {/* Right-Aligned High-Definition Background Image with Left Fade Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
            alt=""
            className="absolute right-0 top-0 w-full md:w-3/5 lg:w-[55%] h-full object-cover object-center opacity-75"
          />
          {/* Horizontal Left-to-Right Fade Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071228] via-[#071228]/95 via-35% md:via-45% to-transparent to-90%" />
          {/* Vertical Blend Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-[#071228]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071228]/80 via-transparent to-[#071228]" />
        </div>

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
            <span className="text-cyan-400 font-semibold">Courses</span>
          </nav>

          {/* Page Heading */}
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-bold uppercase tracking-widest text-cyan-400">
              INDUSTRY-READY TRAINING
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="text-white">Live Mentor-Led Courses &amp; </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#3b82f6]">Real Projects</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal pt-1">
              Master cutting-edge tech through hands-on development, code reviews, and production deployments. 100% practical curriculum designed by senior software architects.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Domain Filter Bar (Dynamic Animated Beam Tabs - Scrolls Naturally) */}
      <section className="relative bg-white border-b border-slate-200 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2.5 sm:gap-4 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative p-[2px] rounded-full transition-all duration-300 overflow-hidden flex items-center justify-center shrink-0 cursor-pointer ${
                  isActive ? 'shadow-lg shadow-blue-500/25 scale-[1.02]' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Rotating Conic Gradient Beam on Hover / Active (Cruip CTA Effect) */}
                <span className={`absolute w-[220%] h-[220%] bg-[conic-gradient(from_0deg,_#0062ff_0%,_#00e5ff_25%,_#6366f1_50%,_#00e5ff_75%,_#0062ff_100%)] animate-spin-beam transition-opacity duration-500 pointer-events-none ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />

                {/* Inner Pill Content */}
                <span className={`relative z-10 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0062ff] text-white shadow-inner'
                    : 'bg-slate-100/90 text-slate-700 group-hover:bg-slate-900 group-hover:text-cyan-300 border border-slate-200/80 group-hover:border-transparent'
                }`}>
                  <Icon size={16} className={`transition-transform duration-300 ${isActive ? 'text-white scale-110' : 'text-slate-600 group-hover:text-cyan-300 group-hover:scale-110'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold transition-colors duration-300 ${
                    isActive 
                      ? 'bg-white/25 text-white' 
                      : 'bg-slate-200 text-slate-600 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'
                  }`}>
                    {cat.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Main Courses Catalog Grid (WHITE BACKGROUND) */}
      <section className="py-14 sm:py-20 bg-slate-50/60 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course, idx) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                index={idx} 
                navigate={navigate}
                onSelectCourse={handleCardClick}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Practical Training Guarantees */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0062ff] block mb-2">
              WHY TRAIN AT SHRINOVATECH
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1128] tracking-tight">
              Our Training Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCommitments.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] mb-4">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0a1128] mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Call To Action */}
      <CallToAction navigate={navigate} />

    </div>
  );
}
