import React from 'react';
import { FileBadge, CheckCircle2, Layers, FileText, UserCheck, ArrowRight } from 'lucide-react';
import Button from '../../../../components/Button/Button';

export default function ResumeLinkedInService({ onClose }) {
  const features = [
    'ATS (Applicant Tracking System) friendly resume template and formatting',
    'Keyword optimization tailored to your target role and tech stack',
    'Impactful bullet points utilizing the Google XYZ formula (Accomplished [X], measured by [Y], by doing [Z])',
    'Complete LinkedIn profile revamp (Headline, About, Experience & Skills)',
    'GitHub profile & technical portfolio review with optimization suggestions',
    'Cover letter template tailored to tech startups and MNCs',
    'Direct recruiter outreach message scripts & networking strategies'
  ];

  const benefits = ['95%+ ATS Score', 'Recruiter InMail Boost', 'Role-Specific Keywords', 'MNC & Startup Ready'];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0">
          <FileBadge size={28} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">Career Support</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">Resume & LinkedIn Optimization</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Stand out to top recruiters with ATS-optimized resumes and high-visibility LinkedIn profiles that land interview calls.
          </p>
        </div>
      </div>

      {/* Key Deliverables Grid */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-[#0062ff]" />
          What We Optimize
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#0062ff] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Badges */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <UserCheck size={16} className="text-[#0062ff]" />
          Key Advantages
        </h3>
        <div className="flex flex-wrap gap-2">
          {benefits.map((benefit, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-50 text-[#0062ff] border border-blue-100 rounded-lg text-xs font-semibold">
              ✦ {benefit}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Get noticed by top companies</span>
          <span className="text-sm font-bold text-slate-900">1-on-1 Review & Edit Session</span>
        </div>
        <div className="flex items-center gap-3">
          {onClose && (
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
          )}
          <Button href="#contact" variant="primary" size="md" showArrow onClick={onClose}>
            Revamp My Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
