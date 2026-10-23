import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  Home, 
  ChevronDown 
} from 'lucide-react';

import CallToAction from '../../components/CallToAction/CallToAction';
import TechIcon from '../../components/TechIcon/TechIcon';

const contactInfoCards = [
  {
    icon: MessageSquare,
    title: 'Chat on WhatsApp',
    detail: '+91 8270473635',
    subtext: 'Instant response within 15 mins',
    actionText: 'Message on WhatsApp 😎',
    href: 'https://api.whatsapp.com/send/?phone=%2B918270473635&text=Hello%20Shrinovatech,%20I%20want%20to%20inquire%20about%20your%20services/courses',
    isPrimary: true
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'shrinovatech@gmail.com',
    subtext: 'Official proposals & project inquiries',
    actionText: 'Send Email',
    href: 'mailto:shrinovatech@gmail.com'
  },
  {
    icon: Phone,
    title: 'Call Support',
    detail: '+91 8270473635',
    subtext: 'Mon - Sat : 9:00 AM - 6:00 PM',
    actionText: 'Call Now',
    href: 'tel:+918270473635'
  },
  {
    icon: MapPin,
    title: 'Work Location',
    detail: 'Remote, India',
    subtext: 'PAN India Remote Support & Training',
    actionText: 'Connect Online',
    href: 'https://api.whatsapp.com/send/?phone=%2B918270473635'
  }
];

const faqs = [
  {
    q: 'How fast can we start my project or course enrollment?',
    a: 'For software projects, we provide scoping and technical milestones within 24 hours. For courses, enrollment is instant with immediate access to study materials, syllabus repositories, and live mentor schedules.'
  },
  {
    q: 'Do you provide full working source code and documentation for Final Year Projects?',
    a: 'Yes, 100%. We provide complete tested source code, database architecture, IEEE synopsis, detailed documentation reports, and PPT presentations along with 1-on-1 code explanation and viva preparation.'
  },
  {
    q: 'How does the payment structure work for services?',
    a: 'We work on transparent milestone-based deliverables (e.g., 30% advance on SRS signoff, 40% on mid-sprint demo, 30% upon final testing & code handover). Complete intellectual property is transferred to you.'
  },
  {
    q: 'Are the training programs available online and offline?',
    a: 'Yes, our courses are delivered via interactive live online sessions with screen sharing, cloud labs, and 1-on-1 code reviews, allowing students and professionals worldwide to participate.'
  }
];

const serviceCategories = [
  {
    category: 'Courses & Practical Training',
    options: [
      'AI/ML',
      'Data Science & Analytics',
      'Full Stack Development',
      'Mobile Development',
      'Cyber Security',
      'Software Testing',
      'Cloud & DevOps'
    ]
  },
  {
    category: 'Technology Solutions',
    options: [
      'Website Development',
      'SaaS Product Development',
      'Application Product Development',
      'Cybersecurity & VAPT',
      'Digital Marketing & SEO'
    ]
  },
  {
    category: 'Career & Academic Support',
    options: [
      'Final Year Project',
      'Resume & LinkedIn Optimization',
      'Job Tips & Interview Practice',
      'Career Guidance Mentorship'
    ]
  }
];

