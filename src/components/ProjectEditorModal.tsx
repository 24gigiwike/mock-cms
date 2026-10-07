import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Project,
  ServiceCategory,
  IndustrySector,
  ConfidentialityLevel,
  ProjectStatus,
  QuantitativeOutcome,
  StrategicPillar
} from '../types/portfolio';

const AVAILABLE_IMAGES = [
  { label: 'AlphaCore Keynote Stage (Default)', url: '/src/assets/images/project_alphacore_keynote_1791337334045.jpg' },
  { label: 'Lumina Grid Annual Review Deck', url: '/src/assets/images/project_lumina_annual_review_1791337343398.jpg' },
  { label: 'Vanguard Merger Advisory Boards', url: '/src/assets/images/project_vanguard_merger_1791337352848.jpg' },
  { label: 'Executive Boardroom Display Rig', url: '/src/assets/images/hero_executive_briefing_1791337324822.jpg' }
];

const SERVICE_OPTIONS: ServiceCategory[] = [
  'Executive Communications',
  'Presentation Systems',
  'Visual Storytelling',
  'Organizational Storytelling',
  'Capital & IPO'
];

const SECTOR_OPTIONS: IndustrySector[] = [
  'Enterprise AI & Infrastructure',
  'DeepTech & Quantum',
  'Clean Energy & Grid',
  'BioPharma & Genomics',
  'Fintech & Capital Markets',
  'Autonomous Logistics'
];

const CONFIDENTIALITY_OPTIONS: ConfidentialityLevel[] = [
  'Public Case Study',
  'Executive Brief',
  'Under NDA / Embargo',
  'Boardroom Restricted'
];

