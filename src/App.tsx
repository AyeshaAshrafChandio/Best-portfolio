import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { AIChatBot } from './components/AIChatBot';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [preselectedHireTopic, setPreselectedHireTopic] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenHireMe = () => {
    setPreselectedHireTopic('Inquiry for Full-time AI Engineer Role / Project Consultation');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-white ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
        onOpenHireMe={handleOpenHireMe}
      />

      {/* Hero Section */}
      <main>
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeOpen(true)}
          onOpenHireMe={handleOpenHireMe}
        />

        {/* About Section */}
        <About darkMode={darkMode} />

        {/* Skills Section */}
        <Skills darkMode={darkMode} />

        {/* Projects Section */}
        <Projects darkMode={darkMode} />

        {/* Certifications Gallery Section */}
        <Certifications darkMode={darkMode} />

        {/* Experience & Achievements Section */}
        <Experience darkMode={darkMode} />

        {/* Contact & Map Section */}
        <Contact darkMode={darkMode} preselectedTopic={preselectedHireTopic} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Printable Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        darkMode={darkMode}
      />

      {/* Interactive AI Agent Chatbot ("Ask Ayesha AI") */}
      <AIChatBot darkMode={darkMode} />
    </div>
  );
}
