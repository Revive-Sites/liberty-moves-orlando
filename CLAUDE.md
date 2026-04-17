# Revive Agency — Website Build Context

You are building or editing a website for a Revive Agency client.
Read this entire file before writing a single line of code.

---

## Who We Are

Revive Agency (thereviveagency.com) is a full-service digital marketing agency.
Client niches: moving, medical, automotive, legal, eCommerce, professional services.
Primary contact: austin@thereviveagency.com

---

## Your Job on Every Site

1. Build fast, conversion-focused websites
2. Every page should generate leads (calls, form fills, quote requests)
3. Mobile-first — most client traffic is mobile
4. SEO-ready out of the box
5. No placeholder content ever makes it into a commit

---

## Stack Defaults

- **Framework:** Next.js 14 App Router (default) — or check `SITE_CONFIG.md` in this repo
- **Styling:** Tailwind CSS v3 + custom tokens
- **Animation:** Motion (import from `motion/react`)
- **Components:** shadcn/ui where applicable
- **Deployment:** Vercel
- **CMS:** None unless specified in `SITE_CONFIG.md`

If this is a plain HTML site (no React), use HTML + Tailwind CDN + vanilla JS.
Always check `SITE_CONFIG.md` first — it overrides these defaults.

---

## Folder Structure

```
/src
  /app              ← Next.js App Router pages
  /components
    /ui             ← Primitives (buttons, inputs, cards)
    /sections       ← Page sections (Hero, Services, Testimonials, etc.)
  /lib              ← Utilities, helpers, constants
/public
  /images           ← All site images
  /fonts            ← Self-hosted fonts if any
SITE_CONFIG.md      ← Per-client overrides (stack, colors, fonts, niche)
CLAUDE.md           ← This file
```

---

## Design Rules

### Typography
- Use Google Fonts — no system fonts (no Arial, Inter, Roboto)
- Pick fonts appropriate for the client's niche (see SITE_CONFIG.md)
- One display font + one body font max
- H1: 48px+ desktop, 32px+ mobile
- Body: 16-18px, line-height 1.6

### Colors
- All colors defined as CSS variables in `globals.css`
- Never hardcode hex values in components — always use variables
- Default token names: `--color-primary`, `--color-accent`, `--color-bg`, `--color-text`, `--color-muted`
- Check `SITE_CONFIG.md` for client-specific palette

### Spacing
- Use Tailwind spacing scale — no arbitrary pixel values unless truly necessary
- Section padding: `py-16 md:py-24` as default
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Motion / Animation
- Import: `import { motion } from "motion/react"`
- Use for: hero entrances, section reveals on scroll, hover states on cards/buttons
- Keep animations subtle — 200-400ms, ease-out
- Always respect `prefers-reduced-motion`
- No animations on body copy — only headlines, images, cards, CTAs

---

## Conversion Rules (Non-Negotiable)

- Every single page has at least ONE clear CTA above the fold
- CTA button text: "Get a Free Quote", "Book a Free Call", "Call Now", "Get Started" — NEVER "Submit" or "Click Here"
- Phone number: visible in header, clickable on mobile (`href="tel:..."`)
- Contact form: name, phone, email, message — keep it short
- Trust signals on every page: reviews count, years in business, certifications, before/after photos
- Hero section always has: headline, subheadline, CTA button, trust element (e.g. "500+ Happy Clients")

---

## SEO Defaults (Every Page)

```jsx
// Required on every page
export const metadata = {
  title: "[Service] in [City] | [Business Name]",
  description: "[1-2 sentence description with primary keyword]",
  openGraph: {
    title: "...",
    description: "...",
    image: "/og-image.jpg",
  },
}
```

- One H1 per page — keyword first
- H2s for each major section
- Alt text on every image — descriptive, not "image1.jpg"
- LocalBusiness schema on homepage and contact page
- Service schema on service pages
- No duplicate meta descriptions across pages

---

## Performance Rules

