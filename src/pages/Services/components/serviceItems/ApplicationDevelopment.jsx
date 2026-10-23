import React from 'react';
import { Smartphone, CheckCircle2, Layers, Cpu, Code, ArrowRight } from 'lucide-react';
import Button from '../../../../components/Button/Button';

export default function ApplicationDevelopment({ onClose }) {
  const features = [
    'Cross-platform iOS & Android mobile applications with React Native & Flutter',
    'Custom Progressive Web Apps (PWA) with offline support',
    'Enterprise web applications with real-time WebSocket syncing',
    'REST & GraphQL API design and secure integration',
    'Intuitive mobile UX with smooth animations and native gesture support',
    'Push notifications, background sync & biometric authentication',
    'App Store and Google Play Store submission & compliance support'
  ];

  const techStack = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase', 'GraphQL', 'PostgreSQL'];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0">
          <Smartphone size={28} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">Tech Solutions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">Application Development</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Build high-performance, intuitive mobile and web applications engineered for seamless user engagement across devices.
          </p>
        </div>
      </div>

      {/* Key Deliverables Grid */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-[#0062ff]" />
          Application Capabilities
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

      {/* Tech Stack */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <Cpu size={16} className="text-[#0062ff]" />
          Mobile & App Tech
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-50 text-[#0062ff] border border-blue-100 rounded-lg text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Need a custom app?</span>
          <span className="text-sm font-bold text-slate-900">iOS • Android • Web Apps</span>
        </div>
        <div className="flex items-center gap-3">
          {onClose && (
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
          )}
          <Button href="#contact" variant="primary" size="md" showArrow onClick={onClose}>
            Start App Project
          </Button>
        </div>
      </div>
    </div>
  );
}