export const ProjectEditorModal: React.FC = () => {
  const { isEditorOpen, closeEditor, editingProject, saveProject } = usePortfolio();

  // Form State
  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [clientIndustry, setClientIndustry] = useState<IndustrySector>('Enterprise AI & Infrastructure');
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('Executive Communications');
  const [year, setYear] = useState('2026');
  const [confidentiality, setConfidentiality] = useState<ConfidentialityLevel>('Public Case Study');
  const [status, setStatus] = useState<ProjectStatus>('Published');
  const [isFeatured, setIsFeatured] = useState(false);
  const [heroImage, setHeroImage] = useState(AVAILABLE_IMAGES[0].url);
  const [stakeholders, setStakeholders] = useState('');
  const [executiveSummary, setExecutiveSummary] = useState('');

  // Challenge
  const [stakes, setStakes] = useState('');
  const [context, setContext] = useState('');
  const [obstacles, setObstacles] = useState<string[]>(['']);

  // Architecture
  const [frameworkName, setFrameworkName] = useState('');
  const [approach, setApproach] = useState('');
  const [pillars, setPillars] = useState<StrategicPillar[]>([
    { title: 'Core Strategy Moat', description: 'Defensible competitive positioning.' }
  ]);

  // Deliverables
  const [deliverables, setDeliverables] = useState<string[]>(['Executive Briefing Deck']);

  // Outcomes
  const [outcomes, setOutcomes] = useState<QuantitativeOutcome[]>([
    { id: '1', metric: '$500M+', label: 'Capital Catalyzed', timeframe: '30-Day Window', context: 'Lead institutional syndicate commitment' }
  ]);

  // Testimonial
  const [testQuote, setTestQuote] = useState('');
  const [testAuthor, setTestAuthor] = useState('');
  const [testRole, setTestRole] = useState('');
  const [testOrg, setTestOrg] = useState('');

  // Active form tab
  const [activeTab, setActiveTab] = useState<'basics' | 'narrative' | 'metrics' | 'artifacts'>('basics');

  // Populate on open
  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setClient(editingProject.client);
      setClientIndustry(editingProject.clientIndustry);
      setServiceCategory(editingProject.serviceCategory);
      setYear(editingProject.year);
      setConfidentiality(editingProject.confidentiality);
      setStatus(editingProject.status);
      setIsFeatured(editingProject.isFeatured);
      setHeroImage(editingProject.heroImage || AVAILABLE_IMAGES[0].url);
      setStakeholders(editingProject.stakeholders || '');
      setExecutiveSummary(editingProject.executiveSummary || '');

      setStakes(editingProject.theChallenge?.stakes || '');
      setContext(editingProject.theChallenge?.context || '');
      setObstacles(
        editingProject.theChallenge?.obstacles && editingProject.theChallenge.obstacles.length > 0
          ? editingProject.theChallenge.obstacles
          : ['']
      );

      setFrameworkName(editingProject.narrativeArchitecture?.frameworkName || '');
      setApproach(editingProject.narrativeArchitecture?.approach || '');
      setPillars(
        editingProject.narrativeArchitecture?.pillars && editingProject.narrativeArchitecture.pillars.length > 0
          ? editingProject.narrativeArchitecture.pillars
          : [{ title: 'Strategic Pillar 01', description: 'Description' }]
      );

      setDeliverables(editingProject.deliverables || ['Executive Briefing Book']);
      setOutcomes(
        editingProject.quantitativeOutcomes && editingProject.quantitativeOutcomes.length > 0
          ? editingProject.quantitativeOutcomes
          : [{ id: '1', metric: '100%', label: 'Approval', timeframe: 'Q1', context: 'Board consensus' }]
      );

      if (editingProject.testimonial) {
        setTestQuote(editingProject.testimonial.quote);
        setTestAuthor(editingProject.testimonial.author);
        setTestRole(editingProject.testimonial.role);
        setTestOrg(editingProject.testimonial.organization);
      } else {
        setTestQuote('');
        setTestAuthor('');
        setTestRole('');
        setTestOrg('');
      }
    } else {
      // Defaults for brand new project
      setTitle('Global Strategic Narrative & Executive Keynote Architecture');
      setClient('Apex Horizons Group');
      setClientIndustry('Enterprise AI & Infrastructure');
      setServiceCategory('Executive Communications');
      setYear('2026');
      setConfidentiality('Executive Brief');
      setStatus('Published');
      setIsFeatured(false);
      setHeroImage(AVAILABLE_IMAGES[0].url);
      setStakeholders('Chief Executive Officer & Board of Directors');
      setExecutiveSummary(
        'Engineered an authoritative message architecture and presentation system to align executive leadership ahead of institutional capitalization.'
      );
      setStakes('Boardroom needed absolute conviction regarding gross margin defensibility.');
      setContext('Critical eight-week window prior to international investor summit.');
      setObstacles([
        'Complex underlying technology stack obscuring commercial value',
        'Differing priorities among executive stakeholders'
      ]);
      setFrameworkName('The Horizon Value Framework');
      setApproach('Distilled disparate operational streams into three defensible investment pillars.');
      setPillars([
        { title: 'Sovereign Architecture', description: 'Validating proprietary enterprise defensibility.' },
        { title: 'Unit Velocity', description: 'Demonstrating capital-efficient market expansion.' }
      ]);
      setDeliverables(['CEO Keynote Suite', 'Board Confidential Memorandum', 'Executive Slide System']);
      setOutcomes([
        { id: '1', metric: '$240M', label: 'Capital Closed', timeframe: 'First tranche closing', context: 'Oversubscribed institutional round' },
        { id: '2', metric: '98%', label: 'Executive Alignment', timeframe: 'Post-briefing audit', context: 'Unanimous sign-off across global divisions' }
      ]);
      setTestQuote('Detailed brought unmatched clarity and architectural elegance to our leadership narrative.');
      setTestAuthor('Marcus Vance');
      setTestRole('Chief Executive Officer');
      setTestOrg('Apex Horizons');
    }
  }, [editingProject, isEditorOpen]);

  if (!isEditorOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: Partial<Project> = {
      title,
      client,
      clientIndustry,
      serviceCategory,
      year,
      confidentiality,
      status,
      isFeatured,
      heroImage,
      stakeholders,
      executiveSummary,
      theChallenge: {
        stakes,
        context,
        obstacles: obstacles.filter((o) => o.trim().length > 0)
      },
      narrativeArchitecture: {
        frameworkName,
        approach,
        pillars: pillars.filter((p) => p.title.trim().length > 0)
      },
      deliverables: deliverables.filter((d) => d.trim().length > 0),
      quantitativeOutcomes: outcomes.filter((o) => o.metric.trim().length > 0),
      testimonial: testQuote.trim()
        ? {
            quote: testQuote,
            author: testAuthor,
            role: testRole,
            organization: testOrg
          }
        : undefined
    };

    saveProject(payload);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto">
      <div className="bg-[#0A0A0A] border border-white/20 w-full max-w-4xl my-auto flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 md:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-black">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8E8E93] font-mono">
              Detailed CMS · Engagement Editor
            </div>
            <h2 className="text-[20px] font-semibold text-white">
              {editingProject ? `Edit: ${editingProject.client}` : 'Create New Portfolio Engagement'}
            </h2>
          </div>
          <button
            onClick={closeEditor}
            className="text-[14px] text-[#8E8E93] hover:text-white px-2 py-1 transition-colors cursor-pointer"
          >
            ✕ Close
          </button>
        </div>

        {/* Tab navigation inside editor */}
        <div className="flex border-b border-white/10 bg-[#0E0E0E] px-6 md:px-8 overflow-x-auto">
          {(['basics', 'narrative', 'metrics', 'artifacts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 text-[12px] uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 -mb-[1px] ${
                activeTab === tab
                  ? 'border-white text-white font-semibold'
                  : 'border-transparent text-[#8E8E93] hover:text-white'
              }`}
            >
              {tab === 'basics' && '01. Engagement Basics'}
              {tab === 'narrative' && '02. Narrative Architecture'}
              {tab === 'metrics' && '03. Boardroom Outcomes'}
              {tab === 'artifacts' && '04. Visual Artifacts & Proof'}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* TAB 1: BASICS */}
          {activeTab === 'basics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="e.g. AlphaCore Systems"
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[14px] focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Industry Sector *
                  </label>
                  <select
                    value={clientIndustry}
                    onChange={(e) => setClientIndustry(e.target.value as IndustrySector)}
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[14px] focus:outline-none focus:border-white"
                  >
                    {SECTOR_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-black text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  Engagement Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Series C Strategic Narrative & Global Keynote Architecture"
                  className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[14px] focus:outline-none focus:border-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Core Competency
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value as ServiceCategory)}
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[13px] focus:outline-none focus:border-white"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-black text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Confidentiality Tier
                  </label>
                  <select
                    value={confidentiality}
                    onChange={(e) => setConfidentiality(e.target.value as ConfidentialityLevel)}
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[13px] focus:outline-none focus:border-white"
                  >
                    {CONFIDENTIALITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-black text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Engagement Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[13px] font-mono focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Publication Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as ProjectStatus)}
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[13px] focus:outline-none focus:border-white"
                  >
                    <option value="Published">Published (Live in Client Showcase)</option>
                    <option value="Draft">Draft (Internal Only / Embargoed)</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                    Governance / Stakeholders
                  </label>
                  <input
                    type="text"
                    value={stakeholders}
                    onChange={(e) => setStakeholders(e.target.value)}
                    placeholder="e.g. Chief Executive Officer & Board of Directors"
                    className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-white text-[13px] focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 accent-white"
                />
                <label htmlFor="featured-checkbox" className="text-[13px] text-white cursor-pointer">
                  Feature prominently on portfolio showcase
                </label>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  Executive Abstract / Summary *
                </label>
                <textarea
                  rows={3}
                  required
                  value={executiveSummary}
                  onChange={(e) => setExecutiveSummary(e.target.value)}
                  placeholder="High-level synthesis of what Detailed accomplished for this client..."
                  className="w-full bg-[#111111] border border-white/15 p-3.5 text-white text-[14px] leading-relaxed focus:outline-none focus:border-white"
                />
              </div>
            </div>
          )}

          {/* TAB 2: NARRATIVE */}
          {activeTab === 'narrative' && (
            <div className="space-y-6">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  The Boardroom Stakes & Challenge
                </label>
                <textarea
                  rows={3}
                  value={stakes}
                  onChange={(e) => setStakes(e.target.value)}
                  placeholder="What was at risk for the company or leadership team?"
                  className="w-full bg-[#111111] border border-white/15 p-3 text-white text-[14px] focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  Operating Context
                </label>
                <textarea
                  rows={2}
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Timeline, investor climate, market pressures..."
                  className="w-full bg-[#111111] border border-white/15 p-3 text-white text-[14px] focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono">
                    Critical Friction Points (Obstacles)
                  </label>
                  <button
                    type="button"
                    onClick={() => setObstacles([...obstacles, ''])}
                    className="text-[11px] uppercase tracking-wider text-white underline cursor-pointer"
                  >
                    + Add Obstacle
                  </button>
                </div>
                {obstacles.map((obs, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#8E8E93]">0{idx + 1}.</span>
                    <input
                      type="text"
                      value={obs}
                      onChange={(e) => {
                        const next = [...obstacles];
                        next[idx] = e.target.value;
                        setObstacles(next);
                      }}
                      className="flex-1 bg-[#111111] border border-white/15 px-3 py-2 text-white text-[13px] focus:outline-none focus:border-white"
                    />
                    {obstacles.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setObstacles(obstacles.filter((_, i) => i !== idx))}
                        className="text-[#8E8E93] hover:text-white px-2 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  Framework Name
                </label>
                <input
                  type="text"
                  value={frameworkName}
                  onChange={(e) => setFrameworkName(e.target.value)}
                  placeholder="e.g. The Cognitive Infrastructure Framework (CIF-3)"
                  className="w-full bg-[#111111] border border-white/15 px-3 py-2 text-white text-[14px] focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  Narrative Approach
                </label>
                <textarea
                  rows={2}
                  value={approach}
                  onChange={(e) => setApproach(e.target.value)}
                  placeholder="How Detailed structured the solution..."
                  className="w-full bg-[#111111] border border-white/15 p-3 text-white text-[14px] focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono">
                    Strategic Pillars
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setPillars([
                        ...pillars,
                        { title: `Pillar 0${pillars.length + 1}`, description: '' }
                      ])
                    }
                    className="text-[11px] uppercase tracking-wider text-white underline cursor-pointer"
                  >
                    + Add Pillar
                  </button>
                </div>
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="p-3 bg-[#111111] border border-white/10 mb-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#8E8E93]">PILLAR {idx + 1}</span>
                      {pillars.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setPillars(pillars.filter((_, i) => i !== idx))}
                          className="text-[11px] text-[#8E8E93] hover:text-white cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Pillar Title"
                      value={pillar.title}
                      onChange={(e) => {
                        const next = [...pillars];
                        next[idx].title = e.target.value;
                        setPillars(next);
                      }}
                      className="w-full bg-black border border-white/15 px-3 py-1.5 text-white text-[13px] font-medium focus:outline-none focus:border-white"
                    />
                    <input
                      type="text"
                      placeholder="Pillar Description"
                      value={pillar.description}
                      onChange={(e) => {
                        const next = [...pillars];
                        next[idx].description = e.target.value;
                        setPillars(next);
                      }}
                      className="w-full bg-black border border-white/15 px-3 py-1.5 text-[#C0C0C0] text-[12px] focus:outline-none focus:border-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: METRICS & DELIVERABLES */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono">
                    Quantitative Boardroom Outcomes
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setOutcomes([
                        ...outcomes,
                        {
                          id: Date.now().toString(),
                          metric: '100%',
                          label: 'Consensus',
                          timeframe: 'Immediate',
                          context: 'Ratified by board'
                        }
                      ])
                    }
                    className="text-[11px] uppercase tracking-wider text-white underline cursor-pointer"
                  >
                    + Add Outcome Metric
                  </button>
                </div>

                {outcomes.map((outcome, idx) => (
                  <div key={outcome.id || idx} className="p-4 bg-[#111111] border border-white/10 mb-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#8E8E93]">METRIC 0{idx + 1}</span>
                      {outcomes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setOutcomes(outcomes.filter((_, i) => i !== idx))}
                          className="text-[11px] text-[#8E8E93] hover:text-white cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[10px] text-[#8E8E93] font-mono">Figure/Value</label>
                        <input
                          type="text"
                          placeholder="$380M or +42%"
                          value={outcome.metric}
                          onChange={(e) => {
                            const next = [...outcomes];
                            next[idx].metric = e.target.value;
                            setOutcomes(next);
                          }}
                          className="w-full bg-black border border-white/15 px-3 py-1.5 text-white font-semibold tabular-nums text-[13px] focus:outline-none focus:border-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#8E8E93] font-mono">Short Label</label>
                        <input
                          type="text"
                          placeholder="Capital Closed"
                          value={outcome.label}
                          onChange={(e) => {
                            const next = [...outcomes];
                            next[idx].label = e.target.value;
                            setOutcomes(next);
                          }}
                          className="w-full bg-black border border-white/15 px-3 py-1.5 text-white text-[13px] focus:outline-none focus:border-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#8E8E93] font-mono">Timeframe / Window</label>
                        <input
                          type="text"
                          placeholder="In 18 days"
                          value={outcome.timeframe}
                          onChange={(e) => {
                            const next = [...outcomes];
                            next[idx].timeframe = e.target.value;
                            setOutcomes(next);
                          }}
                          className="w-full bg-black border border-white/15 px-3 py-1.5 text-white text-[13px] focus:outline-none focus:border-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] text-[#8E8E93] font-mono">Auditable Context</label>
                      <input
                        type="text"
                        placeholder="e.g. Led by premier institutional syndicate"
                        value={outcome.context}
                        onChange={(e) => {
                          const next = [...outcomes];
                          next[idx].context = e.target.value;
                          setOutcomes(next);
                        }}
                        className="w-full bg-black border border-white/15 px-3 py-1.5 text-[#C0C0C0] text-[12px] focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono">
                    Core Deliverables
                  </label>
                  <button
                    type="button"
                    onClick={() => setDeliverables([...deliverables, ''])}
                    className="text-[11px] uppercase tracking-wider text-white underline cursor-pointer"
                  >
                    + Add Deliverable
                  </button>
                </div>
                {deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#8E8E93]">0{idx + 1}.</span>
                    <input
                      type="text"
                      value={deliv}
                      onChange={(e) => {
                        const next = [...deliverables];
                        next[idx] = e.target.value;
                        setDeliverables(next);
                      }}
                      className="flex-1 bg-[#111111] border border-white/15 px-3 py-2 text-white text-[13px] focus:outline-none focus:border-white"
                    />
                    {deliverables.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setDeliverables(deliverables.filter((_, i) => i !== idx))}
                        className="text-[#8E8E93] hover:text-white px-2 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ARTIFACTS & PROOF */}
          {activeTab === 'artifacts' && (
            <div className="space-y-6">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono mb-2">
                  Select Hero Visual Artifact
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {AVAILABLE_IMAGES.map((img) => (
                    <div
                      key={img.url}
                      onClick={() => setHeroImage(img.url)}
                      className={`p-3 border cursor-pointer transition-colors ${
                        heroImage === img.url
                          ? 'border-white bg-[#141414]'
                          : 'border-white/15 bg-black hover:border-white/40'
                      }`}
                    >
                      <div className="aspect-[16/9] w-full bg-[#111111] overflow-hidden mb-2">
                        <img
                          src={img.url}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-[11px] text-white font-medium truncate">
                        {img.label}
                      </div>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or custom visual path / URL"
                  value={heroImage}
                  onChange={(e) => setHeroImage(e.target.value)}
                  className="w-full bg-[#111111] border border-white/15 px-3 py-2 text-white text-[12px] font-mono focus:outline-none focus:border-white"
                />
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#8E8E93] font-mono">
                  Executive Endorsement & Testimonial
                </div>
                <div>
                  <label className="block text-[10px] text-[#8E8E93] font-mono mb-1">
                    Verbatim Quote
                  </label>
                  <textarea
                    rows={3}
                    value={testQuote}
                    onChange={(e) => setTestQuote(e.target.value)}
                    placeholder="e.g. Detailed transformed our unwieldy technical deck into a surgical board narrative..."
                    className="w-full bg-[#111111] border border-white/15 p-3 text-white text-[13px] italic focus:outline-none focus:border-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] text-[#8E8E93] font-mono">Author Name</label>
                    <input
                      type="text"
                      placeholder="Marcus Vance"
                      value={testAuthor}
                      onChange={(e) => setTestAuthor(e.target.value)}
                      className="w-full bg-[#111111] border border-white/15 px-3 py-2 text-white text-[13px] focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#8E8E93] font-mono">Executive Role</label>
                    <input
                      type="text"
                      placeholder="Chief Executive Officer"
                      value={testRole}
                      onChange={(e) => setTestRole(e.target.value)}
                      className="w-full bg-[#111111] border border-white/15 px-3 py-2 text-white text-[13px] focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#8E8E93] font-mono">Organization</label>
                    <input
                      type="text"
                      placeholder="AlphaCore Systems"
                      value={testOrg}
                      onChange={(e) => setTestOrg(e.target.value)}
                      className="w-full bg-[#111111] border border-white/15 px-3 py-2 text-white text-[13px] focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={closeEditor}
              className="px-5 py-2.5 text-[12px] uppercase tracking-[0.15em] text-[#C0C0C0] hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 py-2.5 text-[12px] uppercase tracking-[0.15em] hover:bg-[#C0C0C0] transition-colors cursor-pointer"
            >
              Save Engagement to CMS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
