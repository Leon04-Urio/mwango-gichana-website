import { defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "Office Location",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Location Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "addressLine", title: "Street / Building Address", type: "string" }),
    defineField({ name: "town", title: "Town", type: "string" }),
    defineField({ name: "subCounty", title: "Sub-County", type: "string" }),
    defineField({ name: "county", title: "County", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "googleMapsEmbedUrl", title: "Google Maps Embed URL", type: "url" }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "string" },
            { name: "hours", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "isPrimary", title: "Primary Office", type: "boolean", initialValue: false }),
  ],
});
