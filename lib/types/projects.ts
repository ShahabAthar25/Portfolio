export type CarouselSlide =
  | { kind: "image"; src: string; tag: string; caption: string }
  | { kind: "results"; tag: string };
export type Metric = { value: string; label: string; sub: string };
export type Phase = { phase: string; title: string; desc: string };
export type Feature = {
  key: string;
  label: string;
  desc: string;
  highlight?: boolean;
  detail?: string;
};

export type Project = {
  name: string;
  slug: string;
  category: string;
  year: string;
  desc: string;
  tech: string[];
  role: string;
  duration: string;
  heroImage: string;
  slides: CarouselSlide[];
  challenge: string;
  approach: string;
  metrics: Metric[];
  process: Phase[];
  outcome: string;
  features: Feature[];
  tags: string[];
};
