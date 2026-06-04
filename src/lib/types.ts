export type ProjectStatus = "shipped" | "in progress" | "parked";

export type ProjectMetric = {
  value: string;
  label: string;
};

export interface Project {
  slug: string;
  title: string;
  year: string;
  status: ProjectStatus;
  role?: string;
  tools?: string;
  timeline?: string;
  oneLiner: string;
  context?: string;
  work?: string;
  media?: { src: string; alt: string; caption?: string }[];
  metrics?: ProjectMetric[];
  reflection?: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  featured?: boolean;
}
