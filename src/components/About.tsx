import React from 'react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { GraduationCap, MapPin, Award, BookOpen, Bot, CheckCircle2, Sparkles, User, Globe } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" /> About Me
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Passionate AI Engineer & <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Full Stack Innovator
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging cutting-edge Generative AI models with scalable web architectures and automated agent pipelines.
          </p>
        </div>

        {/* Top Grid: Bio + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Bio Card */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
            darkMode
              ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-sm'
              : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Engineering Tomorrow's AI Agents
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium">Full-Stack & Prompt Automation Specialist</p>
                </div>
              </div>

              <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {PERSONAL_INFO.aboutMe}
              </p>

              {/* Core Strengths Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className={`p-3 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Agent Orchestration</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>LangChain, LangGraph, CrewAI & OpenAI Agent SDK</p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>RAG & Knowledge Search</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>ChromaDB, Pinecone, FAISS, & Hybrid Search</p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Full Stack Web</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Next.js, React, FastAPI, & Tailwind CSS</p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cloud & Deployments</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>GCP, Vercel, Docker, & Ollama Local LLMs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Contact Bar */}
            <div className={`mt-6 pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
              darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-cyan-400">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Open for Remote & Relocation Roles</span>
              </div>
            </div>
          </div>

          {/* Education & Badges Sidebar */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Education Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Education</h3>
                  <p className="text-xs text-blue-400 font-medium">{PERSONAL_INFO.education.status}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className={`text-base font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {PERSONAL_INFO.education.degree}
                </h4>
                <p className="text-sm text-cyan-400 font-semibold">{PERSONAL_INFO.education.institution}</p>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {PERSONAL_INFO.education.details}
                </p>
              </div>
            </div>

            {/* Communities & Ambassadorship Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Tech Leadership</h3>
                  <p className="text-xs text-purple-400 font-medium">Community & Ambassadorship</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Microsoft Learn Student Ambassador (MLSA)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Google Developer Community Active Member
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Governor House Sindh IT Initiative Graduate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border text-center transition-all hover:scale-102 ${
                darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm font-medium mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
