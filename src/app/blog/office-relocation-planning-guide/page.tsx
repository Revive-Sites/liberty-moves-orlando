import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Office Relocation Planning Guide — Zero Downtime Playbook',
  description: 'Step-by-step office relocation playbook: IT coordination, landlord coordination, timeline, COIs, and how to minimize downtime.',
  alternates: { canonical: `${SITE.url}/blog/office-relocation-planning-guide` },
};

export default function Post() {
  return (
    <>
      <BlogPostingLd slug="office-relocation-planning-guide" title="Office Relocation Planning Guide" description="Step-by-step playbook to minimize downtime and coordinate IT, landlords, and staff." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Office Relocation', url: `${SITE.url}/blog/office-relocation-planning-guide` }]} />
      <PageHero eyebrow="Commercial Guide · January 2026" title="Office Relocation Planning Guide" subtitle="The step-by-step playbook commercial real estate managers and operations directors actually follow to move an office with zero downtime." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Start planning 90+ days before target move date',
            'IT coordination is the longest pole — start there',
            'Weekend moves (Fri night–Sun) minimize downtime',
            'COIs to both landlords — 2 weeks before',
            'Have a Day 1 recovery plan at new office',
          ]} />

          <h2>90 days out — Strategy</h2>
          <ul>
            <li>Finalize new lease and move-in date</li>
            <li>Lock budget (typically $1–$2/sqft for commercial moves in Orlando)</li>
            <li>Get 3 written quotes from commercial movers</li>
            <li>Name an internal move lead (not the CEO, not the office manager juggling everything — dedicated person)</li>
            <li>Communicate move to staff — set expectations, not details yet</li>
          </ul>

          <h2>60 days out — IT & Infrastructure</h2>
          <ul>
            <li>Order internet / fiber at new office — this is often the 60-day bottleneck</li>
            <li>Plan server rack decommission and reinstall</li>
            <li>Schedule IT vendor walkthroughs at both locations</li>
            <li>Order new furniture if needed — 8+ week lead times common</li>
            <li>Begin space planning — seating charts, meeting room assignments</li>
          </ul>

          <h2>30 days out — Logistics</h2>
          <ul>
            <li>Book your moving company (Liberty Moves Orlando handles commercial weekends regularly)</li>
            <li>Submit COI requests to both landlords</li>
            <li>Schedule elevator reservations and loading dock access</li>
            <li>Order moving boxes, labels, tape (or get from mover at cost)</li>
            <li>Update business address: bank, insurance, licenses, Secretary of State, Google Business Profile</li>
            <li>Update vendor notifications: UPS, FedEx, suppliers, mail forwarding</li>
          </ul>

          <h2>2 weeks out — Execution prep</h2>
          <ul>
            <li>Start staff self-packing of desks (personal items, books, files)</li>
            <li>Final walkthrough with mover — confirm access, parking, scope</li>
            <li>Label everything with destination room/desk</li>
            <li>IT: begin backup + decommission plan</li>
            <li>Cancel/reroute utility and service accounts</li>
          </ul>

          <h2>Move weekend — Execution</h2>
          <ul>
            <li><strong>Friday 5pm:</strong> Staff out. Movers start. IT pulls backup drives.</li>
            <li><strong>Saturday:</strong> Pack + load old office. Furniture disassembly. Truck to new office. Install at new location.</li>
            <li><strong>Sunday:</strong> IT reconnects — network, servers, phone, printers. Test everything. Fix missing items.</li>
            <li><strong>Monday 8am:</strong> Staff arrive. Orientation. Business runs.</li>
          </ul>

          <h2>Week 1 at new location</h2>
          <ul>
            <li>Walk every desk, fix issues, order missing items</li>
            <li>Update directory, reception info, phone extensions</li>
            <li>File any damage claims within 30 days</li>
            <li>Host a team lunch — low-friction morale boost for the chaos</li>
          </ul>

          <h2>Common mistakes to avoid</h2>
          <ul>
            <li><strong>Underestimating IT.</strong> Network and phone are 70% of office-move failures.</li>
            <li><strong>Not getting COIs to landlords early.</strong> Last-minute COIs delay elevator access.</li>
            <li><strong>Letting staff pack their own PCs.</strong> Standardize — IT handles all tech.</li>
            <li><strong>Moving into a half-finished space.</strong> If the new office isn\u2019t ready, delay.</li>
            <li><strong>Skipping the professional mover.</strong> Commercial moves are not a DIY job.</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/commercial-moving" className="btn btn-primary">See our commercial moving service</Link>
            <Link href="/contact-us" className="btn btn-outline">Quote my office move</Link>
          </div>
        </div>
      </article>
      <RelatedPosts currentSlug="office-relocation-planning-guide" />
      <CTA />
    </>
  );
}
