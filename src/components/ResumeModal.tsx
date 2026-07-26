import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, CERTIFICATIONS, EXPERIENCE_ACHIEVEMENTS } from '../data/portfolioData';
import { X, Download, Copy, Check, FileText, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.titles.join(' | ')}
Location: ${PERSONAL_INFO.location}
Phone/WhatsApp: ${PERSONAL_INFO.phoneWhatsApp}
Email: ${PERSONAL_INFO.email} | Alt: ${PERSONAL_INFO.altEmail}
LinkedIn: ${PERSONAL_INFO.linkedIn}
GitHub: ${PERSONAL_INFO.gitHub}

SUMMARY:
${PERSONAL_INFO.aboutMe}

EDUCATION:
${PERSONAL_INFO.education.degree} - ${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.status})

SKILLS HIGHLIGHTS:
- Programming: Python, TypeScript, JavaScript, SQL, HTML, CSS
- AI Frameworks: LangChain, LangGraph, CrewAI, OpenAI Agents SDK
- RAG & Vector DBs: ChromaDB, Pinecone, FAISS, Weaviate
- Full Stack & Cloud: Next.js, React, FastAPI, Tailwind CSS, Docker, GCP

EXPERIENCE & ACHIEVEMENTS:
${EXPERIENCE_ACHIEVEMENTS.map(e => `- ${e.title} (${e.organization}, ${e.period}): ${e.description}`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `- ${c.title} (${c.issuer}, ${c.date})`).join('\n')}
    `;

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <div className={`relative max-w-4xl w-full my-8 rounded-2xl border overflow-hidden print:border-none print:shadow-none print:my-0 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        {/* Header Bar */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between print:hidden ${
          darkMode ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Curriculum Vitae</h3>
              <p className="text-xs text-cyan-400 font-medium">Ayesha Muhammad Ashraf - Official CV</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-colors ${
                darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Text' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrintDownload}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download / Print PDF
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-left">
          {/* Resume Name & Contact Header */}
          <div className="border-b border-slate-700 pb-6 space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <p className="text-sm font-semibold text-slate-300">
              {PERSONAL_INFO.titles.join('  |  ')}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.location}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.phoneWhatsApp}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* About Me / Executive Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              {PERSONAL_INFO.aboutMe}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-sm text-slate-200">
                <span>{PERSONAL_INFO.education.degree}</span>
                <span className="text-xs text-cyan-400">{PERSONAL_INFO.education.status}</span>
              </div>
              <p className="text-xs text-slate-400">{PERSONAL_INFO.education.institution}</p>
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300">{cat.title}: </span>
                  <span className="text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 border-b border-slate-800 pb-1">
              Experience & Achievements
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_ACHIEVEMENTS.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-200">
                    <span>{exp.title} — <span className="text-cyan-400">{exp.organization}</span></span>
                    <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 pt-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
              Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between text-slate-300">
                  <span className="font-semibold text-slate-200">{cert.title} ({cert.issuer})</span>
                  <span className="text-slate-400">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
