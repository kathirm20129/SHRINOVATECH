import React from 'react';
import { ArrowRight } from 'lucide-react';
import TechIcon from '../../../components/TechIcon/TechIcon';

const landingCourses = [
  { id: 'ai-ml', title: 'AI / Machine Learning', brandLogo: 'OpenAI' },
  { id: 'data-science', title: 'Data Science', brandLogo: 'Python' },
  { id: 'full-stack', title: 'Full Stack Development', brandLogo: 'React' },
  { id: 'mobile-app', title: 'Mobile App Development', brandLogo: 'Flutter' },
  { id: 'cyber-security', title: 'Cyber Security', brandLogo: 'Kali Linux' },
  { id: 'software-testing', title: 'Software Testing', brandLogo: 'Selenium' },
  { id: 'cloud-devops', title: 'Networking & Cloud', brandLogo: 'AWS-White' }
];

export default function CoursesPreview({ navigate }) {
  const handleCourseClick = (courseId) => {
    if (navigate) {
      navigate('/courses/' + courseId);
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-20 bg-[#071228] text-white relative overflow-hidden">
      {/* Ambient Blue Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0062ff]/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div data-content className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-2 text-cyan-400">
            OUR COURSES
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Learn Skills That Shape Your Career
          </h2>
          {/* Subtle Glowing Accent Underline */}
          <div className="w-14 h-1 bg-[#0062ff] shadow-[0_0_12px_rgba(0,98,255,0.9)] rounded-full mx-auto mt-3" />
        </div>

        {/* 7 Tech Cards Horizontal Grid with Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 mb-10">
          {landingCourses.map((course) => (
            <div 
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
              className="group min-h-[145px] p-3.5 sm:p-4 rounded-2xl bg-[#0b162c]/90 border border-slate-700/80 hover:border-cyan-400/80 hover:bg-[#0f1f3d] hover:shadow-[0_0_30px_rgba(0,180,255,0.35)] flex flex-col items-center text-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Tech Brand Logo */}
              <div className="h-10 flex items-center justify-center mb-3 group-hover:scale-115 transition-transform duration-300">
                <TechIcon name={course.brandLogo} size={32} />
              </div>

              {/* Course Title */}
              <h3 className="font-heading text-xs font-bold text-slate-100 group-hover:text-[#38bdf8] leading-snug transition-colors duration-200">
                {course.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Courses Blue Pill CTA Button */}
        <div className="flex justify-center">
          <button 
            type="button"
            onClick={() => {
              if (navigate) navigate('/courses');
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0062ff] hover:bg-[#0051d9] text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>View All Courses</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
