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
  seoKeywords: string[];
  metaDescription: string;
}
