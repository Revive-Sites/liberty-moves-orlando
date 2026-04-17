import PageHero from '@/components/sections/PageHero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import { SERVICES } from '@/lib/site';
import { CheckCircle2 } from 'lucide-react';

export default function CityPage({
  name,
  region,
  blurb,
}: { name: string; region: string; blurb: string }) {
  const faqs = [
    { q: `How much does a move cost in ${name}?`, a: `Local ${name} moves are priced hourly: 2-bed homes typically run $600–$1,200; 3–4 bed homes $1,300–$2,500. Final pricing depends on crew size, truck size, and specifics like stairs or long carries. We quote every ${name} move in writing before you book.` },
    { q: `Do you serve the whole ${region} area?`, a: `Yes — we cover ${name} and every neighborhood across ${region}. Our crews know the area, the HOAs, and the local building requirements.` },
    { q: `How far in advance should I book a ${name} move?`, a: '2–3 weeks for weekday moves, 3–4 weeks for weekends. End-of-month dates book first. If you’re flexible by a few days, we can almost always find space.' },
    { q: 'Are you licensed and insured in Florida?', a: 'Yes — USDOT 3455436. Fully licensed, bonded, and insured. COIs for HOAs and buildings available on request.' },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${name} Movers`}
        title={`Trusted movers in ${name}, FL.`}
        subtitle={blurb}
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl prose-ink">
          <p>Looking for reliable movers in <strong>{name}</strong>? Liberty Moves Orlando serves every neighborhood in {name} and across {region}, with local crews who know the streets, the HOAs, and the quirks of your building. Whether you’re moving into a {name} home, relocating an office, or heading out on a long-distance move, we handle it with upfront pricing and careful, professional service.</p>
          <p>We’re a licensed, family-run moving company — USDOT 3455436 — and we’ve built our reputation on showing up when we say we will, pricing what we quote, and treating every {name} family’s belongings like they’re our own. No high-pressure sales, no surprise fees, no rushed crews.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-site grid md:grid-cols-3 gap-5">
          {[
            { t: 'Upfront pricing', d: `Your ${name} quote is your price. No surprise fuel, stair, or long-carry fees.` },
            { t: 'Local knowledge', d: `We know ${name} — gated communities, HOAs, narrow streets, apartment elevators.` },
            { t: 'Same-day moves', d: `98% of local ${name} moves finish same-day, usually with time to spare.` },
          ].map((b) => (
            <div key={b.t} className="card">
              <CheckCircle2 className="text-[var(--color-accent)]" size={22} />
              <h3 className="mt-3 text-lg font-bold text-[var(--color-primary)]">{b.t}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Services services={SERVICES} title={`Moving services in ${name}`} subtitle={`Whatever you need moved, we move it — serving every corner of ${name} and ${region}.`} />
      <WhyUs />
      <Testimonials />
      <FAQ items={faqs} />
      <CTA title={`Ready to move in ${name}?`} subtitle={`We’ll send a written quote within the day. No pressure, no games.`} />
    </>
  );
}
