import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, ExternalLink, Maximize2, X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Credentials & Credentials
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Certificate <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Verified technical certifications in Artificial Intelligence, Information Technology, and Cloud Agentic Systems.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 hover:shadow-xl'
                  : 'bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:border-cyan-400'
              }`}
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setActiveCert(cert)}
                className="relative aspect-[4/3] overflow-hidden bg-slate-950 cursor-pointer group/img"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                  <span className="bg-slate-900/90 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-700 shadow-xl">
                    <Maximize2 className="w-4 h-4 text-cyan-400" /> View Certificate Detail
                  </span>
                </div>

                {/* Badge overlay */}
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{cert.date}</span>
                </div>

                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {cert.title}
                </h3>

                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {cert.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Preview Image <Maximize2 className="w-3 h-3" />
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Preview */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
            <div className={`relative max-w-3xl w-full rounded-2xl border p-6 sm:p-8 space-y-6 ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
            }`}>
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{activeCert.title}</h3>
                  <p className="text-xs text-cyan-400 font-semibold">{activeCert.issuer} ({activeCert.date})</p>
                </div>
              </div>

              {/* High res certificate image container */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3]">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {activeCert.description}
              </p>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 hover:bg-slate-800 text-slate-200"
                >
                  Close Preview
                </button>
                {activeCert.credentialUrl && (
                  <a
                    href={activeCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" /> Verify Official Issuer Page
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
