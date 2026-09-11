type Metric = { value: string; label: string; sub: string };
type Phase = { phase: string; title: string; desc: string };
type Feature = {
  key: string;
  label: string;
  desc: string;
  highlight?: boolean;
  detail?: string;
};

export type Project = {
  id: string;
  name: string;
  slug: string;
  category: string;
  year: string;
  desc: string;
  tech: string[];
  role: string;
  duration: string;
  heroImage: string;
  secondaryImage: string;
  challenge: string;
  approach: string;
  metrics: Metric[];
  process: Phase[];
  outcome: string;
  features: Feature[];
  tags: string[];
};
