import React from 'react';

export default function TechIcon({ name, size = 20, className = '' }) {
  const normalized = name.toLowerCase().trim();

  // 0. WhatsApp (Official Logo)
  if (normalized.includes('whatsapp') || normalized === 'whatsapp') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#25D366">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    );
  }

  // 0b. Gmail (Official 4-Color Logo)
  if (normalized.includes('gmail') || normalized === 'email' || normalized === 'mail') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="#4285F4" d="M1.5 5.25v13.5A1.5 1.5 0 0 0 3 20.25h3.75V11.25L1.5 7.5z"/>
        <path fill="#34A853" d="M22.5 5.25v13.5a1.5 1.5 0 0 1-1.5 1.5h-3.75V11.25l5.25-3.75z"/>
        <path fill="#EA4335" d="M18.75 3.75l-6.75 5.06-6.75-5.06A2.25 2.25 0 0 0 1.5 5.25l5.25 3.75 5.25 3.75 5.25-3.75 5.25-3.75a2.25 2.25 0 0 0-3.75-1.5z"/>
        <path fill="#FBBC04" d="M6.75 20.25h10.5V9.75l-5.25 3.75-5.25-3.75z"/>
      </svg>
    );
  }

  // 0c. Google Maps / Location (Official Red/Multi Pin)
  if (normalized.includes('maps') || normalized.includes('location') || normalized.includes('mappin')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.8" fill="#FFFFFF"/>
        <circle cx="12" cy="9" r="1.4" fill="#EA4335"/>
      </svg>
    );
  }

  // 0d. Clock / Working Hours
  if (normalized.includes('clock') || normalized.includes('hours')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" fill="#0062ff" fillOpacity="0.2" stroke="#0062ff" strokeWidth="2"/>
        <polyline points="12 6 12 12 16 14" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  // 0e. Facebook (Official Blue Logo)
  if (normalized.includes('facebook')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    );
  }

  // 0f. LinkedIn (Official Blue Logo)
  if (normalized.includes('linkedin')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#0A66C2">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    );
  }

  // 0d. Instagram (Official Gradient Logo)
  if (normalized.includes('instagram')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <defs>
          <linearGradient id="igLogoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </linearGradient>
        </defs>
        <path fill="url(#igLogoGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }

  // 0e. YouTube (Official Red Logo)
  if (normalized.includes('youtube')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000"/>
        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 1. React / React Native
  if (normalized.includes('react native') || normalized === 'react') {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
        <g stroke="#00D8FF" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }

  // 1a. OpenAI / AI / Machine Learning
  if (normalized.includes('openai') || normalized === 'ai' || normalized === 'chatgpt' || normalized.includes('neural') || normalized.includes('machine learning')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.308 10.74l3.692-2.13 3.692 2.13v4.262l-3.692 2.13-3.692-2.13z"/>
      </svg>
    );
  }

  // 1b. TensorFlow (Official 3D AI Logo)
  if (normalized.includes('tensorflow') || normalized === 'tensorflow') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M12 2L3 7.2v9.6l9 5.2 9-5.2V7.2L12 2zm0 2.2l6.8 3.9-2.8 1.6-4-2.3-4 2.3-2.8-1.6L12 4.2zm-7 5.4l5.5 3.2v6.4l-5.5-3.2V9.6zm14 6.4l-5.5 3.2v-6.4l5.5-3.2v6.4z" fill="#FF6F00"/>
        <path d="M12 9.8l4 2.3v3.2l-4-2.3v-3.2z" fill="#FFA000"/>
        <path d="M12 9.8l-4 2.3v3.2l4-2.3v-3.2z" fill="#E65100"/>
      </svg>
    );
  }

  // 1c. Cyber Security (Official Cyber Shield Keyhole)
  if (normalized.includes('cyber') || normalized === 'cyber security' || normalized === 'cybersecurity') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z" fill="#0062ff" fillOpacity="0.25"/>
        <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z" stroke="#00D8FF" strokeWidth="1.8"/>
        <circle cx="12" cy="11" r="2.2" fill="#00D8FF"/>
        <path d="M12 13.2v3.6" stroke="#00D8FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  // 1d. Data Science / Jupyter / NumPy
  if (normalized.includes('data science') || normalized.includes('jupyter') || normalized.includes('pandas')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="4" r="2.2" fill="#F37626"/>
        <circle cx="12" cy="20" r="2.2" fill="#F37626"/>
        <circle cx="20" cy="12" r="2.2" fill="#38BDF8"/>
        <circle cx="4" cy="12" r="2.2" fill="#38BDF8"/>
        <path d="M5.5 8.5 C 8 5.5, 16 5.5, 18.5 8.5" stroke="#F37626" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M5.5 15.5 C 8 18.5, 16 18.5, 18.5 15.5" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }

  // 1e. AWS Official Full Logo (Dark letters for light backgrounds)
  if (normalized === 'aws-white') {
    return (
      <svg width={size * 1.25} height={size} viewBox="0 0 36 24" className={className} fill="none">
        <path d="M3 13.5l2-6.5h1.6l2 6.5h-1.4l-.4-1.5H4.8l-.4 1.5H3zm1.8-2.7h1.7l-.8-2.8h-.1l-.8 2.8zM9.5 7h1.4l1.1 4.2 1-4.2h1.2l1 4.2 1.1-4.2h1.4l-1.6 6.5h-1.3l-1.1-3.9-1.1 3.9h-1.3L9.5 7zM19.5 12.8l1-.9c.6.6 1.4 1 2.2 1 .8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.2-.9l-.7-.2c-1.3-.4-2-1-2-2.1 0-1.3 1-2.1 2.5-2.1 1 0 1.8.3 2.4.9l-.9.9c-.5-.5-1.1-.7-1.7-.7-.7 0-1.1.3-1.1.7 0 .4.4.6 1.1.8l.7.2c1.4.4 2.1 1.1 2.1 2.2 0 1.4-1.1 2.2-2.7 2.2-1.3 0-2.3-.4-3-1.2z" fill="#FFFFFF"/>
        <path d="M4 18c7 3.5 16 3.5 24-1.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M26.5 14.5l2.8 2-1.8 2.5" fill="#FF9900"/>
      </svg>
    );
  }

  if (normalized === 'aws' || normalized.includes('aws')) {
    return (
      <svg width={size * 1.25} height={size} viewBox="0 0 36 24" className={className} fill="none">
        <path d="M3 13.5l2-6.5h1.6l2 6.5h-1.4l-.4-1.5H4.8l-.4 1.5H3zm1.8-2.7h1.7l-.8-2.8h-.1l-.8 2.8zM9.5 7h1.4l1.1 4.2 1-4.2h1.2l1 4.2 1.1-4.2h1.4l-1.6 6.5h-1.3l-1.1-3.9-1.1 3.9h-1.3L9.5 7zM19.5 12.8l1-.9c.6.6 1.4 1 2.2 1 .8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.2-.9l-.7-.2c-1.3-.4-2-1-2-2.1 0-1.3 1-2.1 2.5-2.1 1 0 1.8.3 2.4.9l-.9.9c-.5-.5-1.1-.7-1.7-.7-.7 0-1.1.3-1.1.7 0 .4.4.6 1.1.8l.7.2c1.4.4 2.1 1.1 2.1 2.2 0 1.4-1.1 2.2-2.7 2.2-1.3 0-2.3-.4-3-1.2z" fill="#232F3E"/>
        <path d="M4 18c7 3.5 16 3.5 24-1.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M26.5 14.5l2.8 2-1.8 2.5" fill="#FF9900"/>
      </svg>
    );
  }

  // 2. Next.js
  if (normalized.includes('next.js') || normalized === 'nextjs') {
    return (
      <svg width={size} height={size} viewBox="0 0 180 180" className={className}>
        <circle cx="90" cy="90" r="90" fill="#000000"/>
        <path d="M149.5 157.1L69.9 54H54v72h12.3V69.8l73.5 95c3.4-2.4 6.7-5 9.7-7.7z" fill="#FFFFFF"/>
        <path d="M125.7 54h-12.2v72h12.2V54z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 3. TypeScript (Official TS Blue badge)
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="20" fill="#3178C6"/>
        <path d="M42.3 88.5h-10V52h32.2v9H52.4v27.5h-10.1zm33.1-2.2c3.5 2.1 7.7 3.3 12.3 3.3 6.9 0 11.8-3.4 11.8-9 0-12.8-19.4-7.5-19.4-18.7 0-4.6 4.1-8.1 10.7-8.1 4 0 7.9 1.1 11 3.2l-3.3 7.8c-2.8-1.7-5.9-2.6-8.7-2.6-4.6 0-7.3 2.3-7.3 5.4 0 11.2 19.4 6.8 19.4 18.5 0 5.4-4.5 9.3-12.3 9.3-5 0-10.2-1.5-14-4.2l3.2-8.3z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 4. Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 54 33" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4"/>
      </svg>
    );
  }

  // 5. Node.js (Official Hexagon mark)
  if (normalized.includes('node.js') || normalized.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
        <path d="M16 2.5L3 10v12l13 7.5 13-7.5V10L16 2.5z" fill="#339933"/>
        <path d="M16 7.5l8 4.6v9.2l-8 4.6-8-4.6v-9.2l8-4.6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 6. PostgreSQL (Official Elephant Database mark)
  if (normalized.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#336791">
        <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 1.79 8 4s-3.58 4-8 4-8-1.79-8-4 3.58-4 8-4zm0 16c-4.42 0-8-1.79-8-4v-2.23c1.78 1.36 4.7 2.23 8 2.23s6.22-.87 8-2.23V16c0 2.21-3.58 4-8 4z"/>
        <circle cx="12" cy="7" r="1.5" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 7. Vercel
  if (normalized.includes('vercel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 116 100" className={className} fill="#000000">
        <path d="M57.5 0L115 100H0L57.5 0Z"/>
      </svg>
    );
  }

  // 8. Redis
  if (normalized.includes('redis')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#DC382D">
        <path d="M21.5 7.2L13 2.3c-.6-.3-1.4-.3-2 0L2.5 7.2c-.6.3-1 1-1 1.7v9.8c0 .7.4 1.4 1 1.7l8.5 4.9c.6.3 1.4.3 2 0l8.5-4.9c.6-.3 1-1 1-1.7V8.9c0-.7-.4-1.4-1-1.7zM12 4.6l6.8 3.9-3 1.7-6.8-3.9 3-1.7zm-1 14.8l-6.8-3.9V9.7l6.8 3.9v5.8zm2 0v-5.8l6.8-3.9v5.8L13 19.4z"/>
      </svg>
    );
  }

  // 9. Docker (Whale logo)
  if (normalized.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#2496ED">
        <path d="M13.98 10.02h2.24v2.24h-2.24zm-2.8 0h2.24v2.24h-2.24zm-2.8 0h2.24v2.24H8.38zm-2.8 0h2.24v2.24H5.58zm5.6-2.8h2.24v2.24h-2.24zm-2.8 0h2.24v2.24H8.38zm5.6 0h2.24v2.24h-2.24zm2.8 0h2.24v2.24h-2.24zm-5.6-2.8h2.24v2.24H11.18zM23.99 12.44c-.31-1.89-2.02-3.13-3.66-2.61-.43.14-.84.37-1.22.68-.34-.95-1.12-1.63-2.09-1.82V8.62H1.93c-.15.71-.24 1.45-.24 2.21 0 5.48 4.45 9.93 9.93 9.93 5.09 0 9.29-3.83 9.87-8.77.77.29 1.63.14 2.28-.42.13-.12.23-.25.32-.39-.03.42-.09.84-.09 1.26z"/>
      </svg>
    );
  }

  // 10. AWS
  if (normalized.includes('aws')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF9900">
        <path d="M8.2 11.2c0-.7.3-1.2.9-1.5.6-.3 1.3-.4 2.2-.4.8 0 1.5.1 2.1.4.6.3 1 .6 1.2 1.1v-.8h2v6.6h-2v-.8c-.3.5-.7.8-1.3 1.1-.6.3-1.3.4-2.1.4-.9 0-1.6-.1-2.2-.4-.6-.3-.9-.8-.9-1.5 0-.6.3-1.1.8-1.4.5-.3 1.3-.5 2.3-.6l2.1-.2v-.5c0-.4-.1-.7-.4-.9-.3-.2-.7-.3-1.3-.3-.5 0-.9.1-1.2.3-.3.2-.5.5-.5.9H8.2zm4.3 3.6l-1.3.1c-.5.1-.9.2-1.1.4-.2.2-.4.4-.4.8 0 .3.1.6.3.8.2.2.6.3 1.1.3.6 0 1-.2 1.3-.5.3-.3.5-.8.5-1.3v-.6z"/>
        <path d="M2.3 18.2c5.3 3.1 11.8 3.1 17.1 0 .4-.2.9.2.6.6-4.9 3.9-11.7 3.9-18.3 0-.4-.2 0-.8.6-.6z"/>
      </svg>
    );
  }

  // 11. Flutter
  if (normalized.includes('flutter')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#02569B">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.314 11.082l-5.632 5.633 5.632 5.633h7.37L16.05 16.715l5.634-5.633h-7.37z"/>
      </svg>
    );
  }

  // 12. Firebase
  if (normalized.includes('firebase')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M3.89 15.67L6.2 1.48a.72.72 0 0 1 1.34-.23l3.07 5.75-6.72 8.67zm15.42.06l1.62-10.2a.72.72 0 0 0-1.25-.56L2.6 18.72l8.83 5.02a1.44 1.44 0 0 0 1.42 0l6.46-3.67-2-4.4z" fill="#FFA000"/>
        <path d="M13.25 8.9L10.61 3.9a.72.72 0 0 0-1.28 0L2.6 18.72l10.65-9.82z" fill="#F57C00"/>
      </svg>
    );
  }

  // 13. GraphQL
  if (normalized.includes('graphql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#E10098">
        <path d="M12 2L2 7.77v11.55L12 25l10-5.68V7.77L12 2zm0 2.31l7.85 4.53-2.9 5.02H9.05L6.15 8.84 12 4.31zm-6.85 6.1l2.4 4.15H4.15V9.41l1 1zm7.85 9.17l-6-3.46 2.9-5.02h6.2l2.9 5.02-6 3.46zm6.85-6.1l-2.4-4.15h3.4v4.15h-1z"/>
      </svg>
    );
  }

  // 14. Stripe
  if (normalized.includes('stripe')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.52.5 6.702.5 2.764 3.57 2.764 8.784c0 6.64 8.877 6.467 8.877 9.873 0 1.096-.944 1.583-2.323 1.583-2.28 0-5.18-1.124-7.05-2.155l-.946 5.564c1.942 1.036 4.975 1.651 8.212 1.651 6.183 0 10.422-2.99 10.422-8.528 0-6.924-8.98-6.726-8.98-9.622z"/>
      </svg>
    );
  }

  // 15. Burp Suite (PortSwigger Orange)
  if (normalized.includes('burp')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF6633">
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
      </svg>
    );
  }

  // 16. OWASP ZAP
  if (normalized.includes('owasp') || normalized.includes('zap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#005A9C">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    );
  }

  // 17. Metasploit
  if (normalized.includes('metasploit')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1363DF">
        <path d="M12 2L2 8.5v7L12 22l10-6.5v-7L12 2zm0 3.5l6.5 4.2-2.5 1.6-4-2.6-4 2.6-2.5-1.6L12 5.5zm0 13l-6.5-4.2v-4.5l4 2.6v3.2l2.5 1.6 2.5-1.6v-3.2l4-2.6v4.5L12 18.5z"/>
      </svg>
    );
  }

  // 18. Nmap / Network
  if (normalized.includes('nmap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#2563EB" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>
    );
  }

  // 19. Wireshark (Shark Fin)
  if (normalized.includes('wireshark')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1679A7">
        <path d="M12 3C8 8 5 14 3 21c5-2 9-5 13-9 3 4 5 7 5 9-2-5-4-11-9-18z"/>
      </svg>
    );
  }

  // 20. Kali Linux
  if (normalized.includes('kali')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#557C93">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5l-3-2V9l3 2v5.5zm3-3l-2-1.3V8.8l2 1.3v4.4z"/>
      </svg>
    );
  }

  // 21. SonarQube
  if (normalized.includes('sonarqube')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#4B9FD5">
        <path d="M3 12a9 9 0 0 1 9-9v3a6 6 0 0 0-6 6H3zm0 4a9 9 0 0 0 9 9v-3a6 6 0 0 1-6-6H3zm18-4a9 9 0 0 1-9 9v-3a6 6 0 0 0 6-6h3zm0-4a9 9 0 0 0-9-9v3a6 6 0 0 1 6 6h3z"/>
      </svg>
    );
  }

  // 22. Google Ads
  if (normalized === 'google ads') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M3.7 13.8L9.2 4.3c.7-1.2 2.3-1.6 3.5-.9l3.5 2c1.2.7 1.6 2.3.9 3.5l-5.5 9.5c-.7 1.2-2.3 1.6-3.5.9l-3.5-2c-1.2-.7-1.6-2.3-.9-3.5z" fill="#FBBC04"/>
        <path d="M20.3 17.5l-3.5-2c-1.2-.7-2.8-.3-3.5.9l-5.5 9.5" fill="#4285F4"/>
        <circle cx="6.5" cy="18.5" r="3.5" fill="#4285F4"/>
        <circle cx="17.5" cy="18.5" r="3.5" fill="#34A853"/>
      </svg>
    );
  }

  // 22b. Google Official Logo
  if (normalized.includes('google')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    );
  }

  // 23. Meta / Meta Business Suite / Ads
  if (normalized.includes('meta')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#0668E1">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
      </svg>
    );
  }

  // 24. Google Analytics 4
  if (normalized.includes('analytics')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <rect x="15" y="4" width="5" height="16" rx="2.5" fill="#E37400"/>
        <rect x="9.5" y="9" width="5" height="11" rx="2.5" fill="#F9AB00"/>
        <circle cx="5" cy="17.5" r="2.5" fill="#F9AB00"/>
      </svg>
    );
  }

  // 25. Ahrefs
  if (normalized.includes('ahrefs')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#0064FA">
        <path d="M12 2L2 22h5.5l2-4.5h5l2 4.5H22L12 2zm0 6.5l1.6 3.5h-3.2L12 8.5z"/>
      </svg>
    );
  }

  // 26. Semrush
  if (normalized.includes('semrush')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF642D">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.5 13.5L12 12V6l4.5 9.5z"/>
      </svg>
    );
  }

  // 27. Looker Studio
  if (normalized.includes('looker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#4285F4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    );
  }

  // 28. Python (Official Double Snake mark)
  if (normalized.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path d="M63.5 1.5c-15.7 0-26.6 4.8-28.5 14.6h28.5v3.1H21.2C8.8 19.2 0 29.8 0 45.4c0 14.8 8.1 24.3 20.3 25.7v-13.8c0-10.4 8.7-18.7 19.2-18.7h28.5V26.2c0-13.8-11.4-24.7-24.5-24.7zm-14 7.6a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z" fill="#3776AB"/>
        <path d="M64.5 126.5c15.7 0 26.6-4.8 28.5-14.6H64.5v-3.1h42.3c12.4 0 21.2-10.6 21.2-26.2 0-14.8-8.1-24.3-20.3-25.7v13.8c0 10.4-8.7 18.7-19.2 18.7H40V101.8c0 13.8 11.4 24.7 24.5 24.7zm14-7.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z" fill="#FFD438"/>
      </svg>
    );
  }

  // 29. TensorFlow
  if (normalized.includes('tensorflow')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF6F00">
        <path d="M12 1.5L3 6.8v10.4l9 5.3 9-5.3V6.8L12 1.5zm0 2.3l6.8 4-6.8 4-6.8-4 6.8-4zm-7 5.5l6 3.5v7.2l-6-3.5V9.3zm14 7.2l-6 3.5v-7.2l6-3.5v7.2z"/>
      </svg>
    );
  }

  // 30. PyTorch
  if (normalized.includes('pytorch')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#EE4C2C">
        <path d="M13.5 2.5a.75.75 0 0 0-.75.75v3.1a6.5 6.5 0 1 0 5.4 6.4.75.75 0 1 0-1.5 0 5 5 0 1 1-4.15-4.94v2.44a.75.75 0 0 0 1.28.53l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-.53-.22z"/>
      </svg>
    );
  }

  // 31. MongoDB
  if (normalized.includes('mongo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#47A248">
        <path d="M12 1.5c-4.5 4.5-5.5 10-2 15.5 1.5 2.5 2 5.5 2 5.5s.5-3 2-5.5c3.5-5.5 2.5-11-2-15.5z"/>
        <path d="M12 2.5v19.5" stroke="#FFFFFF" strokeWidth="0.5"/>
      </svg>
    );
  }

  // 32. IoT Hardware / Arduino / Raspberry Pi
  if (normalized.includes('iot') || normalized.includes('hardware') || normalized.includes('arduino')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#00979D">
        <path d="M4 6h16v12H4z"/>
        <path d="M7 3v3M12 3v3M17 3v3M7 18v3M12 18v3M17 18v3M2 9h2M2 15h2M20 9h2M20 15h2" stroke="#00979D" strokeWidth="2"/>
        <circle cx="8" cy="12" r="1.5" fill="#FFFFFF"/>
        <circle cx="16" cy="12" r="1.5" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 33. LinkedIn / LinkedIn SEO
  if (normalized.includes('linkedin')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#0A66C2">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
      </svg>
    );
  }

  // 34. Figma
  if (normalized.includes('figma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" fill="#1ABCFE"/>
        <path d="M5 8.5a3.5 3.5 0 0 1 7 0V12H8.5A3.5 3.5 0 0 1 5 8.5z" fill="#F24E1E"/>
        <path d="M12 1.5v7h3.5a3.5 3.5 0 1 0 0-7H12z" fill="#FF7262"/>
        <path d="M5 15.5A3.5 3.5 0 0 0 8.5 19H12v-3.5H8.5A3.5 3.5 0 0 0 5 15.5z" fill="#0ACF83"/>
        <path d="M5 1.5h3.5v7H5a3.5 3.5 0 1 1 0-7z" fill="#A259FF"/>
      </svg>
    );
  }

  // 35. Grammarly
  if (normalized.includes('grammarly')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#15C39A">
        <circle cx="12" cy="12" r="10"/>
        <path d="M15.5 12.5a3.5 3.5 0 1 1-3.5-3.5h2" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    );
  }

  // 36. Overleaf LaTeX
  if (normalized.includes('overleaf') || normalized.includes('latex')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#4F9F43">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 8l8 8M16 8l-8 8" stroke="#FFFFFF" strokeWidth="2"/>
      </svg>
    );
  }

  // 36b. Certificate / Award / Learning Ribbon
  if (normalized.includes('certificate') || normalized.includes('award') || normalized.includes('ribbon') || normalized.includes('courses') || normalized.includes('learning')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="9" r="6.5" fill="#0062ff" fillOpacity="0.18" stroke="#0062ff" strokeWidth="2"/>
        <circle cx="12" cy="9" r="3.8" fill="#FFB800"/>
        <path d="M8.5 14.5L7 21.5L12 18.5L17 21.5L15.5 14.5" fill="#0062ff" stroke="#0062ff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 7.5l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 37. ATS Scanners
  if (normalized === 'ats' || normalized.includes('ats scanner') || normalized.includes('ats scanners') || normalized.includes('ats-friendly')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#0062ff" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    );
  }

  // 38. LeetCode
  if (normalized.includes('leetcode')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116"/>
      </svg>
    );
  }

  // 39. System Design / Cloud Architecture
  if (normalized.includes('system design') || normalized.includes('primitives')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#6366F1" strokeWidth="2">
        <rect x="2" y="2" width="6" height="6" rx="1"/>
        <rect x="16" y="2" width="6" height="6" rx="1"/>
        <rect x="9" y="16" width="6" height="6" rx="1"/>
        <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M12 13v3"/>
      </svg>
    );
  }

  // 40. STAR Matrix / Interview Framework
  if (normalized.includes('star') || normalized.includes('matrix')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#F59E0B">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    );
  }

  // 41. Compensation Data / Salary Metrics
  if (normalized.includes('compensation') || normalized.includes('salary')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#10B981" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v12"/>
      </svg>
    );
  }

  // 42. 1-on-1 Coaching / Mentorship
  if (normalized.includes('coaching') || normalized.includes('mentor')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    );
  }

  // 43. Code Review Suite / GitHub
  if (normalized.includes('code review') || normalized.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#181717">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    );
  }

  // 44. Career Analytics
  if (normalized.includes('career analytics')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#3B82F6" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    );
  }

  // 45. Slack / Discord
  if (normalized.includes('slack') || normalized.includes('discord')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#5865F2">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.177 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    );
  }

  // 47. Unity (Official Unity Cube Logo)
  if (normalized.includes('unity')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FFFFFF">
        <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm-1 3.2v4.8l-4 2.3-1.8-3.1 5.8-4zm2 0l5.8 4-1.8 3.1-4-2.3V5.2zm-7 8.3l4-2.3v4.6l-4 2.3v-4.6zm8 0v4.6l-4-2.3v-4.6l4 2.3z"/>
      </svg>
    );
  }

  // 48. Unreal Engine
  if (normalized.includes('unreal')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FFFFFF">
        <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
        <path d="M12 5v7a2 2 0 0 0 2 2h3M7 14h3a2 2 0 0 0 2-2V5"/>
      </svg>
    );
  }

  // 49. Android
  if (normalized.includes('android')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#3DDC84">
        <path d="M17.523 15.341a.81.81 0 0 1-.806.806.81.81 0 0 1-.806-.806.81.81 0 0 1 .806-.806.81.81 0 0 1 .806.806zm-9.046 0a.81.81 0 0 1-.806.806.81.81 0 0 1-.806-.806.81.81 0 0 1 .806-.806.81.81 0 0 1 .806.806zm9.49-5.11l1.782-3.088a.333.333 0 0 0-.122-.455.334.334 0 0 0-.456.122l-1.81 3.136A11.144 11.144 0 0 0 12 9.25c-1.87 0-3.606.47-5.11 1.296L5.08 7.41a.334.334 0 0 0-.456-.122.333.333 0 0 0-.122.455l1.782 3.088C3.064 12.56 1 15.93 1 19.833h22c0-3.903-2.064-7.273-5.233-8.602z"/>
      </svg>
    );
  }

  // 50. Pandas (Data Science)
  if (normalized.includes('pandas')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <rect x="3" y="4" width="4" height="16" rx="1" fill="#150458"/>
        <rect x="10" y="7" width="4" height="13" rx="1" fill="#E70488"/>
        <rect x="17" y="10" width="4" height="10" rx="1" fill="#FFD43B"/>
      </svg>
    );
  }

  // 51. Selenium (Software Testing)
  if (normalized.includes('selenium')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#43B02A">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#43B02A"/>
        <text x="6" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="Arial">Se</text>
      </svg>
    );
  }

  // 52. Postman
  if (normalized.includes('postman')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF6C37">
        <circle cx="12" cy="12" r="10"/>
        <path d="M7 12l4-4 6 6-4 4-6-6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 53. Cisco / Networking
  if (normalized.includes('cisco') || normalized.includes('networking')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1BA0D7">
        <rect x="3" y="10" width="2" height="8" rx="1"/>
        <rect x="7" y="6" width="2" height="12" rx="1"/>
        <rect x="11" y="2" width="2" height="16" rx="1"/>
        <rect x="15" y="6" width="2" height="12" rx="1"/>
        <rect x="19" y="10" width="2" height="8" rx="1"/>
      </svg>
    );
  }

  // 54. WhatsApp Official Logo
  if (normalized.includes('whatsapp')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    );
  }

  // 55. WordPress
  if (normalized.includes('wordpress')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#21759B">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312L4.62 9.878A9.957 9.957 0 0 1 12 4c1.928 0 3.714.545 5.228 1.488L12 2zm-8.878 10c0 .736.088 1.45.252 2.135l4.316-11.83C4.945 4.336 3.122 7.94 3.122 12zm13.111 8.847C15.82 21.573 13.978 22 12 22c-1.393 0-2.712-.224-3.924-.636l4.637-13.486 4.52 12.969zm1.096-13.722c.677-.035 1.287-.107 1.287-.107.572-.072.503-.9-.071-.864 0 0-1.724.143-2.836.143-1.074 0-2.836-.143-2.836-.143-.574-.036-.645.828-.072.864 0 0 .574.072 1.217.107l1.828 5.01-2.58 7.737L6.46 5.125c.68-.035 1.29-.107 1.29-.107.573-.072.502-.9-.071-.864 0 0-1.725.143-2.837.143-.287 0-.645-.01-1.003-.024C5.503 2.766 8.577 1.778 12 1.778c3.216 0 6.13 1.272 8.272 3.328l-2.943 9.019-1.996-7.001z"/>
      </svg>
    );
  }

  // 56. WooCommerce
  if (normalized.includes('woocommerce') || normalized.includes('ecommerce') || normalized.includes('e-commerce')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#96588A">
        <path d="M2.2 4.5h19.6c1.2 0 2.2 1 2.2 2.2v10.6c0 1.2-1 2.2-2.2 2.2H2.2C1 19.5 0 18.5 0 17.3V6.7C0 5.5 1 4.5 2.2 4.5zm2.8 11.2c1.3 0 2.4-.6 3.1-1.6.7 1 1.8 1.6 3.1 1.6 2 0 3.6-1.6 3.6-3.6 0-1.3-.7-2.4-1.7-3.1 1-.7 1.7-1.8 1.7-3.1 0-2-1.6-3.6-3.6-3.6-1.3 0-2.4.6-3.1 1.6-.7-1-1.8-1.6-3.1-1.6-2 0-3.6 1.6-3.6 3.6 0 1.3.7 2.4 1.7 3.1-1 .7-1.7 1.8-1.7 3.1 0 2 1.6 3.6 3.6 3.6z"/>
      </svg>
    );
  }

  // 57. Elementor
  if (normalized.includes('elementor')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#92003B">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3 17H7V7h2v10zm8 0h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"/>
      </svg>
    );
  }

  // 58. Payment Gateway / Checkout
  if (normalized.includes('payment') || normalized.includes('gateway') || normalized.includes('checkout')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    );
  }

  // 59. SEO / Search Engine Optimization
  if (normalized.includes('seo') || normalized.includes('search')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    );
  }

  // 60. IoT / Microcontroller / Smart Hardware
  if (normalized.includes('iot') || normalized.includes('hardware') || normalized.includes('sensor')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#06A3DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    );
  }

  // 61. Industrial Automation / Robotics / Connectivity
  if (normalized.includes('automation') || normalized.includes('industrial')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    );
  }

  // 62. Google / Search Console / Analytics
  if (normalized.includes('google') || normalized.includes('console')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    );
  }

  // 63. Ranking / Keyword / Growth
  if (normalized.includes('rank') || normalized.includes('keyword') || normalized.includes('growth')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    );
  }

  // 64. SaaS / Cloud Web Application
  if (normalized.includes('saas') || normalized.includes('cloud app')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#0062ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    );
  }

  // 65. Analytics / Charts / Dashboard
  if (normalized.includes('chart') || normalized.includes('dashboard') || normalized.includes('telemetry')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    );
  }

  // Default Code Icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#0062ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
