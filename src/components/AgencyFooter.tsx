import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const AgencyFooter: React.FC = () => {
  const { setActiveTab, selectProject } = usePortfolio();

  return (
    <footer className="bg-black border-t border-white/10 text-white py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand mark and mission */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 bg-white block" aria-hidden="true" />
              <span className="text-[20px] font-semibold tracking-[-0.05em] text-white">
                Detailed
              </span>
            </div>
            <p className="text-[14px] text-[#A1A1A1] font-light max-w-sm leading-relaxed">
              Strategic visual systems, executive slide suites, and launch narratives for high-stakes corporate moments.
            </p>
            <div className="text-[12px] text-[#8E8E93] font-mono">
              Denver, Colorado · Global Advisory
            </div>
          </div>

          {/* Core Competencies */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#C0C0C0] font-light">
              <li>Executive Communications</li>
              <li>Presentation Systems</li>
              <li>Internal Communications</li>
              <li>Organizational Storytelling</li>
              <li>IPO & Capital Roadshows</li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#C0C0C0] font-light">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('showcase');
                    selectProject(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Client Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('cms');
                    selectProject(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CMS Studio
                </button>
              </li>
              <li>
                <a href="#competencies" className="hover:text-white transition-colors">
                  Competencies
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono">
              Confidential Contact
            </div>
            <div className="text-[13px] text-[#C0C0C0] font-mono">
              hello@detailedgroup.co
            </div>
            <div className="text-[12px] text-[#8E8E93] font-light pt-2">
              All inquiries evaluated under strict non-disclosure agreement.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8E8E93] font-mono">
          <div>
            © {new Date().getFullYear()} Detailed Group LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Executive Privacy</span>
            <span aria-hidden="true">·</span>
            <span>Restricted Visual Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
