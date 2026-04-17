import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Orlando Moving Checklist — 8 Weeks to Move-In Day',
  description: 'Complete 8-week Orlando moving checklist. Week-by-week tasks, Florida-specific tips, packing timeline, and what to do on move day.',
  alternates: { canonical: `${SITE.url}/blog/orlando-moving-checklist` },
};

export default function Post() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Moving Checklist', url: `${SITE.url}/blog/orlando-moving-checklist` }]} />
      <PageHero eyebrow="Planning Guide · January 2026" title="The Complete Orlando Moving Checklist" subtitle="An 8-week countdown with week-by-week tasks, Florida-specific tips, and what to do on move day itself." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            '8 weeks before: research movers, get 3 quotes',
            '6 weeks: book mover, order boxes, start purging',
            '4 weeks: change address, notify utilities',
            '2 weeks: pack non-essentials, arrange pets',
            'Week of: confirm everything, pack essentials box',
          ]} />

          <h2>8 weeks before move day</h2>
          <ul>
            <li>Research Orlando movers — get 3 written quotes</li>
            <li>Verify each mover\u2019s USDOT (safer.fmcsa.dot.gov) and FLDACS IM# for intrastate FL moves</li>
            <li>Create a move folder: estimates, receipts, inventory</li>
            <li>If you have kids: schedule school transfers now</li>
            <li>Start purging closets — every item you don\u2019t move saves you money</li>
          </ul>

          <h2>6 weeks before</h2>
          <ul>
            <li>Book your chosen mover — weekends fill first</li>
            <li>Order moving boxes (or schedule pickup from mover)</li>
            <li>Begin packing non-essentials: out-of-season clothes, books, decor</li>
            <li>Start using up pantry food and cleaning products — don\u2019t move them</li>
          </ul>

          <h2>4 weeks before</h2>
          <ul>
            <li>Submit USPS change of address (usps.com/move)</li>
            <li>Update address with: bank, credit cards, insurance, employer, DMV, voter registration</li>
            <li>Schedule utility shutoffs at origin + setup at destination (electric, water, gas, internet)</li>
            <li>If moving to Orlando: schedule new-home utility connections for the day before arrival</li>
            <li>Research Orlando schools, doctors, dentists — make appointments</li>
          </ul>

          <h2>2 weeks before</h2>
          <ul>
            <li>Pack everything except daily essentials</li>
            <li>Arrange care/boarding for pets during move day</li>
            <li>Confirm mover arrival time and payment method</li>
            <li>Get any medications refilled — 90-day supply if possible</li>
            <li>Dispose of: hazmat (propane, paint, gasoline), plants going out of state, frozen food you won\u2019t use</li>
          </ul>

          <h2>Week of the move</h2>
          <ul>
            <li>Confirm mover 48 hours ahead</li>
            <li>Pack an \u201cessentials box\u201d: toiletries, 2 days of clothes, chargers, medications, important documents, snacks, pet supplies</li>
            <li>Defrost freezer 24 hours before move</li>
            <li>Take photos of electronics cable setups before disconnecting</li>
            <li>Withdraw cash for tips ($20–$40 per mover is typical Orlando tip on a move day)</li>
          </ul>

          <h2>Move day in Orlando</h2>
          <ul>
            <li>Start early — 7am if crew arrives at 8am. Florida heat peaks after 2pm</li>
            <li>Keep cold water and Gatorade stocked — tip: 1 per mover per hour</li>
            <li>Keep your essentials box in your car, not the truck</li>
            <li>Walk through origin with foreman before crew departs — verify nothing left behind</li>
            <li>At destination: direct where each box/furniture piece goes as it comes off truck</li>
            <li>Tip the crew after work is done — cash or Venmo ($5–$10/hour per mover)</li>
          </ul>

          <h2>First week after move</h2>
          <ul>
            <li>Update Florida driver\u2019s license within 30 days (if moving from out of state)</li>
            <li>Register vehicle in Florida within 30 days</li>
            <li>Update voter registration</li>
            <li>Meet neighbors — Orlando neighborhoods are friendly</li>
            <li>File any damage claims with mover within 30 days (typical claim window)</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Get my free Orlando quote</Link>
            <Link href="/orlando-moving-cost" className="btn btn-outline">Orlando pricing guide</Link>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
