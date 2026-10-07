import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, ServiceCategory, IndustrySector } from '../types/portfolio';
import { INITIAL_PROJECTS } from '../data/mockProjects';

interface PortfolioContextType {
  projects: Project[];
  activeTab: 'showcase' | 'cms';
  setActiveTab: (tab: 'showcase' | 'cms') => void;
  selectedProjectId: string | null;
  selectProject: (id: string | null) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  filterSector: string;
  setFilterSector: (sector: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  isEditorOpen: boolean;
  editingProject: Project | null;
  openEditor: (project?: Project | null) => void;
  closeEditor: () => void;
  saveProject: (projectData: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  toggleFeatured: (id: string) => void;
  toggleStatus: (id: string) => void;
  resetToDefault: () => void;
}

const STORAGE_KEY = 'detailed_group_portfolio_v1';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROJECTS;
  });

  const [activeTab, setActiveTab] = useState<'showcase' | 'cms'>('showcase');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterSector, setFilterSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [projects]);

  const selectProject = (id: string | null) => {
    setSelectedProjectId(id);
    if (id) {
      // Increment view count quietly
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, viewCount: (p.viewCount || 0) + 1 } : p))
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openEditor = (project?: Project | null) => {
    setEditingProject(project || null);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setEditingProject(null);
  };

  const saveProject = (projectData: Partial<Project>) => {
    const today = new Date().toISOString().split('T')[0];

    if (editingProject) {
      // Update existing
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProject.id
            ? ({
                ...p,
                ...projectData,
                lastModified: today
              } as Project)
            : p
        )
      );
    } else {
      // Create new
      const newId = `proj-${Date.now().toString(36)}`;
      const newSlug = (projectData.title || 'new-case-study')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const newProj: Project = {
        id: newId,
        slug: newSlug,
        title: projectData.title || 'Untitled Executive Engagement',
        client: projectData.client || 'Confidential Client',
        clientIndustry: (projectData.clientIndustry as IndustrySector) || 'Enterprise AI & Infrastructure',
        serviceCategory: (projectData.serviceCategory as ServiceCategory) || 'Executive Communications',
        year: projectData.year || new Date().getFullYear().toString(),
        confidentiality: projectData.confidentiality || 'Executive Brief',
        status: projectData.status || 'Draft',
        isFeatured: projectData.isFeatured || false,
        order: projects.length + 1,
        heroImage: projectData.heroImage || '/src/assets/images/hero_executive_briefing_1791337324822.jpg',
        deliverables: projectData.deliverables || ['Executive Briefing Book', 'Keynote System'],
        stakeholders: projectData.stakeholders || 'Chief Executive Officer & Board',
        executiveSummary: projectData.executiveSummary || 'Executive strategic narrative and presentation system.',
        theChallenge: projectData.theChallenge || {
          stakes: 'High-stakes boardroom alignment on strategic growth thesis.',
          context: 'Critical milestone before institutional capitalization.',
          obstacles: ['Complex market dynamics', 'Stakeholder narrative divergence']
        },
        narrativeArchitecture: projectData.narrativeArchitecture || {
          frameworkName: 'The Strategic Alignment Matrix',
          approach: 'Distilled strategic objectives into core pillars for executive clarity.',
          pillars: [
            { title: 'Core Value Catalyst', description: 'Aligning operational telemetry with leadership vision.' },
            { title: 'Defensible Market Moat', description: 'Demonstrating sustainable competitive insulation.' }
          ]
        },
        quantitativeOutcomes: projectData.quantitativeOutcomes || [
          {
            id: 'qo-new-1',
            metric: '100%',
            label: 'Board Alignment',
            timeframe: 'Immediate session conclusion',
            context: 'Unanimous ratification of proposed strategic initiative'
          }
        ],
        slideArtifacts: projectData.slideArtifacts || [
          {
            id: 'sa-new-1',
            title: 'Executive Framework Slide',
            category: 'Strategic Visual System',
            description: 'Minimalist monochrome layout detailing enterprise milestones.',
            keyTakeaway: 'Immediate leadership clarity.',
            imageUrl: projectData.heroImage || '/src/assets/images/hero_executive_briefing_1791337324822.jpg'
          }
        ],
        testimonial: projectData.testimonial || {
          quote: 'Detailed brought immense precision to our critical narrative.',
          author: 'Executive Leadership',
          role: 'Managing Director',
          organization: projectData.client || 'Client Organization'
        },
        viewCount: 1,
        lastModified: today
      };

      setProjects((prev) => [newProj, ...prev]);
    }

    closeEditor();
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    }
  };

  const duplicateProject = (id: string) => {
    const existing = projects.find((p) => p.id === id);
    if (!existing) return;

    const duplicated: Project = {
      ...existing,
      id: `proj-${Date.now().toString(36)}`,
      title: `${existing.title} (Copy)`,
      slug: `${existing.slug}-copy`,
      status: 'Draft',
      isFeatured: false,
      lastModified: new Date().toISOString().split('T')[0],
      viewCount: 0
    };

    setProjects((prev) => [duplicated, ...prev]);
  };

  const toggleFeatured = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p))
    );
  };

  const toggleStatus = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const nextStatus = p.status === 'Published' ? 'Draft' : 'Published';
        return { ...p, status: nextStatus };
      })
    );
  };

  const resetToDefault = () => {
    setProjects(INITIAL_PROJECTS);
    localStorage.removeItem(STORAGE_KEY);
    setSelectedProjectId(null);
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        activeTab,
        setActiveTab,
        selectedProjectId,
        selectProject,
        filterCategory,
        setFilterCategory,
        filterSector,
        setFilterSector,
        searchQuery,
        setSearchQuery,
        viewMode,
        setViewMode,
        isEditorOpen,
        editingProject,
        openEditor,
        closeEditor,
        saveProject,
        deleteProject,
        duplicateProject,
        toggleFeatured,
        toggleStatus,
        resetToDefault
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
