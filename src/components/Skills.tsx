import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Terminal,
  Cpu,
  Workflow,
  Database,
  Bot,
  Server,
  Layers,
  Layout,
  Cloud,
  Activity,
  Search,
  Sparkles,
  Check
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">AI Ecosystem</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Categorized technical stack spanning LLM Agent orchestration, Vector Search, FastAPI backends, and modern React frameworks.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g., Python, CrewAI, Pinecone)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all outline-none ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-sm'
              }`}
            />
          </div>

          {/* Quick Category Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Skills ({SKILL_CATEGORIES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai-frameworks')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'ai-frameworks'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              AI Agents & Frameworks
            </button>
            <button
              onClick={() => setSelectedCategory('rag-vector')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'rag-vector'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              RAG & Vector DBs
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-cyan-400'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className={`font-bold text-lg leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {category.title}
                  </h3>
                  <span className="text-xs text-cyan-400 font-medium">
                    {category.skills.length} Technologies
                  </span>
                </div>
              </div>

              {category.description && (
                <p className={`text-xs mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.description}
                </p>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const isHighlighted =
                    searchQuery !== '' && skill.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isHighlighted
                          ? 'bg-cyan-500 text-white ring-2 ring-cyan-300'
                          : darkMode
                          ? 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-white'
                          : 'bg-slate-100 text-slate-800 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No matching skills found for "{searchQuery}". Try searching for Python, Next.js, or Gemini!
          </div>
        )}
      </div>
    </section>
  );
};
