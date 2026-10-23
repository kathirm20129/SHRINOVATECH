import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import TechIcon from '../../../../components/TechIcon/TechIcon';
import { landingFaqs } from '../../../../data/landingFaqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-14 sm:py-18 bg-white border-t border-slate-200/70 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div data-content className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-900/10 shadow-xs mb-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062ff]"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a1128]">
            Got Questions?{' '}
            <span className="bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our final year projects, career training courses, and live 1-on-1 mentor guidance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {landingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-r from-blue-50/70 via-white to-blue-50/40 border-blue-400/80 shadow-md shadow-blue-500/5 ring-1 ring-blue-400/30'
                    : 'bg-slate-50/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0062ff] text-white' : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      <HelpCircle size={15} />
                    </div>
                    <h3 className={`font-heading text-xs sm:text-sm font-bold transition-colors ${
                      isOpen ? 'text-[#0062ff]' : 'text-[#0a1128]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-[#0062ff]' : 'bg-slate-200/60 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pl-15 sm:pl-16">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Assistance Footer */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0a1a3a] via-[#071228] to-[#0a1a3a] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-blue-900/50">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0062ff] flex items-center justify-center text-white shrink-0 shadow-md">
              <MessageSquare size={18} />
            </div>
            <div>
              <h4 className="font-heading text-xs sm:text-sm font-bold text-white">
                Have a different question not listed here?
              </h4>
              <p className="text-[11px] text-slate-300">
                Our technical mentors are live on WhatsApp to assist you immediately.
              </p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hi+Shrinovatech+I+have+a+question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <TechIcon name="whatsapp" size={15} className="text-white fill-white shrink-0" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
