import { Attorney } from "./types";

// PLACEHOLDER PROFILES — no real attorney names, credentials, or photos
// have been supplied yet. Every field here must be verified and replaced
// by the firm before launch. See README.md "Client Content Checklist".
export const attorneys: Attorney[] = [
  {
    slug: "founding-advocate",
    name: "[Advocate Name]",
    title: "[Managing Partner / Founding Advocate]",
    isPlaceholder: true,
    practiceAreaSlugs: [
      "environment-and-land-law",
      "corporate-commercial-law",
    ],
    education: ["[University / Law School, LL.B]", "[Kenya School of Law, Diploma in Law]"],
    admittedYear: "[Year Admitted to the Kenyan Bar]",
    memberships: ["[Law Society of Kenya (LSK) — membership to be confirmed]"],
    bio: [
      "[Placeholder biography. Replace with a verified professional summary covering the advocate's background, areas of focus, and experience once supplied by the firm.]",
    ],
    photo: {
      src: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?q=80&w=1200&auto=format&fit=crop",
      alt: "Placeholder portrait — to be replaced with a verified professional photograph",
    },
    metaDescription:
      "Placeholder attorney profile for Mwango Gichana & Co. Advocates — pending verified details from the firm.",
  },
  {
    slug: "associate-advocate",
    name: "[Advocate Name]",
    title: "[Associate Advocate]",
    isPlaceholder: true,
    practiceAreaSlugs: ["family-law-succession", "litigation-dispute-resolution"],
    education: ["[University / Law School, LL.B]"],
    admittedYear: "[Year Admitted to the Kenyan Bar]",
    memberships: ["[Law Society of Kenya (LSK) — membership to be confirmed]"],
    bio: [
      "[Placeholder biography. Replace with a verified professional summary once supplied by the firm.]",
    ],
    photo: {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
      alt: "Placeholder portrait — to be replaced with a verified professional photograph",
    },
    metaDescription:
      "Placeholder attorney profile for Mwango Gichana & Co. Advocates — pending verified details from the firm.",
  },
];

export function getAttorneyBySlug(slug: string) {
  return attorneys.find((a) => a.slug === slug);
}
