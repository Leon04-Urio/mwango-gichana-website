# Mwango Gichana & Co. Advocates — Website

A Next.js marketing/CMS website for Mwango Gichana & Co. Advocates, a boutique
law firm in Kimana Town, Kajiado South, serving the Amboseli ecosystem.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion ·
Lucide icons · Sanity (connected, live) · Resend (contact form email) ·
Google Analytics 4 · GitHub + Vercel (hosting/CI)

**Live infrastructure already set up:**
- GitHub: `Leon04-Urio/mwango-gichana-website`
- Vercel: connected to the GitHub repo (auto-deploys on push to `main`)
- Sanity: project `gryyptqx` ("Mwango Gichana Website"), private `production`
  dataset, Studio at `/studio`

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Open http://localhost:3000.

## Environment Variables

See `.env.example` for the full list and where to get each value.

## Content Model

Two content sources, by design:

- **`lib/content/*.ts`** — firm info, practice areas. Edited by changing code
  (these change rarely and need a developer's review — legal service
  descriptions, SEO copy).
- **Sanity** (`sanity/lib/queries.ts`) — blog posts, the client/organization
  showcase, and testimonials. Edited by the firm directly in Studio, no code
  changes needed. This is the "admin side" the firm uses day to day.

### Publishing a blog post (for the firm)

1. Go to `/studio` on the live site and log in.
2. Click **Blog Post** → **Create new**.
3. Fill in title, excerpt, cover image (with alt text), category, related
   practice area, and the body content.
4. Toggle **Published** on, then **Publish** in the top-right.
5. The post appears on `/blog` within about a minute automatically (or
   instantly once the webhook below is configured).

An article only appears on the live site once **Published** is toggled on —
this lets the firm draft and review before it goes public.

### Client / organization showcase and testimonials (for the firm)

Under **Client / Organization Worked With** and **Testimonial** in Studio.
Both have an explicit approval toggle (**Approved for Public Display** /
**Approved for Publication**) that defaults to **off** — nothing appears on
the site until the firm explicitly flips it on. This exists because client
confidentiality matters for a law firm; nothing gets published just by being
entered into the CMS.

One example of each was seeded as an unapproved template (visible only in
Studio) so the firm can see the expected format — edit it into a real entry
or delete it.

### On-demand content updates (webhook)

Content fetched from Sanity revalidates automatically every 60 seconds, so a
publish always shows up within a minute even with no further setup. For
near-instant updates, wire a Sanity webhook once the production URL is known:

```bash
npx sanity hooks create \
  --name "Revalidate site" \
  --dataset production \
  --url "https://<your-production-domain>/api/revalidate?secret=<REVALIDATE_SECRET>" \
  --on create --on update --on delete \
  --project-id gryyptqx
```

`REVALIDATE_SECRET` must match the value set in Vercel's environment
variables (generate one with
`node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"`).

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

## Analytics — Site Visits & Conversions

- **Google Analytics 4**: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (format
  `G-XXXXXXXXXX`) and the site loads GA4 via Next.js's official
  `@next/third-parties` integration, scoped to the public site only (not the
  `/studio` CMS route). The firm views all traffic and conversion data
  directly in Google's own GA4 dashboard — nothing is built or hosted
  separately for this.
- **Conversion events already firing** (see `lib/analytics.ts`): a successful
  contact-form submission (`generate_lead`), a WhatsApp button click
  (`contact_whatsapp_click`), and a phone-number click
  (`contact_phone_click`, from the footer, contact page, and CTA band). To
  turn these into GA4 "conversions": in the GA4 admin, go to **Admin → Events**
  and toggle **Mark as key event** for each one. This is a one-time setup step
  done in Google's UI, not in this codebase.
- **Google Search Console**: verify the domain (DNS TXT record is the most
  reliable method) and submit `https://<your-domain>/sitemap.xml`, which is
  generated automatically from every practice area and published blog post.

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
  (practice areas + published Sanity blog posts) that renders the pages, so
  they can't drift out of sync.
- Structured data (`LegalService`/`Organization`, `Article`, `BreadcrumbList`,
  `FAQPage`) only reflects content actually visible on the page — no
  fabricated ratings, reviews, or credentials.

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

**Content**
- [ ] Real trust-band statistics (years of experience, number of advocates —
      currently bracketed placeholders on the homepage)
- [ ] Client/organization logos and testimonials — approve real ones in
      Studio (see "Client / organization showcase" above); nothing shows
      publicly until then
- [ ] Review the 3 seed blog posts in Sanity (migrated from the original
      demo content) — edit, replace, or leave as general-information posts
- [ ] Legal review/approval of Privacy Policy, Terms of Use, and Legal
      Disclaimer placeholder copy

**Media**
- [ ] Real office photography (site currently uses licensed Unsplash stock
      photography as placeholders, clearly swappable — see `lib/content/*.ts`
      and page files for `images.unsplash.com` URLs)
- [ ] Brand assets / any existing style guide beyond navy + gold

**Analytics**
- [ ] Mark the three conversion events as GA4 key events (see "Analytics"
      above)

## Project Structure

```
app/
  layout.tsx              Root layout: fonts, global metadata
  (site)/                 Route group: all public marketing pages
    layout.tsx             Navbar/Footer/WhatsApp/Analytics shell
    page.tsx                Home (fetches blog posts, clients, testimonials)
    about/, practice-areas/, blog/, contact/,
    privacy-policy/, terms/, legal-disclaimer/
  studio/[[...tool]]/      Embedded Sanity Studio (outside the (site) shell)
  api/contact/route.ts     Contact form → Resend
  api/revalidate/route.ts  Sanity webhook → on-demand ISR revalidation
  sitemap.ts, robots.ts
components/
  layout/    Navbar, Footer, WhatsAppButton
  sections/  Hero, PageHeader, PracticeAreasGrid, ClientLogos, Testimonials,
             BlogTeaser, CTABand, etc.
  cards/     PracticeAreaCard, ArticleCard
  blog/      PortableTextRenderer (renders Sanity rich text)
  ui/        Button, SectionHeader, Breadcrumbs, FAQAccordion
  forms/     ContactForm
  seo/       JSON-LD components
  analytics/ TrackedPhoneLink, TrackedWhatsAppLink (GA4 event wrappers)
lib/
  content/   Firm info + practice areas (see "Content Model" above)
  analytics.ts  GA4 event helpers
  seo.ts, motion.ts, utils.ts, validation.ts
sanity/
  schemaTypes/  Document schemas for every content type
  lib/client.ts  Sanity client (live)
  lib/queries.ts GROQ queries used by the site
  lib/fetch.ts   Cached fetch wrapper + image URL resolver
```
