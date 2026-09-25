import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Sparkles,
  ArrowRight,
  Download,
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Bot,
  Terminal,
  Code2,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
  onOpenHireMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume, onOpenHireMe }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = PERSONAL_INFO.titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullTitle) {
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText !== currentFullTitle) {
        setDisplayText(currentFullTitle.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentFullTitle.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText === currentFullTitle) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Lighting Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${
            darkMode ? 'bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600' : 'bg-gradient-to-tr from-cyan-300 via-blue-400 to-indigo-300'
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-400">
                Available for Global AI Engineer & Remote Opportunities
              </span>
            </div>

            {/* Name & Animated Title */}
            <div className="space-y-3">
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Typing Effect */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className={`text-xl sm:text-3xl font-bold font-mono ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {displayText}
                  <span className="animate-pulse text-cyan-400 ml-1">|</span>
                </span>
              </div>
            </div>

            {/* Subtitle / Tagline */}
            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {PERSONAL_INFO.tagline}
            </p>

            {/* Quick Metadata Pill */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <MapPin className="w-4 h-4 text-cyan-400" /> {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <Bot className="w-4 h-4 text-blue-400" /> Multi-Agent Workflows
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <Code2 className="w-4 h-4 text-emerald-400" /> Full Stack React & FastAPI
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenHireMe}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-102 transition-all cursor-pointer shadow-md"
              >
                <Send className="w-5 h-5" /> Hire Me Now
              </button>

              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400'
                    : 'bg-white border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <Download className="w-5 h-5" /> Resume / CV
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className={`text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.gitHub}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneWhatsApp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-emerald-600'
                }`}
                title="WhatsApp Direct Chat"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600'
                }`}
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual Avatar Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Glowing Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />

              {/* Main Card Container */}
              <div className={`relative rounded-2xl overflow-hidden border p-3 ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
              }`}>
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-950">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                  {/* Floating Overlay Badge Top */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 flex items-center gap-2 text-xs font-semibold text-white">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AI Engineering</span>
                  </div>

                  {/* Bottom Text Overlay inside avatar */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-white">
                    <div className="text-xs font-semibold text-cyan-400 flex items-center justify-between">
                      <span>Virtual University of Pakistan</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-sm font-bold truncate mt-0.5">BBIT (2nd Semester) & AI Specialist</div>
                  </div>
                </div>

                {/* Quick Floating Cards below avatar */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className={`p-3 rounded-xl border text-center ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-lg font-extrabold text-cyan-400">11+</div>
                    <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Featured Projects
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl border text-center ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-lg font-extrabold text-blue-400">35+</div>
                    <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      AI & Web Tech Tools
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
