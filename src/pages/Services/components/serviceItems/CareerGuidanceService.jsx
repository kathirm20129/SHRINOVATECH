import React from 'react';
import { UserCheck, CheckCircle2, Layers, Compass, Sparkles, ArrowRight } from 'lucide-react';
import Button from '../../../../components/Button/Button';

export default function CareerGuidanceService({ onClose }) {
  const features = [
    'Personalized 1-on-1 career mapping based on your background and interests',
    'Tech stack evaluation (Full Stack vs Cloud vs AI/ML vs Cyber Security)',
    'Non-IT to IT career transition roadmap with actionable milestone planning',
    'Skill gap analysis with curated self-study & course recommendations',
    'Personal branding on GitHub, LinkedIn, and developer communities',
    'Industry mentor pairing and continuous career progress reviews',
    'Long-term tech leadership & career progression guidance'
  ];

  const roadmaps = ['Frontend Dev', 'Backend / Cloud', 'Data & AI', 'Non-IT to IT Shift', 'DevOps / Sec'];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0">
          <UserCheck size={28} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">Career Support</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">Personalized Career Guidance</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Get 1-on-1 mentorship from industry veterans to choose the right tech path, overcome career plateaus, and achieve your goals.
          </p>
        </div>
      </div>

      {/* Key Deliverables Grid */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-[#0062ff]" />
          Mentorship & Career Roadmaps
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

      {/* Popular Roadmaps */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <Compass size={16} className="text-[#0062ff]" />
          Custom Career Pathways
        </h3>
        <div className="flex flex-wrap gap-2">
          {roadmaps.map((map, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-50 text-[#0062ff] border border-blue-100 rounded-lg text-xs font-semibold">
              ✦ {map}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Not sure which tech path to pick?</span>
          <span className="text-sm font-bold text-slate-900">Book a Free 1-on-1 Discovery Call</span>
        </div>
        <div className="flex items-center gap-3">
          {onClose && (
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
          )}
          <Button href="#contact" variant="primary" size="md" showArrow onClick={onClose}>
            Book Career Session
          </Button>
        </div>
      </div>
    </div>
  );
}
