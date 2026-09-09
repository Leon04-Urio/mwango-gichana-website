# Mwango Gichana & Co. Advocates — Website

A Next.js marketing/CMS website for Mwango Gichana & Co. Advocates, a boutique
law firm in Kimana Town, Kajiado South, serving the Amboseli ecosystem.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion ·
Lucide icons · Sanity (schemas defined, not yet connected — see below) ·
Resend (contact form email) · Vercel (target host)

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Open http://localhost:3000.

## Environment Variables

See `.env.example` for the full list. At minimum for local development you
can run with no env vars set — the contact form will simply log an error
instead of sending email, and Sanity Studio will run unconfigured (both
non-blocking for browsing the site).

For a real deployment you need:

- `NEXT_PUBLIC_SITE_URL` — the production domain, used for canonical URLs, the
  sitemap, and structured data.
- `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` — see "Contact Form" below.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — see "Analytics" below.

## Content Model — Important

**The site currently reads content from `lib/content/*.ts`, not from Sanity.**
Those files (`firm.ts`, `practiceAreas.ts`, `attorneys.ts`, `articles.ts`) hold
the real content supplied by the firm (name, practice areas, contact details)
plus clearly-marked placeholders (attorney profiles, office address, stats,
vision/mission, demo articles) that still need client input.

Content shapes in `lib/content/types.ts` mirror what a Sanity GROQ query would
return, specifically so this can be swapped for live Sanity data later without
restructuring the page components — see "Connecting Sanity" below.

## Connecting Sanity (Not Yet Done)

Sanity schemas for every content type (Practice Area, Attorney, Article,
Category, Testimonial, Location, Site Settings, FAQ) are defined under
`sanity/schemaTypes/`, and an embedded Studio is available at `/studio` once
configured. This has **not** been connected to a live project because no
Sanity project exists yet. To go live:

1. Create a Sanity project at sanity.io (free tier is sufficient to start) and
   note the Project ID.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
   (usually `production`) in your environment.
3. Visit `/studio` on the deployed site (or `localhost:3000/studio` locally)
   and log in with a Sanity account to start creating content.
4. Replace the functions in `lib/content/*.ts` (e.g. `getPracticeAreaBySlug`)
   with GROQ queries against `sanity/lib/client.ts`, keeping the same return
   shapes defined in `lib/content/types.ts` so the page components (which
   only import from `lib/content`) don't need to change.
5. Migrate the real practice-area, attorney, and article content currently
   hardcoded in `lib/content/*.ts` into Sanity documents.

## Contact Form

