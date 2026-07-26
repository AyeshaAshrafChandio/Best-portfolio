import React from 'react';
import { EXPERIENCE_ACHIEVEMENTS } from '../data/portfolioData';
import { Briefcase, Sparkles, CheckCircle2, Award, Users } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Experience & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Building AI agent systems, competing in global hackathons, and leading developer community workshops.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {EXPERIENCE_ACHIEVEMENTS.map((item, index) => (
            <div key={item.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg shadow-cyan-500/30">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Item Card */}
              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:border-cyan-400'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
                      {item.type}
                    </span>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold font-mono px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 self-start md:self-auto">
                    {item.period}
                  </div>
                </div>

                <div className="text-sm font-semibold text-blue-400 mb-3">
                  {item.organization}
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  {item.highlights.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
