---
target: the homepage
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:C:\\Users\\HomePC\\Desktop\\law\\app\\(site)\\page.tsx"
target_fingerprint: "sha256:a26a7a462971faa2694b5d5bdbafd73729043b618ff4d8e6d451e62e40fdbb6a"
target_path: "C:\\Users\\HomePC\\Desktop\\law\\app\\(site)\\page.tsx"
timestamp: 2026-09-21T05-21-25Z
slug: app-site-page-tsx
---
Method: dual-agent (A: design-review agent, B: detector agent). B had no browser tool; no overlay injected.

# Critique: Homepage (app/(site)/page.tsx)

Score: 21/32 (heuristics 7 and 10 n/a) - Acceptable (66%).

Heuristic scores: 1=2, 2=3, 3=3, 4=3, 5=2, 6=3, 7=n/a, 8=3, 9=2, 10=n/a.

## Design specificity
Partly specific. Hero seal photo, headline and practice copy are ownable. Palette, type, stock columns photo (AboutTeaser.tsx:23) and Lucide gavel/scales icons are category-default. No parcel, map, Kimana marker, courts or Kiswahili on the page.
Detector: 3 advisories, rule design-system-font-size: text-[0.65rem] in Navbar.tsx:86 and Footer.tsx:23 (real, minor); html font-size 20px in globals.css:73 (false positive).

## Priority issues
- [P0] Placeholders shown as content: TrustStats [XX]+ and [X], footer address [Building / Plot details]. Fix: remove stats band or replace with the three courts; hide address line. Command: distill.
- [P0] No contact path in the hero or on mobile above the footer (Navbar.tsx:269; WhatsAppButton and CTABand deleted). Fix: hero Call and WhatsApp actions, sticky mobile action bar, phone and WhatsApp rows in mobile menu. Command: layout.
- [P1] Kiswahili toggle is cosmetic (LanguageToggle.tsx:37). Fix: hide until hero, nav and contact actions are translated. Command: harden.
- [P1] Not specific to the place; two audiences not addressed. Fix: real Kimana/Amboseli photo, drop gavel/scales icons, two-path block under the hero. Command: shape.
- [P2] Practice grid leaves a dead grey cell (PracticeAreasGrid.tsx:32). Fix: equal-height rows, sixth cell as call/WhatsApp card. Command: polish.
- [P3] Low-contrast small text: placeholder disclaimer, footer links, footer legal links. Command: typeset.

## Persona red flags
Jordan: no hero button, placeholders. Casey: no phone icon in header, no call/WhatsApp above footer. Sam: probable AA failures on disclaimer and footer legal text; toggle changes nothing. Landowner: no plain-language entry, no Kiswahili. Diaspora investor: no advocate profiles, bracketed address.

## Minor observations
Unsplash About image is an external dependency; fragile key in AboutTeaser.tsx:46; Discretion value buried; blog teaser under-used; whileInView hides content until scroll; two unused raw hero JPGs and a stray screenshot in public/.
