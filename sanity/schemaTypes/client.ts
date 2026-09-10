import { defineField, defineType } from "sanity";

// "Clients we've worked with" logo/name showcase. Gated by an explicit
// approval flag — never display an organization's name or logo without
// their confirmed consent (client confidentiality matters for a law firm).
export const client = defineType({
  name: "client",
  title: "Client / Organization Worked With",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Organization Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "website", title: "Website (optional)", type: "url" }),
    defineField({
      name: "sector",
      title: "Sector",
      type: "string",
      options: {
        list: [
          "NGO / Community-Based Organisation",
          "Conservancy",
          "Business / SME",
          "Government / County",
          "Financial Institution",
          "Other",
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers display first.",
    }),
    defineField({
      name: "isApprovedForDisplay",
      title: "Approved for Public Display",
      type: "boolean",
      initialValue: false,
      description:
        "Only display an organization's name/logo with their explicit, confirmed consent.",
    }),
  ],
  preview: {
    select: { title: "name", media: "logo", subtitle: "sector" },
  },
});
