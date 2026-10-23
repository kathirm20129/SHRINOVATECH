// Central SEO metadata mapping for every route and dynamic slug

export const defaultSEO = {
  title: 'SHRINOVATECH - Innovate • Learn • Grow | Technology Solutions & Career Support',
  description: 'SHRINOVATECH offers innovative technology solutions, custom SaaS & web development, cybersecurity VAPT, industry-ready tech courses, and 1-on-1 career support.',
  keywords: 'technology solutions, software development company, web development, mobile app development, SaaS engineering, cybersecurity VAPT, AI ML courses, full stack training, IT careers, SHRINOVATECH',
  canonical: 'https://shrinovatech.com/',
  image: 'https://shrinovatech.com/assets/hero.webp',
  type: 'website'
};

export const routeSEOMap = {
  '/': defaultSEO,
  '/services': {
    title: 'Technology Services & Digital Solutions | SHRINOVATECH',
    description: 'Explore SHRINOVATECH\'s end-to-end IT services: Full-Stack Web Development, SaaS Engineering, Mobile Apps, Cybersecurity VAPT, Digital Marketing, and 1-on-1 Career Mentorship.',
    keywords: 'IT services, software development, web development company, SaaS platform engineering, cybersecurity penetration testing, VAPT, digital marketing, IT career mentorship',
    canonical: 'https://shrinovatech.com/services',
    type: 'website'
  },
  '/courses': {
    title: 'Industry-Ready Tech Courses & Practical Training | SHRINOVATECH',
    description: 'Practical 100% project-based IT training in AI & Machine Learning, Data Science, Full Stack, Cyber Security, Cloud & DevOps, and QA Automation with guaranteed career guidance.',
    keywords: 'tech courses, AI machine learning training, full stack web development course, data science bootcamp, cyber security certification, cloud devops course, software testing training',
    canonical: 'https://shrinovatech.com/courses',
    type: 'website'
  },
  '/projects': {
    title: 'Our Success Stories, Portfolio & Client Impact | SHRINOVATECH',
    description: 'Explore proven results and case studies from SHRINOVATECH: enterprise software solutions, client digital transformations, and graduate career placement stories.',
    keywords: 'software case studies, web development portfolio, client testimonials, tech career success stories, SHRINOVATECH projects',
    canonical: 'https://shrinovatech.com/projects',
    type: 'website'
  },
  '/about': {
    title: 'About Us - Our Mission, Vision & Leadership | SHRINOVATECH',
    description: 'Learn about SHRINOVATECH\'s mission to bridge academia and industry through cutting-edge technology consulting, real-world project education, and career acceleration.',
    keywords: 'about SHRINOVATECH, tech company vision, IT education mission, technology leadership, student career development',
    canonical: 'https://shrinovatech.com/about',
    type: 'website'
  },
  '/contact': {
    title: 'Contact SHRINOVATECH - Book a Demo & Get in Touch',
    description: 'Get in touch with SHRINOVATECH for custom software development inquiries, enterprise consulting, student enrollments, or schedule a free 1-on-1 demo.',
    keywords: 'contact SHRINOVATECH, book a demo, software development consultation, course enrollment, IT training contact',
    canonical: 'https://shrinovatech.com/contact',
    type: 'website'
  }
};

