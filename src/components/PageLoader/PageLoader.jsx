import React from 'react';

/**
 * Lightweight, non-blocking skeleton/spinner fallback during asynchronous route transitions.
 */
export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4" aria-busy="true" aria-live="polite">
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Glow */}
        <div className="w-14 h-14 rounded-full border-2 border-brand-500/20 animate-ping absolute" />
        {/* High-speed spin ring */}
        <div className="w-12 h-12 rounded-full border-3 border-slate-200 border-t-brand-600 animate-spin" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Loading...
      </p>
    </div>
  );
}
