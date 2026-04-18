import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import TrustCounter from '@/components/sections/TrustCounter';
import DiscountBand from '@/components/sections/DiscountBand';
import LicenseVerify from '@/components/sections/LicenseVerify';
import QuoteWizard from '@/components/sections/QuoteWizard';
import VideoShowcase from '@/components/sections/VideoShowcase';
import CostCalculator from '@/components/sections/CostCalculator';
import Partnerships from '@/components/sections/Partnerships';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServiceAreas from '@/components/sections/ServiceAreas';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Link from 'next/link';
import { LocalBusinessLd, WebsiteLd, FAQLd, ReviewsLd, SpeakableLd } from '@/components/JsonLd';
import { SERVICES, SITE } from '@/lib/site';
import { DollarSign, Clock, Shield, Truck } from 'lucide-react';

const HOME_FAQS = [
  { q: 'How much do movers cost in Orlando?', a: 'Local Orlando moves at Liberty Moves typically run $600–$2,500 depending on home size and crew. A 2-bed apartment averages $650–$1,100. A 3–4 bed home runs $1,200–$2,400. Long-distance moves are priced by weight + distance and quoted with a binding written estimate. See our complete Orlando moving cost guide for detailed tables.' },
  { q: 'Are you licensed and insured to move in Florida?', a: 'Yes. Liberty Moves Orlando is licensed by the U.S. Department of Transportation (USDOT 3455436) with full cargo and liability coverage. We provide certificates of insurance for HOAs and buildings on request, usually same-day.' },
  { q: 'How far in advance should I book Orlando movers?', a: '2–3 weeks ahead for weekday moves, 3–4 weeks for weekends. End-of-month dates fill first. Need to move sooner? Call us — we can often fit same-day or next-day emergency moves.' },
  { q: 'Do you offer same-day or last-minute moves in Orlando?', a: 'Yes — subject to crew availability. 98% of our local Orlando jobs finish same-day. For next-day or emergency moves, call 407-641-2887 and we’ll tell you honestly whether we can fit you in.' },
  { q: 'What Orlando neighborhoods do you serve?', a: 'Every zip code in the Orlando metro. We serve Winter Park, Lake Mary, Kissimmee, Altamonte Springs, Windermere, Celebration, Oviedo, Sanford, Apopka, Winter Garden, and 18 other Central Florida cities — each with a dedicated service page.' },
  { q: 'Do you pack, or just move?', a: 'Both. Full packing (materials + labor), partial packing (just fragiles or kitchen), or move-only. Packing materials are sold at cost, not marked up. If we pack it, we’re responsible for it.' },
  { q: 'How much do you tip movers in Florida?', a: 'Industry standard is $5–$10/hour per mover for good service, or 5%–10% of the total move cost. For a full-day 4-person crew, $80–$120 total is typical. Tipping is never required — quality movers don’t expect it, but they always appreciate it.' },
  { q: 'Do you move long distance from Orlando?', a: 'Yes — anywhere in the continental U.S. One truck, one crew, direct delivery. No warehouse transfers or third-party handlers. Licensed interstate under USDOT 3455436.' },
  { q: 'What do Orlando movers not move?', a: 'Hazardous materials (propane, paint, gasoline, pool chemicals), firearms, perishable food, plants across state lines, and cash/jewelry (always keep those with you). Full non-allowable list sent with every estimate.' },
  { q: 'Do you move pianos, safes, and heavy items in Orlando?', a: 'Yes — most upright pianos, gun safes, pool tables, and gym equipment. Grand pianos and 1,000+ lb safes need a specialty crew — we’ll tell you upfront if we’re the right fit.' },
  { q: 'What’s the best time of year to move in Orlando?', a: 'October through April is easiest: cooler weather, lower humidity, and outside hurricane season (June–November). Summer moves book out fast and get expensive. End-of-month and weekends are always busiest — mid-month weekdays save money.' },
  { q: 'Do you offer free quotes?', a: 'Yes — always free, always in writing, always no-pressure. Call, text, or fill out our form and a real person (not a call center) will reach out within the day with a clear estimate.' },
];

export const metadata = {
  title: 'Orlando Movers | Liberty Moves Orlando — Local & Long Distance Moving',
  description:
    'Orlando movers with upfront pricing and careful crews. Licensed (USDOT 3455436), 5-star rated, serving all of Central Florida. Free quote in minutes — call 407-641-2887.',
  alternates: { canonical: SITE.url },
};

