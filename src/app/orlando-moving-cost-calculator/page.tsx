import CostCalculator from '@/components/sections/CostCalculator';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import Testimonials from '@/components/sections/Testimonials';
import { BreadcrumbsLd, LocalBusinessLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Orlando Moving Cost Calculator — Instant Price Estimate',
  description: 'Free Orlando moving cost calculator. Drag the options for home size, move type, packing, and stairs — get an instant price range. No email required.',
  alternates: { canonical: `${SITE.url}/orlando-moving-cost-calculator` },
};

export default function CalculatorPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Moving Cost Calculator', url: `${SITE.url}/orlando-moving-cost-calculator` },
      ]} />
      <PageHero
        eyebrow="Moving Cost Calculator"
        title="Get your Orlando moving price in 15 seconds."
        subtitle="No email. No sales call. Drag the options, see real pricing. Based on Liberty Moves Orlando's actual 2026 rates."
      />
      <CostCalculator />
      <section className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <h2 className="text-2xl md:text-3xl font-extrabold">How the calculator works</h2>
          <p>The calculator uses our real 2026 Orlando hourly rates ($130–$290/hr depending on crew size), combined with typical home-size job durations and modifiers for stairs, packing services, and long-distance weight + mileage. It returns a conservative range — the kind of answer we’d give you over the phone.</p>
          <p>When you’re ready for a binding, written number, request a quote. We’ll reply within the hour with your actual price, locked in writing, no surprises.</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-10">What it doesn’t include</h2>
          <ul className="mt-3 space-y-1">
            <li>• Specialty items (pianos, safes, pool tables) — quoted separately</li>
            <li>• Out-of-state licensing fees (varies by state for long-distance)</li>
            <li>• Storage-in-transit if dates don’t align — we’ll quote separately</li>
          </ul>
          <p className="mt-4">See our full <Link href="/orlando-moving-cost" className="underline text-[var(--color-accent)]">pricing guide</Link> for detailed tables, or <Link href="/contact-us" className="underline text-[var(--color-accent)]">request a written quote</Link>.</p>
        </div>
      </section>
      <Testimonials />
      <CTA title="Ready for the exact number?" subtitle="A free written quote beats a calculator range. We'll send one within the day." />
    </>
  );
}
