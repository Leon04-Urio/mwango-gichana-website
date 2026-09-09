import { defineField, defineType } from "sanity";

export const attorney = defineType({
  name: "attorney",
  title: "Attorney",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Title / Role", type: "string" }),
    defineField({ name: "photo", title: "Professional Photograph", type: "image", options: { hotspot: true } }),
    defineField({
      name: "practiceAreas",
      title: "Areas of Practice",
      type: "array",
      of: [{ type: "reference", to: [{ type: "practiceArea" }] }],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "admittedYear",
      title: "Year Admitted to the Kenyan Bar",
      type: "string",
      description: "Must be verified — never estimated.",
    }),
    defineField({
      name: "memberships",
      title: "Professional Memberships",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "email", title: "Direct Email (optional)", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      validation: (r) => r.max(160),
    }),
  ],
});