export default function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: serviceCategories[0].options[0],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const waText = `Hello Shrinovatech,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested In: ${formData.serviceInterest}\nMessage: ${formData.message}`;
    window.open(`https://api.whatsapp.com/send/?phone=%2B918270473635&text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 1. Hero Section (ZeroSight360 Style with Right-Aligned Banner & Left Fade) */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#071228] text-white relative overflow-hidden">
        
        {/* Background Banner with Left Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" 
            alt=""
            className="absolute right-0 top-0 w-full md:w-3/5 lg:w-[55%] h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071228] via-[#071228]/95 via-35% md:via-45% to-transparent to-90%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-[#071228]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071228]/80 via-transparent to-[#071228]" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#0062ff]/15 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-8">
            <button 
              onClick={() => {
                if (navigate) navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Home size={14} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="text-slate-600" />
            <span className="text-cyan-400 font-semibold">Contact Us</span>
          </nav>

          {/* Headline */}
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-bold uppercase tracking-widest text-cyan-400">
              GET IN TOUCH
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="text-white">Let’s Build Something </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#3b82f6]">Exceptional Together</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal pt-1">
              Have a software project idea, need academic project guidance, or want to accelerate your tech career? Our engineering team is ready to assist you.
            </p>
          </div>

        </div>
      </section>

      {/* 2. 4 Contact Channels Cards */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfoCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative overflow-hidden p-6 rounded-2xl border border-slate-200 bg-white text-[#0a1128] shadow-sm hover:border-[#0062ff]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Shimmer Light Sweep on Hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all bg-blue-50 text-[#0062ff] border border-blue-100 group-hover:bg-[#0062ff] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#0a1128] mb-1">{item.title}</h3>
                    <p className="text-sm font-semibold mb-1 text-[#0062ff]">
                      {item.detail}
                    </p>
                    <p className="text-xs text-slate-500">
                      {item.subtext}
                    </p>
                  </div>

                  <span className="text-xs font-bold mt-5 inline-flex items-center gap-1.5 text-[#0062ff] group-hover:translate-x-1 transition-transform">
                    <span>{item.actionText}</span>
                    <span>→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Main Form & Assistance Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Consultation Form */}
            <div className="lg:col-span-7 bg-slate-50/90 border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062ff] block mb-2">
                  DIRECT PROJECT INQUIRY
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0a1128]">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill out the form below and our team will get back to you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold">
                    <CheckCircle2 size={22} />
                    <span>Inquiry Sent Successfully!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Thank you! We have opened WhatsApp to connect you directly with a project counselor. If WhatsApp didn't open automatically, please click below.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B918270473635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition-all"
                  >
                    <span>Open WhatsApp Directly</span>
                    <span>→</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        I am interested in
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent transition-all cursor-pointer font-medium"
                      >
                        {serviceCategories.map((group) => (
                          <optgroup 
                            key={group.category} 
                            label={group.category}
                            className="text-xs font-bold text-slate-600 tracking-wide bg-slate-50"
                          >
                            {group.options.map((opt, idx) => (
                              <option 
                                key={idx} 
                                value={opt}
                                className="text-sm font-normal text-slate-900 bg-white py-1"
                              >
                                {opt}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, project scope, timeline, or career goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062ff] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full py-4 rounded-xl bg-[#0062ff] hover:bg-[#0051d9] text-white font-heading text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {/* Shimmer light sweep */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                    <Send size={16} className="relative z-10" />
                    <span className="relative z-10">Submit & Connect on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Why Reach Out & Quick FAQs */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Trust Box */}
              <div className="p-7 rounded-3xl bg-[#071228] text-white border border-slate-700/80 shadow-xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  OUR COMMITMENT
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Why Work With Shrinovatech?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>100% Working Source Code:</strong> Clean, modular code with full installation documentation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>1-on-1 Mentor Assistance:</strong> Live screen-sharing and technical guidance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Fast Delivery Turnaround:</strong> On-time milestones delivered within your timeline.</span>
                  </li>
                </ul>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-[#0a1128] mb-4">
                  Frequently Asked Questions
                </h3>
                {faqs.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx;
                  return (
                    <div 
                      key={fIdx}
                      className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#0a1128] hover:text-[#0062ff] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown size={16} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#0062ff]' : 'text-slate-400'}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Social Channels Box */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <h4 className="font-heading text-sm font-bold text-[#0a1128] mb-3">
                  Follow & Connect With Us
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.instagram.com/shri_nova_tech/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-pink-300 hover:shadow-sm text-xs font-bold text-slate-700 hover:text-pink-600 transition-all cursor-pointer"
                  >
                    <TechIcon name="Instagram" size={16} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@shrinovatech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm text-xs font-bold text-slate-700 hover:text-red-600 transition-all cursor-pointer"
                  >
                    <TechIcon name="YouTube" size={16} />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B918270473635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm text-xs font-bold text-slate-700 hover:text-emerald-600 transition-all cursor-pointer"
                  >
                    <TechIcon name="WhatsApp" size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Call to Action Banner */}
      <CallToAction navigate={navigate} />

    </div>
  );
}
