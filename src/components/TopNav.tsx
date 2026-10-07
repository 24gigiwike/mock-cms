import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const TopNav: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    selectProject,
    selectedProjectId,
    openEditor
  } = usePortfolio();

  return (
    <header className="bg-black/90 backdrop-blur-2xl border-b border-white/10 fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1440px] mx-auto h-[80px]">
        {/* Zone 1: Brand Mark (Single element display) */}
        <button
          onClick={() => {
            selectProject(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 shrink-0 group text-left cursor-pointer focus:outline-none"
        >
          <span className="h-3 w-3 bg-white block transition-transform group-hover:scale-110" aria-hidden="true" />
          <span className="text-[20px] font-semibold tracking-[-0.05em] text-white">Detailed</span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => {
              setActiveTab('showcase');
              selectProject(null);
            }}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 cursor-pointer ${
              activeTab === 'showcase' && !selectedProjectId
                ? 'text-white border-b border-white pb-1'
                : 'text-[#C0C0C0]/60 hover:text-white'
            }`}
          >
            Showcase
          </button>
          <a
            href="#competencies"
            onClick={(e) => {
              if (activeTab !== 'showcase' || selectedProjectId) {
                e.preventDefault();
                setActiveTab('showcase');
                selectProject(null);
                setTimeout(() => {
                  document.getElementById('competencies')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-[12px] uppercase tracking-[0.15em] font-medium text-[#C0C0C0]/60 hover:text-white transition-colors duration-300"
          >
            Competencies
          </a>
          <a
            href="#approach"
            onClick={(e) => {
              if (activeTab !== 'showcase' || selectedProjectId) {
                e.preventDefault();
                setActiveTab('showcase');
                selectProject(null);
                setTimeout(() => {
                  document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-[12px] uppercase tracking-[0.15em] font-medium text-[#C0C0C0]/60 hover:text-white transition-colors duration-300"
          >
            Approach
          </a>
          <button
            onClick={() => {
              setActiveTab('cms');
              selectProject(null);
            }}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 cursor-pointer ${
              activeTab === 'cms'
                ? 'text-white border-b border-white pb-1'
                : 'text-[#C0C0C0]/60 hover:text-white'
            }`}
          >
            CMS Dashboard
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              if (activeTab !== 'showcase' || selectedProjectId) {
                e.preventDefault();
                setActiveTab('showcase');
                selectProject(null);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-[12px] uppercase tracking-[0.15em] font-medium text-[#C0C0C0]/60 hover:text-white transition-colors duration-300"
          >
            Inquiries
          </a>
        </div>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {activeTab === 'cms' ? (
            <>
              <button
                onClick={() => {
                  setActiveTab('showcase');
                  selectProject(null);
                }}
                className="hidden sm:inline-block border border-white/20 text-white text-[12px] uppercase tracking-[0.15em] font-medium px-4 py-2.5 hover:border-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                View Client Showcase
              </button>
              <button
                onClick={() => openEditor(null)}
                className="bg-white text-black text-[12px] uppercase tracking-[0.15em] font-medium px-5 py-2.5 hover:bg-[#C0C0C0] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                + Create Project
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveTab('cms')}
                className="hidden sm:inline-block border border-white/20 text-[#C0C0C0] text-[12px] uppercase tracking-[0.15em] font-medium px-4 py-2.5 hover:text-white hover:border-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                CMS Studio
              </button>
              <a
                href="#contact"
                className="inline-flex items-center border border-white text-white text-[12px] uppercase tracking-[0.15em] font-medium px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
              >
                Book Consultation
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
