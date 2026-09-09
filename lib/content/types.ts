// Shared content types. Shaped deliberately to match what a future Sanity
// GROQ query would return, so swapping lib/content reads for live Sanity
// fetches later is a drop-in change rather than a rewrite.

export interface PracticeAreaService {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  icon: "landPlot" | "scale" | "briefcase" | "gavel" | "search";
  summary: string;
  intro: string[];
  services: PracticeAreaService[];
  commonProblems: string[];
  howWeAssist: string[];
  kenyanContext?: string;
  faqs: FAQ[];
  attorneySlugs: string[];
  relatedArticleSlugs: string[];
  seoKeywords: string[];
  metaDescription: string;
}

export interface Attorney {
  slug: string;
  name: string;
  title: string;
  isPlaceholder: boolean;
  practiceAreaSlugs: string[];
  education: string[];
  admittedYear: string;
  memberships: string[];
  bio: string[];
  photo: {
    src: string;
    alt: string;
  };
  email?: string;
  metaDescription: string;
}

export interface Article {
  slug: string;
  title: string;
  isDemo: boolean;
  excerpt: string;
  author: string; // attorney slug, or "Mwango Gichana & Co. Advocates" if unassigned
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  practiceAreaSlug: string;
  relatedArticleSlugs: string[];
  coverImage: {
    src: string;
    alt: string;
  };
  content: ArticleBlock[];
  metaDescription: string;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };
