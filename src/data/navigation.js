export const navLinks = [
  { name: 'Home', href: '/', path: '/' },
  { 
    name: 'Services', 
    href: '/services', 
    path: '/services',
    hasDropdown: true,
    dropdownTitle: 'Services',
    dropdownSubtitle: 'Technology Solutions & Career Support',
    dropdownItems: [
      { name: 'Website Development', href: '/services/web-dev', serviceId: 'web-dev', icon: 'Monitor' },
      { name: 'SaaS Product Development', href: '/services/saas-dev', serviceId: 'saas-dev', icon: 'Cloud' },
      { name: 'Application Development', href: '/services/app-dev', serviceId: 'app-dev', icon: 'Smartphone' },
      { name: 'Cybersecurity & VAPT', href: '/services/cybersecurity', serviceId: 'cybersecurity', icon: 'ShieldCheck' },
      { name: 'Digital Marketing & SEO', href: '/services/digital-marketing', serviceId: 'digital-marketing', icon: 'Megaphone' },
      { name: 'Final Year Projects', href: '/services/final-year-projects', serviceId: 'final-year-projects', icon: 'GraduationCap' },
      { name: 'Resume & LinkedIn Optimization', href: '/services/resume-linkedin', serviceId: 'resume-linkedin', icon: 'FileBadge' },
      { name: 'Job Tips & Interview Tactics', href: '/services/job-tips', serviceId: 'job-tips', icon: 'Briefcase' },
      { name: 'Career Guidance & Mentorship', href: '/services/career-guidance', serviceId: 'career-guidance', icon: 'UserCheck' },
      { name: 'Courses & Practical Training', href: '/courses', icon: 'BookOpen' },
    ]
  },
  { 
    name: 'Courses', 
    href: '/courses', 
    path: '/courses',
    hasDropdown: true,
    dropdownTitle: 'Courses',
    dropdownSubtitle: '100% Practical Industry-Ready Programs',
    dropdownItems: [
      { name: 'AI & Machine Learning', href: '/courses/ai-ml', courseId: 'ai-ml', icon: 'Brain' },
      { name: 'Data Science & Analytics', href: '/courses/data-science', courseId: 'data-science', icon: 'BarChart3' },
      { name: 'Full Stack Development', href: '/courses/full-stack', courseId: 'full-stack', icon: 'Code2' },
      { name: 'Mobile App Development', href: '/courses/mobile-app', courseId: 'mobile-app', icon: 'Smartphone' },
      { name: 'Cyber Security', href: '/courses/cyber-security', courseId: 'cyber-security', icon: 'Shield' },
      { name: 'Software Testing & QA', href: '/courses/software-testing', courseId: 'software-testing', icon: 'CheckCircle2' },
      { name: 'Cloud & DevOps', href: '/courses/cloud-devops', courseId: 'cloud-devops', icon: 'Globe' },
    ]
  },
  { name: 'Our Success', href: '/projects', path: '/projects' },
  { name: 'About Us', href: '/about', path: '/about' },
  { name: 'Contact', href: '/contact', path: '/contact' },
];
