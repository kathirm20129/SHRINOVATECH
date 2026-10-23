import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Sparkles } from 'lucide-react';
import Button from '../../../../components/Button/Button';
import StatsBanner from './StatsBanner';
import heroImage from '../../../../assets/hero.webp';

export default function Hero({ navigate, onOpenDemoModal }) {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const clipH1Ref = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const rightImageRef = useRef(null);
  const statsRef = useRef(null);

  const runRevealSequence = () => {
    // 0. Top Pill Badge Reveal
    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current,
        { y: -18, opacity: 0, scale: 0.88 },
        {
          duration: 0.75,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out(1.8)",
          delay: 0.05
        }
      );
    }

    // 1. 3D Perspective Kinetic Letter Roll & Blur Dissolve
    const letters = clipH1Ref.current?.querySelectorAll('.letter-span');
    if (letters && letters.length > 0) {
      gsap.fromTo(letters, 
        { 
          y: "135%", 
          opacity: 0, 
          rotateX: 65, 
          filter: "blur(6px)",
          transformOrigin: "50% 100% -20px"
        },
        {
          duration: 1.15,
          y: "0%",
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          ease: "power4.out",
          stagger: 0.02,
          delay: 0.12
        }
      );
    }

    // 2. Subtitle Words Staggered Rise & Blur Dissolve
    const subWords = subtextRef.current?.querySelectorAll('.sub-word');
    if (subWords && subWords.length > 0) {
      gsap.fromTo(subWords,
        { y: 18, opacity: 0, filter: "blur(4px)" },
        {
          duration: 0.75,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          stagger: 0.015,
          delay: 0.45
        }
      );
    }

    // 3. CTA Action Buttons Spring Entrance
    if (buttonsRef.current) {
      gsap.fromTo(buttonsRef.current,
        { y: 22, opacity: 0, scale: 0.94 },
        {
          duration: 0.85,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out(1.6)",
          delay: 0.62
        }
      );
    }

    // 4. Right Image & Fluid Graphic Expansion
    if (rightImageRef.current) {
      gsap.fromTo(rightImageRef.current,
        { x: 80, opacity: 0, scale: 0.93 },
        {
          duration: 1.2,
          x: 0,
          opacity: 1,
          scale: 1,
          ease: "power4.out",
          delay: 0.18
        }
      );
    }

    // 5. Stats Metrics Banner
    if (statsRef.current) {
      gsap.fromTo(statsRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        {
          duration: 0.95,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          delay: 0.72
        }
      );
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      runRevealSequence();
    }, heroRef);

    // Listen for intro-reveal for synchronized replay
    const handleIntroReveal = () => {
      runRevealSequence();
    };

    window.addEventListener('intro-reveal', handleIntroReveal);

    return () => {
      window.removeEventListener('intro-reveal', handleIntroReveal);
      ctx.revert();
    };
  }, []);

  const subtitleText = "We offer innovative technology solutions, industry-ready courses, and career support to help you achieve success.";

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="is-visible relative pt-2 pb-4 md:pt-3 md:pb-6 bg-white overflow-hidden"
    >
      {/* Main Content Container */}
      <div 
        data-content
        className="clip__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[440px] md:min-h-[490px]">
          
          {/* Left Column: Heading with 3D Kinetic Text Reveal, Subtitle & Buttons */}
          <div className="lg:col-span-7 xl:col-span-7 pt-1 pb-2 lg:pt-2 lg:pb-4">
            
            {/* Top Kinetic Sparkle Badge */}
            <div ref={badgeRef} className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-900/10 shadow-xs hover:border-[#0062ff]/30 transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062ff]"></span>
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#1a3a6e] to-[#0062ff] bg-clip-text text-transparent">
                Next-Gen Tech &amp; Education
              </span>
            </div>

            {/* 3D Perspective Kinetic Typography Heading */}
            <h1 
              ref={clipH1Ref} 
              className="clip h1 text-[2.1rem] xs:text-[2.45rem] sm:text-[2.85rem] md:text-[3.25rem] lg:text-[2.85rem] xl:text-[3.4rem] font-extrabold text-[#0a1128] tracking-tight leading-[1.12] mb-6 select-none [perspective:1200px]"
            >
              {/* Line 1: Empower Your Vision. */}
              <div className="flex flex-nowrap whitespace-nowrap items-baseline">
                {["Empower", "Your", "Vision."].map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex mr-[0.28em]">
                    {Array.from(word).map((char, cIdx) => (
                      <span key={cIdx} className="inline-block overflow-hidden h-[1.18em] leading-[1.18]">
                        <span className="letter-span inline-block will-change-transform">{char}</span>
                      </span>
                    ))}
                  </span>
                ))}
              </div>

              {/* Line 2: Master Tech Skills. */}
              <div className="flex flex-nowrap whitespace-nowrap items-baseline">
                {["Master", "Tech", "Skills."].map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex mr-[0.28em]">
                    {Array.from(word).map((char, cIdx) => (
                      <span key={cIdx} className="inline-block overflow-hidden h-[1.18em] leading-[1.18]">
                        <span className="letter-span inline-block will-change-transform">{char}</span>
                      </span>
                    ))}
                  </span>
                ))}
              </div>

              {/* Line 3: Build Your Future. */}
              <div className="flex flex-nowrap whitespace-nowrap items-baseline">
                {["Build", "Your"].map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex mr-[0.28em]">
                    {Array.from(word).map((char, cIdx) => (
                      <span key={cIdx} className="inline-block overflow-hidden h-[1.18em] leading-[1.18]">
                        <span className="letter-span inline-block will-change-transform">{char}</span>
                      </span>
                    ))}
                  </span>
                ))}
                <span className="inline-flex text-[#0062ff]">
                  {Array.from("Future.").map((char, cIdx) => (
                    <span key={cIdx} className="inline-block overflow-hidden h-[1.18em] leading-[1.18]">
                      <span className="letter-span inline-block text-[#0062ff] will-change-transform">{char}</span>
                    </span>
                  ))}
                </span>
              </div>
            </h1>

            {/* Subtitle with Staggered Word Reveal */}
            <p 
              ref={subtextRef}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl flex flex-wrap"
            >
              {subtitleText.split(' ').map((word, idx) => (
                <span key={idx} className="inline-block mr-[0.28em]">
                  <span className="sub-word inline-block">{word}</span>
                </span>
              ))}
            </p>

            {/* Action Buttons */}
            <div 
              ref={buttonsRef}
              className="flex flex-wrap items-center gap-4"
            >
              <Button 
                variant="primary" 
                size="lg" 
                rounded="md"
                showArrow
                onClick={(e) => {
                  e.preventDefault();
                  if (navigate) navigate('/services');
                }}
                className="!bg-[#0062ff] hover:!bg-[#0051d9] !text-white !font-semibold !px-7 !py-3.5 shadow-md hover:shadow-lg !rounded-lg cursor-pointer transition-all active:scale-95"
              >
                Explore Our Services
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                rounded="md"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenDemoModal) {
                    onOpenDemoModal();
                  } else if (navigate) {
                    navigate('/contact');
                  }
                }}
                className="!border-slate-300 hover:!border-[#0062ff] !text-slate-800 hover:!text-[#0062ff] hover:!bg-blue-50/50 !font-semibold !px-7 !py-3.5 !rounded-lg cursor-pointer transition-all active:scale-95"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Column: Collaborators Image Cleanly Grounded & Attached to Right Side Edge */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-end justify-end relative z-10 mt-6 lg:mt-0">
            <div 
              ref={rightImageRef}
              className="relative w-full max-w-lg lg:max-w-none lg:w-[112%] xl:w-[120%] origin-bottom-right flex flex-col items-end"
            >
              {/* 1. Dotted Matrix Pattern behind left person */}
              <div className="absolute top-5 -left-6 sm:-left-8 pointer-events-none hidden sm:block opacity-40 select-none z-0">
                <div className="grid grid-cols-6 gap-2.5">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  ))}
                </div>
              </div>

              {/* 2. Topographic Contour Elevation Lines behind people attached to right edge */}
              <div className="absolute -top-10 -right-4 lg:-right-8 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 pointer-events-none opacity-35 text-blue-400 select-none z-0">
                <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
                  <path d="M 210,40 C 290,30 360,80 375,150 C 390,220 350,290 290,330 C 230,370 150,355 100,300 C 50,245 60,165 110,105 C 145,60 175,45 210,40 Z" />
                  <path d="M 215,65 C 280,58 335,95 348,155 C 360,215 328,272 278,305 C 228,338 162,325 120,280 C 78,235 88,168 130,120 C 160,82 185,70 215,65 Z" />
                  <path d="M 220,90 C 270,85 312,115 322,160 C 332,208 305,250 262,278 C 220,305 172,295 138,258 C 105,220 112,172 148,135 C 172,105 195,94 220,90 Z" />
                  <path d="M 225,115 C 260,110 290,135 298,170 C 305,202 282,232 248,252 C 212,272 180,262 155,235 C 130,205 135,172 162,148 C 182,128 205,118 225,115 Z" />
                  <path d="M 230,140 C 252,136 270,152 275,178 C 280,200 262,218 238,228 C 212,238 190,230 175,212 C 160,192 162,172 178,158 C 192,145 212,142 230,140 Z" />
                </svg>
              </div>

              {/* 3. The Collaborators Cutout Image with White Fade Vignette around Edges */}
              <div className="relative z-10 w-full overflow-hidden [mask-image:radial-gradient(ellipse_94%_92%_at_48%_52%,black_75%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_94%_92%_at_48%_52%,black_75%,transparent_100%)]">
                <img 
                  src={heroImage} 
                  alt="SHRINOVATECH - Innovate, Learn, Grow"
                  width="1536"
                  height="1024"
                  className="w-full h-auto object-contain object-right block relative select-none"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
                {/* Subtle White Edge Blending Overlays */}
                <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
              </div>

              {/* 4. Signature Fluid Blue Wave Overlay perfectly matched to reference curve */}
              <div className="absolute -bottom-2 -right-4 lg:-right-8 w-[92%] sm:w-[88%] h-[26%] sm:h-[29%] z-20 pointer-events-none overflow-hidden select-none">
                <svg
                  viewBox="0 0 800 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-fill drop-shadow-sm"
                  preserveAspectRatio="none"
                >
                  {/* Background Depth Wave Layer */}
                  <path
                    d="M 0,260 C 120,240 220,130 360,110 C 500,90 600,160 720,100 C 760,80 785,55 800,30 L 800,260 Z"
                    fill="#0051d9"
                    opacity="0.8"
                  />
                  {/* Foreground Vibrant Primary Wave Layer */}
                  <path
                    d="M 0,260 C 130,250 230,170 370,140 C 510,120 600,195 720,135 C 765,115 788,90 800,60 L 800,260 Z"
                    fill="#0062ff"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Metric Counter Banner */}
        <div ref={statsRef}>
          <StatsBanner />
        </div>

      </div>
    </section>
  );
}
