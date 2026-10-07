import { Project } from '../types/portfolio';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    slug: 'alphacore-systems-series-c-keynote',
    title: 'Series C Strategic Narrative & Global Keynote Architecture',
    client: 'AlphaCore Systems',
    clientIndustry: 'Enterprise AI & Infrastructure',
    serviceCategory: 'Executive Communications',
    year: '2026',
    confidentiality: 'Public Case Study',
    status: 'Published',
    isFeatured: true,
    order: 1,
    heroImage: '/src/assets/images/project_alphacore_keynote_1791337334045.jpg',
    deliverables: [
      'CEO Keynote Architecture',
      'Confidential Investor Deck (48 Slides)',
      'Product Reveal Narrative System',
      'Board Memorandum & Executive Brief'
    ],
    stakeholders: 'Chief Executive Officer & Lead Institutional Investors',
    executiveSummary:
      'AlphaCore required a unified message architecture to reposition from specialized model training infrastructure to an enterprise-grade AI operating platform ahead of their $380M Series C round.',
    theChallenge: {
      stakes:
        'AlphaCore faced high skepticism from sovereign funds and non-technical board members who viewed infrastructure as commoditized compute rather than defensible enterprise software.',
      context:
        'The company had eight weeks before the annual flagship keynote in San Francisco, with term sheets contingent on convincing investors of sustainable gross margins.',
      obstacles: [
        'Overly technical engineering documentation obscuring value proposition',
        'Fragmented narrative across three newly acquired subsidiary teams',
        'Direct pressure from incumbent cloud providers threatening market share'
      ]
    },
    narrativeArchitecture: {
      approach:
        'We deconstructed 240 pages of internal technical roadmaps and distilled them into a three-pillar narrative framework centered on "Autonomous Enterprise Cognition".',
      frameworkName: 'The Cognitive Infrastructure Framework (CIF-3)',
      pillars: [
        {
          title: 'Defensible Data Moats',
          description: 'Reframing hardware scale into sovereign enterprise knowledge graphs.'
        },
        {
          title: 'Deterministic Workflows',
          description: 'Demonstrating 99.99% reproducibility for Fortune 100 compliance requirements.'
        },
        {
          title: 'Capital-Efficient Scaling',
          description: 'Validating a 4.2x reduction in marginal compute expenditure per inference.'
        }
      ]
    },
    quantitativeOutcomes: [
      {
        id: 'qo-1',
        metric: '$380M',
        label: 'Capital Secured',
        timeframe: 'Over-subscribed in 18 days',
        context: 'Led by premier sovereign wealth and tier-1 venture syndicates'
      },
      {
        id: 'qo-2',
        metric: '94%',
        label: 'Partner Alignment Score',
        timeframe: 'Post-Keynote Stakeholder Audit',
        context: 'Measured across 2,400 global enterprise attendees'
      },
      {
        id: 'qo-3',
        metric: '4.8x',
        label: 'Pipeline Acceleration',
        timeframe: 'First 90 days post-launch',
        context: 'Enterprise RFP inbound volume exceeding historical annual quota'
      }
    ],
    slideArtifacts: [
      {
        id: 'sa-1',
        title: 'The Macro Inflection Slide',
        category: 'Strategic Framing',
        description:
          'Stark monochrome dual-axis visualization mapping the transition from experimental AI pilots to mission-critical operational fabric.',
        keyTakeaway: 'Establishes why legacy infrastructure cannot sustain continuous autonomous agents.',
        imageUrl: '/src/assets/images/project_alphacore_keynote_1791337334045.jpg'
      },
      {
        id: 'sa-2',
        title: 'Sovereign Architecture Blueprint',
        category: 'System Schematic',
        description:
          'Architectural layer breakdown utilizing crisp hairline dividers and monospace metadata to demonstrate security boundaries.',
        keyTakeaway: 'Proves client data isolation without sacrificing multi-tenant compute velocity.',
        imageUrl: '/src/assets/images/hero_executive_briefing_1791337324822.jpg'
      },
      {
        id: 'sa-3',
        title: 'Unit Economics Cohort Waterfall',
        category: 'Financial Model Presentation',
        description:
          'Tabular numeral ledger contrasting traditional cloud margin decay with AlphaCore’s proprietary network efficiency.',
        keyTakeaway: 'Validates 78% steady-state software gross margins to prospective lead investors.',
        imageUrl: '/src/assets/images/project_lumina_annual_review_1791337343398.jpg'
      }
    ],
    testimonial: {
      quote:
        'Detailed transformed our unwieldy technical deck into a surgical, board-level narrative. Our lead investor remarked that it was the clearest articulation of enterprise AI defensibility they had seen all year.',
      author: 'Marcus Vance',
      role: 'Founder & Chief Executive Officer',
      organization: 'AlphaCore Systems'
    },
    viewCount: 1420,
    lastModified: '2026-03-28'
  },
  {
    id: 'proj-002',
    slug: 'lumina-grid-capital-transition-suite',
    title: 'Clean Grid Transition & $1.2B Infrastructure Board Suite',
    client: 'Lumina Grid Holdings',
    clientIndustry: 'Clean Energy & Grid',
    serviceCategory: 'Presentation Systems',
    year: '2026',
    confidentiality: 'Executive Brief',
    status: 'Published',
    isFeatured: true,
    order: 2,
    heroImage: '/src/assets/images/project_lumina_annual_review_1791337343398.jpg',
    deliverables: [
      'Board of Directors Master Slide Suite',
      'Institutional Investor Briefing Kit',
      'Capital Allocation Decision Tree',
      'Executive Financial Modeling Templates'
    ],
    stakeholders: 'Chairman of the Board, Chief Financial Officer & Audit Committee',
    executiveSummary:
      'Engineered a high-density presentation system enabling Lumina Grid’s leadership to obtain unanimous board sign-off on a multi-year $1.2B grid decarbonization and battery storage mandate.',
    theChallenge: {
      stakes:
        'A fractured board of 14 institutional directors held conflicting viewpoints on risk exposure, regional grid capacity, and payback timelines for high-voltage infrastructure.',
      context:
        'The quarterly review had collapsed twice previously due to dense, spreadsheet-heavy presentations that failed to isolate capital risks.',
      obstacles: [
        'Over 300 slides distributed across 5 disparate engineering committees',
        'Regulatory ambiguity across three inter-state transmission zones',
        'Investor scrutiny on near-term dividend yield dilution'
      ]
    },
    narrativeArchitecture: {
      approach:
        'Constructed a unified, modular presentation design system with standardized data cards, clear decision milestones, and strict hierarchical typography.',
      frameworkName: 'The Capital Horizon Architecture (CHA)',
      pillars: [
        {
          title: 'Decarbonization Delta',
          description: 'Direct correlation between capacity retirement and battery dispatch revenue.'
        },
        {
          title: 'Regulatory De-Risking',
          description: 'Visualizing state-level tariff approvals against federal grant tranches.'
        },
        {
          title: 'Dividend Preservation Matrix',
          description: 'Proving dividend stability across conservative, baseline, and aggressive models.'
        }
      ]
    },
    quantitativeOutcomes: [
      {
        id: 'qo-4',
        metric: '$1.2B',
        label: 'Mandate Approved',
        timeframe: 'Unanimous First-Vote Consensus',
        context: '14 of 14 board members approved capital deployment program'
      },
      {
        id: 'qo-5',
        metric: '-65%',
        label: 'Board Meeting Duration',
        timeframe: 'Q1 Extraordinary Session',
        context: 'Reduced discussion time from 7 hours to 2.5 hours of high-value deliberation'
      },
      {
        id: 'qo-6',
        metric: '100%',
        label: 'Executive Template Adoption',
        timeframe: 'Across 6 Global Business Units',
        context: 'Permanent standard adopted for all quarterly division reviews'
      }
    ],
    slideArtifacts: [
      {
        id: 'sa-4',
        title: 'Capital Allocation Priority Matrix',
        category: 'Governance & Strategy',
        description:
          'High-contrast layout contrasting legacy thermal asset wind-down with modern high-capacity storage deployment.',
        keyTakeaway: 'Removes emotional attachment to legacy plants by framing operational cash flows objectively.',
        imageUrl: '/src/assets/images/project_lumina_annual_review_1791337343398.jpg'
      },
      {
        id: 'sa-5',
        title: 'Interconnection Queue Velocity Index',
        category: 'Operational Throughput',
        description:
          'Precision hairline diagram highlighting bottleneck clearance mechanisms across regional ISO operators.',
        keyTakeaway: 'Proves Lumina can deploy 18 months faster than municipal utility competitors.',
        imageUrl: '/src/assets/images/hero_executive_briefing_1791337324822.jpg'
      }
    ],
    testimonial: {
      quote:
        'Detailed stripped away the fog. For the first time in my seven years as Board Chair, we completed our capital allocation meeting ahead of schedule with zero ambiguity on next-quarter deliverables.',
      author: 'Eleanor Sterling',
      role: 'Board Chair & Lead Independent Director',
      organization: 'Lumina Grid Holdings'
    },
    viewCount: 1180,
    lastModified: '2026-03-22'
  },
  {
    id: 'proj-003',
    slug: 'vanguard-bio-acquisition-defense',
    title: '$3.2B Acquisition Defense & Shareholder Briefing Architecture',
    client: 'Vanguard Biotherapeutics',
    clientIndustry: 'BioPharma & Genomics',
    serviceCategory: 'Visual Storytelling',
    year: '2025',
    confidentiality: 'Under NDA / Embargo',
    status: 'Published',
    isFeatured: true,
    order: 3,
    heroImage: '/src/assets/images/project_vanguard_merger_1791337352848.jpg',
    deliverables: [
      'Hostile Takeover Defense White Book',
      'Clinical Pipeline Valuation System',
      'Institutional Shareholder Roadshow Deck',
      'Special Committee Executive Brief'
    ],
    stakeholders: 'CEO, Special Committee of the Board & Morgan Stanley Advisory',
    executiveSummary:
      'Formulated an emergency visual storytelling defense for a Nasdaq-listed clinical biotech under unsolicited tender offer, demonstrating standalone pipeline upside exceeding $6.5B.',
    theChallenge: {
      stakes:
        'An activist hedge fund partnered with a multinational pharmaceutical group attempted an opportunistic takeover during a temporary market downturn.',
      context:
        'The executive team had 12 business days to present an unassailable valuation thesis to institutional proxy advisers including ISS and Glass Lewis.',
      obstacles: [
        'Complex Phase III oncology readout data misunderstood by financial analysts',
        'Aggressive media narrative framing the management team as resistant to shareholder value',
        'High turnover among retail and secondary fund holders'
      ]
    },
    narrativeArchitecture: {
      approach:
        'Translated 1,200 pages of biological assay tables and patient cohort studies into clean, authoritative visual frameworks highlighting intellectual property exclusivity through 2038.',
      frameworkName: 'The Biological Moat & Pipeline Valuation Matrix',
      pillars: [
        {
          title: 'Intrinsic Compound Value',
          description: 'Isolating probability-weighted clinical success milestones.'
        },
        {
          title: 'Commercial Monopolies',
          description: 'Visualizing global patent expiry timelines across 26 jurisdictions.'
        },
        {
          title: 'Standalone Operating Leverage',
          description: 'Demonstrating internal manufacturing readiness without external dilution.'
        }
      ]
    },
    quantitativeOutcomes: [
      {
        id: 'qo-7',
        metric: '+42%',
        label: 'Bid Premium Revaluation',
        timeframe: 'Final Negotiated Acquisition Floor',
        context: 'Acquiring consortium raised tender from $28.50 to $40.50 per share'
      },
      {
        id: 'qo-8',
        metric: '88%',
        label: 'Institutional Shareholder Backing',
        timeframe: 'Proxy Vote Outcome',
        context: 'Key institutional holders voted with management to reject hostile discount'
      },
      {
        id: 'qo-9',
        metric: '12 Days',
        label: 'Turnaround Execution',
        timeframe: 'Crisis Advisory Delivery',
        context: 'Complete delivery of 84 strategic narrative assets under strict embargo'
      }
    ],
    slideArtifacts: [
      {
        id: 'sa-6',
        title: 'Phase III Commercialization Readiness',
        category: 'Clinical Strategy',
        description:
          'Stark monochrome comparison of clinical progression timelines showing Vanguard outpacing standard pharma benchmarks.',
        keyTakeaway: 'Demonstrates immediate FDA approval pathway requiring zero external equity injection.',
        imageUrl: '/src/assets/images/project_vanguard_merger_1791337352848.jpg'
      },
      {
        id: 'sa-7',
        title: 'Valuation Gap Analysis',
        category: 'Financial Defense',
        description:
          'Precision bar-and-whisker financial charts benchmarking enterprise value against recent peer oncology transactions.',
        keyTakeaway: 'Exposes predator bid as a 38% discount to intrinsic net present value.',
        imageUrl: '/src/assets/images/hero_executive_briefing_1791337324822.jpg'
      }
    ],
    testimonial: {
      quote:
        'Detailed operated with military speed and peerless taste under intense crisis pressure. Their visual architecture gave our advisory team the sharpest weapon in the boardroom.',
      author: 'Dr. Henrik Lindqvist',
      role: 'Chief Executive Officer',
      organization: 'Vanguard Biotherapeutics'
    },
    viewCount: 960,
    lastModified: '2026-03-15'
  },
  {
    id: 'proj-004',
    slug: 'helios-logistics-ipo-roadshow',
    title: 'Autonomous Freight Network NYSE IPO Roadshow Suite',
    client: 'Helios Autonomous Logistics',
    clientIndustry: 'Autonomous Logistics',
    serviceCategory: 'Capital & IPO',
    year: '2025',
    confidentiality: 'Public Case Study',
    status: 'Published',
    isFeatured: false,
    order: 4,
    heroImage: '/src/assets/images/hero_executive_briefing_1791337324822.jpg',
    deliverables: [
      'NYSE Testing-the-Waters (TTW) Slide Deck',
      'Anchor Investor 1-on-1 Narrative Guide',
      'Video Script & Visual Telemetry Graphics',
      'Retail Roadshow Presentation Suite'
    ],
    stakeholders: 'Founders, CFO, Lead Bookrunners (Goldman Sachs & J.P. Morgan)',
    executiveSummary:
      'Created the comprehensive institutional roadshow visual system for Helios Logistics’ $740M initial public offering on the New York Stock Exchange.',
    theChallenge: {
      stakes:
        'Helios needed to distinguish its level-4 autonomous long-haul trucking software from struggling consumer robo-taxi initiatives and hardware-heavy robotics companies.',
      context:
        'Market sentiment in tech listings was cautious, demanding rigorous evidence of route profitability, freight density, and customer renewal rates.',
      obstacles: [
        'Analyst skepticism around regulatory disengagement rates',
        'Complex freight brokerage unit economics',
        'Need to conduct 60 investor meetings across 10 business days'
      ]
    },
    narrativeArchitecture: {
      approach:
        'Structured the narrative around "The Freight Corridor Monopoly" — showing how Helios dominates high-density interstate lanes with unmatched freight margins.',
      frameworkName: 'The Corridor Flywheel System',
      pillars: [
        {
          title: 'Density Over Breadth',
          description: 'Focusing on 6 dedicated sunbelt corridors with 99.4% autonomous uptime.'
        },
        {
          title: 'Terminal Integration',
          description: 'Seamless human-driver handoffs at interstate transfer hubs.'
        },
        {
          title: 'Contracted Volume Moat',
          description: 'Multi-year take-or-pay agreements with 14 Fortune 50 shippers.'
        }
      ]
    },
    quantitativeOutcomes: [
      {
        id: 'qo-10',
        metric: '$740M',
        label: 'Gross Proceeds Raised',
        timeframe: 'NYSE Debut at Top of Range',
        context: 'Priced at $24.00, above the midpoint of the indicative range'
      },
      {
        id: 'qo-11',
        metric: '14.2x',
        label: 'Institutional Book Over-subscription',
        timeframe: 'Final Allocation Book',
        context: 'Attracted premier long-only sovereign and mutual fund mandates'
      },
      {
        id: 'qo-12',
        metric: '60/60',
        label: 'Meetings Executed Flawlessly',
        timeframe: '10-Day Roadshow Tour',
        context: 'Zero narrative discrepancies across global underwriter syndicates'
      }
    ],
    slideArtifacts: [
      {
        id: 'sa-8',
        title: 'Sunbelt Corridor Density Topology',
        category: 'Geographic Infrastructure',
        description:
          'Dark-slate map graphic illustrating autonomous lane utilization with real-time freight pricing markers.',
        keyTakeaway: 'Shows clear barrier to entry in major freight arteries.',
        imageUrl: '/src/assets/images/hero_executive_briefing_1791337324822.jpg'
      }
    ],
    testimonial: {
      quote:
        'The roadshow presentation was hailed by our bookrunners as the cleanest, most persuasive listing deck of the quarter. Detailed made our operational complexity feel inevitable.',
      author: 'Siddharth Rao',
      role: 'Chief Financial Officer',
      organization: 'Helios Autonomous Logistics'
    },
    viewCount: 840,
    lastModified: '2026-02-19'
  },
  {
    id: 'proj-005',
    slug: 'aethelgard-dynamics-workforce-realignment',
    title: 'Global Enterprise Realignment & Vision 2030 Architecture',
    client: 'Aethelgard Dynamics',
    clientIndustry: 'Enterprise AI & Infrastructure',
    serviceCategory: 'Organizational Storytelling',
    year: '2025',
    confidentiality: 'Boardroom Restricted',
    status: 'Published',
    isFeatured: false,
    order: 5,
    heroImage: '/src/assets/images/project_alphacore_keynote_1791337334045.jpg',
    deliverables: [
      'Global Town Hall Keynote Suite',
      'Leadership Cascade Playbook (12 Modules)',
      'Digital Town Square Visual Artifacts',
      'Change Management Metric Dashboard'
    ],
    stakeholders: 'Global Chief Executive Officer & Executive Committee (ExCo)',
    executiveSummary:
      'Orchestrated a cultural and strategic storytelling framework for a 48,000-person global industrial engineering conglomerate restructuring around automated manufacturing.',
    theChallenge: {
      stakes:
        'Rumors of layoffs and divisional splits threatened executive retention across Europe and Asia, stalling mission-critical R&D initiatives.',
      context:
        'Leadership needed to communicate a comprehensive 5-year modernization roadmap without demoralizing plant managers or sparking labor union resistance.',
      obstacles: [
        'Seven legacy operational cultures resulting from past decades of M&A',
        'Linguistic and cultural dissonance across 32 regional operating offices',
        'Past failed internal communications campaigns that bred cynicism'
      ]
    },
    narrativeArchitecture: {
      approach:
        'Pivoted the corporate conversation from "divisional restructuring" to "shared engineering heritage and autonomy" — anchoring every employee in tangible future opportunities.',
      frameworkName: 'The Heritage to Horizon Narrative (H2H)',
      pillars: [
        {
          title: 'Honoring Legacy Craft',
          description: 'Validating 60 years of precision mechanical engineering.'
        },
        {
          title: 'The Digital Co-Pilot',
          description: 'Positioning software automation as an amplifier of human mastery.'
        },
        {
          title: 'Decentralized Mandates',
          description: 'Empowering plant leaders with local decision rights.'
        }
      ]
    },
    quantitativeOutcomes: [
      {
        id: 'qo-13',
        metric: '92%',
        label: 'Internal Town Hall Sentiment',
        timeframe: 'Global Post-Event Survey',
        context: 'Highest recorded internal leadership approval in corporate history'
      },
      {
        id: 'qo-14',
        metric: '<1.2%',
        label: 'Unplanned Executive Attrition',
        timeframe: '6-Month Post-Announcement',
        context: 'Retained 99 of top 100 key engineering architects'
      }
    ],
    slideArtifacts: [
      {
        id: 'sa-9',
        title: 'The 2030 Operational Horizon Diagram',
        category: 'Organizational Architecture',
        description:
          'Clear circular systemic graphic detailing how factory-floor telemetry feeds global algorithmic R&D centers.',
        keyTakeaway: 'Illustrates every employee’s direct line of sight to corporate transformation.',
        imageUrl: '/src/assets/images/project_alphacore_keynote_1791337334045.jpg'
      }
    ],
    testimonial: {
      quote:
        'Detailed understood the human psychology behind large-scale corporate pivots. They gave our executive committee a voice that resonated simultaneously in Munich, Tokyo, and Chicago.',
      author: 'Klaus von Bergmann',
      role: 'Executive Vice President, Chief People Officer',
      organization: 'Aethelgard Dynamics'
    },
    viewCount: 710,
    lastModified: '2026-01-14'
  },
  {
    id: 'proj-006',
    slug: 'monarch-financial-investor-day',
    title: 'Tier-1 Institutional Investor Day Visual Architecture',
    client: 'Monarch Financial Group',
    clientIndustry: 'Fintech & Capital Markets',
    serviceCategory: 'Presentation Systems',
    year: '2025',
    confidentiality: 'Executive Brief',
    status: 'Published',
    isFeatured: false,
    order: 6,
    heroImage: '/src/assets/images/project_lumina_annual_review_1791337343398.jpg',
    deliverables: [
      'Investor Day Plenary Presentation (110 Slides)',
      'Segment Deep-Dive Breakout Suites',
      'Financial Target Disclosures System',
      'Real-Time Q&A Digital Presentation Rig'
    ],
    stakeholders: 'CEO, CFO & Head of Investor Relations',
    executiveSummary:
      'Designed the complete visual communication architecture for Monarch Financial’s triennial Investor Day in New York, clarifying digital banking unit profitability.',
    theChallenge: {
      stakes:
        'Monarch was trading at a persistent 25% discount to its peer index due to analyst confusion over consumer credit provisions versus high-margin wealth management fees.',
      context:
        'The executive team had one morning in front of 200 sell-side and buy-side analysts to re-rate the stock multiple.',
      obstacles: [
        'Conflicting accounting metrics across credit risk modeling',
        'Complex treasury yield assumptions across shifting rate environments',
        'Tight regulatory restrictions regarding non-GAAP reconciliations'
      ]
    },
    narrativeArchitecture: {
      approach:
        'Engineered an unyielding visual layout hierarchy where GAAP and adjusted figures were presented with utmost clarity, using tabular formatting and bold focal metrics.',
      frameworkName: 'The Monarch Transparency Engine (MTE)',
      pillars: [
        {
          title: 'Fee-Based Compounding',
          description: 'Highlighting 68% recurring revenue from private wealth accounts.'
        },
        {
          title: 'Underwriting Precision',
          description: 'Showing net charge-offs consistently 40 bps below sector median.'
        },
        {
          title: 'Operating Leverage Target',
          description: 'Clear road to sub-52% efficiency ratio by 2028.'
        }
      ]
    },
    quantitativeOutcomes: [
      {
        id: 'qo-15',
        metric: '+19%',
        label: 'Stock Re-Rating Post-Event',
        timeframe: '30-Day Window Post Investor Day',
        context: 'Multiple multiple expansion closing the historical discount to peers'
      },
      {
        id: 'qo-16',
        metric: '7 Upgrades',
        label: 'Sell-Side Equity Analyst Upgrades',
        timeframe: 'Immediate 48-Hour Research Cycle',
        context: 'Major investment banks cited unprecedented management clarity and transparency'
      }
    ],
    slideArtifacts: [
      {
        id: 'sa-10',
        title: 'Fee Revenue Resilience Waterfall',
        category: 'Financial Architecture',
        description:
          'Sharp monochromatic financial chart proving how recurring advisory fees buffer against interest rate volatility.',
        keyTakeaway: 'Directly dismantled the bear case regarding cyclical vulnerability.',
        imageUrl: '/src/assets/images/project_lumina_annual_review_1791337343398.jpg'
      }
    ],
    testimonial: {
      quote:
        'The visual rigor Detailed brought to our Investor Day was transformative. Wall Street understood our equity story in the first 20 minutes.',
      author: 'Catherine Duprès',
      role: 'Head of Global Investor Relations',
      organization: 'Monarch Financial Group'
    },
    viewCount: 650,
    lastModified: '2025-11-20'
  }
];
