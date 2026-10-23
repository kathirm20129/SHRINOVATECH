import React from 'react';
import { Megaphone, CheckCircle2, Layers, TrendingUp, Target, ArrowRight } from 'lucide-react';
import Button from '../../../../components/Button/Button';

export default function DigitalMarketingService({ onClose }) {
  const features = [
    'Search Engine Optimization (SEO) & Technical On-Page/Off-Page audits',
    'High-ROI Paid Advertising (Google Ads, Meta Ads, LinkedIn Ads)',
    'Social Media Strategy & Engaging Content Creation',
    'Conversion Rate Optimization (CRO) & Funnel Design',
    'Email marketing automation and lifecycle nurturing campaigns',
    'Performance analytics & weekly growth reporting dashboards',
    'Brand storytelling & competitive market positioning'
  ];

  const platforms = ['Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'Semrush', 'Ahrefs', 'Mailchimp', 'HubSpot'];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0">
          <Megaphone size={28} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">Tech Solutions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">Digital Marketing & Growth</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Accelerate your brand reach, capture high-intent leads, and maximize return on ad spend with data-driven marketing.
          </p>
        </div>
      </div>

      {/* Key Deliverables Grid */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-[#0062ff]" />
          Marketing Channels & Strategies
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

      {/* Platforms */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <Target size={16} className="text-[#0062ff]" />
          Marketing Platforms & Toolset
        </h3>
        <div className="flex flex-wrap gap-2">
          {platforms.map((plat, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-50 text-[#0062ff] border border-blue-100 rounded-lg text-xs font-semibold">
              {plat}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Ready to scale your leads?</span>
          <span className="text-sm font-bold text-slate-900">Custom growth roadmap</span>
        </div>
        <div className="flex items-center gap-3">
          {onClose && (
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
          )}
          <Button href="#contact" variant="primary" size="md" showArrow onClick={onClose}>
            Scale My Business
          </Button>
        </div>
      </div>
    </div>
  );
}
