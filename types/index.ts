export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  cover?: string;
};

export type Employer = {
  company: string;
  role: string;
  start: string;
  end?: string;
  summary?: string;
};

export type Plan = {
  title: string;
  price: string;
  description?: string;
  features: string[];
};

export type ContactLink = {
  label: string;
  href: string;
};
