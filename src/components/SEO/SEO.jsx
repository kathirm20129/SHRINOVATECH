import { useEffect } from 'react';
import { defaultSEO, routeSEOMap, serviceSEOMap, courseSEOMap } from './seoData';

/**
 * Lightweight, high-performance dynamic SEO manager for single-page routing.
 * Synchronously keeps document.title, meta descriptions, canonical URLs,
 * and OpenGraph/Twitter social cards perfectly aligned with the active route.
 */
export default function SEO({ currentPath = '/', serviceId = null, courseId = null }) {
  useEffect(() => {
    // 1. Resolve route-specific metadata
    let seo = { ...defaultSEO };

    if (serviceId && serviceSEOMap[serviceId]) {
      const s = serviceSEOMap[serviceId];
      seo = {
        ...defaultSEO,
        title: s.title,
        description: s.description,
        keywords: s.keywords || defaultSEO.keywords,
        canonical: `https://shrinovatech.com/services/${serviceId}`
      };
    } else if (courseId && courseSEOMap[courseId]) {
      const c = courseSEOMap[courseId];
      seo = {
        ...defaultSEO,
        title: c.title,
        description: c.description,
        keywords: c.keywords || defaultSEO.keywords,
        canonical: `https://shrinovatech.com/courses/${courseId}`
      };
    } else {
      const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1
        ? currentPath.slice(0, -1)
        : currentPath;
      if (routeSEOMap[normalizedPath]) {
        seo = { ...defaultSEO, ...routeSEOMap[normalizedPath] };
      }
    }

    // 2. Update Document Title
    document.title = seo.title;

    // Helper to safely set or create a meta tag
    const updateMeta = (selector, attributeName, attributeValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to safely set or create link tag
    const updateLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 3. Update Standard Meta Tags
    updateMeta('meta[name="description"]', 'name', 'description', seo.description);
    if (seo.keywords) {
      updateMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords);
    }

    // 4. Update Canonical Link
    const fullCanonical = seo.canonical || `https://shrinovatech.com${currentPath}`;
    updateLink('canonical', fullCanonical);

    // 5. Update Open Graph Meta Tags
    updateMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    updateMeta('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', seo.type || 'website');
    updateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'SHRINOVATECH');

    // 6. Update Twitter Card Meta Tags
    updateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    updateMeta('meta[name="twitter:url"]', 'name', 'twitter:url', fullCanonical);

    // 7. Dynamic BreadcrumbList Structured Data
    try {
      let breadcrumbScript = document.getElementById('route-breadcrumb-schema');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'route-breadcrumb-schema';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }

      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://shrinovatech.com/'
        }
      ];

      if (currentPath.startsWith('/services')) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://shrinovatech.com/services'
        });
        if (serviceId && serviceSEOMap[serviceId]) {
          breadcrumbItems.push({
            '@type': 'ListItem',
            position: 3,
            name: serviceSEOMap[serviceId].title.split('|')[0].trim(),
            item: `https://shrinovatech.com/services/${serviceId}`
          });
        }
      } else if (currentPath.startsWith('/courses')) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Courses',
          item: 'https://shrinovatech.com/courses'
        });
        if (courseId && courseSEOMap[courseId]) {
          breadcrumbItems.push({
            '@type': 'ListItem',
            position: 3,
            name: courseSEOMap[courseId].title.split('|')[0].trim(),
            item: `https://shrinovatech.com/courses/${courseId}`
          });
        }
      } else if (currentPath.startsWith('/projects')) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Our Success & Projects',
          item: 'https://shrinovatech.com/projects'
        });
      } else if (currentPath.startsWith('/about')) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: 'https://shrinovatech.com/about'
        });
      } else if (currentPath.startsWith('/contact')) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: 'https://shrinovatech.com/contact'
        });
      }

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems
      };

      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    } catch (e) {
      // Non-blocking schema enhancement
    }
  }, [currentPath, serviceId, courseId]);

  return null;
}
