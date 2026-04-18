# Liberty Moves Orlando — Session Handoff

> **READ ME FIRST if you're continuing this project on a new machine or in a new Claude Code session.**
> Everything you need to keep working is in this file. Last session: 2026-04-18.

---

## Live URLs

- **Preview (current):** https://liberty-moves-orlando.vercel.app
- **Target production domain:** https://libertymovesorlando.com (DNS cutover pending — point at Vercel when ready)
- **GitHub repo:** https://github.com/Revive-Sites/liberty-moves-orlando
- **Vercel project:** `revive-sites/liberty-moves-orlando` (deployed from `main` branch auto)

---

## Tech Stack

- **Next.js 14.2.29** App Router, React 18, Tailwind 3, Motion, lucide-react
- **Vercel** hosting (Revive Sites team — `vercel --prod --scope=revive-sites`)
- **Supabase edge functions** for GHL integration (project `trqqskzmqzhwdjpbeqrq`)
- **GHL (GoHighLevel)** — Liberty Moves location `7pnMlJIyNsgtdaD576rT`

---

## Key Identifiers

| Thing | Value |
|---|---|
| GHL Location (Liberty Moves) | `7pnMlJIyNsgtdaD576rT` |
| GHL Company (Revive Agency) | `J8dN2wQIVAe9kXvIW4eF` |
| GHL Chat Widget ID | `698127e0ed26593e3945a9a5` |
| GHL Form ID (iframe embed) | `RjsFjWPKvuPNDGutFGkb` (not in use — native form instead) |
| GTM | `GTM-WWLX2D3Q` |
| USDOT | `3455436` |
| FLDACS IM# | `IM3347` (expires 9/30/26) |
| Phone | `(407) 641-2887` customer-facing · `(407) 729-9108` office |
| Email | `info@libertymovesorlando.com` |
| Address | `3641 S Saint Lucie Dr, Casselberry, FL 32707` |
| Google Review URL | `https://share.google/aY4A57lnhFndH4pEd` (300+ reviews) |

---

## Form → GHL Flow (critical — how leads land in GHL)

```
User fills QuoteForm (src/components/QuoteForm.tsx)
  ↓ POST /api/quote (src/app/api/quote/route.ts)
  ↓ POST https://trqqskzmqzhwdjpbeqrq.supabase.co/functions/v1/liberty-moves-lead
  ↓ [edge fn] pulls GHL OAuth from integrations table
  ↓ [edge fn] exchanges company token → Liberty Moves location token
  ↓ [edge fn] POST https://services.leadconnectorhq.com/contacts/ with field IDs
  ↓ Contact appears in Liberty Moves GHL with correct custom fields
```

**Edge function lives in Revive OS repo:** `/Users/reviveagency/revive-os-a3fd187b/supabase/functions/liberty-moves-lead/index.ts`

**Diagnostic function (list custom fields + inspect a contact):** `liberty-moves-lead-fields`
```bash
# list all custom fields in Liberty Moves GHL location:
curl https://trqqskzmqzhwdjpbeqrq.supabase.co/functions/v1/liberty-moves-lead-fields

# inspect a specific contact:
curl "https://trqqskzmqzhwdjpbeqrq.supabase.co/functions/v1/liberty-moves-lead-fields?contactId=XXX"
```

### GHL Custom Field IDs (verified working)

Target **field IDs** (not keys) — there are duplicate `move_size` keys in GHL:
| Form field | GHL field ID | GHL field name |
|---|---|---|
| origin | `UUutoxyVstOORE8HKjoi` | From Address: |
| destination | `MJxsnPz6bpopfkTDITkT` | To Address: |
| moveDate | `Gg2VQ9XXE5rSuOPeaAOr` | Move Date: |
| moveSize | `K1rc0dXoVCRHsYdFk5Nr` | Move Size: (TEXT, no picklist) |
| details | `HulT3VGyLZC6i6oPnwYK` | Move Notes: |

Available but not yet wired:
- `lJ4jF1I6uTButnHpIUIQ` What Type Of Move? (Local/Commercial/Long Distance/Senior/Packing/Loading)
- `rQDIJFTlDQ4tReySJj6B` How Big is the move? (2-6+ Man Move)
- `xqTLyxBobuXeGcASu3T5` How did you hear out us? (Google/FB/Angi/Yelp/etc)

---

## Pages shipped (~95 total)

- Homepage (`/`) — hero video, trust badges, discount band, trust counter, services, pricing, WhyUs, VideoShowcase, CostCalculator, LicenseVerify, Reviews (GHL widget), Partnerships, ServiceAreas, FAQ, CTA
- 4 core services: `/residential-moving`, `/commercial-moving`, `/long-distance-moving`, `/Packing-Services`
- 7 specialty: `/orlando-moving-cost`, `/orlando-moving-cost-calculator`, `/piano-movers-orlando`, `/apartment-movers-orlando`, `/last-minute-movers-orlando`, `/senior-movers-orlando`, `/ucf-student-movers-orlando`, `/storage-moving-orlando`
- 18 city pages (all in `src/lib/site.ts` CITIES array)
- 4 neighborhood: `/lake-nona-movers`, `/dr-phillips-movers`, `/baldwin-park-movers`, `/thornton-park-movers`
- 7 inbound: `/moving-to-orlando-from-{new-york|new-jersey|chicago|atlanta|los-angeles|boston|philadelphia}`
- 21 blog posts (5 imported real + 16 pillar content I wrote)
  - Real imported at `/blog/b/{exact-live-slug}` for SEO preservation
  - New content at `/blog/{slug}`
