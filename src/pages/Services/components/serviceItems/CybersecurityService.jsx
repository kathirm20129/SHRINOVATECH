import React from 'react';
import { ShieldCheck, CheckCircle2, Layers, Lock, ShieldAlert, ArrowRight } from 'lucide-react';
import Button from '../../../../components/Button/Button';

export default function CybersecurityService({ onClose }) {
  const features = [
    'Vulnerability Assessment and Penetration Testing (VAPT)',
    'Web and API security auditing (OWASP Top 10 mitigation)',
    'End-to-end data encryption at rest and in transit',
    'Cloud security configuration (AWS / Azure / GCP IAM hardening)',
    'Security compliance auditing (GDPR, ISO 27001, SOC 2 guidance)',
    'DDoS protection, Web Application Firewalls (WAF) & Rate Limiting',
    'Incident response planning and continuous security monitoring'
  ];

  const tools = ['Burp Suite', 'OWASP ZAP', 'Wireshark', 'Metasploit', 'Cloudflare WAF', 'Kali Linux', 'SonarQube'];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] flex-shrink-0">
          <ShieldCheck size={28} />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">Tech Solutions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">Cybersecurity & Defense</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Protect your digital infrastructure, customer data, and applications with enterprise-grade threat defense and security audits.
          </p>
        </div>
      </div>

      {/* Key Deliverables Grid */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-[#0062ff]" />
          Security Services & Audits
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

      {/* Security Tools */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <Lock size={16} className="text-[#0062ff]" />
          Security Protocols & Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-50 text-[#0062ff] border border-blue-100 rounded-lg text-xs font-semibold">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 block">Want a security audit?</span>
          <span className="text-sm font-bold text-slate-900">Comprehensive vulnerability report</span>
        </div>
        <div className="flex items-center gap-3">
          {onClose && (
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
          )}
          <Button href="#contact" variant="primary" size="md" showArrow onClick={onClose}>
            Request Security Audit
          </Button>
        </div>
      </div>
    </div>
  );
}
