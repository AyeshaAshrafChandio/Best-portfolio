import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Globe
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
  preselectedTopic?: string;
}

export const Contact: React.FC<ContactProps> = ({ darkMode, preselectedTopic }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: preselectedTopic || '',
    interest: 'Full-time AI Engineer Role',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Intelligent Together
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Open for international AI Engineer positions, AI Automation consulting, and innovative full-stack collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards & Map Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact Channels
              </h3>

              {/* Phone & WhatsApp */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneWhatsApp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-101 ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900'
                    : 'bg-slate-50 border-slate-200 hover:border-emerald-500'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                  <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.phoneWhatsApp}
                  </div>
                </div>
              </a>

              {/* Primary Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-101 ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900'
                    : 'bg-slate-50 border-slate-200 hover:border-cyan-500'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-400 font-medium">Primary Email</div>
                  <div className={`font-bold text-sm truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              {/* Alternate Email */}
              <a
                href={`mailto:${PERSONAL_INFO.altEmail}`}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-101 ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-500'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-400 font-medium">Alternate Email</div>
                  <div className={`font-bold text-sm truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.altEmail}
                  </div>
                </div>
              </a>

              {/* Social Buttons Row */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-[#0A66C2] hover:opacity-90 transition-opacity"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn Profile
                </a>
                <a
                  href={PERSONAL_INFO.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <Github className="w-4 h-4" /> GitHub Portfolio
                </a>
              </div>
            </div>

            {/* Google Map Container (Karachi, Sindh, Pakistan) */}
            <div className={`p-6 rounded-2xl border space-y-3 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Karachi, Sindh, Pakistan</span>
                </div>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Globe className="w-3 h-3" /> PKT (GMT+5)
                </span>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="rounded-xl overflow-hidden border border-slate-800 h-48 relative bg-slate-950">
                <iframe
                  title="Ayesha Location Karachi Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.0249105358!2d66.82582125!3d25.193202399999998!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: darkMode ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-300">
                  Thank you for reaching out, {formData.name}. Ayesha will review your message and reply back to your email ({formData.email}) shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., sarah@techcorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Opportunity / Topic Type
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    >
                      <option value="Full-time AI Engineer Role">Full-time AI Engineer Position</option>
                      <option value="AI Automation Contract">AI Automation Project</option>
                      <option value="Full Stack Consulting">Full Stack Development</option>
                      <option value="Hackathon / Collaboration">Hackathon & Open Source</option>
                      <option value="General Inquiry">General Connect</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Senior AI Agent Role at Tech Corp"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your AI project requirements, team goals, or job opportunity details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Direct Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
