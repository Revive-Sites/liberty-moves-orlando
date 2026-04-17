import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Moving During Hurricane Season in Florida — What to Know',
  description: 'How to safely move during Florida hurricane season (June–November). Monitoring storms, rescheduling rules, what to pack first, and what to insure.',
  alternates: { canonical: `${SITE.url}/blog/moving-during-hurricane-season-florida` },
};

export default function Post() {
  return (
    <>
      <BlogPostingLd slug="moving-during-hurricane-season-florida" title="Moving During Hurricane Season in Florida" description="How to safely move between June 1 and November 30 in Florida." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Hurricane Season Moving', url: `${SITE.url}/blog/moving-during-hurricane-season-florida` }]} />
      <PageHero eyebrow="Safety Guide · January 2026" title="Moving During Hurricane Season in Florida" subtitle="How to plan, monitor storms, and stay safe if your move falls between June 1 and November 30." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Hurricane season runs June 1 – November 30 annually',
            'Peak risk: August – October',
            'Monitor NOAA 5+ days before move date',
            'Most movers accept weather reschedules at no charge',
            'Have a backup date lined up at booking',
          ]} />

          <h2>When hurricane risk actually matters</h2>
          <p>Florida hurricane season officially runs June 1 to November 30. But the real danger window is narrower — <strong>mid-August through October</strong>. Early season (June, July) storms happen but are usually disorganized. Late season (November) storms are rare and weak. If you can pick your dates, avoid September in particular.</p>

          <h2>Monitoring before your move</h2>
          <ul>
            <li><strong>5 days out:</strong> Check NOAA\u2019s National Hurricane Center (nhc.noaa.gov) and the Central Florida weather forecast.</li>
            <li><strong>3 days out:</strong> If anything is in the Gulf or Atlantic that could impact Florida, call your mover to discuss.</li>
            <li><strong>48 hours out:</strong> Decision time. If a named storm is within 72 hours of landfall anywhere near Florida, reschedule.</li>
            <li><strong>24 hours out:</strong> Too late to start a move if a storm is bearing down. Shelter-in-place instead.</li>
          </ul>

          <h2>What to do if you must move during an active threat</h2>
          <p>Sometimes the move date can\u2019t shift — closing day, lease expiration, PCS order. In that case:</p>
          <ul>
            <li>Start earlier in the day — finish before weather worsens</li>
            <li>Skip non-essentials — take the essentials, leave decor for later</li>
            <li>Pack everything that could be damaged by water in plastic first</li>
            <li>Secure the truck at destination; don\u2019t leave it loaded overnight</li>
            <li>Get everything inside and out of yards before any wind arrives</li>
          </ul>

          <h2>Rescheduling rules at most movers</h2>
          <p>Reputable Florida movers don\u2019t charge for weather-forced reschedules when a state or local emergency is declared. Liberty Moves Orlando specifically: free rescheduling when a named storm is within 72 hours of projected Florida landfall. No fees, no fights.</p>

          <h2>What to pack first (for hurricane-zone moves)</h2>
          <p>If there\u2019s any hurricane risk during your move window, prioritize packing items that can\u2019t be replaced:</p>
          <ul>
            <li>Important documents (passports, birth certs, tax records) — waterproof bag, in your car</li>
            <li>Irreplaceable photos, heirlooms, art — first in the truck or first in your car</li>
            <li>Medications for 7 days — in a labeled bag, kept with you</li>
            <li>Electronics — wrapped in plastic before packed</li>
          </ul>

          <h2>Insurance considerations</h2>
          <p>Most mover insurance (Released Value + Full Value Protection) does NOT cover "acts of God" — including hurricanes. If your truck is damaged by a storm in transit, you\u2019re often on your own. Read more in our <Link href="/blog/moving-insurance-explained" className="underline">moving insurance guide</Link>.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Book a safe move date</Link>
            <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </article>
      <RelatedPosts currentSlug="moving-during-hurricane-season-florida" />
      <CTA />
    </>
  );
}
