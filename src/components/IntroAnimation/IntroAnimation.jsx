import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const introSteps = [
  { 
    text: "WEBSITE DEVELOPMENT",
    font: "'Space Grotesk', sans-serif", 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00c6ff 100%)"
  },
  { 
    text: "AI & MACHINE LEARNING",
    font: "'Orbitron', sans-serif", 
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)"
  },
  { 
    text: "CYBERSECURITY & VAPT",
    font: "'Rajdhani', sans-serif", 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #ff758c 100%)"
  },
  { 
    text: "CLOUD & DEVOPS",
    font: "'Chakra Petch', sans-serif", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #30dd8a 100%)"
  },
  { 
    text: "APPLICATION DEVELOPMENT",
    font: "'Syne', sans-serif", 
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #b224ef 0%, #7579ff 50%, #e0c3fc 100%)"
  },
  { 
    text: "DATA SCIENCE & ANALYTICS",
    font: "'Outfit', sans-serif", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 50%, #f093fb 100%)"
  },
  { 
    text: "FINAL YEAR PROJECTS",
    font: "'Teko', sans-serif", 
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 50%, #ff5e62 100%)"
  },
  { 
    text: "CAREER GUIDANCE",
    font: "'Montserrat', sans-serif", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B8DD6 100%)"
  },
  { 
    text: "RESUME & LINKEDIN",
    font: "'Lexend', sans-serif", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #00dbde 0%, #fc00ff 100%)"
  },
  { 
    text: "SAAS DEVELOPMENT",
    font: "'Unbounded', sans-serif", 
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 50%, #ff4b1f 100%)"
  },
  { 
    text: "1-ON-1 MENTORSHIP",
    font: "'Bebas Neue', sans-serif", 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #00f2fe 100%)"
  },
  { 
    text: "SHRINOVATECH",
    font: "'Plus Jakarta Sans', sans-serif", 
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=900&auto=format&fit=crop",
    gradient: "linear-gradient(135deg, #ffffff 0%, #67e8f9 35%, #0062ff 70%, #ffffff 100%)"
  }
];

