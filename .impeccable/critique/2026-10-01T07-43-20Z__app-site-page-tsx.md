---
target: the homepage - premium/luxury feel
total_score: 19
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 2
p1_count: 2
target_identity: "file:C:\\Users\\HomePC\\Desktop\\law\\app\\(site)\\page.tsx"
target_fingerprint: "sha256:0c3cce6812aede97eebb2d760b438647b606fb3e0e2518ca468f6b88faf1a192"
target_path: "C:\\Users\\HomePC\\Desktop\\law\\app\\(site)\\page.tsx"
timestamp: 2026-10-01T07-43-20Z
slug: app-site-page-tsx
---
Method: dual-agent (A: design-review agent, B: detector agent) + orchestrator browser measurements (B's session had no browser tool).

# Critique: Homepage - client says it does not look premium/luxury

Design specificity verdict: No. Copy is specific to the firm; imagery and logo are not. Hero/About photos are stock-feeling AI logo-mockup renders (one is a gavel/scales-of-justice cliche DESIGN.md itself bans). Four unrelated "MG" marks appear across one visit, including a gold-filled favicon (app/icon.png) that violates the site's own One Mark Rule. Hero headline (Hero.tsx:39, md:text-4xl=40.5px) never reaches DESIGN.md's documented display floor (3.75rem=67.5px at current 18px root).

Score: 19/24 (heuristics 5,7,9,10 n/a) - Good (79%). Different heuristic set than the Sept 21 run (21/32), not directly comparable.
Heuristic scores: 1=3, 2=4, 3=4, 4=2, 6=4, 8=2.

Detector: 2 advisory findings, rule design-system-font-size: tagline 0.65rem in Footer.tsx:24 and Navbar.tsx:89, off the type ramp but applied consistently.

Orchestrator measurements: 0 box-shadow across 382 elements; 0 border-radius on all buttons/cards/inputs except the pill language toggle; SealMark's drop-shadow (SealSections.tsx:244, filter-based, not box-shadow) is the one exception and contradicts DESIGN.md's Flat rule; hero source image (~1440px wide) is upscaled ~1.67x to fill its box, adding real softness; gold-on-ivory text contrast is fine (5.6:1) where used for text, so "thin gold" is a scale/weight issue not contrast; motion is color/background-only; no console errors; no horizontal overflow at 1440/390px.

## Priority issues
- [P0] Hero/About images are stock-feeling logo mockups; hero's gradient stack crushes it further. Fix: real photography is a client asset gap; interim, lighten the overlay. Command: bolder (hero).
- [P0] Four inconsistent "MG" marks incl. a rule-breaking gold-filled favicon. Fix: one vector logo; retire the gold favicon now (small, fast). Command: polish.
- [P1] Headline/section type sits at the floor of DESIGN.md's own scale; SealAbout/SealPractice skip the shared SectionHeader eyebrow. Fix: grow type at lg/xl; route every section through SectionHeader. Command: typeset.
- [P1] Gold reads as a faint afterthought (scale/weight, not contrast). Fix: bolder gold in 1-2 sanctioned spots, or add one other depth cue. Command: colorize.
- [P2] Total flatness reads unfinished; SealMark's own shadow contradicts the Flat rule. Fix: commit fully flat (drop the one shadow, raise ivory/paper contrast) or extend a consistent shadow language. Command: polish.

## Persona red flags
Diaspora investor: dim generic hero photo repeated in About, undercuts trust before real content (land-tenure depth, named courts) arrives. Nairobi premium-service client: undersized type + barely-visible card borders reads as un-art-directed template; three sections in a row missing the eyebrow device right after two that have it reads as unfinished.

## Minor observations
Three Sanity images requested at w=3840, oversized for small logo/avatar chips - separate from the premium question but worth a sizes-prop fix.
