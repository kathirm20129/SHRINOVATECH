import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight, 
  Home, 
  Phone 
} from 'lucide-react';

import { allServices } from '../../data/services';
import Button from '../../components/Button/Button';
import CallToAction from '../../components/CallToAction/CallToAction';
import TechIcon from '../../components/TechIcon/TechIcon';

export default function ServiceDetailPage({ serviceId, navigate }) {
  const service = allServices.find(s => s.id === serviceId) || allServices[0];

  // Scroll to top on load or when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  if (!service) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 1. Hero Section (ZeroSight360 Layout with Right-Aligned Background Image & Smooth Left Fade) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#071228] text-white relative overflow-hidden">
        
        {/* Right-Aligned High-Definition Background Image with Left Fade Effect */}
        {service.bannerImage && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* The Image positioned on the right half with high clarity */}
            <img 
              src={service.bannerImage} 
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
                if (navigate) navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight size={13} className="text-slate-600" />
            <span className="text-cyan-400 font-semibold">{service.title}</span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (Text & Badges) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-bold uppercase tracking-widest text-cyan-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                  </span>
                  <span>{service.category === 'tech' ? 'TECH SOLUTION' : 'CAREER ACCELERATOR'}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300">
                  {service.timeline || '2-4 Weeks Average Delivery'}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                {service.heroSubtitle || service.description}
              </p>

              {/* Technologies Tag Bar */}
              {service.tags && (
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Core Technologies & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tIdx) => (
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
                  href={`https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hello%20Shrinovatech,%20I%20am%20interested%20in%20the%20${encodeURIComponent(service.title)}%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-heading text-sm font-bold shadow-lg shadow-cyan-400/25 transition-all cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
                <Button 
                  href="#overview"
                  variant="outline"
                  size="lg"
                  className="!border-slate-500 !text-slate-200 hover:!bg-white/10 hover:!text-white !rounded-xl"
                >
                  View Deliverables ↓
                </Button>
              </div>
            </div>

            {/* Right Metric Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-4">
                <div className="flex items-center gap-3 text-cyan-400">
                  <ShieldCheck size={24} />
                  <span className="font-heading font-bold text-sm text-white">Guaranteed Delivery SLA</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every project is backed by our full milestone transparency, clear architecture documentation, and dedicated engineer support.
                </p>
                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-2xl font-bold text-white">100%</span>
                    <span className="text-[11px] text-slate-400">Code Ownership</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-cyan-400">24/7</span>
                    <span className="text-[11px] text-slate-400">Technical Support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Detailed Deliverables & Roadmap Section */}
      <section id="overview" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0062ff] block mb-2">
              OUR SERVICES INCLUDE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1128] tracking-tight">
              Our Services Include
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 max-w-3xl">
              Comprehensive, secure, and scalable solutions tailored to your specific business and technical requirements.
            </p>
          </div>

          {/* Deliverables Checklist Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(service.deliverables || service.bullets || []).map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:bg-slate-50/80 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1128] mb-1">
                    {typeof item === 'string' ? item : item.title}
                  </h4>
                  {typeof item === 'object' && item.desc && (
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Execution Process Steps */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0062ff] block mb-2">
                  METHODOLOGY & EXECUTION
                </span>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#0a1128]">
                  Step-by-Step Delivery Process
                </h3>
              </div>
              <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0062ff] border border-blue-200/80 self-start sm:self-auto shadow-sm">
                10-Phase Transparent Delivery
              </span>
            </div>

            {/* Structured Process Grid / Timeline Matrix */}
            <div className="space-y-3">
              {/* Table-like Header for Desktop */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 rounded-xl bg-slate-100/90 text-xs font-extrabold uppercase tracking-wider text-slate-600 border border-slate-200">
                <div className="col-span-2">Step</div>
                <div className="col-span-4">Process</div>
                <div className="col-span-6">What We Do</div>
              </div>

              {/* Rows / Cards */}
              {(service.process && service.process.length > 0 ? service.process : [
                { step: '01', process: 'Requirement Gathering', title: 'Requirement Gathering', whatWeDo: 'Understand your business, goals, target audience, required features, and project requirements.', desc: 'Understand your business, goals, target audience, required features, and project requirements.' },
                { step: '02', process: 'Planning & Strategy', title: 'Planning & Strategy', whatWeDo: 'Define the website structure, technology stack, timeline, and development roadmap.', desc: 'Define the website structure, technology stack, timeline, and development roadmap.' },
                { step: '03', process: 'UI/UX Design', title: 'UI/UX Design', whatWeDo: 'Create wireframes and modern website designs focused on usability, branding, and user experience.', desc: 'Create wireframes and modern website designs focused on usability, branding, and user experience.' },
                { step: '04', process: 'Development', title: 'Development', whatWeDo: 'Convert the approved design into a responsive and functional website using suitable technologies.', desc: 'Convert the approved design into a responsive and functional website using suitable technologies.' },
                { step: '05', process: 'Content & Integration', title: 'Content & Integration', whatWeDo: 'Add content, images, forms, databases, APIs, payment gateways, third-party services, and other required integrations.', desc: 'Add content, images, forms, databases, APIs, payment gateways, third-party services, and other required integrations.' },
                { step: '06', process: 'Testing & Quality Check', title: 'Testing & Quality Check', whatWeDo: 'Test functionality, responsiveness, performance, browser compatibility, security, and user experience.', desc: 'Test functionality, responsiveness, performance, browser compatibility, security, and user experience.' },
                { step: '07', process: 'Client Review', title: 'Client Review', whatWeDo: 'Share the completed website for your review and make necessary changes based on your feedback.', desc: 'Share the completed website for your review and make necessary changes based on your feedback.' },
                { step: '08', process: 'Deployment', title: 'Deployment', whatWeDo: 'Deploy the website to the live server, configure the domain, hosting, SSL, and production environment.', desc: 'Deploy the website to the live server, configure the domain, hosting, SSL, and production environment.' },
                { step: '09', process: 'Final Handover', title: 'Final Handover', whatWeDo: 'Provide project files, credentials, documentation, and guidance for managing the website.', desc: 'Provide project files, credentials, documentation, and guidance for managing the website.' },
                { step: '10', process: 'Maintenance & Support', title: 'Maintenance & Support', whatWeDo: 'Provide ongoing technical support, updates, bug fixes, security checks, and performance improvements.', desc: 'Provide ongoing technical support, updates, bug fixes, security checks, and performance improvements.' }
              ]).map((proc, pIdx) => {
                const stepNum = proc.step || `0${pIdx + 1}`.slice(-2);
                const processName = proc.process || proc.title;
                const description = proc.whatWeDo || proc.desc;

                return (
                  <div 
                    key={pIdx} 
                    className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0062ff]/40 hover:bg-gradient-to-r hover:from-white hover:to-blue-50/30 transition-all duration-200"
                  >
                    {/* Desktop Layout (12 cols) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                      {/* Step Column */}
                      <div className="col-span-2 flex items-center">
                        <span className="w-11 h-11 rounded-xl bg-blue-50 text-[#0062ff] font-heading text-sm font-black flex items-center justify-center border border-blue-200/80 group-hover:bg-[#0062ff] group-hover:text-white transition-all duration-200 shadow-sm">
                          {stepNum}
                        </span>
                      </div>

                      {/* Process Column */}
                      <div className="col-span-4 pr-2">
                        <h4 className="font-heading text-sm font-bold text-[#0a1128] group-hover:text-[#0062ff] transition-colors leading-snug">
                          {processName}
                        </h4>
                      </div>

                      {/* What We Do Column */}
                      <div className="col-span-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile & Tablet Card Layout */}
                    <div className="md:hidden flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0062ff] font-heading text-xs font-black border border-blue-200">
                          Step {stepNum}
                        </span>
                        <h4 className="font-heading text-sm font-bold text-[#0a1128]">
                          {processName}
                        </h4>
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed border-l-2 border-[#0062ff]/40 ml-2 pl-3 py-1 bg-slate-50/70 rounded-r-lg">
                        <span className="font-bold text-slate-800 text-[11px] block uppercase tracking-wider mb-0.5">What We Do</span>
                        {description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Global Call to Action */}
      <CallToAction navigate={navigate} />

    </div>
  );
}
