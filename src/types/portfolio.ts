export type ServiceCategory = 
  | 'Executive Communications'
  | 'Presentation Systems'
  | 'Visual Storytelling'
  | 'Organizational Storytelling'
  | 'Capital & IPO';

export type IndustrySector =
  | 'Enterprise AI & Infrastructure'
  | 'DeepTech & Quantum'
  | 'Clean Energy & Grid'
  | 'BioPharma & Genomics'
  | 'Fintech & Capital Markets'
  | 'Autonomous Logistics';

export type ConfidentialityLevel =
  | 'Public Case Study'
  | 'Executive Brief'
  | 'Under NDA / Embargo'
  | 'Boardroom Restricted';

export type ProjectStatus = 'Published' | 'Draft' | 'Archived';

export interface QuantitativeOutcome {
  id: string;
  metric: string;
  label: string;
  timeframe: string;
  context: string;
}

export interface SlideArtifact {
  id: string;
  title: string;
  category: string;
  description: string;
  keyTakeaway: string;
  imageUrl?: string;
}

export interface StrategicPillar {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientIndustry: IndustrySector;
  serviceCategory: ServiceCategory;
  year: string;
  confidentiality: ConfidentialityLevel;
  status: ProjectStatus;
  isFeatured: boolean;
  order: number;
  heroImage: string;
  deliverables: string[];
  stakeholders: string;
  executiveSummary: string;
  theChallenge: {
    stakes: string;
    context: string;
    obstacles: string[];
  };
  narrativeArchitecture: {
    approach: string;
    frameworkName: string;
    pillars: StrategicPillar[];
  };
  quantitativeOutcomes: QuantitativeOutcome[];
  slideArtifacts: SlideArtifact[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
  viewCount: number;
  lastModified: string;
}
