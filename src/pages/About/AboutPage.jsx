import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Home,
  Compass,
  ArrowRight,
  ShieldCheck,
  Globe,
  Layers,
  Sparkles,
  ArrowUpRight,
  GraduationCap,
  Code2,
  Rocket
} from 'lucide-react';
import TechIcon from '../../components/TechIcon/TechIcon';
import CallToAction from '../../components/CallToAction/CallToAction';
import sLogo from '../../assets/S logo.webp';
import textLogo from '../../assets/Text logo.webp';

export default function AboutPage({ navigate }) {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const learnTopics = [
    { name: 'AI & Machine Learning', icon: 'python', desc: 'LLMs & Deep Learning' },
    { name: 'Data Science & Analytics', icon: 'postgres', desc: 'Big Data & Insights' },
    { name: 'Full Stack Development', icon: 'react', desc: 'React, Node & Modern Web' },
    { name: 'Mobile Development', icon: 'react native', desc: 'iOS & Android Apps' },
    { name: 'Cyber Security & Defense', icon: 'cyber', desc: 'VAPT & Ethical Hacking' },
    { name: 'Software Testing & QA', icon: 'docker', desc: 'Automated Test Systems' },
    { name: 'Cloud & DevOps', icon: 'aws', desc: 'AWS & Infrastructure' }
  ];

  const buildTopics = [
    { name: 'Website & Web Apps', icon: 'nextjs', desc: 'High-Performance Modern Web' },
    { name: 'SaaS Architecture', icon: 'docker', desc: 'Scalable Cloud Platforms' },
    { name: 'Product Engineering', icon: 'react', desc: 'End-to-End Digital Products' },
    { name: 'Cybersecurity & VAPT', icon: 'burp', desc: 'Auditing & System Hardening' },
    { name: 'E-Commerce Portals', icon: 'wordpress', desc: 'Scalable Online Solutions' },
    { name: 'Digital Growth & SEO', icon: 'seo', desc: 'Organic Search & Visibility' }
  ];

  const growTopics = [
    { name: 'Final Year Projects', icon: 'python', desc: 'Working Code & Prototypes' },
    { name: 'Resume & LinkedIn Optimization', icon: 'linkedin', desc: 'ATS-Friendly & Professional Branding' },
    { name: 'Interview Prep & DSA', icon: 'leetcode', desc: 'Coding Rounds & Problem Solving' },
    { name: 'Career Mentorship', icon: 'coaching', desc: '1-on-1 Guidance by Tech Leads' }
  ];

  const partnerCompanies = [
    {
      num: '01',
      name: 'ZeroSight360',
      category: 'Cybersecurity & AI Defense',
      desc: 'Cybersecurity, VAPT, secure engineering, and AI security solutions.',
      url: 'https://zerosight360.com',
      logo: 'https://zerosight360.com/logo-512.png',
      badge: 'Cybersecurity Partner',
      icon: ShieldCheck,
      color: 'text-emerald-500',
      // Clean white card with ZeroSight360 emerald hover border & glow
      cardBg: 'bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-[0_4px_20px_rgba(16,185,129,0.15)]',
      titleHover: 'group-hover:text-emerald-600',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      btnStyle: 'bg-slate-100 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 text-slate-700 border border-slate-200',
      circleClass: 'bg-[#050b18] border border-emerald-500/40 shadow-xs',
      imgClass: 'w-full h-full object-contain rounded-full'
    },
    {
      num: '02',
      name: 'ZeonHub',
      category: 'Digital & Software Solutions',
      desc: 'Technology and digital solutions supporting modern business and development needs.',
      url: 'https://www.zeonhub.com',
      logo: 'https://www.zeonhub.com/zeonhub%20logo.png',
      badge: 'Technology Partner',
      icon: Globe,
      color: 'text-sky-500',
      // Clean white card with ZeonHub sky-blue hover border & glow
      cardBg: 'bg-white border border-slate-200/90 hover:border-sky-500 hover:shadow-[0_4px_20px_rgba(14,165,233,0.15)]',
      titleHover: 'group-hover:text-sky-600',
      badgeStyle: 'bg-sky-50 text-sky-700 border border-sky-200',
      btnStyle: 'bg-slate-100 hover:bg-sky-500 hover:text-white hover:border-sky-500 text-slate-700 border border-slate-200',
      circleClass: 'bg-white border border-sky-200 shadow-xs',
      imgClass: 'w-full h-full object-contain'
    },
    {
      num: '03',
      name: 'AJERA Infotech',
      category: 'Enterprise Software & Ecosystem',
      desc: 'Technology and software solutions through the AJERA Group ecosystem.',
      url: 'https://infotech.ajeragroup.com',
      logo: 'https://infotech.ajeragroup.com/9%20-%20Copy.png',
      badge: 'Enterprise Partner',
      icon: Layers,
      color: 'text-purple-500',
      // Clean white card with AJERA Infotech purple hover border & glow
      cardBg: 'bg-white border border-slate-200/90 hover:border-purple-500 hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)]',
      titleHover: 'group-hover:text-purple-600',
      badgeStyle: 'bg-purple-50 text-purple-700 border border-purple-200',
      btnStyle: 'bg-slate-100 hover:bg-purple-600 hover:text-white hover:border-purple-600 text-slate-700 border border-slate-200',
      circleClass: 'bg-black border border-purple-500/40 shadow-xs',
      imgClass: 'w-full h-full object-contain rounded-full'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      
      {/* ── 1. Hero Banner: Deep Tech Obsidian (#071228) with Background Image ── */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#071228] text-white overflow-hidden border-b border-slate-800">
        
        {/* Banner Background Image with Smooth Left-to-Right Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Collaboration Banner"
            className="absolute right-0 top-0 w-full md:w-3/5 lg:w-[55%] h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071228] via-[#071228]/95 via-35% md:via-45% to-transparent to-90%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-[#071228]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071228]/80 via-transparent to-[#071228]" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-[#0062ff]/25 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
        
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-4">
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
            <span className="text-cyan-400 font-semibold">About Us</span>
          </nav>

          {/* Banner Main Content (Explicit text-white so index.css does not override) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-4xl"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>About ShrinovaTech</span>
            </div>

            {/* Headline with guaranteed text-white visibility */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              <span className="text-white">Learn, Build, and Grow with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#3b82f6]">
                Technology
              </span>
            </h1>

            {/* Banner Primary Hook */}
            <p className="text-slate-200 text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
              <strong className="text-white font-semibold">ShrinovaTech</strong> is a technology, learning, and career-focused platform dedicated to helping students, professionals, and businesses <span className="text-cyan-300 font-medium">learn, build, and grow with technology</span>.
            </p>

            {/* Slogan Pill with Rotating Gradient Beam & CTA */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <div className="group relative p-[2px] rounded-2xl overflow-hidden inline-flex">
                <span className="absolute w-[220%] h-[220%] bg-[conic-gradient(from_0deg,_#0062ff_0%,_#00e5ff_25%,_#6366f1_50%,_#00e5ff_75%,_#0062ff_100%)] animate-spin-beam transition-opacity duration-500 pointer-events-none opacity-80" />
                <div className="relative z-10 px-5 py-2.5 rounded-2xl bg-[#0b162c] text-xs sm:text-sm font-bold text-white flex items-center gap-2.5 shadow-xl">
                  <Sparkles size={16} className="text-cyan-400 animate-pulse" />
                  <span>ShrinovaTech — Learn • Build • Succeed</span>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hello%20Shrinovatech,%20I%20would%20like%20to%20know%20more%20about%20your%20programs%20and%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <span>Get in Touch →</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 2. Narrative Section Below Banner: Crisp White (#FFFFFF) ── */}
      <section className="py-10 sm:py-12 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff] mb-2 block font-mono">
                OUR PURPOSE &amp; PHILOSOPHY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                Empowering Minds. Engineering Products.
              </h2>
            </div>
            
            <div className="lg:col-span-8 border-l-0 lg:border-l-2 lg:border-cyan-500/30 lg:pl-10">
              <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                We bring together <strong className="text-slate-950 font-bold">industry-focused courses, innovative technology solutions, and career support</strong> under one platform. Our goal is to make technology education practical, development accessible, and career growth more achievable.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. The Three Pillars in Z-FORMAT STYLE (Zigzag Layout) ── */}
      <section className="py-10 sm:py-14 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-10 bg-[#0062ff]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff] font-mono">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Learn, Build, and Grow With Us
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              An interconnected technological journey designed for students, aspiring engineers, and growing enterprises.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            
            {/* ── Z-Pattern Row 1: Learn With Us (Content LEFT, Visual RIGHT) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border-t border-slate-200 pt-8 sm:pt-9"
            >
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-700 font-bold text-xs uppercase tracking-widest bg-cyan-100/80 px-3 py-1 rounded-md border border-cyan-300">
                    01 · PRACTICAL EDUCATION
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-[#0062ff] p-[1.5px] shadow-lg shadow-cyan-500/25 shrink-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#040e24] flex items-center justify-center text-cyan-300">
                      <GraduationCap size={22} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]" />
                    </div>
                  </div>
                  <span className="tracking-tight">Learn With Us</span>
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  We provide practical and industry-oriented training in <strong className="text-slate-950 font-semibold">AI &amp; Machine Learning, Data Science &amp; Analytics, Full Stack Development, Mobile Development, Cyber Security, Software Testing, and Cloud &amp; DevOps</strong>.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Our courses focus on building real-world technical skills through practical learning, projects, and hands-on experience.
                </p>

                <div className="pt-1">
                  <button
                    onClick={() => {
                      if (navigate) navigate('/courses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-[#0062ff] hover:text-cyan-600 font-heading text-xs sm:text-sm font-bold group cursor-pointer transition-colors"
                  >
                    <span className="border-b-2 border-blue-200 group-hover:border-cyan-500 pb-0.5">Explore Industry Courses</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Technology Showcase Grid */}
              <div className="lg:col-span-6 lg:pl-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group/card hover:shadow-lg transition-all duration-300">
                  {/* Shimmer light sweep */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      Curriculum &amp; Tech Tracks:
                    </span>
                    <span className="text-[10px] font-mono font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200 uppercase tracking-wide">
                      Hands-On Tech
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {learnTopics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-cyan-50/50 border border-slate-200/80 hover:border-cyan-400 transition-all duration-200 group/item cursor-default"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-110 group-hover/item:shadow-sm transition-transform p-1.5">
                          <TechIcon name={topic.icon} size={22} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-cyan-700 transition-colors">
                            {topic.name}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {topic.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>


            {/* ── Z-Pattern Row 2: Build With Us (Visual LEFT, Content RIGHT) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border-t border-slate-200 pt-8 sm:pt-9"
            >
              {/* Left Column in Desktop (Order 1): Premium Engineering Capabilities Grid */}
              <div className="lg:col-span-6 order-2 lg:order-1 lg:pr-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group/card hover:shadow-lg transition-all duration-300">
                  {/* Shimmer light sweep */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0062ff] animate-pulse" />
                      Engineering Capabilities:
                    </span>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 uppercase tracking-wide">
                      Enterprise Ready
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {buildTopics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-400 transition-all duration-200 group/item cursor-default"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-110 group-hover/item:shadow-sm transition-transform p-1.5">
                          <TechIcon name={topic.icon} size={22} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-blue-700 transition-colors">
                            {topic.name}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {topic.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column in Desktop (Order 2): Narrative */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-md border border-blue-300">
                    02 · SOFTWARE ENGINEERING &amp; SOLUTIONS
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0062ff] to-indigo-600 p-[1.5px] shadow-lg shadow-blue-500/25 shrink-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#061226] flex items-center justify-center text-blue-300">
                      <Code2 size={22} className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
                    </div>
                  </div>
                  <span className="tracking-tight">Build With Us</span>
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  ShrinovaTech also provides technology solutions for businesses, startups, and individuals. Our services include <strong className="text-slate-950 font-semibold">Website Development, SaaS Development, App &amp; Product Development, Cybersecurity &amp; VAPT, and Digital Marketing &amp; SEO</strong>.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  We help turn ideas into powerful digital products with modern technologies, secure architectures, and scalable solutions.
                </p>

                <div className="pt-1">
                  <button
                    onClick={() => {
                      if (navigate) navigate('/services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-[#0062ff] hover:text-blue-700 font-heading text-xs sm:text-sm font-bold group cursor-pointer transition-colors"
                  >
                    <span className="border-b-2 border-blue-200 group-hover:border-blue-600 pb-0.5">View Development &amp; Security Services</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>


            {/* ── Z-Pattern Row 3: Grow Your Career With Us (Content LEFT, Visual RIGHT) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border-t border-slate-200 pt-8 sm:pt-9"
            >
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-purple-700 font-bold text-xs uppercase tracking-widest bg-purple-100/80 px-3 py-1 rounded-md border border-purple-300">
                    03 · CAREER ACCELERATION
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 flex items-center gap-3.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-[1.5px] shadow-lg shadow-purple-500/25 shrink-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#140a28] flex items-center justify-center text-purple-300">
                      <Rocket size={22} className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
                    </div>
                  </div>
                  <span className="tracking-tight">Grow Your Career With Us</span>
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  We support students and job seekers throughout their career journey with <strong className="text-slate-950 font-semibold">Final Year Projects, Resume &amp; LinkedIn Optimization, Job Tips &amp; Interview Practice, and Career Guidance &amp; Mentorship</strong>.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Our aim is to bridge the gap between academic learning, practical skills, and industry opportunities.
                </p>

                <div className="pt-1">
                  <button
                    onClick={() => {
                      if (navigate) navigate('/projects');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-heading text-xs sm:text-sm font-bold group cursor-pointer transition-colors"
                  >
                    <span className="border-b-2 border-purple-200 group-hover:border-purple-600 pb-0.5">Explore Final Year Projects &amp; Support</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Career Support Showcase Grid */}
              <div className="lg:col-span-6 lg:pl-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group/card hover:shadow-lg transition-all duration-300">
                  {/* Shimmer light sweep */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                      Career Accelerator Suite:
                    </span>
                    <span className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 uppercase tracking-wide">
                      Career Impact
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {growTopics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 hover:bg-purple-50/50 border border-slate-200/80 hover:border-purple-400 transition-all duration-200 group/item cursor-default"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-110 group-hover/item:shadow-sm transition-transform p-1.5">
                          <TechIcon name={topic.icon} size={22} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-purple-700 transition-colors">
                            {topic.name}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {topic.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── 4. Our Vision & Mission: Horizon Bridge / Connected Energy Beam ── */}
      <section className="py-10 sm:py-14 bg-[#030816] text-white relative overflow-hidden border-b border-slate-800/80">
        {/* Subtle Cyber Horizon Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 229, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 left-1/4 w-[650px] h-[380px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[650px] h-[380px] bg-[#0062ff]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold tracking-[0.25em] uppercase mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>STRATEGIC CONTINUUM</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Vision &amp; Mission
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Where ambitious technological foresight converges with precision execution to empower learners, creators, and enterprises.
            </p>
          </div>

          {/* Horizon Bridge Connected Architecture */}
          <div className="relative">
            
            {/* Desktop Horizontal Energy Conduit (Connecting Left to Right through Center Nexus) */}
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 via-50% to-transparent pointer-events-none z-0">
              <motion.div 
                animate={{ x: ['-20%', '120%'] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                className="w-48 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(0,229,255,0.8)]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* ── LEFT: Vision Card (The North Star / Destination) ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 rounded-3xl p-5 sm:p-7 bg-[#061226]/90 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_40px_rgba(0,200,255,0.12)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Background Ambient Watermark S Logo */}
                <div className="absolute -right-8 -bottom-8 w-60 h-60 opacity-[0.05] pointer-events-none select-none z-0">
                  <img src={sLogo} alt="" loading="lazy" decoding="async" className="w-full h-full object-contain filter blur-[1px]" />
                </div>

                {/* Top Corner Beam */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/20 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span>DESTINATION · 01</span>
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400/60 uppercase tracking-wider">
                      THE NORTH STAR
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5">
                    Our Vision
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] font-semibold block mb-3">
                    Future-Proof Ecosystem
                  </span>

                  {/* Core Vision Quote with Glowing Vertical Conduit */}
                  <div className="relative pl-4 border-l-2 border-cyan-400/80 my-3 sm:my-4">
                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                      To become a trusted technology and career ecosystem where people can{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white font-bold">
                        Learn, Build, and Succeed.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Strategic Horizon Chips */}
                <div className="relative z-10 pt-3 border-t border-cyan-500/20 space-y-2">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-200 hover:border-cyan-400/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    <strong className="text-cyan-300">Unified Platform:</strong>
                    <span>Bridging education, engineering &amp; careers</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-200 hover:border-cyan-400/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    <strong className="text-cyan-300">Global Horizons:</strong>
                    <span>Empowering ambitious innovators worldwide</span>
                  </div>
                </div>
              </motion.div>


              {/* ── CENTER: Horizon Energy Nexus Core (lg:col-span-2) ── */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0 relative z-20">
                {/* Mobile Vertical Conduit Line */}
                <div className="lg:hidden w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-transparent" />

                {/* Central Nexus Orb with Rotating Rings & S-Logo */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group cursor-pointer"
                >
                  {/* Ambient Glow Aura */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-[#0062ff] rounded-full blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />

                  {/* Outer Orbit Ring with Continuous Spin */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-cyan-400/50 p-1 flex items-center justify-center"
                  >
                    {/* Tiny orbit blip */}
                    <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e5ff]" />
                  </motion.div>

                  {/* Inner Glowing Core Container */}
                  <div className="absolute inset-2 rounded-full bg-[#051126] border-2 border-cyan-400/70 p-3 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,229,255,0.3)]">
                    <img 
                      src={sLogo} 
                      alt="ShrinovaTech S Logo Nexus" 
                      className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,229,255,0.8)] group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </motion.div>

                {/* Conduit Status HUD */}
                <div className="mt-3 text-center">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-[#00e5ff] uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                    ENERGY BRIDGE
                  </span>
                </div>

                {/* Mobile Vertical Conduit Line */}
                <div className="lg:hidden w-[2px] h-6 bg-gradient-to-b from-transparent to-blue-500 mt-2" />
              </div>


              {/* ── RIGHT: Mission Card (The Kinetic Engine / Execution) ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 rounded-3xl p-5 sm:p-7 bg-[#061226]/90 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 shadow-[0_0_40px_rgba(0,100,255,0.12)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Background Ambient Watermark S Logo */}
                <div className="absolute -left-8 -bottom-8 w-60 h-60 opacity-[0.05] pointer-events-none select-none z-0">
                  <img src={sLogo} alt="" loading="lazy" decoding="async" className="w-full h-full object-contain filter blur-[1px]" />
                </div>

                {/* Top Corner Beam */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-500/20 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                      <Compass size={13} />
                      <span>ACTION · 02</span>
                    </span>
                    <span className="text-[11px] font-mono text-blue-400/60 uppercase tracking-wider">
                      THE KINETIC ENGINE
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5">
                    Our Mission
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold block mb-3">
                    Purposeful Execution
                  </span>

                  {/* Core Mission Quote with Glowing Vertical Conduit */}
                  <div className="relative pl-4 border-l-2 border-blue-400/80 my-3 sm:my-4">
                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                      To provide practical technology education, reliable digital solutions, and meaningful career support that empowers students, professionals, and businesses to achieve their goals.
                    </p>
                  </div>
                </div>

                {/* 3 Kinetic Execution Pillars */}
                <div className="relative z-10 pt-3 border-t border-blue-500/20 space-y-1.5">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-200 hover:border-blue-400/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                    <strong className="text-blue-300">Practical Education:</strong>
                    <span>Real-world hands-on curriculum in modern tech</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-200 hover:border-blue-400/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                    <strong className="text-blue-300">Digital Solutions:</strong>
                    <span>Scalable web, SaaS &amp; cybersecurity systems</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-200 hover:border-blue-400/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                    <strong className="text-blue-300">Career Support:</strong>
                    <span>Portfolio building, interview prep &amp; guidance</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Centered Floating ShrinovaTech Brand Emblem (Text-Only Effect, No Box) */}
          <div className="mt-5 sm:mt-6 flex items-center justify-center text-center relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="cursor-pointer inline-flex items-center justify-center select-none"
            >
              <img 
                src={textLogo} 
                alt="ShrinovaTech - Innovate • Learn • Grow" 
                className="h-14 sm:h-18 md:h-20 lg:h-24 w-auto max-w-[90vw] sm:max-w-[460px] md:max-w-[560px] object-contain filter brightness-0 invert drop-shadow-[0_0_15px_rgba(0,229,255,0.7)] hover:drop-shadow-[0_0_30px_rgba(0,229,255,1)] hover:drop-shadow-[0_0_60px_rgba(0,180,255,0.8)] transition-all duration-300" 
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── 5. Our Partners: Clean Title (No Hand Emoji) & Corrected Logo Circles ── */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Globe icon and clean title without hand emoji */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#0062ff] font-mono mb-2">
              <Globe size={15} />
              <span>COLLABORATIVE ECOSYSTEM</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Our Partners
            </h2>

            <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              At <strong className="text-slate-950 font-bold">ShrinovaTech</strong>, we believe collaboration drives innovation and creates greater opportunities for learners, professionals, and businesses.
            </p>

            <p className="mt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              We proudly collaborate with industry partners who share our vision of advancing technology education, digital solutions, and cybersecurity excellence.
            </p>
          </div>

          {/* Subheading: Our Partner Companies */}
          <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-heading text-base sm:text-lg font-bold text-slate-950 tracking-wide">
              Our Partner Companies
            </h3>
            <span className="text-xs font-mono text-slate-500 uppercase">Verified Industry Partners</span>
          </div>

          {/* Partner Companies Cards with Reduced Size & Authentic Website Backgrounds */}
          <div className="space-y-2.5 mb-6 sm:mb-8">
            {partnerCompanies.map((company, idx) => {
              const CompIcon = company.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`rounded-2xl p-3 sm:py-3 sm:px-4 group flex flex-col md:flex-row md:items-center justify-between gap-3 transition-all duration-300 hover:shadow-md ${company.cardBg}`}
                >
                  {/* Left Side: Number, Logo Circle, Name & Category */}
                  <div className="flex items-start md:items-center gap-3.5">
                    <span className="font-mono text-xs opacity-60 font-bold mt-1 md:mt-0 shrink-0">
                      {company.num}
                    </span>
                    
                    {/* Compact Circular Logo Badge */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all overflow-hidden ${company.circleClass}`}>
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className={company.imgClass}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full items-center justify-center hidden">
                        <CompIcon size={18} className={company.color} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`font-heading text-sm sm:text-base font-bold text-slate-950 ${company.titleHover} transition-colors`}>
                          {company.name}
                        </h4>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${company.badgeStyle} hidden sm:inline-block`}>
                          {company.badge}
                        </span>
                      </div>
                      <p className="text-xs mt-0.5 font-normal max-w-2xl leading-relaxed text-slate-600">
                        {company.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Compact Direct Link Button */}
                  <div className="self-start md:self-center shrink-0 pl-12 md:pl-0">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-heading text-xs font-semibold transition-all cursor-pointer group/btn shadow-xs ${company.btnStyle}`}
                    >
                      <span>{company.url.replace('https://', '')}</span>
                      <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Together statement & signature tagline */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50/50 to-slate-50 border border-cyan-200/80 space-y-2">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Together, our partnerships help us strengthen our <strong className="text-[#0062ff] font-semibold">learning programs, technology solutions, cybersecurity services, and career-focused initiatives</strong>.
            </p>
            <p className="font-heading text-sm sm:text-base md:text-lg font-extrabold text-slate-950">
              ShrinovaTech × Our Partners — Building Technology. Creating Opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* ── 6. Global Call to Action ── */}
      <CallToAction navigate={navigate} />

    </div>
  );
}
