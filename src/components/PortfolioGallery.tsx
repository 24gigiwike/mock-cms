import React, { useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectCard } from './ProjectCard';
import { ProjectListView } from './ProjectListView';
import { ServiceCategory, IndustrySector } from '../types/portfolio';

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Works', value: 'all' },
  { label: 'Executive Communications', value: 'Executive Communications' },
  { label: 'Presentation Systems', value: 'Presentation Systems' },
  { label: 'Visual Storytelling', value: 'Visual Storytelling' },
  { label: 'Organizational Storytelling', value: 'Organizational Storytelling' },
  { label: 'Capital & IPO', value: 'Capital & IPO' }
];

const SECTORS: { label: string; value: string }[] = [
  { label: 'All Industries', value: 'all' },
  { label: 'Enterprise AI & Infrastructure', value: 'Enterprise AI & Infrastructure' },
  { label: 'Clean Energy & Grid', value: 'Clean Energy & Grid' },
  { label: 'BioPharma & Genomics', value: 'BioPharma & Genomics' },
  { label: 'Autonomous Logistics', value: 'Autonomous Logistics' },
  { label: 'Fintech & Capital Markets', value: 'Fintech & Capital Markets' }
];

export const PortfolioGallery: React.FC = () => {
  const {
    projects,
    filterCategory,
    setFilterCategory,
    filterSector,
    setFilterSector,
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    setActiveTab
  } = usePortfolio();

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Must be published in client showcase
      if (project.status !== 'Published') return false;

      // Category filter
      if (filterCategory !== 'all' && project.serviceCategory !== filterCategory) {
        return false;
      }

      // Sector filter
      if (filterSector !== 'all' && project.clientIndustry !== filterSector) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesClient = project.client.toLowerCase().includes(query);
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSummary = project.executiveSummary.toLowerCase().includes(query);
        const matchesDeliverables = project.deliverables.some((d) =>
          d.toLowerCase().includes(query)
        );
        if (!matchesClient && !matchesTitle && !matchesSummary && !matchesDeliverables) {
          return false;
        }
      }

      return true;
    });
  }, [projects, filterCategory, filterSector, searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white pt-[80px]">
      {/* Hero Section - Detailed Group Signature Layout */}
      <section className="relative px-6 md:px-12 max-w-[1440px] mx-auto pt-20 md:pt-28 pb-16 md:pb-24 border-b border-white/10">
        <div className="max-w-5xl">
          {/* Overline Metadata */}
          <div className="text-[12px] uppercase tracking-[0.25em] text-[#C0C0C0]/70 font-mono mb-6">
            Detailed Group · Client Portfolio & Case Studies
          </div>

          {/* Main Headline */}
          <h1 className="text-[44px] sm:text-[64px] lg:text-[88px] font-semibold leading-[1.02] tracking-[-0.04em] text-white mb-8 text-balance">
            Architecting Launch Narratives for High‑Stakes Moments.
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] sm:text-[22px] font-light leading-relaxed text-[#A1A1A1] max-w-3xl mb-12">
            When the moment matters, strategy must be spoken with precision. We translate complex corporate strategies into premium visual communication systems for executive leaders, sovereign funds, and global boards.
          </p>

          {/* Claim-to-Proof Quantitative Adjacency Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            <div>
              <div className="text-[28px] sm:text-[34px] font-semibold text-white tracking-tight tabular-nums">
                $18.4B+
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] text-[#8E8E93] font-medium mt-1">
                Capital Catalyzed
              </div>
            </div>
            <div>
              <div className="text-[28px] sm:text-[34px] font-semibold text-white tracking-tight tabular-nums">
                140+
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] text-[#8E8E93] font-medium mt-1">
                Executive Briefings
              </div>
            </div>
            <div>
              <div className="text-[28px] sm:text-[34px] font-semibold text-white tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] text-[#8E8E93] font-medium mt-1">
                Boardroom Confidentiality
              </div>
            </div>
            <div>
              <div className="text-[28px] sm:text-[34px] font-semibold text-white tracking-tight tabular-nums">
                18 Days
              </div>
              <div className="text-[12px] uppercase tracking-[0.15em] text-[#8E8E93] font-medium mt-1">
                Avg. Deployment Velocity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Gallery Controls Strip */}
      <section className="sticky top-[80px] z-30 bg-black/95 backdrop-blur-md border-b border-white/10 py-5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Competency Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilterCategory(cat.value)}
                className={`px-4 py-2 text-[12px] uppercase tracking-[0.12em] font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  filterCategory === cat.value
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8E93] hover:text-white border border-transparent hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search, Sector Dropdown & View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[200px]">
              <input
                type="text"
                placeholder="Search engagements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0E0E0E] border border-white/15 px-3 py-2 text-[13px] text-white placeholder-[#8E8E93] focus:outline-none focus:border-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[12px] text-[#8E8E93] hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sector Selector */}
            <select
              value={filterSector}
              onChange={(e) => setFilterSector(e.target.value)}
              className="bg-[#0E0E0E] border border-white/15 px-3 py-2 text-[12px] uppercase tracking-wider text-[#C0C0C0] focus:outline-none focus:border-white transition-colors cursor-pointer"
            >
              {SECTORS.map((sec) => (
                <option key={sec.value} value={sec.value} className="bg-black text-white">
                  {sec.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-white/15">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-black font-semibold' : 'text-[#8E8E93] hover:text-white'
                }`}
                title="Visual Card Grid"
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-white text-black font-semibold' : 'text-[#8E8E93] hover:text-white'
                }`}
                title="High-Density List Ledger"
              >
                Ledger
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content Area */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-12 md:py-16">
        {/* Count Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-[11px] uppercase tracking-[0.2em] font-mono text-[#8E8E93]">
          <div>
            Showing {filteredProjects.length} of {projects.filter((p) => p.status === 'Published').length} Selected Engagements
          </div>
          {(filterCategory !== 'all' || filterSector !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setFilterCategory('all');
                setFilterSector('all');
                setSearchQuery('');
              }}
              className="text-white hover:underline cursor-pointer"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Display Grid or List */}
        {filteredProjects.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <ProjectListView projects={filteredProjects} />
          )
        ) : (
          <div className="py-24 text-center border border-white/10 bg-[#0A0A0A] p-12">
            <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#8E8E93] mb-3">
              Zero Records Found
            </div>
            <h3 className="text-[24px] font-medium text-white mb-4">
              No executive case studies match the active filter criteria.
            </h3>
            <p className="text-[14px] text-[#A1A1A1] max-w-md mx-auto mb-8 font-light">
              Try adjusting your sector or competency filters, or reset the query to view all published client engagements.
            </p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setFilterSector('all');
                setSearchQuery('');
              }}
              className="bg-white text-black text-[12px] uppercase tracking-[0.15em] font-semibold px-6 py-3 hover:bg-[#C0C0C0] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Core Competencies Section - Detailed Group Authenticity */}
      <section id="competencies" className="px-6 md:px-12 max-w-[1440px] mx-auto py-24 border-t border-white/10">
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#8E8E93] font-mono mb-4">
            Consultancy Offerings
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-white mb-6">
            Core Competencies
          </h2>
          <p className="text-[18px] text-[#A1A1A1] max-w-2xl font-light">
            We partner directly with founders, CEOs, and communication officers to transform strategic intent into launch-ready narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-white/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8E8E93] mb-4">01</div>
              <h3 className="text-[20px] font-semibold text-white mb-4">
                Executive Communications
              </h3>
              <p className="text-[14px] leading-relaxed text-[#A1A1A1] font-light mb-6">
                Visual storytelling for leadership: briefing books, keynote systems, and executive slide suites designed for clarity and authority.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#8E8E93] pt-4 border-t border-white/10">
              C-Suite · Boardrooms · Keynotes
            </div>
          </div>

          <div className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-white/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8E8E93] mb-4">02</div>
              <h3 className="text-[20px] font-semibold text-white mb-4">
                Presentation Systems
              </h3>
              <p className="text-[14px] leading-relaxed text-[#A1A1A1] font-light mb-6">
                Slide frameworks, visual templates, and storytelling flows that make data and strategy instantly comprehensible for institutional investors.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#8E8E93] pt-4 border-t border-white/10">
              Investor Relations · Capital Raises
            </div>
          </div>

          <div className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-white/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8E8E93] mb-4">03</div>
              <h3 className="text-[20px] font-semibold text-white mb-4">
                Internal Communications
              </h3>
              <p className="text-[14px] leading-relaxed text-[#A1A1A1] font-light mb-6">
                Strategic visual systems that connect employees to leadership intent: campaign toolkits, town-hall assets, and alignment frameworks.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#8E8E93] pt-4 border-t border-white/10">
              Global Alignment · Cultural Shift
            </div>
          </div>

          <div className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-white/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8E8E93] mb-4">04</div>
              <h3 className="text-[20px] font-semibold text-white mb-4">
                Organizational Storytelling
              </h3>
              <p className="text-[14px] leading-relaxed text-[#A1A1A1] font-light mb-6">
                Translating historical legacy and future vision into a coherent corporate identity during acquisitions, IPOs, or generational leadership transitions.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#8E8E93] pt-4 border-t border-white/10">
              M&A · Public Listings · Vision 2030
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Phase Approach Section */}
      <section id="approach" className="px-6 md:px-12 max-w-[1440px] mx-auto py-24 border-t border-white/10">
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#8E8E93] font-mono mb-4">
            Proven Framework
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-medium tracking-tight text-white mb-6">
            The Engagement Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="border-t border-white/20 pt-6">
            <span className="text-[11px] font-mono text-[#8E8E93] block mb-2">PHASE 01</span>
            <h3 className="text-[18px] font-medium text-white mb-3">Discovery</h3>
            <p className="text-[13px] text-[#A1A1A1] leading-relaxed font-light">
              In-depth stakeholder analysis and confidential narrative audit with executive sponsors.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <span className="text-[11px] font-mono text-[#8E8E93] block mb-2">PHASE 02</span>
            <h3 className="text-[18px] font-medium text-white mb-3">Synthesis</h3>
            <p className="text-[13px] text-[#A1A1A1] leading-relaxed font-light">
              Distilling complex engineering roadmaps and financial tables into core strategic pillars.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <span className="text-[11px] font-mono text-[#8E8E93] block mb-2">PHASE 03</span>
            <h3 className="text-[18px] font-medium text-white mb-3">Architecture</h3>
            <p className="text-[13px] text-[#A1A1A1] leading-relaxed font-light">
              Building the visual hierarchy, slide frameworks, and data presentation system.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <span className="text-[11px] font-mono text-[#8E8E93] block mb-2">PHASE 04</span>
            <h3 className="text-[18px] font-medium text-white mb-3">Refinement</h3>
            <p className="text-[13px] text-[#A1A1A1] leading-relaxed font-light">
              Iterative precision-tuning for maximum boardroom resonance and speech flow.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <span className="text-[11px] font-mono text-[#8E8E93] block mb-2">PHASE 05</span>
            <h3 className="text-[18px] font-medium text-white mb-3">Deployment</h3>
            <p className="text-[13px] text-[#A1A1A1] leading-relaxed font-light">
              Flawless turnkey execution across keynotes, investor roadshows, and board decks.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section id="contact" className="px-6 md:px-12 max-w-[1440px] mx-auto py-24 border-t border-white/10">
        <div className="p-12 md:p-20 bg-[#0A0A0A] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono mb-3">
              Direct Advisory
            </div>
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white tracking-tight mb-4">
              Have an upcoming high-stakes moment?
            </h2>
            <p className="text-[16px] text-[#A1A1A1] max-w-xl font-light">
              Reach out to our principal partners under complete non-disclosure to evaluate your strategic narrative requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="mailto:hello@detailedgroup.co"
              className="bg-white text-black font-semibold text-[12px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#C0C0C0] transition-colors whitespace-nowrap text-center cursor-pointer"
            >
              hello@detailedgroup.co
            </a>
            <button
              onClick={() => setActiveTab('cms')}
              className="border border-white/30 text-white font-medium text-[12px] uppercase tracking-[0.15em] px-6 py-4 hover:border-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Access CMS Studio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
