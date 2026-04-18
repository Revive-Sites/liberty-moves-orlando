import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Moving Insurance Explained — What’s Actually Covered',
  description: 'Florida moving insurance types explained — Released Value, Full Value Protection, third-party insurance. What’s covered, what’s not, and how to choose.',
  alternates: { canonical: `${SITE.url}/blog/moving-insurance-explained` },
};

export default function Post() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Moving Insurance', url: `${SITE.url}/blog/moving-insurance-explained` }]} />
      <PageHero eyebrow="Buyer’s Guide · January 2026" title="Moving Insurance, Actually Explained" subtitle="The 3 types of moving protection — Released Value, Full Value, and third-party — and how to pick the right one for your move." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Released Value (free): 60¢/lb per article — a 50lb TV = $30 coverage',
            'Full Value Protection (paid): full replacement or repair',
            'Third-party insurance: high-value items, long-distance moves',
            'Self-packed boxes NOT covered by mover — common gotcha',
            'Declare valuables over $100/lb or face coverage caps',
          ]} />

          <h2>Option 1: Released Value Protection (Free)</h2>
          <p>This is the default coverage every licensed mover provides at no charge. It’s legally required. The catch: coverage is 60¢ per pound per article. A 50-pound TV that gets destroyed? You’re owed $30. A $3,000 leather sofa weighing 120 lbs? $72. Released Value is technically “insurance” but it’s really a liability disclaimer. Good for low-value items, useless for valuable ones.</p>

          <h2>Option 2: Full Value Protection (Paid)</h2>
          <p>For a fee (typically 1–3% of declared value), the mover is liable for the full replacement cost or repair cost of damaged items. If your $3,000 sofa gets ruined, you get $3,000 (or an equivalent replacement). Most reputable movers offer this — Liberty Moves Orlando does. It’s the right coverage for anything more than a local apartment move.</p>

          <h2>Option 3: Third-Party Insurance</h2>
          <p>For extremely high-value items (fine art, antiques over $10k, musical instruments, heirlooms), consider a third-party moving insurance policy. Companies like Baker International, MovingInsurance.com, and Relocation Insurance Group specialize in this. Often cheaper than Full Value Protection for large values and gives you direct claim recourse.</p>

          <h2>What’s NOT covered</h2>
          <ul>
            <li><strong>Self-packed boxes.</strong> If you packed it, the mover isn’t liable. This is the #1 damage claim denial reason. If an item matters, let pros pack it.</li>
            <li><strong>Pre-existing damage.</strong> Walk through with foreman, note any existing damage on inventory before loading.</li>
            <li><strong>Acts of nature.</strong> Hurricanes, floods, earthquakes (not the mover’s fault).</li>
            <li><strong>Normal wear.</strong> Small nicks to items that already had nicks.</li>
            <li><strong>Items of “extraordinary value” not declared.</strong> Items over $100/lb (like jewelry, watches, high-end art) must be declared in writing before the move — otherwise standard coverage caps apply.</li>
          </ul>

          <h2>Making a claim</h2>
          <p>File within 30 days of delivery (most carriers). Photos, inventory reference numbers, and receipts speed up the process. Legitimate claims settle within 1–4 weeks at most reputable movers.</p>

          <h2>How to choose</h2>
          <ul>
            <li><strong>Local move under $2,000 of value:</strong> Released Value (free) is often fine.</li>
            <li><strong>Any home with electronics, art, or antiques:</strong> Full Value Protection.</li>
            <li><strong>Long-distance move:</strong> Full Value Protection mandatory.</li>
            <li><strong>Truly high-value items (jewelry, heirlooms, fine art):</strong> Third-party supplemental insurance.</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Get a quote with coverage options</Link>
            <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
