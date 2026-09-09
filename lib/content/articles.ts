import { Article } from "./types";

// DEMO CONTENT — these three articles are illustrative only, written to
// exercise the Insights template. They must be reviewed, fact-checked, and
// approved by a qualified advocate at the firm before publication, per the
// legal-content trust guidelines in the project brief.
export const articles: Article[] = [
  {
    slug: "how-succession-works-in-kenya",
    title: "How Does Succession Work in Kenya? A General Guide",
    isDemo: true,
    excerpt:
      "An overview of how a deceased person's estate is administered under Kenyan law — the difference between testate and intestate succession, and why land complicates the process.",
    author: "Mwango Gichana & Co. Advocates",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    category: "Family & Succession",
    tags: ["succession", "estate administration", "probate", "Kenya law"],
    practiceAreaSlug: "family-law-succession",
    relatedArticleSlugs: ["group-ranch-land-rights-kajiado"],
    coverImage: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop",
      alt: "Open law books and a pair of glasses on a desk",
    },
    content: [
      {
        type: "paragraph",
        text: "When someone passes away in Kenya, their estate — property, land, money, and other assets — must be legally transferred to their beneficiaries. This process, known as succession, follows different paths depending on whether the deceased left a valid will.",
      },
      { type: "heading", text: "Testate succession: where a valid will exists" },
      {
        type: "paragraph",
        text: "If the deceased left a valid will, an executor named in the will applies to court for a grant of probate. Once granted, the executor is legally authorised to distribute the estate according to the will's instructions.",
      },
      { type: "heading", text: "Intestate succession: where there is no will" },
      {
        type: "paragraph",
        text: "Where there is no valid will, a close relative applies for letters of administration. The estate is then distributed according to the rules of intestate succession set out in Kenyan law, which determine how property is shared among a spouse, children, and other dependants.",
      },
      { type: "heading", text: "Why land makes succession more complex" },
      {
        type: "paragraph",
        text: "Many estates in Kajiado County include land — sometimes originating from a subdivided group ranch. Before land can be transmitted to beneficiaries, its title history often needs to be verified, which can add time and complexity to an already sensitive process.",
      },
      { type: "heading", text: "A general process, not a substitute for advice" },
      {
        type: "paragraph",
        text: "Every estate is different, and outcomes depend heavily on the specific facts — family structure, the nature of the assets, and whether any party disputes the distribution. If you are administering an estate or believe you may be a beneficiary, speak to an advocate early.",
      },
    ],
    metaDescription:
      "A general guide to how succession and estate administration work in Kenya, including why land can complicate the process in Kajiado County.",
  },
  {
    slug: "group-ranch-land-rights-kajiado",
    title: "Understanding Group Ranch Land Rights in Kajiado County",
    isDemo: true,
    excerpt:
      "Group ranch history shapes much of the land tenure in Kajiado South today. Here's a general introduction to what that means for buyers, families, and communities.",
    author: "Mwango Gichana & Co. Advocates",
    publishedAt: "2026-02-03",
    updatedAt: "2026-02-03",
    category: "Land & Environment",
    tags: ["land law", "group ranches", "Kajiado", "community land"],
    practiceAreaSlug: "environment-and-land-law",
    relatedArticleSlugs: ["how-succession-works-in-kenya"],
    coverImage: {
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop",
      alt: "Open savannah landscape typical of the Amboseli ecosystem",
    },
    content: [
      {
        type: "paragraph",
        text: "Much of the land across Kajiado South was historically held as group ranches — large areas registered in the name of a defined group of members rather than individuals. Over recent decades, many of these group ranches have been subdivided into individually registered parcels.",
      },
      { type: "heading", text: "Why the history matters" },
      {
        type: "paragraph",
        text: "A title deed for a subdivided parcel does not always tell the full story. Questions can arise around whether the original subdivision was properly carried out, whether all members received their fair share, and whether any part of the land remains subject to unresolved community claims.",
      },
      { type: "heading", text: "The Community Land Act 2016" },
      {
        type: "paragraph",
        text: "The Community Land Act 2016 introduced a framework for registering and governing land held communally, including land not yet subdivided from group ranches. For conservancies and community groups, understanding how this framework applies to their land is often a first, essential step.",
      },
      { type: "heading", text: "What this means if you're buying land" },
      {
        type: "paragraph",
        text: "Anyone purchasing land in this region should commission a thorough title and history investigation — not just a standard search — before making any commitment. This is particularly true near conservancies, where land use may carry additional restrictions.",
      },
    ],
    metaDescription:
      "A general introduction to group ranch land history in Kajiado County and why it matters for land buyers, families and communities.",
  },
  {
    slug: "what-to-do-after-a-demand-letter",
    title: "You've Received a Demand Letter — What Should You Do Next?",
    isDemo: true,
    excerpt:
      "A demand letter is often the first formal step before legal proceedings. Here's a general outline of how to respond.",
    author: "Mwango Gichana & Co. Advocates",
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    category: "Litigation & Dispute Resolution",
    tags: ["demand letter", "litigation", "dispute resolution"],
    practiceAreaSlug: "litigation-dispute-resolution",
    relatedArticleSlugs: [],
    coverImage: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
      alt: "A formal letter and pen on a desk",
    },
    content: [
      {
        type: "paragraph",
        text: "A demand letter is a formal written notice, usually from an advocate, asking you to take (or stop) a specific action — often to pay a debt or remedy a breach — within a set period. It is often, though not always, a precursor to legal proceedings.",
      },
      { type: "heading", text: "Don't ignore it — but don't panic either" },
      {
        type: "paragraph",
        text: "A demand letter is not a court order and does not, by itself, mean you have lost anything. But ignoring it removes your chance to respond before the matter potentially escalates to litigation.",
      },
      { type: "heading", text: "Steps to consider" },
      {
        type: "list",
        items: [
          "Read the letter carefully and note any deadline stated.",
          "Gather any documents relevant to the claim — contracts, correspondence, receipts.",
          "Avoid responding informally or admitting liability before taking advice.",
          "Consult an advocate to assess the merits of the claim against you and your options for response.",
        ],
      },
      { type: "heading", text: "Why early advice matters" },
      {
        type: "paragraph",
        text: "A well-considered response — sometimes leading to a negotiated resolution — can prevent a dispute from escalating into costly litigation. Getting advice at the demand-letter stage, rather than after proceedings begin, generally gives you more options.",
      },
    ],
    metaDescription:
      "What a demand letter means in Kenya and general steps to take after receiving one, before a dispute potentially reaches litigation.",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
