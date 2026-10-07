import React from 'react';
import { Project } from '../types/portfolio';
import { usePortfolio } from '../context/PortfolioContext';

interface ProjectListViewProps {
  projects: Project[];
}

export const ProjectListView: React.FC<ProjectListViewProps> = ({ projects }) => {
  const { selectProject } = usePortfolio();

  return (
    <div className="w-full border-t border-white/10">
      {/* Table Header */}
      <div className="hidden lg:grid grid-cols-12 py-4 px-6 text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-medium border-b border-white/10 bg-[#0A0A0A]/50">
        <div className="col-span-1">Year</div>
        <div className="col-span-3">Client & Industry</div>
        <div className="col-span-4">Strategic Initiative</div>
        <div className="col-span-2">Service Line</div>
        <div className="col-span-2 text-right">Primary Outcome</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => selectProject(project.id)}
            className="group flex flex-col lg:grid lg:grid-cols-12 py-5 px-6 items-start lg:items-center hover:bg-[#0E0E0E] transition-colors duration-200 cursor-pointer gap-2 lg:gap-0"
          >
            {/* Year */}
            <div className="col-span-1 text-[13px] font-mono tabular-nums text-[#8E8E93] group-hover:text-white transition-colors">
              {project.year}
            </div>

            {/* Client & Industry */}
            <div className="col-span-3 pr-4">
              <div className="text-[15px] font-medium text-white group-hover:text-white">
                {project.client}
              </div>
              <div className="text-[12px] text-[#8E8E93] font-light">
                {project.clientIndustry}
              </div>
            </div>

            {/* Strategic Initiative Title */}
            <div className="col-span-4 pr-6">
              <div className="text-[14px] text-[#C0C0C0] group-hover:text-white transition-colors line-clamp-1">
                {project.title}
              </div>
              <div className="text-[11px] text-[#8E8E93]/70 font-mono line-clamp-1 mt-0.5">
                {project.deliverables.join(' · ')}
              </div>
            </div>

            {/* Service Line */}
            <div className="col-span-2 text-[12px] text-[#8E8E93] uppercase tracking-wider font-medium">
              {project.serviceCategory}
            </div>

            {/* Primary Outcome / Action */}
            <div className="col-span-2 flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto pt-2 lg:pt-0">
              {project.quantitativeOutcomes && project.quantitativeOutcomes.length > 0 ? (
                <div className="text-left lg:text-right">
                  <span className="text-[14px] font-semibold text-white tabular-nums mr-1.5">
                    {project.quantitativeOutcomes[0].metric}
                  </span>
                  <span className="text-[11px] text-[#8E8E93]">
                    {project.quantitativeOutcomes[0].label}
                  </span>
                </div>
              ) : (
                <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider">
                  {project.confidentiality}
                </span>
              )}
              <span className="text-[14px] text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
