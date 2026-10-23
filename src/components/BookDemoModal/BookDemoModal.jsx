import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Send,
  MessageSquare,
  Video,
  ShieldCheck
} from 'lucide-react';

const timeSlots = [
  '10:00 AM - 11:00 AM',
  '02:00 PM - 03:00 PM',
  '05:00 PM - 06:00 PM',
  '07:30 PM - 08:30 PM'
];

const purposeCategories = [
  {
    category: 'Courses & Practical Training',
    options: [
      'AI/ML',
      'Data Science & Analytics',
      'Full Stack Development',
      'Mobile Development',
      'Cyber Security',
      'Software Testing',
      'Cloud & DevOps'
    ]
  },
  {
    category: 'Technology Solutions',
    options: [
      'Website Development',
      'SaaS Product Development',
      'Application Product Development',
      'Cybersecurity & VAPT',
      'Digital Marketing & SEO'
    ]
  },
  {
    category: 'Career & Academic Support',
    options: [
      'Final Year Project',
      'Resume & LinkedIn Optimization',
      'Job Tips & Interview Practice',
      'Career Guidance Mentorship'
    ]
  }
];

export default function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: purposeCategories[0].options[0],
    preferredDate: '',
    timeSlot: timeSlots[1],
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key and disable body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Default preferred date to tomorrow's date
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData(prev => ({
        ...prev,
        preferredDate: tomorrow.toISOString().split('T')[0]
      }));
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotSelect = (slot) => {
    setFormData({ ...formData, timeSlot: slot });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Formatted WhatsApp booking dispatch
    const waMessage = `*🚀 DEMO & REGISTRATION REQUEST - SHRINOVATECH*\n\n` +
      `*👤 Name:* ${formData.name}\n` +
      `*📧 Email:* ${formData.email}\n` +
      `*📱 Phone:* ${formData.phone}\n` +
      `*🎯 Purpose:* ${formData.purpose}\n` +
      `*📅 Preferred Date:* ${formData.preferredDate}\n` +
      `*⏰ Time Slot:* ${formData.timeSlot}\n` +
      `*📝 Notes:* ${formData.notes || 'N/A'}`;

    window.open(`https://api.whatsapp.com/send/?phone=%2B918270473635&text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 p-3 sm:p-4 flex items-center justify-center overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window - Full Width Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#0b162c] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 text-white my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-4.5 border-b border-slate-700/80 bg-[#071228]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-cyan-300 text-[10px] font-bold border border-cyan-400/30 uppercase tracking-wider flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                </span>
                <span>LIVE SESSION</span>
              </span>
              <h2 className="font-heading text-base sm:text-lg font-bold text-white leading-tight">
                Register for a 1-on-1 Live Session
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-rose-500/20 text-slate-200 hover:text-rose-300 border border-white/15 hover:border-rose-400/40 flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              /* Success Screen */
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1.5">
                    Demo Booking Confirmed!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! We have registered your session for <strong>{formData.preferredDate} ({formData.timeSlot})</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071228] border border-slate-700 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Purpose:</span>
                    <span className="font-bold text-cyan-300">{formData.purpose}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Phone:</span>
                    <span className="font-semibold text-white">{formData.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B918270473635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-xs font-bold transition-all shadow-md shadow-emerald-500/25"
                  >
                    <MessageSquare size={14} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={handleResetAndClose}
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-heading text-xs font-semibold transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Registration Form - Generous Spacing & Height */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                      Registration Purpose *
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#071228] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-all cursor-pointer font-medium"
                    >
                      {purposeCategories.map((group) => (
                        <optgroup 
                          key={group.category} 
                          label={group.category}
                          className="bg-[#071228] text-cyan-400 font-bold"
                        >
                          {group.options.map((option, idx) => (
                            <option 
                              key={idx} 
                              value={option}
                              className="bg-[#0b162c] text-white font-normal"
                            >
                              {option}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Preferred Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#071228] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => handleSlotSelect(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#071228] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-all cursor-pointer font-medium"
                    >
                      {timeSlots.map((slot, sIdx) => (
                        <option key={sIdx} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Additional Notes */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                    Project Notes / Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="E.g. Final year topic in AI/ML, need IEEE paper synopsis..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0062ff] transition-all"
                  />
                </div>

                {/* Row 5: Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full py-3.5 rounded-xl bg-[#0062ff] hover:bg-[#0051d9] text-white font-heading text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <Send size={15} className="relative z-10" />
                    <span className="relative z-10">Confirm Booking & Connect on WhatsApp →</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    🔒 Free 1-on-1 consultation · No obligations · 100% confidential
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
