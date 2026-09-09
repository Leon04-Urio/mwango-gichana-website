import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "clientName",
      title: "Client Name (or 'Anonymous' / initials)",
      type: "string",
    }),
    defineField({
      name: "clientDescription",
      title: "Client Description",
      description: "e.g. \"Landowner, Kimana\" — do not disclose confidential matter details.",
      type: "string",
    }),
    defineField({
      name: "practiceArea",
      title: "Related Practice Area",
      type: "reference",
      to: [{ type: "practiceArea" }],
    }),
    defineField({
      name: "isApprovedForPublication",
      title: "Approved for Publication by Client",
      type: "boolean",
      initialValue: false,
      description: "Only display testimonials with explicit client sign-off.",
    }),
  ],
});
