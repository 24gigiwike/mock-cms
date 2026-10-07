import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { usePortfolio } from '../context/PortfolioContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { selectProject } = usePortfolio();
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => selectProject(project.id)}
      className="group relative flex flex-col justify-between bg-black border border-white/10 hover:border-white/40 transition-colors duration-500 cursor-pointer overflow-hidden"
    >
      {/* Visual Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0A0A] border-b border-white/10">
        {!imageError && project.heroImage ? (
          <img
            src={project.heroImage}
            alt={`${project.client} - ${project.title}`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#111111] to-[#050505]">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#C0C0C0]/40 font-mono">
              [VISUAL ARTIFACT]
            </div>
            <div className="text-sm text-[#C0C0C0]/60 font-medium">
              {project.serviceCategory}
            </div>
          </div>
        )}

        {/* Confidentiality tag - unboxed clean overlay */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/90 bg-black/80 px-2.5 py-1 backdrop-blur-sm border border-white/15">
            {project.confidentiality}
          </span>
        </div>

        {/* Year stamp */}
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="text-[11px] font-mono tabular-nums text-white/80 bg-black/80 px-2 py-0.5 border border-white/10">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata line: unboxed, typographic separator */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#C0C0C0]/60 mb-3 font-medium">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.serviceCategory}</span>
          </div>

          {/* Title */}
          <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-white group-hover:text-[#C0C0C0] transition-colors duration-300 mb-4 line-clamp-2">
            {project.title}
          </h3>

          {/* Executive Summary */}
          <p className="text-[14px] leading-relaxed text-[#A1A1A1] font-light line-clamp-3 mb-6">
            {project.executiveSummary}
          </p>
        </div>

        <div>
          {/* Deliverables: Unboxed quiet metadata */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#8E8E93] font-mono mb-6">
            {project.deliverables.slice(0, 3).map((item, index) => (
              <span key={index} className="whitespace-nowrap">
                {index > 0 && <span className="mr-2 text-white/20">/</span>}
                {item}
              </span>
            ))}
          </div>

          {/* Key Metric highlight if available */}
          {project.quantitativeOutcomes && project.quantitativeOutcomes.length > 0 && (
            <div className="mb-6 p-3 bg-[#0A0A0A] border border-white/5 flex items-baseline justify-between">
              <div>
                <span className="text-[18px] font-semibold text-white tracking-tight tabular-nums mr-2">
                  {project.quantitativeOutcomes[0].metric}
                </span>
                <span className="text-[12px] text-[#A1A1A1]">
                  {project.quantitativeOutcomes[0].label}
                </span>
              </div>
              <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider font-mono">
                {project.quantitativeOutcomes[0].timeframe}
              </span>
            </div>
          )}

          {/* Action trigger */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] font-medium text-white group-hover:text-white pt-2">
            <span>Examine Case Study</span>
            <span className="text-[14px] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </article>
  );
};