export default function IntroAnimation({ onComplete }) {
  const unifiedCanvasRef = useRef(null);
  const topPhotoPanelRef = useRef(null);
  const bottomPhotoPanelRef = useRef(null);
  
  // Continuous Foreground Typography and Blur Layer Refs
  const foregroundTextContainerRef = useRef(null);
  const pageBlurOverlayRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  const [hidden, setHidden] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const hasCompletedRef = useRef(false);

  const dismissIntro = () => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    try {
      sessionStorage.setItem('shrinovatech_intro_seen', 'true');
    } catch (e) {}
    setHidden(true);
    if (onCompleteRef.current) onCompleteRef.current();
  };

  useEffect(() => {
    const isReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const rawPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const activePath = base && rawPath.startsWith(base) ? (rawPath.slice(base.length) || '/') : rawPath;
    const isDirectSubpage = activePath !== '/' && activePath !== '';
    const hasSeenIntro = (() => {
      try {
        return typeof window !== 'undefined' && sessionStorage.getItem('shrinovatech_intro_seen') === 'true';
      } catch (e) {
        return false;
      }
    })();

    if (isReducedMotion || isDirectSubpage || hasSeenIntro) {
      dismissIntro();
      return;
    }

    // Preload only key visual assets for the sequence
    const firstImg = new Image();
    firstImg.src = introSteps[0].image;
    const lastImg = new Image();
    lastImg.src = introSteps[introSteps.length - 1].image;

    // Safety timer ensuring intro never blocks user
    const safetyTimer = setTimeout(() => {
      dismissIntro();
    }, 8000);

    const ctx = gsap.context(() => {
      const introTL = gsap.timeline({
        onComplete: () => {
          clearTimeout(safetyTimer);
          dismissIntro();
        }
      });

      if (textRef.current && unifiedCanvasRef.current) {
        // PHASE 1: Step through all 11 offerings (0.38s each) and land on step 12 SHRINOVATECH
        introSteps.forEach((step, idx) => {
          const isLast = idx === introSteps.length - 1;
          const stepHold = isLast ? 0.30 : 0.18;

          introTL.fromTo(textRef.current, 
            { 
              scale: isLast ? 0.88 : 0.94, 
              opacity: 0.75,
              y: isLast ? 10 : 0
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: isLast ? 0.50 : 0.20,
              fontFamily: step.font,
              ease: isLast ? "elastic.out(1, 0.75)" : "power2.out",
              onStart: () => {
                setActiveIdx(idx);
              }
            }, 
            idx === 0 ? undefined : `step-${idx}`
          );

          introTL.to({}, { duration: stepHold });
        });

        // PHASE 2: PHOTO-ONLY VERTICAL SPLIT REVEAL DIRECTLY REVEALING LANDING PAGE
        // 1. Activate the photo split shutter panels with the exact SHRINOVATECH image
        introTL.set([topPhotoPanelRef.current, bottomPhotoPanelRef.current], {
          autoAlpha: 1
        });

        // 2. Hide single background canvas
        introTL.to(unifiedCanvasRef.current, {
          duration: 0.05,
          opacity: 0
        }, "<");

        // 3. Fade out the SHRINOVATECH text simultaneously as the photo splits open
        introTL.to(foregroundTextContainerRef.current, {
          duration: 0.45,
          opacity: 0,
          scale: 1.04,
          ease: "power2.inOut"
        }, "<");

        // 4. The actual photo image itself splits vertically from the center line:
        // Top half of image slides UPWARD (-100%)
        // Bottom half of image slides DOWNWARD (+100%)
        introTL.to(topPhotoPanelRef.current, {
          duration: 0.88,
          yPercent: -100,
          ease: "power4.inOut",
          onStart: () => {
            // Trigger landing page entrance
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('intro-reveal'));
            }
          }
        }, "<")
        .to(bottomPhotoPanelRef.current, {
          duration: 0.88,
          yPercent: 100,
          ease: "power4.inOut"
        }, "<");
      }
    });

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, []);

  if (hidden) return null;

  const currentStep = introSteps[activeIdx] || introSteps[0];
  const isFinalStep = activeIdx === introSteps.length - 1;
  const finaleImage = introSteps[introSteps.length - 1].image;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* 1. SINGLE UNBROKEN FULL-SCREEN BACKGROUND CANVAS (100% SEAM-FREE)         */}
      {/* ========================================================================= */}
      <div 
        ref={unifiedCanvasRef}
        className="absolute inset-0 bg-[#071228] z-20 overflow-hidden pointer-events-none"
      >
        {introSteps.map((step, idx) => (
          <div
            key={idx}
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 overflow-hidden"
            style={{ opacity: activeIdx === idx ? 1 : 0 }}
          >
            <img
              src={step.image}
              alt=""
              className="w-full h-full object-cover object-center scale-110 filter blur-[3px]"
            />
            <div className="absolute inset-0 bg-[#071228]/80 backdrop-blur-[2px]" />
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 2. PHOTO-ONLY SPLIT SHUTTER PANELS (ACTUAL PHOTO SPLITS & REVEALS PAGE)   */}
      {/* ========================================================================= */}
      
      {/* Top Half of SHRINOVATECH Photo (Slides UP from center) */}
      <div 
        ref={topPhotoPanelRef} 
        className="absolute top-0 inset-x-0 h-[50.5%] z-25 overflow-hidden pointer-events-none origin-top opacity-0 invisible"
      >
        <div className="absolute top-0 inset-x-0 h-[100vh] w-full">
          <img
            src={finaleImage}
            alt=""
            className="w-full h-full object-cover object-center scale-110 filter blur-[3px]"
          />
          <div className="absolute inset-0 bg-[#071228]/80 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Bottom Half of SHRINOVATECH Photo (Slides DOWN from center) */}
      <div 
        ref={bottomPhotoPanelRef} 
        className="absolute bottom-0 inset-x-0 h-[50.5%] z-25 overflow-hidden pointer-events-none origin-bottom opacity-0 invisible"
      >
        <div className="absolute bottom-0 inset-x-0 h-[100vh] w-full">
          <img
            src={finaleImage}
            alt=""
            className="w-full h-full object-cover object-center scale-110 filter blur-[3px]"
          />
          <div className="absolute inset-0 bg-[#071228]/80 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FOREGROUND TYPOGRAPHY                                                   */}
      {/* ========================================================================= */}
      <div 
        ref={foregroundTextContainerRef}
        className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-auto"
      >
        {/* Skip Button */}
        <button
          type="button"
          onClick={dismissIntro}
          className="absolute top-6 right-6 z-50 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-md"
        >
          <span>Skip</span>
          <span className="text-[10px]">✕</span>
        </button>

        {/* Text Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 sm:px-8 text-center">

          {/* Main Title: 11 Offerings ➔ SHRINOVATECH (Clean & Pure Typography) */}
          <h1 
            ref={textRef} 
            className={`font-extrabold tracking-tight uppercase px-3 max-w-4xl mx-auto select-none transition-all duration-200 leading-tight ${
              isFinalStep 
                ? 'text-[clamp(1.85rem,5.2vw,3.75rem)] lg:text-[clamp(2.35rem,4.5vw,4.25rem)] tracking-[0.05em] py-1.5' 
                : 'text-[clamp(1.15rem,3.2vw,2.25rem)] lg:text-[clamp(1.35rem,3.4vw,2.75rem)]'
            }`}
            style={{ 
              fontFamily: currentStep.font,
              backgroundImage: currentStep.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {currentStep.text}
          </h1>

        </div>
      </div>

    </div>
  );
}
