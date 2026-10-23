import React, { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import SuccessStories from './components/SuccessStories/SuccessStories';
import FAQ from './components/FAQ/FAQ';
import ServicesPreview from '../Services/components/ServicesPreview';
import CoursesPreview from '../Courses/components/CoursesPreview';

export default function HomePage({ navigate, onOpenDemoModal, onSelectService }) {
  useEffect(() => {
    const sections = [...document.querySelectorAll("section")];

    // Ensure all sections have is-visible by default or smoothly reveal
    sections.forEach((section) => {
      section.classList.add("is-visible");
      const contentContainer = section.querySelector("[data-content]");
      if (contentContainer) {
        const sectionChildren = [...contentContainer.children];
        sectionChildren.forEach((el, index) => {
          el.style.setProperty("--delay", `${index * 120}ms`);
        });
      }
    });

    const options = {
      rootMargin: "150px 0px 150px 0px",
      threshold: [0, 0.05, 0.1]
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex-grow">
      {/* 1. Hero Section & Metrics Banner */}
      <Hero 
        navigate={navigate} 
        onOpenDemoModal={onOpenDemoModal} 
        onSelectService={onSelectService} 
      />

      {/* 2. Our Services Section (5 Tech + 4 Career Cards) */}
      <ServicesPreview navigate={navigate} />

      {/* 3. Industry Courses Section (9 Dark Theme Tech Cards) */}
      <CoursesPreview navigate={navigate} />

      {/* 4. Our Success Section (5 Real Stories / Impact Cards) */}
      <SuccessStories navigate={navigate} />

      {/* 5. Why Choose Shrinovatech Section (6 Feature Columns) */}
      <WhyChooseUs />

      {/* 6. Frequently Asked Questions (Interactive Accordion) */}
      <FAQ />
    </div>
  );
}
