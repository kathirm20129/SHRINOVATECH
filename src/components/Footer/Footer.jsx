import React from 'react';
import Logo from '../Logo/Logo';
import TechIcon from '../TechIcon/TechIcon';
import { footerData } from '../../data/footer';

export default function Footer({ currentPath = '/', navigate, onSelectService }) {
  const handleLinkClick = (e, item) => {
    if (item.serviceId) {
      e.preventDefault();
      if (navigate) navigate('/services/' + item.serviceId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.courseId) {
      e.preventDefault();
      if (navigate) navigate('/courses/' + item.courseId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href === '/services') {
      e.preventDefault();
      if (navigate) navigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href === '/courses') {
      e.preventDefault();
      if (navigate) navigate('/courses');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href === '/about') {
      e.preventDefault();
      if (navigate) navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href === '/contact') {
      e.preventDefault();
      if (navigate) navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href === '/projects') {
      e.preventDefault();
      if (navigate) navigate('/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href.startsWith('/services/')) {
      e.preventDefault();
      if (navigate) navigate(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href.startsWith('/courses/')) {
      e.preventDefault();
      if (navigate) navigate(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href === '/') {
      e.preventDefault();
      if (navigate) navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.href.startsWith('/#') || item.href.startsWith('#')) {
      e.preventDefault();
      const targetId = item.href.replace('/#', '').replace('#', '');
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

  return (
    <footer className="bg-navy-footer text-slate-400 pt-10 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Directory Grid (5 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 lg:gap-8 pb-8">
          {/* Col 1: Brand & Socials */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 max-w-sm">
            <div 
              onClick={() => {
                if (navigate) navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer mb-3 inline-block"
            >
              <Logo light />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              {footerData.about.description}
            </p>
            <div className="flex items-center gap-3">
              {footerData.about.socials.map((social) => {
                return (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <TechIcon name={social.name} size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {footerData.quickLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-xs text-slate-400 hover:text-[#38bdf8] hover:translate-x-1 inline-block transition-all duration-200 cursor-pointer"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white mb-3">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {footerData.services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-xs text-slate-400 hover:text-[#38bdf8] hover:translate-x-1 inline-block transition-all duration-200 cursor-pointer"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Courses */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white mb-3">
              Courses
            </h4>
            <ul className="flex flex-col gap-2">
              {footerData.courses.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-xs text-slate-400 hover:text-[#38bdf8] hover:translate-x-1 inline-block transition-all duration-200 cursor-pointer"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-white mb-3">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li className="flex items-center gap-2.5 group">
                <TechIcon name="location" size={15} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 leading-snug">
                  {footerData.contact.location || footerData.contact.address || 'Remote, India'}
                </span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <TechIcon name="whatsapp" size={15} className="flex-shrink-0 text-emerald-400 fill-emerald-400 group-hover:scale-110 transition-transform" />
                <a href={`https://api.whatsapp.com/send/?phone=%2B918270473635`} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition-colors whitespace-nowrap">
                  {footerData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <TechIcon name="gmail" size={15} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${footerData.contact.email}`} className="text-slate-300 hover:text-[#38bdf8] transition-colors whitespace-nowrap">
                  {footerData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <TechIcon name="clock" size={15} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 whitespace-nowrap">{footerData.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-center text-xs text-slate-500 text-center">
          <p>{footerData.legal.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
