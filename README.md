# SHRINOVATECH 🚀
### Innovate • Learn • Grow | Technology Solutions & Career Support

[![Live Demo](https://img.shields.io/badge/Live-Demo%20on%20GitHub%20Pages-0062ff?style=flat&logo=github)](https://kathirm20129.github.io/SHRINOVATECH/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **SHRINOVATECH** is a modern, high-performance technology solutions and career education platform. It delivers end-to-end digital engineering services (web, SaaS, mobile apps, and cybersecurity VAPT) alongside 100% practical, project-based IT bootcamps and 1-on-1 mentorship.

🌐 **Live Website**: [https://kathirm20129.github.io/SHRINOVATECH/](https://kathirm20129.github.io/SHRINOVATECH/)

---

## 🌟 Key Features

- **⚡ Blazing Fast Architecture**: Powered by Vite 8 with ESM code splitting, instant HMR, and ultra-optimized asset delivery.
- **🎬 GSAP & Framer Motion Animations**: Smooth page transitions, scroll-driven progress tracking, and a photo-split curtain reveal intro animation.
- **📱 Fully Responsive & Glassmorphism Design**: Mobile-first responsive UI built with Tailwind CSS, custom color palettes, and accessible dark/light contrasts.
- **🔍 Dynamic SEO Engine**: Built-in `SEO` manager dynamically updates `document.title`, Open Graph tags, Twitter cards, and Schema.org JSON-LD microdata per page.
- **💼 Technology Solutions**:
  - Website & Web Application Development
  - SaaS Product Architecture & Engineering
  - Cross-Platform Mobile Apps (iOS & Android)
  - Cybersecurity & VAPT (Vulnerability Assessment and Penetration Testing)
  - Digital Marketing, SEO & Growth Optimization
  - College / Final Year Academic Projects with Complete Source Code & Viva Guidance
  - Resume & LinkedIn Profile Optimization
  - 1-on-1 Mentorship & Career Guidance
- **🎓 Practical Courses & Bootcamps**:
  - AI & Machine Learning Mastery
  - Data Science & Business Analytics
  - Full Stack Web Development (MERN / Next.js)
  - Mobile App Development
  - Cybersecurity & Ethical Hacking
  - Software Testing & QA Automation
  - Cloud Infrastructure & DevOps
  - *Downloadable PDF Syllabi for all courses!*
- **📅 Interactive Demo Modal**: Global registration and "Book a Demo" modal for client consultations and course enrollment.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Core Framework** | [React 19](https://react.dev/), [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Animations** | [GSAP 3](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linting & Quality** | [Oxlint](https://oxc.rs/) |
| **Deployment & CI/CD** | GitHub Pages, GitHub Actions |

---

## 📁 Project Structure

```text
SHRINOVATECH/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD pipeline for GitHub Pages
├── public/
│   ├── 404.html                # Single Page App routing redirect for GitHub Pages
│   ├── favicon.svg             # Application favicon
│   ├── icons.svg               # SVG sprite map
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # SEO sitemap
├── src/
│   ├── assets/                 # Brand assets, logos, and course syllabus PDFs
│   ├── components/             # Reusable UI components
│   │   ├── BookDemoModal/      # Lead capture and demo booking modal
│   │   ├── Footer/             # Main site footer with social links & sitemap
│   │   ├── IntroAnimation/     # GSAP typography morph & shutter reveal intro
│   │   ├── Logo/               # Brand SVG/Image logo
│   │   ├── Navbar/             # Responsive header with megamenu dropdowns
│   │   ├── ScrollProgress/     # Top progress bar & scroll-to-top button
│   │   └── SEO/                # Dynamic meta tags & Open Graph manager
│   ├── data/                   # Navigation links, course data, and service specs
│   ├── pages/                  # Multi-page views (Home, Services, Courses, Projects, About, Contact)
│   ├── App.jsx                 # Master application controller with route handling
│   ├── index.css               # Global styling, Tailwind directives, font imports
│   └── main.jsx                # Application root mount with error boundary
├── index.html                  # HTML entry point with JSON-LD schema
├── package.json                # Project dependencies and build scripts
├── tailwind.config.js          # Tailwind CSS design system configuration
└── vite.config.js              # Vite build setup with base path configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kathirm20129/SHRINOVATECH.git
   cd SHRINOVATECH
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚢 GitHub Pages Deployment

Deploying the built production site to GitHub Pages is as easy as running:

```bash
npm run deploy
```

### How It Works:
1. `npm run deploy` triggers `predeploy` (`vite build`), generating the optimized `/dist` production bundle with relative base URLs and the SPA 404 handler.
2. It then uses `gh-pages` to publish the production bundle directly to the `gh-pages` branch on GitHub.
3. **One-Time GitHub Settings Setup**:
   - Go to your repository on GitHub: `https://github.com/kathirm20129/SHRINOVATECH`
   - Click **Settings** ⚙️ ➔ **Pages** (under *Code and automation* on the left sidebar).
   - Under **Build and deployment > Source**, select **"Deploy from a branch"**.
   - Under **Branch**, select **`gh-pages`** and **`/ (root)`**, then click **Save**.
   - Your live site will immediately be live and active at:  
     👉 **[https://kathirm20129.github.io/SHRINOVATECH/](https://kathirm20129.github.io/SHRINOVATECH/)**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Developed with ❤️ by **[Kathir](https://github.com/kathirm20129)** for **SHRINOVATECH**.
