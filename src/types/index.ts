export interface Medium {
  type: string;
  url: string;
}

export interface Checklist {
  icon: string;
  text: string;
}

export interface CtaText {
  text: string;
}

export interface Seo {
  title: string;
  description: string;
}

export interface Section {
  type: string;
  title: string;
  description: string;
  items?: { title: string; description: string }[];
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
