import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Monitor, 
  Cloud, 
  Smartphone, 
  ShieldCheck, 
  Megaphone, 
  GraduationCap, 
  FileBadge, 
  Briefcase, 
  UserCheck,
  Brain,
  BarChart3,
  Gamepad2,
  Code2,
  Shield,
  CheckCircle2,
  Globe,
  BookOpen
} from 'lucide-react';
import Logo from '../Logo/Logo';
import { navLinks } from '../../data/navigation';

const iconMap = {
  Monitor,
  Cloud,
  Smartphone,
  ShieldCheck,
  Megaphone,
  GraduationCap,
  FileBadge,
  Briefcase,
  UserCheck,
  Brain,
  BarChart3,
  Gamepad2,
  Code2,
  Shield,
  CheckCircle2,
  Globe,
  BookOpen
};

export default function Navbar({ currentPath = '/', navigate, onOpenDemoModal }) {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'Services' | 'Courses' | null
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navListRef = useRef(null);
  const ctaRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Pure Hover-Controlled Dropdown Handlers
  const handleMouseEnterLink = (link) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHoveredLink(link.name);
    if (link.hasDropdown) {
      setActiveDropdown(link.name);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeaveLink = () => {
    setHoveredLink(null);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleMouseEnterDropdown = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Play Navbar Reveal Animation
  const runNavbarReveal = () => {
    const ctx = gsap.context(() => {
      // 1. Logo Drop & Scale In
      if (logoRef.current) {
        gsap.fromTo(logoRef.current,
          { y: -30, opacity: 0, scale: 0.92 },
          { duration: 0.8, y: 0, opacity: 1, scale: 1, ease: "back.out(1.5)", delay: 0.05 }
        );
      }

      // 2. Navigation Links Staggered Cascading Drop
      if (navListRef.current && navListRef.current.children) {
        gsap.fromTo(navListRef.current.children,
          { y: -25, opacity: 0 },
          { duration: 0.7, y: 0, opacity: 1, stagger: 0.05, ease: "power3.out", delay: 0.15 }
        );
      }

      // 3. CTA Get Started Button Spring Pop
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { y: -25, opacity: 0, scale: 0.9 },
          { duration: 0.8, y: 0, opacity: 1, scale: 1, ease: "back.out(1.6)", delay: 0.28 }
        );
      }
    }, headerRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    runNavbarReveal();

    const handleIntroReveal = () => {
      runNavbarReveal();
    };

    window.addEventListener('intro-reveal', handleIntroReveal);

    return () => {
      window.removeEventListener('intro-reveal', handleIntroReveal);
    };
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e, link) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (link.path === '/services') {
      e.preventDefault();
      if (navigate) navigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path === '/courses') {
      e.preventDefault();
      if (navigate) navigate('/courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path === '/about' || link.href === '/about') {
      e.preventDefault();
      if (navigate) navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path === '/contact' || link.href === '/contact') {
      e.preventDefault();
      if (navigate) navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path === '/') {
      e.preventDefault();
      if (navigate) navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path === '/projects' || link.href === '/projects') {
      e.preventDefault();
      if (navigate) navigate('/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path && link.path.startsWith('/#')) {
      e.preventDefault();
      const targetId = link.path.replace('/#', '');
      if (currentPath !== '/') {
        if (navigate) navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDropdownItemClick = (e, item, isServicesDropdown) => {
    if (e) e.preventDefault();

    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (item.courseId) {
      if (navigate) navigate('/courses/' + item.courseId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.serviceId) {
      if (navigate) navigate('/services/' + item.serviceId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href) {
      if (navigate) navigate(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  };

  const isLinkActive = (link) => {
    if (link.path === '/services' && currentPath.startsWith('/services')) return true;
    if (link.path === '/courses' && currentPath.startsWith('/courses')) return true;
    if (link.path === '/about' && currentPath.startsWith('/about')) return true;
    if (link.path === '/contact' && currentPath.startsWith('/contact')) return true;
    if (link.path === '/projects' && currentPath.startsWith('/projects')) return true;
    if (link.path === '/' && currentPath === '/') return true;
    return false;
  };

  const activeLinkObj = navLinks.find(l => l.name === activeDropdown && l.hasDropdown);

  return (
    <header 
      ref={headerRef}
      className="relative w-full h-20 bg-white z-40 border-b border-slate-200/80 transition-colors duration-200"
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">
        
        {/* Animated Brand Logo */}
        <div 
          ref={logoRef}
          onClick={() => {
            if (navigate) navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Logo />
          </motion.div>
        </div>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden lg:flex items-center gap-6"
          onMouseLeave={handleMouseLeaveLink}
        >
          <ul ref={navListRef} className="flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              const isHovered = hoveredLink === link.name;
              const isDropdownOpen = activeDropdown === link.name;

              return (
                <li 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnterLink(link)}
                  onMouseLeave={handleMouseLeaveLink}
                >
                  <a 
                    href={link.href} 
                    className={`relative z-10 inline-flex items-center gap-1.5 font-heading text-[0.9375rem] font-semibold px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                      active || isDropdownOpen || isHovered
                        ? 'text-[#0062ff]' 
                        : 'text-slate-700 hover:text-[#0062ff]'
                    }`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#0062ff]' : ''}`} 
                      />
                    )}

                    {/* Fluid Magnetic Active/Hover Background Pill */}
                    {(active || isHovered || isDropdownOpen) && (
                      <motion.span
                        layoutId="navHoverPill"
                        className="absolute inset-0 bg-blue-50/90 rounded-full -z-10 shadow-xs border border-blue-100/60"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div ref={ctaRef} className="flex items-center gap-3">
          <div className="hidden sm:block">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => {
                if (onOpenDemoModal) {
                  onOpenDemoModal();
                } else if (navigate) {
                  navigate('/contact');
                }
              }}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0062ff] hover:bg-[#0051d9] text-white text-sm font-heading font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Shimmer light sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

              <span className="relative z-10">Get Started</span>
              <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Hamburger Mobile Toggle with Animated Rotation */}
          <motion.button 
            whileTap={{ scale: 0.92 }}
            type="button"
            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Floating Mega-Menu Dropdown on Pure Hover with Spring Entrance */}
        <AnimatePresence>
          {activeLinkObj && (
            <motion.div 
              key={activeLinkObj.name}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.20, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mx-auto w-full max-w-4xl px-4 sm:px-6 pt-2 z-50 pointer-events-auto"
              onMouseEnter={() => handleMouseEnterDropdown(activeLinkObj.name)}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <div className="bg-white rounded-2xl shadow-[0_22px_55px_rgba(0,0,0,0.12)] border border-slate-200/90 p-6 sm:p-7 overflow-hidden">
                
                {/* Mega Menu Header with Functional Browse All Button */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#0a1128] tracking-tight">
                      {activeLinkObj.dropdownTitle || activeLinkObj.name}
                    </h3>
                    {activeLinkObj.dropdownSubtitle && (
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {activeLinkObj.dropdownSubtitle}
                      </p>
                    )}
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={(e) => {
                      setActiveDropdown(null);
                      if (activeLinkObj.name === 'Services') {
                        if (navigate) navigate('/services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (activeLinkObj.name === 'Courses') {
                        if (navigate) navigate('/courses');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        handleLinkClick(e, activeLinkObj);
                      }
                    }}
                    className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 hover:bg-[#0062ff] text-[#0062ff] hover:text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <span>Browse All</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                </div>

                {/* 3-Column Grid of 9 Service/Course items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
                  {activeLinkObj.dropdownItems?.map((item, idx) => {
                    const ItemIcon = iconMap[item.icon] || Monitor;
                    const isServices = activeLinkObj.name === 'Services';

                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                        className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-blue-50/80 cursor-pointer"
                        onClick={(e) => handleDropdownItemClick(e, item, isServices)}
                      >
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062ff] shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:bg-[#0062ff] group-hover:text-white">
                          <ItemIcon size={18} />
                        </div>
                        <span className="font-heading text-xs sm:text-[13px] font-semibold leading-snug transition-colors text-slate-700 group-hover:text-[#0062ff]">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Mobile Drawer Navigation Menu with Staggered Link Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden fixed top-20 left-0 w-full bg-white border-t border-slate-200 shadow-xl overflow-y-auto max-h-[calc(100vh-5rem)] z-40"
          >
            <div className="p-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link, lIdx) => {
                  const isServices = link.name === 'Services';

                  return (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: lIdx * 0.04 }}
                      className="border-b border-slate-100 pb-3"
                    >
                      <a 
                        href={link.href} 
                        className={`font-heading text-lg font-bold flex items-center justify-between ${isLinkActive(link) ? 'text-[#0062ff]' : 'text-slate-800'}`}
                        onClick={(e) => handleLinkClick(e, link)}
                      >
                        <span>{link.name}</span>
                      </a>
                      {link.hasDropdown && (
                        <div className="mt-2.5 pl-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {link.dropdownItems?.map((sub, sIdx) => {
                            const SubIcon = iconMap[sub.icon] || Monitor;
                            return (
                              <div 
                                key={sIdx}
                                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0062ff] cursor-pointer transition-colors"
                                onClick={(e) => handleDropdownItemClick(e, sub, isServices)}
                              >
                                <SubIcon size={16} className="text-[#0062ff] shrink-0" />
                                <span>{sub.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
              
              <div className="pt-2">
                <button 
                  className="w-full py-3.5 rounded-xl bg-[#0062ff] hover:bg-[#0051d9] text-white text-sm font-heading font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95" 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenDemoModal) {
                      onOpenDemoModal();
                    } else if (navigate) {
                      navigate('/contact');
                    }
                  }}
                >
                  <span>Book a Demo / Get Started</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
