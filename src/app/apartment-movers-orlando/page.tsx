import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

const FAQS = [
  { q: 'How much does it cost to move a 1-bedroom apartment in Orlando?', a: '1-bedroom apartment moves in Orlando typically run $500–$900 with a 2-person crew over 3–5 hours. 2-bedroom apartments average $650–$1,100 with 2–3 movers over 4–6 hours. Stairs or long carries may add time.' },
  { q: 'Can you handle apartment elevators and HOA coordination?', a: 'Yes — we pre-coordinate elevator reservations, provide certificates of insurance to your building, and block the service elevator for the time needed. You tell us your building’s policies, we handle the rest.' },
  { q: 'Do you move walk-up apartments (no elevator)?', a: 'Yes. We have experience with 3rd and 4th floor walk-ups. Stairs add time but not huge cost — figure on an extra 30–60 minutes for a typical walk-up.' },
  { q: 'How much notice do I need for an apartment move?', a: '1–2 weeks for weekday moves; 3 weeks for weekends. Studio and 1-bed apartments are often available 48–72 hours out. Call early for month-end dates.' },
  { q: 'Can you move me out of one apartment and into another on the same day?', a: 'Yes — apartment-to-apartment moves are our bread and butter. One crew, one truck, one trip. We typically finish a 1–2 bedroom apartment-to-apartment move in 4–7 hours.' },
];

export const metadata = {
  title: 'Apartment Movers Orlando | Apartment Moving Company',
  description:
    'Orlando apartment movers for 1, 2, 3-bedroom apartments. Elevator & HOA coordination, walk-up experts, written pricing. Free quote in minutes.',
  alternates: { canonical: `${SITE.url}/apartment-movers-orlando` },
};

export default function ApartmentMovers() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Apartment Movers', url: `${SITE.url}/apartment-movers-orlando` }]} />
      <FAQLd items={FAQS} />
      <ServiceLd name="Apartment Moving" slug="apartment-movers-orlando" description="Orlando apartment movers with elevator coordination, HOA-awareness, and walk-up experience. Studios through 3-bedroom apartments." />
      <PageHero
        eyebrow="Apartment Movers"
        title="Orlando apartment movers who don’t sweat the elevator."
        subtitle="Studios to 3-bedroom apartments. We handle HOA paperwork, elevator reservations, walk-ups, and tight hallways — so you don’t have to."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR points={[
            'Studio: $400–$700 · 1-bed: $500–$900 · 2-bed: $650–$1,100',
            'Elevator reservations & COIs handled for you',
            'Walk-up buildings — no problem',
            'Same-day apartment-to-apartment moves',
            'Same crew from load to unload',
          ]} />
          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">What apartment moves in Orlando actually cost</h2>
            <p>Apartment moves are some of the most predictable in the business — we’ve done thousands. A studio takes 2 movers 3–4 hours. A 1-bed apartment takes 2 movers 3–5 hours. A 2-bed apartment takes 2–3 movers 4–6 hours. Pricing follows those hours at standard Orlando rates ($130–$230/hr depending on crew size), truck and basic materials included.</p>
            <p>What changes the price? Elevators vs stairs, long carry from apartment to truck, how packed your stuff is when we arrive, and whether you need packing help. We factor all of that in the written quote before you book.</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">We handle your building for you</h2>
            <p>Orlando apartment buildings range from laid-back walk-ups in College Park to high-rise condos in Altamonte Springs with strict elevator rules. Every building is different. What we handle for you:</p>
            <ul className="mt-4 space-y-1">
              <li>• Certificate of insurance (COI) issued to your landlord or building</li>
              <li>• Elevator reservation coordination</li>
              <li>• Loading dock or service entry scheduling</li>
              <li>• HOA notification and move-hour compliance</li>
              <li>• Parking permits (if your building requires them)</li>
            </ul>
            <p className="mt-4">Tell us your building’s name and address — we probably already know the rules.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Quote my apartment move</Link>
              <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={FAQS} />
      <Testimonials />
      <CTA />
    </>
  );
}
