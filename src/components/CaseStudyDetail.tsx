import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { usePortfolio } from '../context/PortfolioContext';

interface CaseStudyDetailProps {
  project: Project;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ project }) => {
  const { selectProject, projects, setActiveTab, openEditor } = usePortfolio();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [heroImageError, setHeroImageError] = useState(false);

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-black text-white pt-24 pb-32">
      {/* Top Header / Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#0A0A0A]/60 backdrop-blur-md sticky top-[80px] z-30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => selectProject(null)}
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-[#C0C0C0] hover:text-white transition-colors cursor-pointer"
          >
            <span aria-hidden="true">←</span>
            <span>Return to Portfolio</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-[#8E8E93] hidden sm:inline">
              ENGAGEMENT ID: {project.id.toUpperCase()}
            </span>
            <button
              onClick={() => {
                setActiveTab('cms');
                openEditor(project);
              }}
              className="text-[11px] uppercase tracking-[0.15em] border border-white/20 text-[#C0C0C0] hover:text-white hover:border-white px-3 py-1.5 transition-colors cursor-pointer"
            >
              Edit in CMS
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12 md:mt-16">
        {/* Project Header Block */}
        <header className="mb-16">
          {/* Metadata Line */}
          <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.15em] text-[#8E8E93] font-medium mb-6">
            <span className="text-white font-semibold">{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.clientIndustry}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C0C0C0]">{project.confidentiality}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.04em] text-white max-w-5xl mb-8">
            {project.title}
          </h1>

          {/* Executive Summary Standalone Lead */}
          <p className="text-[20px] sm:text-[24px] font-light leading-relaxed text-[#C0C0C0] max-w-4xl border-l-2 border-white/30 pl-6 my-10">
            {project.executiveSummary}
          </p>

          {/* Key Engagement Specifications Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/10 bg-[#0A0A0A]/40">
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] mb-1 font-mono">
                Primary Competency
              </div>
              <div className="text-[14px] text-white font-medium">
                {project.serviceCategory}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] mb-1 font-mono">
                Governance Level
              </div>
              <div className="text-[14px] text-white font-medium">
                {project.stakeholders}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] mb-1 font-mono">
                Deliverable Scope
              </div>
              <div className="text-[14px] text-white font-medium">
                {project.deliverables.length} Strategic Assets
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] mb-1 font-mono">
                Status
              </div>
              <div className="text-[14px] text-white font-medium">
                {project.status === 'Published' ? 'Active Case Study' : 'Internal Archive'}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Visual Artifact */}
        <section className="mb-24">
          <div className="relative aspect-[16/9] w-full bg-[#0A0A0A] border border-white/10 overflow-hidden">
            {!heroImageError && project.heroImage ? (
              <img
                src={project.heroImage}
                alt={`${project.title} showcase`}
                referrerPolicy="no-referrer"
                onError={() => setHeroImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-12 text-[#8E8E93] font-mono text-sm">
                [EXECUTIVE SLIDE SYSTEM ARCHIVE]
              </div>
            )}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8E8E93]">
            <span>FIG 1.0 — EXECUTIVE KEYNOTE FRAMEWORK & BOARDROOM SYSTEM</span>
            <span>RESTRICTED ARCHIVE</span>
          </div>
        </section>

        {/* Main Content Grid: Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Left Column: Index & Key Deliverables */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-medium mb-6 pb-2 border-b border-white/10">
                Core Deliverables
              </h2>
              <ul className="space-y-4">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-[#C0C0C0]">
                    <span className="font-mono text-[11px] text-[#8E8E93] mt-1 tabular-nums">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Testimonial (Adjacency to Proof) */}
            {project.testimonial && (
              <div className="p-8 bg-[#0A0A0A] border border-white/10">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono mb-4">
                  Executive Endorsement
                </div>
                <blockquote className="text-[15px] font-light italic leading-relaxed text-white mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-[13px] font-medium text-white">
                  {project.testimonial.author}
                </div>
                <div className="text-[12px] text-[#8E8E93]">
                  {project.testimonial.role}, {project.testimonial.organization}
                </div>
              </div>
            )}
          </aside>

          {/* Right Column: Narrative Deep Dive */}
          <main className="lg:col-span-8 space-y-20">
            {/* Section 01: The Stakes & The Challenge */}
            <section>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono mb-3">
                01. Strategic Context
              </div>
              <h2 className="text-[28px] md:text-[34px] font-medium tracking-tight text-white mb-6">
                The Boardroom Stakes & Challenge
              </h2>
              <p className="text-[16px] leading-relaxed text-[#C0C0C0] font-light mb-6">
                {project.theChallenge.stakes}
              </p>
              <p className="text-[15px] leading-relaxed text-[#8E8E93] font-light mb-8">
                {project.theChallenge.context}
              </p>

              {/* Obstacles Breakdown */}
              <div className="p-6 bg-[#0E0E0E] border border-white/10">
                <div className="text-[12px] uppercase tracking-wider text-white font-medium mb-4">
                  Critical Narrative Friction Points
                </div>
                <ul className="space-y-3">
                  {project.theChallenge.obstacles.map((obs, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14px] text-[#C0C0C0]">
                      <span className="text-[#8E8E93] font-mono text-[11px] mt-0.5">/</span>
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 02: Narrative Architecture */}
            <section>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono mb-3">
                02. Narrative Architecture
              </div>
              <h2 className="text-[28px] md:text-[34px] font-medium tracking-tight text-white mb-4">
                {project.narrativeArchitecture.frameworkName}
              </h2>
              <p className="text-[16px] leading-relaxed text-[#C0C0C0] font-light mb-8">
                {project.narrativeArchitecture.approach}
              </p>

              {/* Strategic Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.narrativeArchitecture.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#0A0A0A] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-[#8E8E93] block mb-2">
                        PILLAR 0{idx + 1}
                      </span>
                      <h3 className="text-[16px] font-semibold text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-[#8E8E93]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 03: Measurable Outcomes */}
            <section>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono mb-3">
                03. Boardroom Impact
              </div>
              <h2 className="text-[28px] md:text-[34px] font-medium tracking-tight text-white mb-8">
                Quantifiable Outcomes & Capital Catalyzed
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.quantitativeOutcomes.map((qo) => (
                  <div
                    key={qo.id}
                    className="p-6 bg-black border border-white/15 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[36px] md:text-[42px] font-semibold text-white tracking-tight tabular-nums mb-2">
                        {qo.metric}
                      </div>
                      <div className="text-[14px] font-medium text-white mb-2">
                        {qo.label}
                      </div>
                      <div className="text-[11px] text-[#8E8E93] font-mono uppercase tracking-wider mb-3">
                        {qo.timeframe}
                      </div>
                    </div>
                    <div className="text-[12px] text-[#A1A1A1] border-t border-white/10 pt-3">
                      {qo.context}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Section 04: Slide Artifacts & Visual Framework Gallery */}
        {project.slideArtifacts && project.slideArtifacts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-mono mb-2">
                  04. Visual Artifacts
                </div>
                <h2 className="text-[28px] md:text-[36px] font-medium tracking-tight text-white">
                  Slide System Suite & Artifact Inspection
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {project.slideArtifacts.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      activeSlideIndex === idx
                        ? 'bg-white text-black font-semibold'
                        : 'border border-white/20 text-[#8E8E93] hover:text-white'
                    }`}
                  >
                    Slide 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Slide Display */}
            <div className="bg-[#0A0A0A] border border-white/10 p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="relative aspect-[16/9] w-full bg-black border border-white/10 overflow-hidden">
                    <img
                      src={
                        project.slideArtifacts[activeSlideIndex]?.imageUrl ||
                        project.heroImage
                      }
                      alt={project.slideArtifacts[activeSlideIndex]?.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8E8E93] mb-2">
                      {project.slideArtifacts[activeSlideIndex]?.category}
                    </div>
                    <h3 className="text-[22px] font-medium text-white mb-4">
                      {project.slideArtifacts[activeSlideIndex]?.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#A1A1A1] font-light mb-6">
                      {project.slideArtifacts[activeSlideIndex]?.description}
                    </p>
                  </div>

                  <div className="p-4 bg-black border border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#8E8E93] mb-1">
                      Strategic Takeaway
                    </div>
                    <div className="text-[13px] text-white font-medium">
                      {project.slideArtifacts[activeSlideIndex]?.keyTakeaway}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next / Previous Project Navigation */}
        <section className="mt-32 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevProject ? (
            <button
              onClick={() => selectProject(prevProject.id)}
              className="p-8 border border-white/10 hover:border-white/40 transition-colors text-left group cursor-pointer"
            >
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                ← Previous Case Study
              </div>
              <div className="text-[20px] font-medium text-white group-hover:text-[#C0C0C0] transition-colors">
                {prevProject.client}: {prevProject.title}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <button
              onClick={() => selectProject(nextProject.id)}
              className="p-8 border border-white/10 hover:border-white/40 transition-colors text-right group cursor-pointer md:col-start-2"
            >
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                Next Case Study →
              </div>
              <div className="text-[20px] font-medium text-white group-hover:text-[#C0C0C0] transition-colors">
                {nextProject.client}: {nextProject.title}
              </div>
            </button>
          ) : (
            <button
              onClick={() => selectProject(projects[0].id)}
              className="p-8 border border-white/10 hover:border-white/40 transition-colors text-right group cursor-pointer md:col-start-2"
            >
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                Return to First Case Study →
              </div>
              <div className="text-[20px] font-medium text-white group-hover:text-[#C0C0C0] transition-colors">
                {projects[0].client}
              </div>
            </button>
          )}
        </section>
      </div>
    </article>
  );
};
