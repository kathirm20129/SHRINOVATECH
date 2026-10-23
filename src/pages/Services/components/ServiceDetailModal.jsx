import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { allServices } from '../../../data/services';
import Button from '../../../components/Button/Button';
import { serviceComponentsMap } from './serviceItems';


export default function ServiceDetailModal({ activeServiceId, onClose }) {
  const service = allServices.find(s => s.id === activeServiceId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeServiceId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeServiceId]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const CustomServiceView = serviceComponentsMap[service.id];

  return (
    <AnimatePresence>
      {activeServiceId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#071228]/75 backdrop-blur-lg"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
          >
            {/* Modal Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff]">
                Service Details
              </span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {CustomServiceView ? (
                <CustomServiceView onClose={onClose} />
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  {service.bullets && (
                    <ul className="space-y-2">
                      {service.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle2 size={16} className="text-[#0062ff] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                    <Button href="#contact" variant="primary" onClick={onClose}>Get Started</Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
