import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, ProjectStatus } from '../types/portfolio';

export const CmsDashboard: React.FC = () => {
  const {
    projects,
    openEditor,
    selectProject,
    setActiveTab,
    deleteProject,
    duplicateProject,
    toggleFeatured,
    toggleStatus,
    resetToDefault
  } = usePortfolio();

  const [cmsStatusFilter, setCmsStatusFilter] = useState<'All' | ProjectStatus>('All');
  const [cmsSearch, setCmsSearch] = useState<string>('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Compute portfolio telemetry metrics
  const totalCount = projects.length;
  const publishedCount = projects.filter((p) => p.status === 'Published').length;
  const draftCount = projects.filter((p) => p.status === 'Draft').length;
  const featuredCount = projects.filter((p) => p.isFeatured).length;
  const totalViews = projects.reduce((acc, p) => acc + (p.viewCount || 0), 0);

  // Filtered list for the CMS table
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (cmsStatusFilter !== 'All' && p.status !== cmsStatusFilter) {
        return false;
      }
      if (cmsSearch.trim()) {
        const query = cmsSearch.toLowerCase();
        return (
          p.client.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query) ||
          p.id.toLowerCase().includes(query) ||
          p.serviceCategory.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [projects, cmsStatusFilter, cmsSearch]);

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `detailed-group-portfolio-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-black text-white pt-[80px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        {/* CMS Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#8E8E93] font-mono mb-2">
              Detailed Group · Content Management System
            </div>
            <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-tight text-white">
              Portfolio & Narrative Studio
            </h1>
            <p className="text-[14px] text-[#A1A1A1] font-light mt-1">
              Curate, edit, and publish high-stakes client engagement case studies.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportJson}
              className="border border-white/20 text-[#C0C0C0] hover:text-white hover:border-white px-4 py-2.5 text-[12px] uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer"
            >
              Export JSON
            </button>
            <button
              onClick={() => {
                if (window.confirm('Reset all portfolio entries back to Detailed Group factory defaults?')) {
                  resetToDefault();
                }
              }}
              className="border border-white/20 text-[#8E8E93] hover:text-[#C0C0C0] hover:border-white/40 px-3 py-2.5 text-[12px] uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer"
              title="Reset to factory seed case studies"
            >
              Reset Seed
            </button>
            <button
              onClick={() => openEditor(null)}
              className="bg-white text-black font-semibold px-5 py-2.5 text-[12px] uppercase tracking-[0.15em] hover:bg-[#C0C0C0] transition-colors cursor-pointer whitespace-nowrap"
            >
              + Create Engagement
            </button>
          </div>
        </div>

        {/* Real Metrics Grid - Strict Tabular Math */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
          <div className="p-6 bg-[#0A0A0A] border border-white/10">
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-1">
              Total Engagements
            </div>
            <div className="text-[28px] font-semibold text-white tabular-nums">
              {totalCount}
            </div>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-white/10">
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-1">
              Live in Showcase
            </div>
            <div className="text-[28px] font-semibold text-white tabular-nums">
              {publishedCount}
            </div>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-white/10">
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-1">
              Drafts / Embargoed
            </div>
            <div className="text-[28px] font-semibold text-[#8E8E93] tabular-nums">
              {draftCount}
            </div>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-white/10">
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-1">
              Featured Primary
            </div>
            <div className="text-[28px] font-semibold text-white tabular-nums">
              {featuredCount}
            </div>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-white/10 col-span-2 md:col-span-1">
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-1">
              Total Impressions
            </div>
            <div className="text-[28px] font-semibold text-white tabular-nums">
              {totalViews.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Table Controls Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-white/10">
          {/* Status Tabs */}
          <div className="flex items-center gap-1">
            {(['All', 'Published', 'Draft', 'Archived'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setCmsStatusFilter(status)}
                className={`px-3 py-1.5 text-[12px] uppercase tracking-[0.12em] font-medium transition-colors cursor-pointer ${
                  cmsStatusFilter === status
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              placeholder="Search by client, title, ID..."
              value={cmsSearch}
              onChange={(e) => setCmsSearch(e.target.value)}
              className="w-full bg-[#0E0E0E] border border-white/15 px-3 py-2 text-[12px] text-white placeholder-[#8E8E93] focus:outline-none focus:border-white transition-colors"
            />
            {cmsSearch && (
              <button
                onClick={() => setCmsSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[12px] text-[#8E8E93] hover:text-white cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* High-Density CMS Data Grid */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono bg-[#0A0A0A]/40">
                <th className="py-4 px-4 w-[60px]">Featured</th>
                <th className="py-4 px-4 w-[120px]">Status</th>
                <th className="py-4 px-4 min-w-[280px]">Client & Initiative</th>
                <th className="py-4 px-4 min-w-[180px]">Competency</th>
                <th className="py-4 px-4 w-[160px]">Confidentiality</th>
                <th className="py-4 px-4 w-[90px] tabular-nums text-right">Views</th>
                <th className="py-4 px-4 w-[120px] font-mono">Updated</th>
                <th className="py-4 px-4 min-w-[180px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-[#0C0C0C] transition-colors duration-150 group"
                >
                  {/* Featured Toggle */}
                  <td className="py-4 px-4">
                    <button
                      onClick={() => toggleFeatured(project.id)}
                      className={`text-[13px] font-mono transition-colors cursor-pointer ${
                        project.isFeatured ? 'text-white font-bold' : 'text-[#8E8E93]/40 hover:text-[#8E8E93]'
                      }`}
                      title={project.isFeatured ? 'Featured (Click to unset)' : 'Mark as Featured'}
                    >
                      {project.isFeatured ? '★' : '☆'}
                    </button>
                  </td>

                  {/* Status Toggle Button */}
                  <td className="py-4 px-4">
                    <button
                      onClick={() => toggleStatus(project.id)}
                      className={`text-[11px] uppercase tracking-[0.15em] font-mono px-2 py-1 transition-colors cursor-pointer border ${
                        project.status === 'Published'
                          ? 'border-white/30 text-white bg-white/5 hover:bg-white/10'
                          : 'border-white/10 text-[#8E8E93] hover:text-white'
                      }`}
                      title="Click to toggle status"
                    >
                      {project.status}
                    </button>
                  </td>

                  {/* Client & Title */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-7 bg-[#161616] border border-white/10 overflow-hidden shrink-0 hidden sm:block">
                        {project.heroImage ? (
                          <img
                            src={project.heroImage}
                            alt=""
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        ) : null}
                      </div>
                      <div>
                        <div className="text-[14px] font-medium text-white group-hover:text-white">
                          {project.client}
                        </div>
                        <div className="text-[12px] text-[#A1A1A1] line-clamp-1 max-w-sm">
                          {project.title}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Competency */}
                  <td className="py-4 px-4">
                    <div className="text-[12px] text-[#C0C0C0]">
                      {project.serviceCategory}
                    </div>
                    <div className="text-[11px] text-[#8E8E93] font-light">
                      {project.clientIndustry}
                    </div>
                  </td>

                  {/* Confidentiality */}
                  <td className="py-4 px-4 text-[12px] text-[#8E8E93] font-mono">
                    {project.confidentiality}
                  </td>

                  {/* Views */}
                  <td className="py-4 px-4 text-right text-[13px] font-mono tabular-nums text-[#8E8E93]">
                    {project.viewCount || 0}
                  </td>

                  {/* Last Modified */}
                  <td className="py-4 px-4 text-[12px] font-mono text-[#8E8E93] tabular-nums">
                    {project.lastModified}
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditor(project)}
                        className="text-[11px] uppercase tracking-wider text-[#C0C0C0] hover:text-white border border-white/15 px-2.5 py-1 hover:border-white transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          selectProject(project.id);
                          setActiveTab('showcase');
                        }}
                        className="text-[11px] uppercase tracking-wider text-[#C0C0C0] hover:text-white border border-white/15 px-2.5 py-1 hover:border-white transition-colors cursor-pointer"
                        title="View Case Study Presentation"
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => duplicateProject(project.id)}
                        className="text-[11px] uppercase tracking-wider text-[#8E8E93] hover:text-[#C0C0C0] px-2 py-1 transition-colors cursor-pointer"
                        title="Clone Case Study"
                      >
                        Clone
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(project.id)}
                        className="text-[11px] uppercase tracking-wider text-[#8E8E93] hover:text-red-400 px-2 py-1 transition-colors cursor-pointer"
                        title="Delete Engagement"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 border-b border-white/10 bg-[#0A0A0A]">
              <div className="text-[12px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                No entries match this filter
              </div>
              <button
                onClick={() => {
                  setCmsStatusFilter('All');
                  setCmsSearch('');
                }}
                className="text-[12px] text-white underline cursor-pointer"
              >
                Clear CMS Filters
              </button>
            </div>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-[#0E0E0E] border border-white/20 p-8 max-w-md w-full">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8E8E93] mb-3">
                Confirm Deletion
              </div>
              <h3 className="text-[20px] font-medium text-white mb-4">
                Remove this engagement from the portfolio?
              </h3>
              <p className="text-[14px] text-[#A1A1A1] font-light mb-8">
                This will delete the case study, metrics, and visual artifacts from the active CMS records.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-4 py-2 text-[12px] uppercase tracking-wider text-[#C0C0C0] hover:text-white border border-white/20 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (deleteConfirmId) {
                      deleteProject(deleteConfirmId);
                      setDeleteConfirmId(null);
                    }
                  }}
                  className="px-4 py-2 text-[12px] uppercase tracking-wider bg-white text-black font-semibold hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                >
                  Delete Engagement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
