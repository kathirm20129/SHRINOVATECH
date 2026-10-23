import React from 'react';
import TechIcon from '../../../components/TechIcon/TechIcon';

const techServicesRow = [
  {
    id: 'web-dev',
    title: 'Website Development',
    brandTech: 'React',
    description: 'Modern, responsive & SEO-friendly websites that represent your brand and drive results.',
    tags: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'saas-dev',
    title: 'SaaS Product Development',
    brandTech: 'Next.js',
    description: 'Scalable SaaS platforms with secure architecture, dashboards and powerful features.',
    tags: ['AWS', 'Docker', 'PostgreSQL']
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    brandTech: 'Flutter',
    description: 'Custom web and mobile applications tailored to your business needs.',
    tags: ['Flutter', 'React Native', 'Firebase']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    brandTech: 'Burp Suite Pro',
    description: 'Secure your digital assets with vulnerability assessment, protection and best security practices.',
    tags: ['OWASP ZAP', 'Metasploit', 'Kali Linux']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    brandTech: 'Google Ads',
    description: 'Grow your online presence with SEO, social media, content and performance marketing.',
    tags: ['Google Ads', 'Meta Business Suite', 'Google Analytics 4']
  }
];

const careerServicesRow = [
  {
    id: 'final-year-projects',
    title: 'Final Year Projects',
    brandTech: 'Python',
    description: 'End-to-end project guidance with documentation and presentation support.',
    tags: ['Python', 'TensorFlow', 'IoT Hardware']
  },
  {
    id: 'resume-linkedin',
    title: 'Resume & LinkedIn Optimization',
    brandTech: 'LinkedIn SEO',
    description: 'ATS-friendly resume and LinkedIn profile that highlight your skills and achievements.',
    tags: ['LinkedIn SEO', 'ATS Scanners', 'Figma']
  },
  {
    id: 'job-tips',
    title: 'Job Tips',
    brandTech: 'LeetCode Patterns',
    description: 'Practical job search strategies, interview tips and professional growth guidance.',
    tags: ['LeetCode Patterns', 'System Design Primitives', 'STAR Matrix']
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    brandTech: '1-on-1 Coaching',
    description: 'Personalized career guidance to help you choose the right path and achieve your goals.',
    tags: ['1-on-1 Coaching', 'Code Review Suite', 'Private Slack/Discord']
  }
];

export default function ServicesPreview({ navigate }) {
  const handleServiceClick = (serviceId) => {
    if (navigate) {
      navigate('/services/' + serviceId);
    }
  };

  return (
    <section id="services" className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-slate-50/50">
      <div data-content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest block mb-2 bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent">
            OUR SERVICES
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1128] tracking-tight">
            Technology Solutions &amp; <span className="bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent">Career Support</span>
          </h2>
        </div>

        {/* Top Row: 5 Tech Services Cards (No circle around logo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-5">
          {techServicesRow.map((service) => (
            <div 
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="group p-5 sm:p-6 rounded-2xl bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:!bg-[#dbeafe] hover:!border-[#0062ff] hover:shadow-[0_20px_40px_rgba(0,98,255,0.28)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer"
            >
              <div className="w-full flex flex-col items-center">
                {/* Tech Brand Logo (No circle/box container) */}
                <div className="h-10 flex items-center justify-center mb-3.5 shrink-0 transition-transform duration-300 group-hover:scale-115">
                  <TechIcon name={service.brandTech} size={36} />
                </div>
                
                {/* Title */}
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0a1128] mb-1.5 leading-snug transition-colors duration-300 group-hover:text-[#0062ff]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3 transition-colors duration-300 group-hover:text-slate-800">
                  {service.description}
                </p>

                {/* Micro Tag Pills with Logos */}
                {service.tags && (
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {service.tags.slice(0, 2).map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700 transition-all duration-300 group-hover:bg-white group-hover:border-blue-300 group-hover:text-[#0062ff] group-hover:shadow-xs"
                      >
                        <TechIcon name={tag} size={10} className="shrink-0 text-slate-500 group-hover:text-[#0062ff] transition-colors" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Learn More Link */}
              <span className="text-xs font-bold text-[#0062ff] inline-flex items-center gap-1 transition-all duration-300 pt-1 group-hover:translate-x-0.5">
                <span>Learn More</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Row: 4 Career Services Cards (No circle around logo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {careerServicesRow.map((service) => (
            <div 
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="group p-5 sm:p-6 rounded-2xl bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:!bg-[#dbeafe] hover:!border-[#0062ff] hover:shadow-[0_20px_40px_rgba(0,98,255,0.28)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer"
            >
              <div className="w-full flex flex-col items-center">
                {/* Tech Brand Logo (No circle/box container) */}
                <div className="h-10 flex items-center justify-center mb-3.5 shrink-0 transition-transform duration-300 group-hover:scale-115">
                  <TechIcon name={service.brandTech} size={36} />
                </div>
                
                {/* Title */}
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0a1128] mb-1.5 leading-snug transition-colors duration-300 group-hover:text-[#0062ff]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3 transition-colors duration-300 group-hover:text-slate-800">
                  {service.description}
                </p>

                {/* Micro Tag Pills with Logos */}
                {service.tags && (
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {service.tags.slice(0, 2).map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700 transition-all duration-300 group-hover:bg-white group-hover:border-blue-300 group-hover:text-[#0062ff] group-hover:shadow-xs"
                      >
                        <TechIcon name={tag} size={10} className="shrink-0 text-slate-500 group-hover:text-[#0062ff] transition-colors" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Learn More Link */}
              <span className="text-xs font-bold text-[#0062ff] inline-flex items-center gap-1 transition-all duration-300 pt-1 group-hover:translate-x-0.5">
                <span>Learn More</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
