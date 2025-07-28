export interface InstructorProps {
  sectionTitle?: string;
  instructorName?: string;
  instructorPhoto?: string;
  instructorDetails?: string;
  shortDescription?: string;
}
export interface TitleProps {
  title?: string;
}
export interface DescriptionProps {
  des?: string;
}
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
export interface SectionType {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
   values: (string | number | boolean | object | null)[];
}