import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import RelatedCities from '@/components/sections/RelatedCities';
import TLDR from '@/components/sections/TLDR';
import { SITE, SERVICES, CITIES, type City } from '@/lib/site';
import { CheckCircle2, MapPin, Home, DollarSign, Route } from 'lucide-react';

export default function CityPage({ city }: { city: City }) {
  const { name, region, blurb, zips, neighborhoods, homeTypes, priceRange, distanceFromDowntown, localNote } = city;

  const faqs = [
    { q: `How much does a local move cost in ${name}, FL?`, a: `${name} local moves at Liberty Moves Orlando typically run ${priceRange}. Pricing is based on crew size, truck size, hours worked, and any specialty items. Every quote is in writing and includes pads, wrap, dollies, and basic disassembly/reassembly of furniture. No hidden fees, no surprise fuel charges.` },
    { q: `Do you serve all of ${name}?`, a: `Yes — we serve every neighborhood in ${name}, including ${neighborhoods.slice(0, 4).join(', ')}, and surrounding ${region}. Our crews are locally based and know the streets, HOAs, gate codes, and building requirements.` },
    { q: `What areas are near ${name} that you also move?`, a: `We cover all of Central Florida. Nearby areas we frequently move include Orlando proper, ${CITIES.filter((c) => c.region === region && c.slug !== city.slug).slice(0, 4).map((c) => c.name).join(', ')}, and every city along the I-4 corridor.` },
    { q: `How far in advance should I book a ${name} move?`, a: `2–3 weeks ahead is ideal for weekday moves. Weekend and end-of-month dates book first and fill up 3–4 weeks out. If you need something sooner, call us — we can often fit emergency moves within 48–72 hours.` },
    { q: `Are you licensed to move in ${name}?`, a: `Yes — Liberty Moves Orlando is licensed by the U.S. Department of Transportation (USDOT ${SITE.usdot}), fully bonded and insured with cargo and liability coverage. We provide certificates of insurance for HOAs and buildings on request.` },
    { q: `Do you move large or specialty items in ${name}?`, a: 'Yes. Pianos (most uprights), gun safes, pool tables, exercise equipment, large aquariums, and heavy outdoor items. Grand pianos and 1,000+ lb safes require a specialty crew — we’ll tell you up front if we’re the right fit.' },
  ];

  const zipList = zips.join(', ');
  const nearby = CITIES
    .filter((c) => c.region === region && c.slug !== city.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${name} Movers`}
        title={`${name} movers you can actually trust.`}
        subtitle={`Liberty Moves Orlando is the ${name}, FL moving company local families and businesses call first. Licensed, insured (USDOT ${SITE.usdot}), upfront pricing, careful crews — serving every neighborhood in ${name}.`}
      />

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR
            title={`Moving in ${name}? Start here.`}
            points={[
              `Local ${name} moves: ${priceRange}, all-in, no surprise fees`,
              `Licensed & insured — USDOT ${SITE.usdot}`,
              `Same-day service available, 98% of jobs finish in one day`,
              `All ${name} neighborhoods & zip codes (${zipList})`,
              `Free, written quote in minutes — call ${SITE.phoneDisplay}`,
            ]}
          />

          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Professional moving services in {name}, FL</h2>
            <p>
              {name} is one of {region}’s most distinctive communities — {distanceFromDowntown}, with a character all its own. {blurb} At Liberty Moves Orlando, we’ve moved hundreds of families and businesses in and out of {name}, and we know what makes a {name} move different. {localNote}
            </p>
            <p>
              Whether you’re relocating within {name}, moving here from another city, or heading out of state, we handle the job with the same care we’d expect for our own families. We show up when we say we will, we price what we quote, and we treat every box, couch, and piece of art like it’s ours. That’s the promise on every job, from a one-bedroom apartment to a 5,000-square-foot home.
            </p>

            <h3 className="text-xl md:text-2xl font-extrabold mt-10">{name} neighborhoods we serve</h3>
            <p>
              Our {name} crews work every corner of the city, from the established communities to the newest developments. Neighborhoods we regularly serve include:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mt-4">
              {neighborhoods.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm">
                  <MapPin size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We also serve zip codes <strong>{zipList}</strong> and every address in between. If you’re on the border with another city — no problem, we cover all of Central Florida.
            </p>

            <h3 className="text-xl md:text-2xl font-extrabold mt-10">{name} moving costs: what to expect</h3>
            <p>
              Moving costs in {name} vary by crew size, truck size, hours worked, and any specialty requirements. For most local moves, expect <strong>{priceRange}</strong>. That’s the all-in price — we don’t charge separately for pads, shrink wrap, dollies, basic disassembly of furniture, or mileage within the metro area.
            </p>
            <p>
              Larger homes, long-distance moves, packing services, and specialty items (pianos, safes, art) cost more. We provide a written, itemized quote before you book so you know the total before a single box is loaded.
            </p>

            <h3 className="text-xl md:text-2xl font-extrabold mt-10">{name} homes we specialize in moving</h3>
            <p><strong>Typical {name} properties:</strong> {homeTypes}.</p>
            <p>
              Every home type has its quirks. Historic homes have narrow staircases and small doorways. Luxury estates have long driveways, lakefronts, and valuable art that needs specialty crating. New-construction homes need closing-day timing coordination with builders. Our crews have seen it all and come prepared.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center">
              <MapPin className="mx-auto text-[var(--color-accent)]" size={26}/>
              <div className="mt-2 text-xs uppercase tracking-widest text-[var(--color-muted)]">Region</div>
              <div className="mt-1 font-bold text-[var(--color-primary)]">{region}</div>
            </div>
            <div className="card text-center">
              <Home className="mx-auto text-[var(--color-accent)]" size={26}/>
              <div className="mt-2 text-xs uppercase tracking-widest text-[var(--color-muted)]">Zip Codes</div>
              <div className="mt-1 font-bold text-[var(--color-primary)] text-sm">{zipList}</div>
            </div>
            <div className="card text-center">
              <DollarSign className="mx-auto text-[var(--color-accent)]" size={26}/>
              <div className="mt-2 text-xs uppercase tracking-widest text-[var(--color-muted)]">Local Move</div>
              <div className="mt-1 font-bold text-[var(--color-primary)] text-sm">{priceRange}</div>
            </div>
            <div className="card text-center">
              <Route className="mx-auto text-[var(--color-accent)]" size={26}/>
              <div className="mt-2 text-xs uppercase tracking-widest text-[var(--color-muted)]">From Orlando</div>
              <div className="mt-1 font-bold text-[var(--color-primary)] text-sm">{distanceFromDowntown}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-site grid md:grid-cols-3 gap-5">
          {[
            { t: 'Upfront pricing', d: `Your ${name} quote is your price. No surprise fuel, stair, or long-carry fees.` },
            { t: 'Local knowledge', d: `We know ${name} — gated communities, HOAs, narrow streets, elevators, and gate codes.` },
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

      <Services services={SERVICES} title={`Moving services in ${name}`} subtitle={`All Liberty Moves Orlando services are available for ${name} residents and businesses.`} />

      {nearby.length > 0 && (
        <section className="section-pad bg-[var(--color-surface)]">
          <div className="container-site">
            <h2 className="text-2xl md:text-4xl font-extrabold">{name} is next to these cities — we serve them all.</h2>
            <p className="mt-3 text-[var(--color-muted)] max-w-2xl">Moving between {name} and a neighboring city? We do local moves across {region} every week. Click a nearby city for area-specific info and pricing.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {nearby.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="card group block">
                  <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest">{c.region}</div>
                  <div className="mt-1 text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{c.name} Movers</div>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{c.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhyUs />
      <Testimonials />
      <FAQ items={faqs} />
      <RelatedCities currentSlug={city.slug} count={9} />
      <CTA title={`Ready to move in ${name}?`} subtitle={`Call, text, or request a quote online. We’ll send a written estimate within the day.`} />
    </>
  );
}