`components/forms/ContactForm.tsx` posts to `app/api/contact/route.ts`, which
sends email via [Resend](https://resend.com). The API key is server-only and
never reaches the browser.

To activate it:

1. Create a Resend account and verify a sending domain (e.g.
   `mwangogichanalegal.com`).
2. Set `RESEND_API_KEY` in your environment.
3. Set `CONTACT_FROM_EMAIL` to a verified address on that domain (e.g.
   `enquiries@mwangogichanalegal.com`).
4. Optionally set `CONTACT_RECIPIENT_EMAIL` to override the default recipient
   (`gloria@mwangogichanalegal.com`, from `lib/content/firm.ts`).

Until `RESEND_API_KEY` is set, form submissions return a friendly error asking
the visitor to call or email directly, rather than silently failing.

## Analytics — GA4 & Search Console

- **Google Analytics 4**: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (format
  `G-XXXXXXXXXX`) and the site will load GA4 via Next.js's official
  `@next/third-parties` integration, scoped to the public site only (not the
  `/studio` CMS route).
- **Google Search Console**: verify the domain (DNS TXT record is the most
  reliable method) and submit `https://<your-domain>/sitemap.xml`, which is
  generated automatically from every practice area, attorney, and article in
  `lib/content/*.ts`.

## Google Business Profile

The website is built to support strong local SEO signals, but Google Business
Profile itself is managed outside this codebase. To connect them:

1. Create or claim the firm's Google Business Profile at
   [business.google.com](https://business.google.com), using the **exact**
   firm name, address, and phone number that appear in `lib/content/firm.ts`
   (NAP consistency matters for local ranking).
2. Once the office address is finalised, update
   `firm.location.addressLine` and `firm.location.mapEmbedUrl` in
   `lib/content/firm.ts` to match exactly.
3. Add the website URL to the Business Profile, and set the Business Profile
   category to something like "Law firm" / "Legal services".
4. Add real business hours to both the Business Profile and
   `firm.location.officeHours`, kept in sync.
5. Once the profile has reviews, consider a `Review`/`AggregateRating` JSON-LD
   addition — the current build deliberately omits ratings/review structured
   data since none exist yet (fabricating them would violate Google's
   guidelines).

## Known Dev-Dependency Advisory

`npm audit` reports vulnerabilities (js-yaml, smol-toml, uuid) nested inside
Sanity's CLI build tooling (`@sanity/cli` → `@vercel/frameworks`). These are
**build-time only** dependencies of the Sanity Studio tooling — they are not
part of the code served to website visitors. `npm audit fix --force` currently
wants to *downgrade* the `sanity` package to resolve them, which is not a safe
fix; revisit when Sanity ships an updated `@sanity/cli` release.

## SEO Notes

- Practice-area SEO keyword clusters (per page, in
  `lib/content/practiceAreas.ts` → `seoKeywords`) are built around the firm's
  actual base — **Kajiado South / Kimana / Amboseli** — rather than Nairobi,
  since that local specificity is the firm's real differentiator.
- `app/sitemap.ts` and `app/robots.ts` are generated from the same content
  lists that render the pages, so they can't drift out of sync.
- Structured data (`LegalService`/`Organization`, `Person`, `Article`,
  `BreadcrumbList`, `FAQPage`) only reflects content actually visible on the
  page — no fabricated ratings, reviews, or credentials.

## Client Content Checklist

Everything below is currently a clearly-marked placeholder in the code and
should be replaced before launch.

**Firm**
- [ ] Logo file (SVG/PNG, transparent background) — only a reference image was
      shared in chat, not a usable asset; the current header/footer wordmark
      is a text-based stand-in styled in the brand colors.
- [ ] Vision statement
- [ ] Mission statement
- [ ] Full office street/building address
- [ ] Confirmed office hours
- [ ] Confirmation that `0741 947 265` is WhatsApp-reachable (currently
      assumed in `firm.contact.whatsappNumber`)
- [ ] Google Business Profile (see above)

**Attorneys**
- [ ] Real attorney names, titles, and headshots (2 placeholder profiles exist
      to prove out the template — `lib/content/attorneys.ts`)
- [ ] Education, year admitted to the Kenyan Bar, LSK/professional memberships
- [ ] Verified biographies
- [ ] Which attorney is responsible for each practice area

**Content**
- [ ] Real trust-band statistics (years of experience, number of advocates —
      currently bracketed placeholders on the homepage)
- [ ] Testimonials approved for publication (schema exists in Sanity, none
      published yet)
- [ ] Review of the 3 demo Insights articles in `lib/content/articles.ts`
      (clearly marked "Demo Content" on the site) — either approve, edit, or
      replace with real advocate-reviewed content before removing that label
- [ ] Legal review/approval of Privacy Policy, Terms of Use, and Legal
      Disclaimer placeholder copy

**Media**
- [ ] Real office photography (site currently uses licensed Unsplash stock
      photography as placeholders, clearly swappable — see `lib/content/*.ts`
      and page files for `images.unsplash.com` URLs)
- [ ] Brand assets / any existing style guide beyond navy + gold

## Project Structure

```
app/
  layout.tsx              Root layout: fonts, global metadata
  (site)/                 Route group: all public marketing pages
    layout.tsx             Navbar/Footer/WhatsApp/Analytics shell
    page.tsx                Home
    about/, practice-areas/, attorneys/, insights/, contact/,
    privacy-policy/, terms/, legal-disclaimer/
  studio/[[...tool]]/      Embedded Sanity Studio (outside the (site) shell)
  api/contact/route.ts     Contact form → Resend
  sitemap.ts, robots.ts
components/
  layout/    Navbar, Footer, WhatsAppButton
  sections/  Hero, PageHeader, PracticeAreasGrid, CTABand, etc.
  cards/     PracticeAreaCard, AttorneyCard, ArticleCard
  ui/        Button, SectionHeader, Breadcrumbs, FAQAccordion
  forms/     ContactForm
  seo/       JSON-LD components
lib/
  content/   Typed content + placeholder data (see "Content Model" above)
  seo.ts, motion.ts, utils.ts, validation.ts
sanity/
  schemaTypes/  Document schemas for every content type
  lib/client.ts  Sanity client (not yet wired into any page)
```
