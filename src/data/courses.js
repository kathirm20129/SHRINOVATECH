export const coursesData = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Mastery',
    category: 'ARTIFICIAL INTELLIGENCE',
    headlinePrefix: 'Next-Gen',
    headlineHighlight: 'AI & Deep Learning',
    badge: '12 Weeks · Live Projects',
    duration: '12 Weeks',
    level: 'Intermediate to Advanced',
    bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=2064&auto=format&fit=crop',
    description: 'Master Neural Networks, Deep Learning, Computer Vision, NLP, and Large Language Models (LLMs) with PyTorch and Python.',
    fullDescription: 'An intensive, industry-aligned artificial intelligence masterclass designed to take you from foundational Python and linear algebra to building and deploying fine-tuned generative AI models, CNNs, transformers, and production computer vision pipelines.',
    icon: 'Brain',
    bullets: [
      'Supervised & Unsupervised ML Algorithms',
      'Deep Learning with PyTorch & TensorFlow',
      'Computer Vision & OpenCV Image Processing',
      'Generative AI, LangChain & LLM Fine-Tuning'
    ],
    tags: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV'],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Docker', 'AWS'],
    modules: [
      {
        step: '01',
        title: 'Mathematics & Python for AI',
        desc: 'Build rigorous mathematical foundations and learn modern scientific Python workflows for artificial intelligence.',
        topics: [
          'Python for Data Science',
          'Linear Algebra',
          'Calculus for ML',
          'Probability & Statistics',
          'Optimization Basics'
        ]
      },
      {
        step: '02',
        title: 'Classical Machine Learning',
        desc: 'Master foundational supervised and unsupervised algorithms, model evaluation metrics, and feature engineering.',
        topics: [
          'ML Fundamentals',
          'Regression',
          'Classification',
          'Ensemble Methods',
          'Unsupervised Learning',
          'Feature Engineering & Model Selection'
        ]
      },
      {
        step: '03',
        title: 'Deep Learning & Neural Nets',
        desc: 'Understand deep neural network architectures, optimization algorithms, PyTorch frameworks, and scaled training.',
        topics: [
          'Neural Network Foundations',
          'Training Deep Networks',
          'Frameworks',
          'Convolutional Neural Networks (CNNs) — Intro',
          'Sequence Models — Intro',
          'Training at Scale'
        ]
      },
      {
        step: '04',
        title: 'Computer Vision & NLP',
        desc: 'Apply modern deep learning to computer vision pipelines, text processing, and multimodal foundation models.',
        topics: [
          'Computer Vision',
          'Natural Language Processing',
          'Multimodal Foundations'
        ]
      },
      {
        step: '05',
        title: 'Generative AI & LLMs',
        desc: 'Build real-world LLM systems with prompt engineering, RAG, LoRA fine-tuning, autonomous agents, and AI APIs.',
        topics: [
          'Generative Model Foundations',
          'Large Language Models',
          'Prompt Engineering',
          'Retrieval-Augmented Generation (RAG)',
          'Fine-Tuning & Adaptation',
          'Agents & Tool Use',
          'Working with APIs'
        ]
      },
      {
        step: '06',
        title: 'Production AI Deployment',
        desc: 'Deploy, serve, scale, monitor, and automate end-to-end machine learning workflows with modern MLOps best practices.',
        topics: [
          'MLOps Fundamentals',
          'Model Serving',
          'Scaling & Infrastructure',
          'Optimization for Production',
          'Monitoring & Reliability',
          'CI/CD for ML',
          'Security & Governance'
        ]
      }
    ],
    projects: [
      { title: 'Autonomous Real-Time Object Detection', desc: 'Multi-stream video inference using YOLOv8 with sub-30ms latency.' },
      { title: 'Enterprise RAG AI Assistant', desc: 'Generative AI chatbot built with LangChain, Pinecone, and custom PDF knowledge bases.' },
      { title: 'Medical Image Diagnosis CNN', desc: 'ResNet-based deep learning model classifying medical scans with 98.4% accuracy.' }
    ]
  },
  {
    id: 'full-stack',
    title: 'Full Stack Web Development',
    category: 'SOFTWARE ENGINEERING',
    headlinePrefix: 'Modern',
    headlineHighlight: 'Full Stack Engineering',
    badge: '16 Weeks · MERN & Next.js',
    duration: '16 Weeks',
    level: 'Beginner to Advanced',
    bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    description: 'Build enterprise web applications with React 19, Next.js 15, Node.js, TypeScript, PostgreSQL, and AWS deployment.',
    fullDescription: 'Become a highly employable full-stack software engineer. Learn modern component architecture, TypeScript typing, relational database schema design with PostgreSQL and Prisma, REST & GraphQL APIs, secure authentication, and cloud CI/CD pipelines.',
    icon: 'Code2',
    bullets: [
      'React 19 & Next.js 15 App Router Architecture',
      'TypeScript Mastery & Clean Code Patterns',
      'PostgreSQL, Prisma ORM & Database Design',
      'Docker, CI/CD & Cloud Deployment on AWS'
    ],
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    modules: [
      {
        step: '01',
        title: 'Frontend Architecture & Modern JavaScript',
        desc: 'Master advanced modern JavaScript, ES6+ standards, browser internals, and scalable frontend project architectures.',
        topics: [
          'ES6+ deep dive: destructuring, spread/rest, optional chaining, nullish coalescing',
          'Asynchronous JavaScript: Promises, async/await, event loop internals',
          'Module systems: ES Modules vs CommonJS, tree-shaking, code splitting',
          'Frontend project architecture: feature-based vs layer-based folder structures',
          'Design patterns: Singleton, Factory, Observer, and Module patterns in JS',
          'Build tooling: Vite, Webpack fundamentals, Babel, and bundler configuration',
          'Browser fundamentals: DOM APIs, event delegation, Web Storage, Fetch API',
          'Package management with npm/yarn/pnpm and monorepo basics (Turborepo/Nx)'
        ]
      },
      {
        step: '02',
        title: 'React 19 & State Management',
        desc: 'Build high-performance web applications using React 19 fundamentals, modern hooks, Actions, and global state libraries.',
        topics: [
          'React 19 fundamentals: components, JSX, props, and the new compiler',
          'Hooks mastery: useState, useEffect, useMemo, useCallback, useRef, useTransition',
          'React 19 features: Actions, useActionState, useOptimistic, and the "use" hook',
          'Custom hooks and reusable logic composition',
          'State management strategies: Context API, Zustand, Redux Toolkit',
          'Form handling and validation with React Hook Form + Zod',
          'Component design patterns: compound components, render props, HOCs',
          'Performance optimization: memoization, virtualization, React DevTools profiling',
          'Testing: Jest, React Testing Library, and component test strategy'
        ]
      },
      {
        step: '03',
        title: 'Next.js 15 & Server Components',
        desc: 'Master full-stack React with Next.js 15 App Router, React Server Components, streaming, caching, and Server Actions.',
        topics: [
          'App Router architecture: file-based routing, layouts, and route groups',
          'React Server Components (RSC) vs Client Components: boundaries and data flow',
          'Data fetching patterns: server actions, streaming, and Suspense',
          'Rendering strategies: SSR, SSG, ISR, and Partial Prerendering (PPR)',
          'Server Actions for mutations and progressive enhancement',
          'Middleware, route handlers, and API routes in Next.js 15',
          'Caching model: fetch cache, Data Cache, Full Route Cache, Router Cache',
          'Metadata API, SEO optimization, and Open Graph image generation',
          'Image, font, and performance optimization with next/image and next/font'
        ]
      },
      {
        step: '04',
        title: 'Backend & Database Systems',
        desc: 'Design production-grade backend APIs with Node.js, Express/Fastify, PostgreSQL, Prisma, MongoDB, and Redis caching.',
        topics: [
          'Node.js runtime internals: event loop, streams, and worker threads',
          'Building REST APIs with Express.js / Fastify and layered architecture',
          'GraphQL fundamentals with Apollo Server and schema design',
          'PostgreSQL: schema design, indexing, joins, transactions, and normalization',
          'ORM/query builders: Prisma and Drizzle ORM for type-safe database access',
          'MongoDB and Mongoose for document-based data modeling (MERN core)',
          'Caching layers with Redis for sessions, rate limiting, and query caching',
          'API design best practices: versioning, pagination, error handling, OpenAPI docs',
          'Background jobs and queues with BullMQ'
        ]
      },
      {
        step: '05',
        title: 'Security & Authentication',
        desc: 'Implement enterprise-grade authentication with NextAuth/Auth.js, RBAC, OAuth2, and OWASP Top 10 security defenses.',
        topics: [
          'Authentication strategies: session-based, JWT, and OAuth 2.0 / OIDC',
          'Implementing Auth with NextAuth.js / Auth.js and role-based access control (RBAC)',
          'Password security: hashing with bcrypt/argon2, salting, and credential storage',
          'OWASP Top 10: XSS, CSRF, SQL/NoSQL injection, and mitigation strategies',
          'API security: rate limiting, input validation (Zod), and secure headers (Helmet)',
          'Secrets management and environment configuration best practices',
          'Data encryption at rest and in transit; HTTPS/TLS fundamentals',
          'Compliance basics relevant to enterprise apps: GDPR-aware data handling'
        ]
      },
      {
        step: '06',
        title: 'DevOps, Docker & AWS',
        desc: 'Containerize microservices with Docker, automate CI/CD with GitHub Actions, and deploy full-stack apps to AWS infrastructure.',
        topics: [
          'Docker fundamentals: images, containers, multi-stage builds, and Docker Compose',
          'CI/CD pipelines with GitHub Actions: automated testing, linting, and builds',
          'AWS core services: EC2, S3, RDS (PostgreSQL), and IAM roles/policies',
          'Deploying Next.js apps: AWS Amplify, ECS/Fargate, and Vercel alternatives',
          'Container orchestration basics with ECS and load balancing (ALB)',
          'Infrastructure as Code introduction with Terraform / AWS CDK',
          'Monitoring & logging: CloudWatch, structured logging, and alerting',
          'Scalability patterns: auto-scaling groups, CDN (CloudFront), and caching strategy',
          'Capstone: deploying a full MERN/Next.js enterprise app end-to-end on AWS'
        ]
      }
    ],
    projects: [
      { title: 'SaaS Subscription Marketplace', desc: 'Multi-tenant dashboard with Stripe recurring billing, role management, and telemetry.' },
      { title: 'Real-Time Collaborative Workspace', desc: 'Kanban boards and document collaboration powered by WebSockets and Redis Pub/Sub.' },
      { title: 'High-Performance E-Commerce Engine', desc: 'Next.js 15 storefront with full-text search, inventory locking, and Razorpay checkout.' }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Ethical Hacking',
    category: 'INFORMATION SECURITY',
    headlinePrefix: 'Practical',
    headlineHighlight: 'Ethical Hacking & VAPT',
    badge: '14 Weeks · Hands-On Labs',
    duration: '14 Weeks',
    level: 'Beginner to Intermediate',
    bannerImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    description: 'Learn penetration testing, Web Application VAPT, Network Security, Kali Linux, and Bug Bounty hunting in live sandbox labs.',
    fullDescription: 'Train as a professional security researcher and penetration tester. Master offensive security methodologies, OWASP Top 10 web vulnerability exploitation, network packet analysis with Wireshark, active directory attacks, and defensive hardening.',
    icon: 'Shield',
    bullets: [
      'OWASP Top 10 Web Exploitation & Burp Suite',
      'Network Sniffing, Nmap & Port Scanning Labs',
      'Linux Privilege Escalation & Metasploit',
      'Bug Bounty Methodologies & Reporting'
    ],
    tags: ['Burp Suite Pro', 'OWASP ZAP', 'Metasploit', 'Kali Linux'],
    techStack: ['Burp Suite Pro', 'OWASP ZAP', 'Metasploit', 'Nmap', 'Wireshark', 'Kali Linux', 'Python'],
    modules: [
      {
        step: '01',
        title: 'Cybersecurity Fundamentals',
        desc: 'Build the foundational mental model of security, threat landscapes, ethical boundaries, and personal penetration testing lab setup.',
        topics: [
          'Definition and Goals of Cybersecurity — CIA Triad (Confidentiality, Integrity, Availability)',
          'Threat Landscape Overview — Script kiddies, organized crime, insider threats & nation-states',
          'Hacker Types and Ethics — White, grey, and black hat distinctions & authorized testing boundaries',
          'The Cyber Kill Chain & MITRE ATT&CK Framework — Attacker phases from recon to objectives',
          'Core Terminology — Vulnerability, exploit, payload, zero-day, CVE & CVSS scoring severity',
          'Lab Environment Setup — Installing Kali Linux, VirtualBox/VMware & vulnerable practice VMs',
          'Legal & Ethical Considerations — Scope, written authorization & responsible disclosure rules'
        ]
      },
      {
        step: '02',
        title: 'Networking Fundamentals & Linux for Cybersecurity',
        desc: 'Master practical networking protocols, packet analysis with Wireshark, Linux administration, and Bash automation scripts.',
        topics: [
          'TCP/IP & OSI Models — How data moves across networks practically',
          'IP Addressing, Subnetting & Routing — Reasoning about network ranges and target topology',
          'TCP vs UDP & Common Ports — Three-way handshake and priority target ports/services',
          'DNS, HTTP/HTTPS & Packet Fundamentals — Protocol-level domain resolution and web requests',
          'Traffic Analysis with Wireshark — Capturing live packets to spot cleartext credentials & anomalies',
          'Linux Essentials — Filesystem hierarchy, permissions, user/group management & shell mastery',
          'Bash Scripting for Automation — Writing custom scripts to automate recon and scanning',
          'Command-Line Toolkit — Practical security use of grep, awk, sed, netcat, and curl'
        ]
      },
      {
        step: '03',
        title: 'Reconnaissance & Footprinting',
        desc: 'Learn intelligence-gathering methodologies, OSINT sources, DNS enumeration, Nmap scanning, and attack surface profiling.',
        topics: [
          'Passive vs Active Reconnaissance — Trade-offs between stealth and gathering deeper intelligence',
          'OSINT Techniques — Google dorking, WHOIS lookups, Shodan, and theHarvester',
          'Subdomain Enumeration — Sublist3r, Amass, and certificate transparency logs (crt.sh)',
          'DNS Enumeration — Zone transfers and DNS record analysis for hidden infrastructure',
          'Network Scanning with Nmap — Host discovery, port scanning, service versioning & NSE scripts',
          'Banner Grabbing & Fingerprinting — Identifying exact software versions for CVE mapping',
          'Building an Attack Surface Map — Consolidating recon findings into an actionable profile'
        ]
      },
      {
        step: '04',
        title: 'Web Security Fundamentals',
        desc: 'Understand web architecture, HTTP security headers, browser internals, session tokens, CORS, and Burp Suite request manipulation.',
        topics: [
          'HTTP/HTTPS Deep Dive — Request methods, headers, status codes, and cookies in security testing',
          'Web Architecture — Client-server model, APIs, databases, sessions, and trust boundaries',
          'Browser Developer Tools — Inspecting network requests, local storage & client-side code',
          'Burp Suite Fundamentals — Intercepting, modifying, and replaying traffic with Proxy, Repeater & Intruder',
          'Authentication vs Authorization — Distinguishing access-control boundaries and logic flaws',
          'Session Management & Cookie Security — Secure, HttpOnly, and SameSite cookie flags',
          'Same-Origin Policy & CORS — Browser domain isolation and cross-origin misconfigurations'
        ]
      },
      {
        step: '05',
        title: 'Web Application Penetration Testing — OWASP Top 10',
        desc: 'Hands-on exploitation of critical web vulnerabilities: SQLi, XSS, CSRF, SSRF, IDOR, and authentication bypasses.',
        topics: [
          'Broken Access Control — Exploiting IDOR and vertical/horizontal privilege escalation',
          'Cryptographic Failures — Identifying weak ciphers and sensitive data leaks',
          'Injection (SQL & Command) — Manual SQLi, automated sqlmap exploitation & OS command injection',
          'Insecure Design & Security Misconfiguration — Architecture flaws and verbose default configs',
          'Vulnerable & Outdated Components — Identifying and exploiting known CVEs in web libraries',
          'Authentication Failures — Brute-force and credential-stuffing against login endpoints',
          'Server-Side Request Forgery (SSRF) — Tricking servers into accessing internal resources',
          'Cross-Site Scripting (XSS) — Reflected, stored, and DOM-based XSS proof-of-concept attacks',
          'Cross-Site Request Forgery (CSRF) — Forcing authenticated users into unauthorized state changes',
          'File Upload & Path Traversal — Filter evasion, webshell deployment & directory traversal'
        ]
      },
      {
        step: '06',
        title: 'Network Security & Exploitation',
        desc: 'Execute network-level vulnerability scans, Metasploit exploits, password cracking, ARP poisoning, and IDS evasion.',
        topics: [
          'Deep Network Enumeration — Advanced Nmap scripts and service-specific probing',
          'Vulnerability Scanning — Running and interpreting Nessus and OpenVAS vulnerability scans',
          'Metasploit Fundamentals — Searching, configuring, and executing exploit payloads',
          'Exploiting Common Services — Attacking misconfigured SMB, FTP, SSH, and RDP services',
          'Password Attacks — Dictionary and brute-force attacks with Hydra, John the Ripper & Hashcat',
          'Man-in-the-Middle Attacks — ARP spoofing and credential interception on local networks',
          'Wireless Security Basics — WPA2 four-way handshake capture and dictionary cracking',
          'Firewall & IDS/IPS Evasion Basics — Understanding detection signatures and evasion methods'
        ]
      },
      {
        step: '07',
        title: 'Privilege Escalation & Post-Exploitation',
        desc: 'Escalate from low-privilege shells to root/administrator across Windows and Linux systems using automated enumeration tools.',
        topics: [
          'Windows Privilege Escalation — Exploiting misconfigured services, tokens & registry permissions',
          'Linux Privilege Escalation — Abusing SUID binaries, cron jobs, capabilities & kernel exploits',
          'Automated Enumeration Scripts — Rapid vulnerability surfacing using LinPEAS and WinPEAS',
          'Pivoting & Lateral Movement — Utilizing compromised hosts as footholds into internal subnets',
          'Persistence Mechanisms — Maintaining attacker access for detection and defense awareness',
          'Introduction to Active Directory Attacks — Kerberoasting, AS-REP roasting & pass-the-hash'
        ]
      },
      {
        step: '08',
        title: 'Cloud Security & Security Monitoring',
        desc: 'Audit AWS/Azure cloud misconfigurations, inspect container escapes, analyze SIEM log telemetry, and understand incident response.',
        topics: [
          'Cloud Shared Responsibility Model — Cloud provider vs customer security boundaries',
          'Common Cloud Misconfigurations — Open S3 buckets, overly permissive IAM & exposed metadata',
          'Cloud Recon Tools — Auditing cloud posture with ScoutSuite and Prowler-style tools',
          'Container & Kubernetes Security Basics — Container breakout risks and pod misconfigurations',
          'SIEM Concepts — Log aggregation, event correlation, and blue team detection engineering',
          'Monitoring Tools Overview — Practical security log analysis using ELK Stack and Splunk',
          'Incident Response Lifecycle — Preparation, detection, containment, eradication & recovery'
        ]
      },
      {
        step: '09',
        title: 'Bug Bounty & Executive Reporting',
        desc: 'Master commercial bug bounty platforms, scope reading, reproducible PoC writing, CVSS scoring, and responsible disclosure.',
        topics: [
          'How Bug Bounty Programs Work — Operating on HackerOne, Bugcrowd, and Synack platforms',
          'Choosing Programs & Reading Scope — Selecting optimal targets and staying strictly in-scope',
          'Recon-to-Report Workflow — High-efficiency bug hunting and verification methodology',
          'Writing Effective Vulnerability Reports — Executive summaries paired with reproducible steps',
          'CVSS Scoring & Severity Justification — Calculating base, temporal & environmental scores',
          'Proof-of-Concept Best Practices — Creating minimal, clean, and undeniable PoC demonstrations',
          'Responsible Disclosure & Triage Communication — Professional engagement with security triagers',
          'Avoiding Duplicates & Common Rejections — Eliminating low-impact noise to boost acceptance'
        ]
      },
      {
        step: '10',
        title: 'Security Projects, Certification & Career Readiness',
        desc: 'Consolidate skills into a professional capstone pentest report, build a GitHub CTF portfolio, and prepare for OSCP/PNPT certifications.',
        topics: [
          'Capstone Project — Full end-to-end penetration test of a multi-system lab with audit report',
          'Building a Security Portfolio — Publishing CTF write-ups, lab walkthroughs & custom tools',
          'Certification Landscape — Comparing CompTIA Security+, eJPT, PNPT, OSCP, and CEH',
          'Choosing a Certification Path — Tailoring your cert roadmap to specific cybersecurity roles',
          'Resume & LinkedIn Optimization — Positioning lab experience and vulnerability research',
          'Interview Preparation — Practicing scenario-based offensive & defensive technical rounds',
          'Career Path Exploration — Pentester, SOC Analyst, AppSec Engineer & Bug Bounty Hunter',
          'Continued Learning — Tracking new zero-day CVEs, security advisories, and conferences'
        ]
      }
    ],
    projects: [
      { title: 'Live Web Application Penetration Test', desc: 'Full-scope black-box penetration testing on a simulated banking platform with audit report.' },
      { title: 'Automated Vulnerability Scanner Script', desc: 'Python-based multi-threaded web crawler that detects open ports and outdated headers.' },
      { title: 'Active Directory Attack & Defense Lab', desc: 'Simulated domain compromise involving Kerberoasting, pass-the-hash, and group policy audits.' }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Business Analytics',
    category: 'DATA & ANALYTICS',
    headlinePrefix: 'Data-Driven',
    headlineHighlight: 'Science & Analytics',
    badge: '12 Weeks · Real Datasets',
    duration: '12 Weeks',
    level: 'Beginner to Intermediate',
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'Transform raw data into actionable insights using Python, SQL, Tableau, Power BI, and statistical predictive modeling.',
    fullDescription: 'Comprehensive curriculum focused on data manipulation, advanced SQL querying, exploratory data analysis (EDA), statistical hypothesis testing, interactive business dashboards in Power BI/Tableau, and machine learning forecasting.',
    icon: 'BarChart3',
    bullets: [
      'Advanced SQL Querying & Schema Design',
      'Exploratory Data Analysis (EDA) with Python',
      'Interactive Dashboards in Power BI & Tableau',
      'Statistical Forecasting & Predictive Models'
    ],
    tags: ['Python', 'PostgreSQL', 'Google Analytics 4', 'Looker Studio'],
    techStack: ['Python', 'PostgreSQL', 'Google Analytics 4', 'Looker Studio', 'Docker'],
    modules: [
      {
        step: '01',
        title: 'Python & Data Wrangling',
        desc: 'Master foundational and scientific Python, NumPy vectorization, Pandas DataFrame manipulation, and multi-source ETL cleaning pipelines.',
        topics: [
          'Python fundamentals: variables, data types, control flow, functions',
          'Data structures: lists, dictionaries, tuples, sets',
          'NumPy: arrays, vectorized operations, broadcasting',
          'Pandas: Series, DataFrames, indexing, filtering',
          'Data cleaning: missing values, duplicates, outliers',
          'Data transformation: merging, joining, reshaping (melt/pivot), groupby-aggregate',
          'Working with dates/times and text data (string operations, regex basics)',
          'Reading/writing data: CSV, Excel, JSON, SQL databases, APIs'
        ]
      },
      {
        step: '02',
        title: 'Advanced SQL & Data Modeling',
        desc: 'Write high-performance analytic SQL queries with window functions and design production-grade dimensional star/snowflake schemas.',
        topics: [
          'SQL refresher: SELECT, WHERE, GROUP BY, HAVING, ORDER BY',
          'Joins: inner, outer, self, cross joins',
          'Subqueries and Common Table Expressions (CTEs)',
          'Window functions: RANK, ROW_NUMBER, LAG/LEAD, running totals',
          'Query optimization and indexing basics',
          'Data modeling: normalization vs. denormalization',
          'Star schema vs. snowflake schema for analytics',
          'Designing fact and dimension tables',
          'Views, stored procedures, and basic transactions'
        ]
      },
      {
        step: '03',
        title: 'Statistics & Hypothesis Testing',
        desc: 'Learn rigorous inferential statistics, probability distributions, statistical significance testing, ANOVA, and business A/B experiment design.',
        topics: [
          'Descriptive statistics: mean, median, mode, variance, standard deviation',
          'Probability fundamentals: normal, binomial, Poisson distributions',
          'Sampling methods and the Central Limit Theorem',
          'Confidence intervals',
          'Hypothesis testing: null/alternative hypotheses, p-values, significance levels',
          't-tests (one-sample, two-sample, paired)',
          'Chi-square tests for categorical data',
          'ANOVA for comparing multiple groups',
          'Correlation vs. causation',
          'A/B testing design and interpretation for business decisions'
        ]
      },
      {
        step: '04',
        title: 'Data Visualization & BI Tools',
        desc: 'Build interactive executive BI dashboards in Power BI and Tableau with modern data storytelling frameworks and Python visual libraries.',
        topics: [
          'Principles of effective data visualization and avoiding misleading visuals',
          'Python visualization: Matplotlib, Seaborn, Plotly',
          'Building interactive dashboards',
          'Introduction to BI tools: Power BI and/or Tableau',
          'Connecting BI tools to data sources',
          'Designing KPI dashboards for business stakeholders',
          'Storytelling with data: structuring insights for non-technical audiences'
        ]
      },
      {
        step: '05',
        title: 'Predictive Modeling & Regression',
        desc: 'Develop supervised machine learning models in Scikit-Learn covering regression, classification, cross-validation, and decision trees.',
        topics: [
          'Introduction to machine learning: supervised vs. unsupervised learning',
          'Linear regression: assumptions, interpretation, evaluation metrics (R², RMSE, MAE)',
          'Logistic regression for classification',
          'Feature engineering and selection',
          'Train-test split and cross-validation',
          'Regularization: Ridge, Lasso',
          'Tree-based models: Decision Trees, Random Forests',
          'Model evaluation: confusion matrix, precision/recall, ROC-AUC',
          'Avoiding overfitting and the bias-variance tradeoff'
        ]
      },
      {
        step: '06',
        title: 'Big Data & Cloud Data Warehouses',
        desc: 'Explore big data architectures, distributed Spark compute, modern cloud data warehouses like Snowflake and BigQuery, and ELT automation.',
        topics: [
          'Big data concepts: volume, velocity, variety',
          'Introduction to distributed computing (Spark fundamentals)',
          'Cloud data warehouses: Snowflake, BigQuery, Redshift (overview and comparison)',
          'Data pipelines and ETL/ELT concepts',
          'Batch vs. streaming data processing',
          'Working with cloud storage (S3/Blob/GCS basics)',
          'Cost and performance considerations in cloud analytics',
          'Data governance and security basics'
        ]
      }
    ],
    projects: [
      { title: 'Customer Churn Prediction Engine', desc: 'Machine learning model predicting customer attrition with 92% precision for a telecom dataset.' },
      { title: 'Executive Financial Analytics Dashboard', desc: 'Power BI dynamic suite tracking revenue KPIs, cash flow velocity, and cohort retention.' },
      { title: 'E-Commerce Marketing A/B Test Suite', desc: 'Statistical hypothesis testing pipeline analyzing conversion rates across 100k user sessions.' }
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development (Flutter & React Native)',
    category: 'MOBILE ENGINEERING',
    headlinePrefix: 'Cross-Platform',
    headlineHighlight: 'Mobile Engineering',
    badge: '14 Weeks · iOS & Android',
    duration: '14 Weeks',
    level: 'Beginner to Intermediate',
    bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    description: 'Build native-performing iOS and Android apps using Flutter, Dart, React Native, Firebase, and offline-first databases.',
    fullDescription: 'Learn to design, develop, and publish high-performance mobile applications. Master modern mobile architecture, reactive state management (Bloc & Riverpod), native device hardware integrations (Camera, GPS, Bluetooth), real-time push notifications, and App Store guidelines.',
    icon: 'Smartphone',
    bullets: [
      'Flutter & Dart Native UI/UX Architecture',
      'React Native & Expo Ecosystem',
      'Firebase Auth, Firestore & Cloud Messaging',
      'App Store & Google Play Store Publishing'
    ],
    tags: ['Flutter', 'React Native', 'Firebase', 'TypeScript'],
    techStack: ['Flutter', 'React Native', 'Firebase', 'TypeScript', 'GraphQL', 'Stripe'],
    modules: [
      {
        step: '01',
        title: 'Dart & Flutter Fundamentals',
        desc: 'Master foundational Dart programming, asynchronous streams, widget tree architecture, layout primitives, and navigation.',
        topics: [
          'Dart fundamentals: variables, types, null safety, functions, classes',
          'Asynchronous Dart: Futures, async/await, Streams',
          'Flutter architecture: widget tree, element tree, render tree',
          'Stateless vs. Stateful widgets and the widget lifecycle',
          'Layout widgets: Row, Column, Stack, ListView, GridView',
          'Navigation and routing (Navigator 1.0/2.0, named routes)',
          'Styling: themes, custom fonts, responsive layouts',
          'Forms and input validation'
        ]
      },
      {
        step: '02',
        title: 'State Management & Architecture',
        desc: 'Design maintainable enterprise Flutter apps using Provider, Riverpod, BLoC pattern, dependency injection, and MVVM clean architecture.',
        topics: [
          'setState limitations and when to reach for a state manager',
          'Provider and InheritedWidget fundamentals',
          'Riverpod: providers, notifiers, and dependency injection',
          'BLoC pattern: events, states, and streams',
          'App architecture: MVVM and clean architecture in Flutter',
          'Separating UI, business logic, and data layers',
          'Dependency injection with get_it',
          'Unit testing state and business logic'
        ]
      },
      {
        step: '03',
        title: 'Backend & Cloud Integrations',
        desc: 'Connect apps to REST/GraphQL backends, integrate Firebase Auth/Firestore, implement push notifications, and build offline-first caching.',
        topics: [
          'REST API integration with Dio/http and error handling',
          'GraphQL basics for mobile clients',
          'Firebase Authentication (email/password, OAuth, phone)',
          'Cloud Firestore: real-time data, queries, and security rules',
          'Firebase Storage for media uploads',
          'Push notifications with Firebase Cloud Messaging',
          'Offline-first design with SQLite/Drift and local caching',
          'Syncing local and remote data, conflict resolution basics'
        ]
      },
      {
        step: '04',
        title: 'Device Features & Native APIs',
        desc: 'Access native device hardware (Camera, GPS, Biometrics, Sensors) and bridge platform-specific code using Flutter Platform Channels.',
        topics: [
          'Camera and photo library access',
          'Geolocation and maps integration',
          'Local notifications and background tasks',
          'Sensors: accelerometer, gyroscope basics',
          'Permissions handling across iOS and Android',
          'Platform channels: calling native iOS/Android code from Flutter',
          'Biometric authentication (Face ID/Touch ID, fingerprint)',
          'App performance profiling and memory management'
        ]
      },
      {
        step: '05',
        title: 'React Native & Expo Ecosystem',
        desc: 'Build cross-platform applications with React Native and Expo SDK, comparing architectural trade-offs between Flutter and React Native.',
        topics: [
          'React Native fundamentals: components, JSX, props, state, hooks',
          'Expo managed workflow vs. bare workflow',
          'Navigation with React Navigation',
          'Styling with StyleSheet and Flexbox layouts',
          'State management with Context API and Redux Toolkit',
          'Consuming REST APIs and handling async data with React Query',
          'Using native modules and Expo SDK APIs (camera, location, notifications)',
          'Comparing Flutter and React Native: trade-offs and when to choose each'
        ]
      },
      {
        step: '06',
        title: 'Testing, CI/CD & App Store Launch',
        desc: 'Automate mobile testing, configure CI/CD deployment pipelines, handle code signing, and publish apps to Apple App Store and Google Play.',
        topics: [
          'Unit and widget testing in Flutter; component testing in React Native',
          'Integration and end-to-end testing (integration_test, Detox)',
          'Crash reporting and analytics (Firebase Crashlytics/Analytics)',
          'Setting up CI/CD pipelines (GitHub Actions, Codemagic, EAS Build)',
          'App signing, provisioning profiles, and build variants',
          'Preparing app store listings, screenshots, and metadata',
          'Submitting to the Apple App Store and Google Play Store',
          'Post-launch monitoring, versioning, and staged rollouts'
        ]
      }
    ],
    projects: [
      { title: 'Hyper-Local Food Delivery App', desc: 'Real-time GPS delivery tracking, live cart updates via WebSockets, and Razorpay/Stripe checkout.' },
      { title: 'Fitness & Workout Social Network', desc: 'Activity tracking with phone sensors, offline sync, and social feeds with media uploads.' },
      { title: 'Fintech Mobile Wallet', desc: 'Biometric login, instant peer-to-peer money transfers, and PDF transaction statement generator.' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps Engineering',
    category: 'INFRASTRUCTURE & CLOUD',
    headlinePrefix: 'Automated',
    headlineHighlight: 'Cloud & DevOps Pipelines',
    badge: '14 Weeks · AWS & Docker',
    duration: '14 Weeks',
    level: 'Intermediate',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    description: 'Master AWS, Docker, Kubernetes, Terraform Infrastructure as Code (IaC), and automated CI/CD GitHub Actions pipelines.',
    fullDescription: 'Become an indispensable cloud infrastructure engineer. Build production-grade containerized systems on AWS, automate multi-region architectures with Terraform, orchestrate microservices with Kubernetes, and monitor distributed systems with Prometheus and Grafana.',
    icon: 'Cloud',
    bullets: [
      'AWS Core Services (EC2, S3, VPC, RDS, Lambda)',
      'Docker Containerization & Multi-Stage Builds',
      'Kubernetes Cluster Orchestration & Helm',
      'Terraform Infrastructure as Code (IaC)'
    ],
    tags: ['AWS', 'Docker', 'PostgreSQL', 'Redis'],
    techStack: ['AWS', 'Docker', 'PostgreSQL', 'Redis', 'Node.js', 'Python'],
    modules: [
      {
        step: '01',
        title: 'Introduction to Cloud Computing',
        desc: 'Understand foundational cloud computing characteristics, history, benefits, deployment models, and service abstractions.',
        topics: [
          'Definition and Key Characteristics of Cloud Computing',
          'History and Evolution of Cloud Technology',
          'Benefits of Cloud Computing',
          'Challenges and Risks in Cloud Adoption',
          'Cloud Deployment Models (Public, Private, Hybrid, Community)',
          'Cloud Service Models (IaaS, PaaS, SaaS, Serverless)'
        ]
      },
      {
        step: '02',
        title: 'Virtualization and Cloud Infrastructure',
        desc: 'Master hypervisor virtualization, VMs vs containers, block/object storage types, load balancers, and disaster recovery architectures.',
        topics: [
          'Introduction to Virtualization Technologies',
          'Virtual Machines and Virtualization Concepts',
          'Virtual Machines vs. Containers',
          'Container Technologies (Docker, Podman)',
          'Cloud Storage Types (Block, Object, File Storage)',
          'Load Balancing and Traffic Distribution',
          'High Availability (HA) Design Patterns',
          'Disaster Recovery (DR) and Backup Strategies',
          'Serverless Computing Concepts'
        ]
      },
      {
        step: '03',
        title: 'Cloud Service Providers Overview (AWS, Azure, GCP)',
        desc: 'Deep dive into core enterprise cloud services across AWS (EC2, S3, RDS, Lambda, IAM), Microsoft Azure, and Google Cloud Platform.',
        topics: [
          'Introduction to AWS: EC2, S3, RDS, Lambda, CloudFront, IAM & CloudWatch',
          'AWS Security Concepts, VPC Peering & GuardDuty',
          'Introduction to Microsoft Azure: Azure VMs, Blob Storage & Microsoft Entra ID',
          'Azure DevOps and CI/CD Pipeline Automation',
          'Security and Compliance Management in Azure',
          'Introduction to GCP: Compute Engine, Google Kubernetes Engine (GKE) & BigQuery',
          'Google Cloud AI/ML Services, Vertex AI & GCP IAM Policies'
        ]
      },
      {
        step: '04',
        title: 'Cloud Networking',
        desc: 'Architect secure, high-performance cloud networks with VPCs, private/public subnets, DNS, CDNs, and security groups.',
        topics: [
          'Virtual Private Cloud (VPC) Architecture',
          'Subnetting and CIDR Block Design',
          'IP Addressing in Cloud Environments (Elastic/Public/Private IPs)',
          'Cloud DNS (Route 53, Azure DNS, Cloud DNS)',
          'Cloud Load Balancers (ALB, NLB, GLB)',
          'Auto Scaling Groups and Dynamic Scaling Policies',
          'Content Delivery Networks (CDN) & Edge Caching',
          'Cloud Firewalls, Network ACLs and Security Groups',
          'Multi-Region Cloud Network Architecture'
        ]
      },
      {
        step: '05',
        title: 'Cloud Security and Compliance',
        desc: 'Implement zero-trust security postures, IAM role hierarchies, data encryption standards, and threat monitoring.',
        topics: [
          'Cloud Security Best Practices and Zero-Trust Architecture',
          'Identity and Access Management (IAM) Across Platforms',
          'Authentication, Authorization, and Multi-Factor Auth (MFA)',
          'Encryption for Secure Cloud Storage (KMS, Secrets Manager, Envelope Encryption)',
          'Data Protection, DDoS Mitigation (AWS Shield) & Malware Defense',
          'Data Breach Response and Threat Detection',
          'Compliance Standards (SOC2, ISO 27001, HIPAA, GDPR)',
          'Cloud Auditing, Logging, and Telemetry (AWS CloudTrail, Azure Monitor)',
          'Security Monitoring and SIEM Tool Integrations'
        ]
      },
      {
        step: '06',
        title: 'Cloud DevOps and Automation',
        desc: 'Automate multi-tier cloud infrastructure with Terraform and Ansible, build GitHub Actions CI/CD, and orchestrate Kubernetes clusters.',
        topics: [
          'Infrastructure as Code (IaC) Principles',
          'Terraform: State Management, Modules, and Multi-Cloud Provisioning',
          'Ansible: Configuration Management and Playbooks',
          'AWS CloudFormation and Resource Templates',
          'Continuous Integration (CI) and Continuous Deployment (CD)',
          'End-to-End CI/CD Pipelines in the Cloud',
          'Docker Containerization & Multi-Stage Builds',
          'Kubernetes Cluster Orchestration, Pods, Deployments & Services',
          'Serverless Architecture and Event-Driven Computing',
          'Cloud Monitoring, Distributed Tracing and Logging'
        ]
      },
      {
        step: '07',
        title: 'Multi-Cloud and Hybrid Cloud Strategies',
        desc: 'Design resilient hybrid architectures connecting on-premises data centers with multiple public cloud providers.',
        topics: [
          'Multi-Cloud Architecture and Redundancy',
          'Hybrid Cloud Architecture with Direct Connect / ExpressRoute',
          'Multi-Cloud vs. Hybrid Cloud Comparison',
          'API Integration and Cloud Interoperability',
          'Cross-Cloud Communication Protocols',
          'Workload Management and Portable Containerization',
          'Data Migration Strategies & Cloud-to-Cloud Integration',
          'Multi-Cloud Cost and Performance Optimization',
          'Multi-Cloud Governance and Security Challenges'
        ]
      },
      {
        step: '08',
        title: 'Cloud Cost Optimization and Performance Management',
        desc: 'Master cloud FinOps, reserved/spot instances, resource right-sizing, cost allocation tags, and automated performance tuning.',
        topics: [
          'Pay-as-You-Go, Reserved Instances & Spot Instance Optimization',
          'Cloud Cost Management Tools (AWS Cost Explorer, Azure Cost Management)',
          'Resource Utilization Analytics and Right-Sizing',
          'Compute Resource Optimization and Auto-Shutdown Scripts',
          'Storage Tiering Optimization (S3 Glacier, Lifecycle Policies)',
          'Performance Monitoring, Bottleneck Profiling & Tuning',
          'Resource Scaling and Capacity Planning Frameworks',
          'Cost Reduction Strategies and Waste Elimination',
          'Real-World Cloud Cost Optimization Case Studies'
        ]
      },
      {
        step: '09',
        title: 'Cloud Computing Real-World Applications',
        desc: 'Explore production cloud architectures across AI/ML pipelines, microservices, big data warehouses, and industry enterprise systems.',
        topics: [
          'Cloud Computing for AI & Machine Learning Infrastructure',
          'Cloud-Based AI/ML Model Training and Inference Services',
          'Serverless Computing and Microservices Architecture',
          'Cloud-Based Big Data Lakes and Analytics Pipelines',
          'Cloud Application Architecture for Healthcare & FinTech',
          'E-Commerce High-Surge Traffic Auto-Scaling Architecture',
          'Banking & Finance Security-Hardened Deployments',
          'Internet of Things (IoT) Cloud Ingestion Pipelines',
          'Real-World Enterprise Cloud Architecture Case Studies'
        ]
      },
      {
        step: '10',
        title: 'Cloud Certification Preparation & Career Readiness',
        desc: 'Prepare for top AWS, Azure, and GCP certifications, complete hands-on labs, develop portfolio projects, and master technical interviews.',
        topics: [
          'AWS Certification Guidance (Solutions Architect, DevOps Professional)',
          'Azure Certification Guidance (AZ-104, AZ-305, AZ-400)',
          'GCP Certification Guidance (Associate Cloud Engineer, Cloud Architect)',
          'Cloud Certification Study Roadmaps and Exam Prep',
          'Hands-On Cloud Labs and Real-World Sandboxes',
          'Capstone Project: Multi-Tier Automated Cloud Architecture',
          'Cloud Project Portfolio Development and GitHub Showcase',
          'Cloud & DevOps Resume Optimization and Positioning',
          'Technical Interview Preparation & Scenario-Based Architecture Rounds',
          'Career Path Exploration: Cloud Architect, DevOps Engineer & SRE'
        ]
      }
    ],
    projects: [
      { title: 'Zero-Downtime Microservices Pipeline', desc: 'Automated GitHub Actions CI/CD deploying containerized services to an AWS EKS cluster.' },
      { title: 'Terraform AWS Multi-Tier Architecture', desc: 'Complete enterprise VPC with public/private subnets, NAT gateways, and auto-scaling EC2.' },
      { title: 'Distributed Monitoring & Alerting Suite', desc: 'Prometheus metrics collection with dynamic Grafana dashboards and Slack incident alerts.' }
    ]
  },
  {
    id: 'software-testing',
    title: 'Software Testing & QA Automation',
    category: 'QUALITY ASSURANCE',
    headlinePrefix: 'Enterprise',
    headlineHighlight: 'QA Automation & Testing',
    badge: '10 Weeks · Selenium & Playwright',
    duration: '10 Weeks',
    level: 'Beginner to Intermediate',
    bannerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    description: 'Master manual testing, automated end-to-end testing with Selenium and Playwright, API testing with Postman, and CI/CD testing.',
    fullDescription: 'Accelerate your transition into high-paying software quality engineering. Master test strategy creation, bug lifecycle management, automated web testing in Python/JavaScript with Playwright and Selenium, REST API validation, and performance load testing with JMeter.',
    icon: 'CheckCircle2',
    bullets: [
      'Manual Testing Methodologies & Jira Bug Tracking',
      'Selenium WebDriver & Playwright Automation',
      'REST API Testing with Postman & Newman',
      'Performance Load Testing with Apache JMeter'
    ],
    tags: ['TypeScript', 'Python', 'Node.js', 'Docker'],
    techStack: ['TypeScript', 'Python', 'Node.js', 'Docker', 'PostgreSQL'],
    modules: [
      {
        step: '01',
        title: 'Foundations of Software Testing & QA',
        desc: 'Master core software quality assurance principles, STLC phases, test boundary analysis techniques, defect lifecycles, and test documentation.',
        topics: [
          'Software Testing Fundamentals',
          'The Software Testing Life Cycle (STLC)',
          'Test Design Techniques',
          'Defect Management',
          'Test Documentation'
        ]
      },
      {
        step: '02',
        title: 'Manual Testing Mastery',
        desc: 'Execute functional and non-functional testing, specialized compatibility audits, exploratory testing in agile sprints, and test management with Jira/Zephyr.',
        topics: [
          'Functional Testing',
          'Non-Functional Testing',
          'Specialized Testing Types',
          'Agile & Exploratory Testing',
          'Test Management Tools'
        ]
      },
      {
        step: '03',
        title: 'Test Automation Foundations & Selenium',
        desc: 'Build robust automation frameworks in Java/Python with Selenium WebDriver, Page Object Models (POM), dynamic synchronization, and TestNG/JUnit reporting.',
        topics: [
          'Automation Testing Fundamentals',
          'Programming for Automation (Java/Python)',
          'Selenium WebDriver',
          'Locators & Synchronization',
          'Design Patterns & Frameworks',
          'TestNG / JUnit & Reporting'
        ]
      },
      {
        step: '04',
        title: 'Modern End-to-End Testing with Playwright',
        desc: 'Write lightning-fast headless browser tests using Playwright, auto-waiting locators, visual regression testing, trace viewers, and parallel test runners.',
        topics: [
          'Playwright Fundamentals',
          'Advanced Playwright Features',
          'Cross-Browser & Visual Testing',
          'Playwright Test Runner & Reporting'
        ]
      },
      {
        step: '05',
        title: 'API Testing & Service Automation',
        desc: 'Validate REST and GraphQL endpoints with Postman collections, REST Assured / Python Requests, contract testing, and SQL backend data verification.',
        topics: [
          'API Testing Fundamentals',
          'Postman for Manual & Automated API Testing',
          'API Automation with Code (REST Assured / Requests)',
          'Contract & Performance Testing Basics',
          'Database & Backend Validation'
        ]
      },
      {
        step: '06',
        title: 'CI/CD, DevOps & Test Management',
        desc: 'Integrate automated test suites into GitHub Actions CI/CD pipelines, Dockerize test runners, execute JMeter load tests, and deliver executive QA reports.',
        topics: [
          'Version Control for QA',
          'CI/CD Pipelines for Automated Testing',
          'Containerization & Test Environments',
          'Test Reporting & Dashboards',
          'Performance & Load Testing',
          'QA Leadership & Best Practices'
        ]
      }
    ],
    projects: [
      { title: 'End-to-End E-Commerce Test Automation Suite', desc: '500+ automated Playwright test cases covering login, checkout, and inventory validation.' },
      { title: 'Comprehensive REST API Testing Framework', desc: 'Newman-driven Postman test suite executing in GitHub Actions CI with HTML report generation.' },
      { title: 'JMeter 10,000 Concurrent User Load Test', desc: 'Performance benchmark audit report diagnosing database bottleneck under simulated surge traffic.' }
    ]
  }
];
