import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IntroAnimation, ScrollProgress, Navbar, Footer, SEO } from './components';
import BookDemoModal from './components/BookDemoModal/BookDemoModal';
import { 
  HomePage, 
  ServicesPage, 
  ServiceDetailPage, 
  CoursesPage, 
  CourseDetailPage, 
  AboutPage, 
  ContactPage, 
  ProjectsPage 
} from './pages';

const BASE_URL = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const normalizePath = (pathname) => {
  if (!pathname) return '/';
  if (BASE_URL && pathname.startsWith(BASE_URL)) {
    const stripped = pathname.slice(BASE_URL.length);
    return stripped ? (stripped.startsWith('/') ? stripped : '/' + stripped) : '/';
  }
  return pathname;
};

export const toFullPath = (route) => {
  const cleanRoute = !route ? '/' : (route.startsWith('/') ? route : '/' + route);
  return `${BASE_URL}${cleanRoute}`;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return (typeof window !== 'undefined' && normalizePath(window.location.pathname)) || '/';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  // Fast reveal: immediately true on subpages
  const [isPageRevealed, setIsPageRevealed] = useState(() => {
    if (typeof window === 'undefined') return true;
    const activeRoute = normalizePath(window.location.pathname);
    const isSubpage = activeRoute !== '/' && activeRoute !== '';
    return isSubpage;
  });

  useEffect(() => {
    const handleReveal = () => setIsPageRevealed(true);
    window.addEventListener('intro-reveal', handleReveal);
    
    // Safety auto-reveal fallback (only if intro times out)
    const safetyTimer = setTimeout(() => {
      setIsPageRevealed(true);
    }, 8000);

    return () => {
      window.removeEventListener('intro-reveal', handleReveal);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Open demo modal handler
  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((typeof window !== 'undefined' && normalizePath(window.location.pathname)) || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigate function that updates history and state smoothly
  const navigate = (to) => {
    const internalRoute = normalizePath(to);
    if (internalRoute !== currentPath) {
      window.history.pushState({}, '', toFullPath(internalRoute));
      setCurrentPath(internalRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isServicesIndex = currentPath === '/services' || currentPath === '/services/';
  const isServiceDetail = currentPath.startsWith('/services/') && currentPath.length > 10;
  const activeServiceId = isServiceDetail ? currentPath.replace('/services/', '').replace('/', '') : null;

  const isCoursesIndex = currentPath === '/courses' || currentPath === '/courses/';
  const isCourseDetail = currentPath.startsWith('/courses/') && currentPath.length > 9;
  const activeCourseId = isCourseDetail ? currentPath.replace('/courses/', '').replace('/', '') : null;

  const isAboutPage = currentPath === '/about' || currentPath === '/about/';
  const isContactPage = currentPath === '/contact' || currentPath === '/contact/';
  const isProjectsPage = currentPath === '/projects' || currentPath === '/projects/';
  
  const handleIntroComplete = React.useCallback(() => {
    setIsPageRevealed(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Dynamic SEO Head Manager */}
      <SEO 
        currentPath={currentPath}
        serviceId={activeServiceId}
        courseId={activeCourseId}
      />

      {/* Top Scroll Progress Bar & Floating Circular Progress Scroll-To-Top */}
      <ScrollProgress />

      {/* GSAP Typography Morphing Intro Curtain (Bypassed if already seen or subpage) */}
      <IntroAnimation onComplete={handleIntroComplete} />

      {/* Top Navigation Bar with Entrance Animation */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={isPageRevealed ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full z-40 relative"
      >
        <Navbar 
          currentPath={currentPath}
          navigate={navigate} 
          onOpenDemoModal={handleOpenDemoModal}
        />
      </motion.div>

      {/* Main Multi-Page Content View */}
      <motion.main 
        initial={{ opacity: 0.95 }}
        animate={isPageRevealed ? { opacity: 1 } : { opacity: 0.95 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow"
      >
        {isServiceDetail ? (
          <ServiceDetailPage 
            serviceId={activeServiceId} 
            navigate={navigate} 
          />
        ) : isServicesIndex ? (
          <ServicesPage 
            navigate={navigate} 
          />
        ) : isCourseDetail ? (
          <CourseDetailPage 
            courseId={activeCourseId} 
            navigate={navigate} 
          />
        ) : isCoursesIndex ? (
          <CoursesPage 
            navigate={navigate} 
          />
        ) : isAboutPage ? (
          <AboutPage 
            navigate={navigate} 
          />
        ) : isContactPage ? (
          <ContactPage 
            navigate={navigate} 
          />
        ) : isProjectsPage ? (
          <ProjectsPage 
            navigate={navigate} 
          />
        ) : (
          <HomePage 
            navigate={navigate} 
            onOpenDemoModal={handleOpenDemoModal}
          />
        )}
      </motion.main>

      {/* Comprehensive Footer */}
      <Footer 
        currentPath={currentPath}
        navigate={navigate} 
      />

      {/* Global Book a Demo & Registration Modal */}
      {isDemoModalOpen && (
        <BookDemoModal 
          isOpen={isDemoModalOpen} 
          onClose={handleCloseDemoModal} 
        />
      )}
    </div>
  );
}
