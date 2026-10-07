/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { TopNav } from './components/TopNav';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { CmsDashboard } from './components/CmsDashboard';
import { ProjectEditorModal } from './components/ProjectEditorModal';
import { AgencyFooter } from './components/AgencyFooter';

const AppContent: React.FC = () => {
  const { activeTab, selectedProjectId, projects } = usePortfolio();

  // If a case study is currently selected for deep inspection
  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#C0C0C0] selection:text-black">
      <TopNav />

      <main className="flex-1">
        {selectedProject ? (
          <CaseStudyDetail project={selectedProject} />
        ) : activeTab === 'cms' ? (
          <CmsDashboard />
        ) : (
          <PortfolioGallery />
        )}
      </main>

      <AgencyFooter />
      <ProjectEditorModal />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}
