import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

const FAQS = [
  { q: 'Can you really move me same-day or next-day in Orlando?', a: 'Usually yes, subject to crew availability. Call 407-641-2887 and we’ll tell you honestly within a few minutes whether we can fit you in today or tomorrow. If we can’t, we’ll be upfront instead of wasting your time.' },
  { q: 'Is same-day moving more expensive?', a: 'Slightly — last-minute and same-day moves typically carry a 10–15% urgency premium because we’re shifting crews around other bookings. Still cheaper than re-negotiating your closing or paying an extra month’s rent.' },
  { q: 'What if I need to move within 48 hours?', a: 'Very doable. Many of our emergency moves fall in the 24–72 hour window. We’ve handled evictions, sudden job transfers, closing-day surprises, and post-hurricane emergency moves. Call and we’ll make it work if we can.' },
  { q: 'Are same-day moves as safe as planned moves?', a: 'Yes. Same crew, same equipment, same pads, same care. The only difference is we skip the extended walk-through planning — you tell us what’s happening, we bring the right crew and truck, and we work fast but carefully.' },
  { q: 'What if my last-minute move needs packing too?', a: 'We can bring packing materials and pack-as-we-go for smaller jobs. For larger last-minute moves, we’ll recommend packing the night before or doing it yourself to control cost.' },
];

export const metadata = {
  title: 'Last Minute Movers Orlando | Same-Day Moving Service',
  description:
    'Need movers today or tomorrow in Orlando? Liberty Moves Orlando handles same-day and emergency moves. Licensed, insured, honest pricing. Call 407-641-2887.',
  alternates: { canonical: `${SITE.url}/last-minute-movers-orlando` },
};

export default function LastMinuteMovers() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Last Minute Movers', url: `${SITE.url}/last-minute-movers-orlando` }]} />
      <FAQLd items={FAQS} />
      <ServiceLd name="Last Minute Moving" slug="last-minute-movers-orlando" description="Same-day and next-day emergency moving in Orlando and Central Florida." priceRange="$$" />
      <PageHero
        eyebrow="Last Minute Movers"
        title="Need to move today? We’ve got you."
        subtitle="Same-day and next-day Orlando moves handled by the same licensed, insured crews that show up for our scheduled jobs. Call now — we’ll tell you honestly if we can fit you in."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR points={[
            'Same-day and next-day moves available 7 days a week',
            'Typical response time: honest answer within 15 minutes',
            'Slight urgency premium (~10–15%) vs. planned moves',
            'Licensed, insured — same crews, same equipment, same care',
            'Call 407-641-2887 for emergency moves',
          ]} />
          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">When life makes moving urgent</h2>
            <p>Closings get pushed. Landlords change the rules. Jobs relocate. Relationships end. A tree falls on the house. Sometimes the move that was going to happen next month needs to happen today, and the three-week notice your mover wanted doesn’t matter anymore.</p>
            <p>Liberty Moves Orlando runs dedicated emergency-response crews for exactly these situations. We’re not cheap, but we’re available, we’re fast, and we’re honest. The same licensed, insured team that shows up for planned moves shows up for same-day ones — no bait-and-switch with unvetted day laborers.</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">How last-minute moves work</h2>
            <ol className="mt-4 space-y-2 list-decimal list-inside">
              <li>Call or text 407-641-2887. We answer fast.</li>
              <li>Tell us the basics: home size, origin, destination, timeline.</li>
              <li>Within 15 minutes, we give you an honest yes/no and a firm price.</li>
              <li>If yes, we dispatch the nearest available crew.</li>
              <li>Move gets done. You pay on completion. Simple.</li>
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneLink} className="btn btn-primary">Call now — {SITE.phoneDisplay}</a>
              <Link href="/contact-us" className="btn btn-outline">Or request online</Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={FAQS} />
      <Testimonials />
      <CTA title="Every minute counts on an emergency move." subtitle="Call us right now and we’ll tell you in 15 minutes whether we can get you moved today or tomorrow." />
    </>
  );
}
