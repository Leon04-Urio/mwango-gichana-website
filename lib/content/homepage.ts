// Homepage content. Everything here is
// derived from firm.ts and practiceAreas.ts wording; nothing is a new claim.
// Wording marked "needs client sign-off" has not been approved by the firm.

import { firm } from "./firm";
import { practiceAreas } from "./practiceAreas";

const bySlug = (slug: string) => {
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) throw new Error(`Unknown practice area: ${slug}`);
  return area;
};

const land = bySlug("environment-and-land-law");
const family = bySlug("family-law-succession");
const corporate = bySlug("corporate-commercial-law");
const research = bySlug("legal-research-opinions-due-diligence");

export interface Audience {
  id: "individuals" | "institutions";
  title: string;
  lead: string;
  // Practice areas this audience is pointed to, in order.
  areas: { slug: string; label: string }[];
}

// Needs client sign-off.
export const audiences: Audience[] = [
  {
    id: "individuals",
    title: "Families and individuals",
    lead: "Land, succession and family matters, handled directly by the advocate on your file and in confidence.",
    areas: [
      { slug: land.slug, label: land.shortTitle },
      { slug: family.slug, label: family.shortTitle },
    ],
  },
  {
    id: "institutions",
    title: "Conservancies, NGOs and investors",
    lead: "Land agreements, compliance, business structuring and due diligence for organisations and buyers who cannot be on the ground.",
    areas: [
      { slug: corporate.slug, label: corporate.shortTitle },
      { slug: research.slug, label: research.shortTitle },
      { slug: land.slug, label: land.shortTitle },
    ],
  },
];

export const genericMessage = "Hello, I would like to speak to an advocate.";

export function whatsappHref(message: string) {
  return `https://wa.me/${firm.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