export const serviceSEOMap = {
  'web-dev': {
    title: 'Website & Modern Web Application Development | SHRINOVATECH',
    description: 'High-performance, modern, responsive, and SEO-optimized website development using React, Next.js, and scalable cloud technologies tailored for business growth.',
    keywords: 'website development, custom web app, React Nextjs development, responsive web design, performance web engineering'
  },
  'saas-dev': {
    title: 'SaaS Product Development & Cloud Engineering | SHRINOVATECH',
    description: 'End-to-end SaaS application engineering with scalable cloud architecture, multi-tenant databases, automated billing, and secure API microservices.',
    keywords: 'SaaS development, cloud architecture, multi-tenant SaaS, software as a service, microservices'
  },
  'app-dev': {
    title: 'iOS & Android Mobile Application Development | SHRINOVATECH',
    description: 'Cross-platform mobile applications built with React Native and Flutter delivering fluid 60 FPS performance, offline support, and native capabilities.',
    keywords: 'mobile app development, React Native, iOS Android apps, cross-platform mobile apps'
  },
  'cybersecurity': {
    title: 'Cybersecurity Auditing, VAPT & Threat Defense | SHRINOVATECH',
    description: 'Comprehensive vulnerability assessment and penetration testing (VAPT) to protect your infrastructure, web applications, network, and APIs against attacks.',
    keywords: 'cybersecurity services, VAPT audit, penetration testing, vulnerability assessment, secure coding'
  },
  'digital-marketing': {
    title: 'Digital Marketing, Growth Strategy & Technical SEO | SHRINOVATECH',
    description: 'Data-driven digital marketing, technical search engine optimization (SEO), high-ROI PPC campaigns, and organic visibility strategies.',
    keywords: 'digital marketing, technical SEO, organic search growth, Google Ads, digital branding'
  },
  'final-year-projects': {
    title: 'Final Year Engineering Projects & Code Mentorship | SHRINOVATECH',
    description: 'Industry-grade final year projects for CS, IT, and AI students with production-quality code, documentation, viva preparation, and senior engineer mentorship.',
    keywords: 'final year projects, computer science engineering projects, AI ML project guidance, college projects'
  },
  'resume-linkedin': {
    title: 'ATS Resume Writing & LinkedIn Profile Optimization | SHRINOVATECH',
    description: 'Stand out to top tech recruiters with ATS-optimized resumes and high-visibility LinkedIn profiles designed by senior tech recruiters.',
    keywords: 'ATS resume writing, LinkedIn profile optimization, tech resume review, job search branding'
  },
  'job-tips': {
    title: 'Tech Job Search Tips & Coding Interview Tactics | SHRINOVATECH',
    description: 'Master technical coding interviews, system design rounds, and behavioral questions with battle-tested strategies from experienced industry engineers.',
    keywords: 'coding interview preparation, tech job tactics, DSA interview guidance, system design interview tips'
  },
  'career-guidance': {
    title: '1-on-1 Career Guidance & Mentorship for Tech Roles | SHRINOVATECH',
    description: 'Personalized 1-on-1 roadmap planning, skill gap analysis, and ongoing mentorship to navigate career transitions and land high-paying software roles.',
    keywords: 'tech career guidance, 1 on 1 tech mentorship, software engineer roadmap, career coaching'
  }
};

export const courseSEOMap = {
  'ai-ml': {
    title: 'AI & Machine Learning Mastery Course | SHRINOVATECH',
    description: 'Master Deep Learning, Computer Vision, NLP, PyTorch, and Generative AI with hands-on production capstone projects and placement support.',
    keywords: 'AI course, machine learning training, PyTorch, Deep Learning, Generative AI bootcamp'
  },
  'data-science': {
    title: 'Data Science & Business Analytics Masterclass | SHRINOVATECH',
    description: 'Transform raw data into strategic business insights using Python, SQL, Tableau, PowerBI, statistical modeling, and predictive analytics.',
    keywords: 'data science course, business analytics training, Python SQL Tableau, predictive modeling bootcamp'
  },
  'full-stack': {
    title: 'Full Stack Web Development Bootcamp (MERN & Next.js) | SHRINOVATECH',
    description: 'Become a job-ready full stack engineer building modern production web applications with React, Next.js, Node.js, and PostgreSQL/MongoDB.',
    keywords: 'full stack web development, MERN stack course, Nextjs React bootcamp, web developer certification'
  },
  'mobile-app': {
    title: 'Mobile App Development Course (React Native & Flutter) | SHRINOVATECH',
    description: 'Build and deploy cross-platform mobile apps for iOS and Android with modern React Native, state management, and real-world apps.',
    keywords: 'mobile app development course, React Native training, iOS Android app bootcamp'
  },
  'cyber-security': {
    title: 'Cyber Security & Ethical Hacking Course | SHRINOVATECH',
    description: 'Learn ethical hacking, network defense, VAPT, bug bounty hunting, and threat defense from certified cybersecurity professionals.',
    keywords: 'cyber security course, ethical hacking certification, VAPT training, bug bounty course'
  },
  'software-testing': {
    title: 'Software Testing & QA Automation Course | SHRINOVATECH',
    description: 'Master manual testing, Selenium, Playwright, API testing with Postman, and CI/CD automated test pipelines with industry projects.',
    keywords: 'software testing course, QA automation training, Selenium Playwright course, API testing certification'
  },
  'cloud-devops': {
    title: 'Cloud Computing & DevOps Masterclass (AWS & Docker) | SHRINOVATECH',
    description: 'Architect resilient cloud infrastructure on AWS, automate CI/CD pipelines, containerize with Docker, and orchestrate with Kubernetes.',
    keywords: 'DevOps course, AWS cloud certification training, Docker Kubernetes bootcamp, CI/CD pipelines'
  }
};