- Spanish mirror: `/es`, `/es/residential-moving`, `/es/commercial-moving`, `/es/long-distance-moving`, `/es/Packing-Services`, `/es/contact-us`
- Legal: `/privacy-policy`, `/terms-and-condition`

**SEO:** Full schema (LocalBusiness, MovingCompany, Service, Review, FAQ, Breadcrumb, Speakable, WebSite, GeoCircle, openingHoursSpecification), hreflang, robots.txt, sitemap.xml auto-generated.

---

## Known Open / Deferred

1. **GHL reviews widget on homepage** — sometimes renders blank. Might need the widget ID built in GHL Reputation → Widgets. Or fall back to static `<Testimonials />` component (already styled, just swap in `src/app/page.tsx`).
2. **"See Us in Action" video** — currently uses GHL-hosted MP4 (hash `695ef8a5a0a4841591294f70`). Austin didn't love it. Alternatives: Instagram reel embed (tried — rendered blank in a card), replace with a static photo + Follow-on-IG CTA.
3. **Test contacts in GHL** — should be deleted after Austin confirms: `zKNaAIS*`, `tK8wACc*`, `TUG3LWGq*`, `P1a79g2p*`
4. **DNS cutover** — not done yet. Add `libertymovesorlando.com` to Vercel project's Domains when Austin is ready.

---

## Deployment Commands

```bash
# From /Users/reviveagency/liberty-moves-orlando-build

# Build locally
npx next build

# Deploy to Vercel (Revive Sites team)
vercel --prod --yes --scope=revive-sites

# Set alias to clean URL
vercel alias set liberty-moves-orlando-{hash}-revive-sites.vercel.app liberty-moves-orlando.vercel.app --scope=revive-sites

# Deploy edge function (from /Users/reviveagency/revive-os-a3fd187b)
supabase functions deploy liberty-moves-lead --no-verify-jwt --project-ref trqqskzmqzhwdjpbeqrq
```

---

## Required CLI auth on the new machine

- **gh** — authed as `austin833` with `repo`, `read:org`, `workflow` scopes
- **vercel** — logged into `austin833` account with access to `revive-sites` team
- **supabase** — logged in with access to project `trqqskzmqzhwdjpbeqrq`
- **node** v20+ (used v25 on dev machine)

If any of these aren't logged in on the new machine, Austin needs to:
```bash
gh auth login
vercel login
supabase login
```

---

## File Map

```
/Users/reviveagency/liberty-moves-orlando-build/      ← this site's source
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/quote/route.ts  # Form submission → Supabase edge fn
│   │   ├── page.tsx            # Homepage
│   │   └── {route}/page.tsx    # All other pages
│   ├── components/
│   │   ├── QuoteForm.tsx       # Native form (replaced broken GHL iframe)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sections/           # All homepage sections
│   └── lib/
│       ├── site.ts             # Single source of truth: SITE, CITIES, SERVICES, NAV
│       └── images.ts           # GHL-hosted image URL helpers + IMG mapping
├── scripts/                    # Build-time scripts (scrape, fix-unicode, gen city pages)
├── SITE_CONFIG.md              # Per-client config (filled out)
├── HANDOFF.md                  # ← this file
└── CLAUDE.md                   # Template instructions (from revive-site-template)

/Users/reviveagency/revive-os-a3fd187b/supabase/functions/
├── liberty-moves-lead/         # Production: form → GHL contact create
└── liberty-moves-lead-fields/  # Diagnostic: list fields / fetch contact
```

---

## How to continue on another machine

1. Clone: `gh repo clone Revive-Sites/liberty-moves-orlando`
2. `cd liberty-moves-orlando && npm install`
3. Link Vercel: `vercel link --scope=revive-sites --project=liberty-moves-orlando`
4. Read this file (`HANDOFF.md`) — it has everything.
5. Point Claude Code at this repo and tell it: *"Read HANDOFF.md — it contains full context of this project."*

Current todos / recommended next session:
- [ ] Swap GHL reviews widget for static `<Testimonials />` on homepage (reliability)
- [ ] Replace "See Us in Action" stock video with real photo + IG CTA
- [ ] DNS cutover when client approves
- [ ] Wire up remaining GHL fields (What Type Of Move / How Big / How Heard)
- [ ] Accessibility pass (keyboard nav, focus states, contrast)
- [ ] Add GA4 enhanced ecommerce / conversion tracking
