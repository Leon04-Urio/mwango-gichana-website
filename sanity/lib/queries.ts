import { groq } from "next-sanity";

export const articleListQuery = groq`
  *[_type == "article" && isPublished == true] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    "author": author->name,
    publishedAt,
    updatedAt,
    "category": category->title,
    tags,
    "practiceAreaSlug": practiceArea->slug.current,
    coverImage,
    metaDescription
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug && isPublished == true][0] {
    "slug": slug.current,
    title,
    excerpt,
    "author": author->name,
    publishedAt,
    updatedAt,
    "category": category->title,
    tags,
    "practiceAreaSlug": practiceArea->slug.current,
    coverImage,
    content,
    metaDescription,
    "relatedArticles": relatedArticles[]-> {
      "slug": slug.current,
      title,
      excerpt,
      publishedAt,
      "practiceAreaSlug": practiceArea->slug.current,
      coverImage
    }
  }
`;

export const articlesByPracticeAreaQuery = groq`
  *[_type == "article" && isPublished == true && practiceArea->slug.current == $slug]
    | order(publishedAt desc) [0...3] {
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    "practiceAreaSlug": practiceArea->slug.current,
    coverImage
  }
`;

export const articleSlugsQuery = groq`
  *[_type == "article" && isPublished == true]{ "slug": slug.current }
`;

export const approvedClientsQuery = groq`
  *[_type == "client" && isApprovedForDisplay == true] | order(order asc) {
    _id,
    name,
    logo,
    website
  }
`;

export const approvedTestimonialsQuery = groq`
  *[_type == "testimonial" && isApprovedForPublication == true] {
    _id,
    quote,
    clientName,
    clientDescription,
    "practiceAreaSlug": practiceArea->slug.current
  }
`;
