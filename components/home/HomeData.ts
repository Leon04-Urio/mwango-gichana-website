import type { ArticleCardData } from "@/components/cards/ArticleCard";
import type { ClientLogo, Testimonial } from "@/sanity/lib/types";

// What the homepage fetches once and hands to whichever design is showing.
export interface HomeData {
  articles: ArticleCardData[];
  clients: ClientLogo[];
  testimonials: Testimonial[];
}
