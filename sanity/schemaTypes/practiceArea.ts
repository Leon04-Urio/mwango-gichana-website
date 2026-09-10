import { defineField, defineType } from "sanity";

export const practiceArea = defineType({
  name: "practiceArea",
  title: "Practice Area",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "shortTitle", title: "Short Title (nav/cards)", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["landPlot", "scale", "briefcase", "gavel", "search"],
      },
    }),
    defineField({ name: "summary", title: "Card / Listing Summary", type: "text" }),
    defineField({
      name: "intro",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "services",
      title: "Services Offered",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "commonProblems",
      title: "Common Client Problems",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "howWeAssist",
      title: "How We Assist",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "kenyanContext",
      title: "Kenyan Legal Context",
      type: "text",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "faq" }],
    }),
    defineField({
      name: "attorneys",
      title: "Attorney(s) Responsible",
      type: "array",
      of: [{ type: "reference", to: [{ type: "attorney" }] }],
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Blog Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
    }),
    defineField({
      name: "seoKeywords",
      title: "Target SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      validation: (r) => r.max(160),
    }),
  ],
});