- All images: use `next/image` or `<img loading="lazy" />` for plain HTML
- LCP target: under 2.5 seconds
- No layout shift on fonts — always `font-display: swap`
- Limit third-party scripts — no unnecessary tag manager bloat
- Icons: use Lucide React or inline SVG — NO icon fonts

---

## Code Quality Rules

- No inline styles — ever
- No `console.log` left in commits
- No Lorem Ipsum in any committed file
- No placeholder images (`picsum.photos`, `via.placeholder.com`) in commits
- All components typed with TypeScript (for Next.js projects)
- Component names: PascalCase (`HeroSection.tsx`)
- Utility functions: camelCase (`formatPhoneNumber.ts`)
- No dead/commented-out code in final files

---

## Common Section Components

Build these as reusable components in `/src/components/sections/`:

| Component | Purpose |
|---|---|
| `HeroSection` | Above-fold with headline, sub, CTA, image |
| `ServicesGrid` | Cards showing each service offered |
| `TestimonialsSlider` | Client reviews with stars, name, location |
| `WhyChooseUs` | 3-4 differentiators with icons |
| `CTABanner` | Mid-page or bottom CTA strip |
| `ContactForm` | Lead capture form |
| `FAQAccordion` | SEO-rich FAQ section |
| `ServiceAreaMap` | Cities/areas served list or map |
| `BeforeAfter` | Photo comparison slider (where relevant) |

---

## Working on EXISTING Sites

> Read this section carefully when you are NOT starting from scratch.

### Before touching anything:

1. Run `npm install` to ensure all dependencies are current
2. Run `npm run dev` and check the site loads without errors
3. Read `SITE_CONFIG.md` to understand the client and what's already built
4. Review existing components before creating new ones — extend, don't duplicate

### Change Request Workflow:

When given a change request, follow this sequence:
1. **Identify** — find the exact file(s) that need to change
2. **Understand** — read the full component before editing it
3. **Minimal footprint** — change only what's needed, don't refactor unrelated code
4. **Test mentally** — will this break anything else that uses this component?
5. **Commit message** — use format: `fix:`, `feat:`, `style:`, `content:` prefix

### Common existing-site tasks:

**Content update** (text, phone numbers, hours, pricing):
- Find the component or page file
- Update the string directly
- Do NOT restructure the component for a content-only change

**Adding a new section to an existing page:**
- Create the section component in `/src/components/sections/`
- Import and place it in the page file
- Match the existing site's spacing and color variables exactly

**Style/design change:**
- Check `globals.css` for CSS variables first — change the variable, not individual instances
- If changing a component's layout, check all pages that use it

**Adding a new page:**
- Follow the existing page structure in `/src/app/`
- Copy the closest existing page as a starting point
- Update metadata, H1, content — never copy-paste from another page without changing the SEO fields

**Bug fix:**
- Describe the bug in a comment above the fix: `// FIX: [what was wrong and why]`
- Remove the comment once the fix is confirmed working

---

## What NOT to Do

- Do NOT install new npm packages without checking if one already exists for the same purpose
- Do NOT rename existing files or folders on an existing site without flagging it
- Do NOT change global CSS variables without understanding what they affect
- Do NOT remove existing sections without explicit instruction
- Do NOT upgrade Next.js or major dependencies mid-project
- Do NOT commit `.env` files or API keys

---

## When You're Unsure

If a task is ambiguous, state your assumption clearly before proceeding:
> "Assumption: I'm adding this section to the homepage only, not the service pages. Proceeding."

If you see a problem in the existing code unrelated to the current task, flag it in a comment but do NOT fix it unless asked:
> "Note: The `ContactForm` component has a missing `aria-label` — flagging for review, not changing now."

---

## Deployment Checklist (Before Any Deploy)

- [ ] No console.log statements
- [ ] No placeholder text or images
- [ ] All pages have unique title + description metadata
- [ ] Phone number is correct and clickable on mobile
- [ ] Contact form submits correctly (test it)
- [ ] Site loads on mobile without horizontal scroll
- [ ] All images have alt text
- [ ] No build errors (`npm run build` passes clean)
