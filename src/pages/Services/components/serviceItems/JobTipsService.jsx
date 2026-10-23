import React from 'react';
import { Briefcase, CheckCircle2, Layers, Compass, TrendingUp, ArrowRight } from 'lucide-react';
import Button from '../../../../components/Button/Button';

export default function JobTipsService({ onClose }) {
  const features = [
    'Hidden Job Market strategies (how to find unadvertised tech roles)',
    'Cold email & direct LinkedIn messaging frameworks to hiring managers',
    'Technical interview frameworks (DSA, System Design, Live Coding tactics)',
    'HR & behavioral interview mastery (STAR method response blueprints)',
    'Salary negotiation frameworks to maximize offer packages',
    'Freelancing and remote international tech job hunting roadmaps',
    'Post-interview follow-up and offer comparison consultation'
  ];

  const topics = ['Cold Outreach', 'Interview Mastery', 'Salary Negotiation', 'Remote Jobs', 'Hidden Job Market'];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0">
          <Briefcase size={28} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">Career Support</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">Job Tips & Interview Tactics</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Proven job search strategies, recruiter outreach scripts, and interview playbooks to crack your dream tech role.
          </p>
        </div>
      </div>

      {/* Key Deliverables Grid */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-[#0062ff]" />
          Strategic Modules & Playbooks
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

      {/* Focus Topics */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <TrendingUp size={16} className="text-[#0062ff]" />
          Key Focus Areas
        </h3>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-50 text-[#0062ff] border border-blue-100 rounded-lg text-xs font-semibold">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Ready to crack tech interviews?</span>
          <span className="text-sm font-bold text-slate-900">1-on-1 Mock Interviews Available</span>
        </div>
        <div className="flex items-center gap-3">
          {onClose && (
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
          )}
          <Button href="#contact" variant="primary" size="md" showArrow onClick={onClose}>
            Get Job Strategies
          </Button>
        </div>
      </div>
    </div>
  );
}
