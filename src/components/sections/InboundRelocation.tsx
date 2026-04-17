import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { CheckCircle2 } from 'lucide-react';

export type OriginCity = {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  distanceMiles: number;
  driveDays: string;
  twoBedCost: string;
  threeBedCost: string;
  why: string[];
  weatherNote: string;
  taxNote: string;
  tipsLocal: string[];
};

export default function InboundRelocationPage({ origin }: { origin: OriginCity }) {
  const pageUrl = `${SITE.url}/moving-to-orlando-from-${origin.slug}`;

  const faqs = [
    { q: `How much does it cost to move from ${origin.city} to Orlando?`, a: `A 2-bedroom move from ${origin.city} to Orlando typically runs ${origin.twoBedCost}. A 3-bedroom is ${origin.threeBedCost}. These are binding-estimate ranges and include packing if elected. Exact pricing depends on weight, access, and services.` },
    { q: `How long does a ${origin.city} to Orlando move take?`, a: `Typical transit is ${origin.driveDays}. Liberty Moves Orlando drives direct — one truck, one crew, same people from your ${origin.city} home to your Orlando home. No warehouse transfers, no third-party handoffs.` },
    { q: `When should I book my ${origin.city} to Orlando move?`, a: '4–6 weeks ahead is ideal for long-distance moves. Summer and end-of-month dates fill first. If you need sooner, call us — we often accommodate shorter notice for committed movers.' },
    { q: `Do I need to be licensed to move from ${origin.stateCode} to Florida?`, a: 'No — but your mover does. Interstate moves require a USDOT license from the FMCSA. Liberty Moves Orlando is USDOT 3455436 and fully authorized for interstate moves. Verify any interstate mover at safer.fmcsa.dot.gov.' },
    { q: `Can you pack my ${origin.city} home?`, a: 'Yes — full or partial packing is available. For long-distance moves, we strongly recommend professional packing: it reduces damage risk and ensures correct labeling for quick unpacking.' },
    { q: `What about my car?`, a: 'We can coordinate auto transport with trusted partner carriers if you don\u2019t want to drive your vehicle down. Shipping a car from the ' + origin.stateCode + ' to Florida typically runs $800–$1,500 and takes 3–7 days.' },
  ];

  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Long Distance', url: `${SITE.url}/long-distance-moving` },
        { name: `From ${origin.city}`, url: pageUrl },
      ]} />
      <FAQLd items={faqs} />
      <ServiceLd
        name={`Moving from ${origin.city} to Orlando`}
        slug={`moving-to-orlando-from-${origin.slug}`}
        description={`Long-distance moving services from ${origin.city}, ${origin.stateCode} to Orlando, FL. Direct delivery, binding estimates, licensed carriers.`}
      />

      <PageHero
        eyebrow={`Long Distance · ${origin.city} → Orlando`}
        title={`Moving to Orlando from ${origin.city}?`}
        subtitle={`Liberty Moves Orlando handles ${origin.city}-to-Orlando relocations with direct delivery, binding written estimates, and the same crew door-to-door. Licensed interstate under USDOT ${SITE.usdot}.`}
      />

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR
            title="Quick facts"
            points={[
              `Distance: ${origin.distanceMiles.toLocaleString()} miles`,
              `Transit time: ${origin.driveDays}`,
              `2-bedroom move: ${origin.twoBedCost}`,
              `3-bedroom move: ${origin.threeBedCost}`,
              'Direct delivery — no warehouse transfers',
            ]}
          />

          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Why Orlando? (If you\u2019re on the fence.)</h2>
            <ul className="mt-4 space-y-2">
              {origin.why.map((w) => (
                <li key={w} className="flex items-start gap-2"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20}/><span>{w}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">What a {origin.city}-to-Orlando move actually costs</h2>
            <p>Long-distance moves are priced by weight + distance. From {origin.city} ({origin.distanceMiles} miles to Orlando), you can expect:</p>
            <ul className="mt-4 space-y-1">
              <li><strong>Studio / 1-bedroom:</strong> ~{origin.twoBedCost.replace(/\$[\d,]+/, (m) => m).split('–')[0]} (lower end)</li>
              <li><strong>2-bedroom:</strong> {origin.twoBedCost}</li>
              <li><strong>3-bedroom:</strong> {origin.threeBedCost}</li>
              <li><strong>4+ bedroom:</strong> Binding estimate after in-home or video walk-through</li>
            </ul>
            <p className="mt-4">Prices include truck, crew, padding, basic disassembly, and direct transport. Full packing is available as a separate line item.</p>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">How long is the drive?</h2>
            <p>From {origin.city}, Orlando is <strong>{origin.driveDays}</strong> in a professional moving truck (with proper rest stops and DOT hours-of-service compliance). We drive direct — your crew at origin is the same crew at destination, no handoffs.</p>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Things to know about moving {origin.stateCode} → FL</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="card">
                <h3 className="font-bold text-[var(--color-primary)]">Weather shock</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{origin.weatherNote}</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-[var(--color-primary)]">Tax & registration</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{origin.taxNote}</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Specific tips for {origin.city} movers</h2>
            <ul className="mt-4 space-y-2">
              {origin.tipsLocal.map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={18}/><span>{t}</span></li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Ready to get your binding {origin.city}-to-Orlando estimate?</h2>
            <p>Fill out the quote form or call us. We\u2019ll schedule a quick in-home or video walk-through and send a written, binding price. No surprises, no high-pressure sales.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Get my binding quote</Link>
              <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <Testimonials />
      <CTA title={`Moving from ${origin.city}? Let\u2019s make it easy.`} />
    </>
  );
}
