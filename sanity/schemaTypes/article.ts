import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "attorney" }],
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "datetime" }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "practiceArea",
      title: "Related Practice Area",
      type: "reference",
      to: [{ type: "practiceArea" }],
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
    }),
    defineField({
      name: "coverImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }],
    }),
    defineField({
      name: "content",
      title: "Article Content",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title (optional override)",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      validation: (r) => r.max(160),
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
      description: "Toggle on only after an advocate has reviewed and approved this article.",
    }),
  ],
});
