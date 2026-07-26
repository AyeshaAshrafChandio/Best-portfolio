import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Sparkles, Filter, Info, X, Layers, Code2 } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Agents', 'Full Stack', 'Webflow & Design', 'Automation'];

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Featured Work & Demos
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            AI & Full Stack <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Project Portfolio</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Production-ready applications, AI Personal Agents, SaaS products, and startup ideas with live deployed web links.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/30'
                  : 'bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:border-cyan-400'
              }`}
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-xs font-semibold text-cyan-400">
                    {project.category}
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-400 transition-colors`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed line-clamp-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${
                          darkMode
                            ? 'bg-slate-950 text-slate-300 border border-slate-800'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer (Live Demo + GitHub Repository) */}
              <div className={`p-6 pt-0 space-y-2`}>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/60">
                  {/* Live Demo Button */}
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-md hover:shadow-cyan-500/25 transition-all text-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs text-slate-500 bg-slate-800 cursor-not-allowed text-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo Soon
                    </button>
                  )}

                  {/* GitHub Repository Button */}
                  <a
                    href={project.githubUrl || 'https://github.com/AyeshaAshrafChandio'}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-xs border transition-all text-center ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-200 hover:border-cyan-500 hover:text-cyan-400'
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub Repo
                  </a>
                </div>

                {/* Architecture details trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-center text-xs font-semibold py-1.5 transition-colors flex items-center justify-center gap-1 ${
                    darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" /> View Architecture & Tech Specs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Deep Dive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className={`relative max-w-2xl w-full rounded-2xl border p-6 sm:p-8 space-y-6 overflow-hidden ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
            }`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                  <span className="text-xs text-cyan-400 font-semibold">{selectedProject.category}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Project Description</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Architecture & Tech Details</h4>
                  <p className="text-sm leading-relaxed text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-cyan-300">
                    {selectedProject.architectureDetails}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" /> Open Live Demo
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl || 'https://github.com/AyeshaAshrafChandio'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs border border-slate-700 hover:border-cyan-400 text-slate-200"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