export default function Home() {
  return (
    <>
      <LocalBusinessLd page="home" />
      <WebsiteLd />
      <FAQLd items={HOME_FAQS} />
      <ReviewsLd />
      <SpeakableLd />

      <Hero
        eyebrow="Orlando Moving Company"
        title="Orlando movers who treat your stuff like it’s ours."
        subtitle="Licensed, insured, and 5-star rated. Upfront pricing, careful crews, and no-surprise service from quote to unload. Serving Orlando and all of Central Florida."
      />
      <TrustBadges />
      <DiscountBand />
      <TrustCounter />

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR
            title="Why families pick Liberty"
            points={[
              'Licensed & insured — USDOT 3455436 — with written, binding quotes',
              'Orlando local moves start at $600; 3–4 bed homes $1,200–$2,400',
              'Same-day service on 98% of local moves, 7 days a week',
              'Residential, commercial, long-distance, and packing — one team',
              '18 dedicated Central Florida city pages with neighborhood knowledge',
            ]}
          />

          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">The Orlando moving company families and businesses keep calling back.</h2>
            <p>
              Liberty Moves Orlando is a licensed, family-run moving company based in Orlando, Florida. We serve every corner of Central Florida — from Winter Park and Windermere to Kissimmee, Lake Mary, and the farthest reaches of Osceola, Seminole, Orange, and Lake counties. Our promise is simple: we treat your things like they’re ours, we price what we quote, and we show up when we say we will.
            </p>
            <p>
              We’re licensed by the U.S. Department of Transportation (<strong>USDOT {SITE.usdot}</strong>), fully bonded, and insured with both cargo and liability coverage. Our crews are uniformed, background-checked, and trained — the same people who load your truck are the ones who unload it. For long-distance moves, that same crew drives your things directly to your new home. No warehouse transfers, no third-party handlers, no surprises.
            </p>

            <h3 className="text-xl md:text-2xl font-extrabold mt-10">What makes a Liberty Moves Orlando move different</h3>
            <p>
              Most movers look alike on paper: trucks, crews, a phone number. The difference shows up on move day. We’re obsessed with two things most competitors treat as afterthoughts: <strong>honest pricing</strong> and <strong>careful handling</strong>. Every quote we send is written, itemized, and binding — no surprise fuel charges, stair fees, or long-carry add-ons. Every crew member is trained on how to wrap, pad, dolly, and stack your belongings so nothing gets scratched, broken, or lost. We’d rather move slower and do it right than rush and damage your things.
            </p>
          </div>
        </div>
      </section>

      <Services services={SERVICES} title="Complete Orlando moving services" subtitle="Whatever you need moved — homes, offices, across town, or across the country — we handle it with care and upfront pricing." />

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-site max-w-5xl">
          <div className="max-w-2xl">
            <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Pricing</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">What Orlando movers actually cost.</h2>
            <p className="mt-4 text-[var(--color-muted)] text-lg">We publish pricing because every homeowner asks. Here’s what typical Orlando moves run at Liberty Moves — no sales call required.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { size: 'Studio / 1 BR apt', price: '$400–$750', hours: '3–4 hours', crew: '2 movers' },
              { size: '2 BR apt / small home', price: '$650–$1,100', hours: '4–6 hours', crew: '2–3 movers' },
              { size: '3 BR home', price: '$1,200–$1,800', hours: '6–8 hours', crew: '3 movers' },
              { size: '4+ BR home', price: '$1,800–$2,400', hours: '8–10 hours', crew: '3–4 movers' },
            ].map((p) => (
              <div key={p.size} className="card">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{p.size}</div>
                <div className="mt-2 text-2xl font-extrabold text-[var(--color-primary)]">{p.price}</div>
                <div className="mt-3 text-xs text-[var(--color-muted)] flex items-center gap-1"><Clock size={12}/> {p.hours}</div>
                <div className="mt-1 text-xs text-[var(--color-muted)] flex items-center gap-1"><Truck size={12}/> {p.crew}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-[var(--color-muted)]">All prices include truck, crew, pads, shrink wrap, dollies, and basic disassembly/reassembly of furniture. Long-distance moves priced separately.</div>
          <Link href="/orlando-moving-cost" className="btn btn-outline mt-6 inline-flex">Full pricing guide <DollarSign size={16}/></Link>
        </div>
      </section>

      <WhyUs />
      <VideoShowcase />
      <CostCalculator />
      <LicenseVerify />
      <ReviewsSection minRating={3} />
      <Partnerships />
      <ServiceAreas />

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">FAQ</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Orlando moving questions — straight answers.</h2>
        </div>
        <FAQ items={HOME_FAQS} />
      </section>

      <CTA />
    </>
  );
}
