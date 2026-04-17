import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, SpeakableLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';
import { Clock, Truck, AlertCircle, CheckCircle2 } from 'lucide-react';

const FAQS = [
  { q: 'How much does it cost to hire movers in Orlando, FL?', a: 'Local Orlando movers charge hourly, with most jobs falling between $400 (studio apt, 2-person crew, 3 hours) and $2,400 (4-bedroom home, 4-person crew, 10 hours). Hourly rates for a 2-person crew typically run $130–$180/hr in Orlando; 3-person crews $170–$230/hr; 4-person crews $220–$290/hr — truck and basic materials included.' },
  { q: 'How much does it cost to move a 2-bedroom apartment in Orlando?', a: 'A typical 2-bedroom apartment move in Orlando costs $650–$1,100 with Liberty Moves Orlando. That assumes 2–3 movers, 4–6 hours of work, and a standard truck. Stairs, long carries, or extra-heavy items (pianos, gym equipment) may add time.' },
  { q: 'How much does it cost to move a 3-bedroom house in Orlando?', a: 'A 3-bedroom Orlando house typically costs $1,200–$1,800 to move locally. That’s a 3-person crew for 6–8 hours. Homes with lots of boxes, complex layouts, or specialty items like pool tables can push to $2,000+.' },
  { q: 'Do movers charge by the hour or by weight in Florida?', a: 'Local moves under 50 miles are almost always charged hourly in Florida. Long-distance moves over 50 miles or across state lines are charged by weight (or cubic feet) plus distance, with a binding written estimate.' },
  { q: 'What’s included in a moving quote?', a: 'At Liberty Moves Orlando, every quote includes: truck, uniformed crew, moving pads, shrink wrap, dollies, tape, furniture disassembly/reassembly, mileage within the metro, and fuel. No hidden fees. Packing materials (boxes, paper) are sold separately at cost if needed.' },
  { q: 'Are there hidden fees Orlando movers charge?', a: 'Some Orlando movers add surprise fees for stairs, long carries, heavy items, fuel, or “difficult access.” Liberty Moves Orlando doesn’t. Our quote is our price. If something unexpected comes up on move day, we tell you first and you decide — we don’t surprise-bill.' },
  { q: 'How much do you tip movers in Orlando, Florida?', a: 'Industry standard: $5–$10/hour per mover for good service, or 5%–10% of total move cost. For a full-day 3-person crew, $90–$150 split among the crew is typical. Tipping is never required and quality crews don’t expect it — but they always appreciate it.' },
  { q: 'How much does long-distance moving cost from Orlando?', a: 'Long-distance moves from Orlando are priced by weight + distance. Rough ranges: Orlando to Atlanta (~440 mi) $2,800–$5,500 for a 2-bedroom; Orlando to NYC (~1,080 mi) $4,500–$9,000; Orlando to California $7,000–$15,000. All moves include packing if selected. We provide binding written estimates after a walk-through.' },
  { q: 'What’s the cheapest day to hire movers in Orlando?', a: 'Tuesday, Wednesday, and Thursday mid-month are cheapest. Weekends and the last week of the month book first and sometimes carry a premium. October through April is cheaper than summer.' },
  { q: 'Do I need to pay a deposit?', a: 'At Liberty Moves Orlando, we require no deposit for local moves under $2,000 — you pay on completion. Larger or long-distance moves may require a small deposit to hold your date, fully refundable if you cancel 48+ hours out.' },
];

export const metadata = {
  title: 'How Much Do Orlando Movers Cost? (2026 Pricing Guide)',
  description:
    'Complete Orlando moving cost guide — hourly rates, by-home-size pricing, long-distance estimates, and tipping standards. Transparent pricing from Liberty Moves Orlando.',
  alternates: { canonical: `${SITE.url}/orlando-moving-cost` },
  openGraph: {
    title: 'Orlando Moving Cost Guide (2026)',
    description: 'What Orlando movers actually cost — hourly rates, home-size tables, long-distance pricing, tipping standards.',
  },
};

const ROWS_HOURLY = [
  { crew: '2 movers + truck', rate: '$130–$180/hour', best: 'Studios, 1-bedroom apartments' },
  { crew: '3 movers + truck', rate: '$170–$230/hour', best: '2–3 bedroom homes' },
  { crew: '4 movers + truck', rate: '$220–$290/hour', best: '3–4 bedroom homes' },
  { crew: '5 movers + 2 trucks', rate: '$300–$400/hour', best: '5+ bedroom homes, estates' },
];

const ROWS_BY_SIZE = [
  { size: 'Studio apartment', price: '$400–$700', hours: '3–4 hrs', crew: '2 movers', boxes: '15–25' },
  { size: '1-bedroom apartment', price: '$500–$900', hours: '3–5 hrs', crew: '2 movers', boxes: '25–40' },
  { size: '2-bedroom apartment', price: '$650–$1,100', hours: '4–6 hrs', crew: '2–3 movers', boxes: '40–60' },
  { size: '2-bedroom home', price: '$900–$1,400', hours: '5–7 hrs', crew: '3 movers', boxes: '50–75' },
  { size: '3-bedroom home', price: '$1,200–$1,800', hours: '6–8 hrs', crew: '3 movers', boxes: '75–100' },
  { size: '4-bedroom home', price: '$1,800–$2,400', hours: '8–10 hrs', crew: '3–4 movers', boxes: '100–150' },
  { size: '5+ bedroom estate', price: '$2,500–$5,000+', hours: '10+ hrs', crew: '4–5 movers', boxes: '150+' },
];

const ROWS_LONG = [
  { route: 'Orlando → Jacksonville', miles: '141 mi', twoBed: '$1,800–$3,200', threeBed: '$2,800–$4,800' },
  { route: 'Orlando → Miami', miles: '236 mi', twoBed: '$2,200–$3,800', threeBed: '$3,400–$5,800' },
  { route: 'Orlando → Atlanta', miles: '438 mi', twoBed: '$2,800–$5,500', threeBed: '$4,200–$7,500' },
  { route: 'Orlando → Nashville', miles: '685 mi', twoBed: '$3,500–$6,500', threeBed: '$5,000–$9,000' },
  { route: 'Orlando → New York City', miles: '1,084 mi', twoBed: '$4,500–$9,000', threeBed: '$6,500–$13,000' },
  { route: 'Orlando → Chicago', miles: '1,152 mi', twoBed: '$4,800–$9,500', threeBed: '$7,000–$13,500' },
  { route: 'Orlando → Dallas', miles: '1,088 mi', twoBed: '$4,800–$9,200', threeBed: '$6,800–$13,000' },
  { route: 'Orlando → Los Angeles', miles: '2,503 mi', twoBed: '$7,000–$14,000', threeBed: '$10,000–$18,000' },
];

export default function OrlandoMovingCost() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Orlando Moving Cost', url: `${SITE.url}/orlando-moving-cost` }]} />
      <FAQLd items={FAQS} />
      <SpeakableLd />
      <PageHero
        eyebrow="Pricing Guide"
        title="How much do Orlando movers actually cost?"
        subtitle="A no-nonsense breakdown of Orlando moving prices — hourly rates, home-size tables, long-distance estimates, and tipping standards. Updated for 2026."
      />

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR
            title="The short version"
            points={[
              'Local Orlando moves are charged hourly: $130–$290/hour depending on crew size',
              '2-bed apartment: $650–$1,100 · 3-bed home: $1,200–$1,800 · 4-bed home: $1,800–$2,400',
              'Long-distance moves are priced by weight + distance with a binding written estimate',
              'Tuesdays–Thursdays mid-month are cheapest; weekends cost more',
              'Tipping standard: $5–$10/hour per mover, or 5–10% of total',
            ]}
          />

          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Orlando moving rates: hourly pricing explained</h2>
            <p>
              Almost every local Orlando move is priced hourly. That’s because local moves vary too much in time to quote flat-rate fairly — a one-bedroom with heavy furniture and stairs can take longer than a two-bedroom with light stuff and an elevator. Hourly pricing is more honest for everyone: you pay for time actually worked, and movers aren’t incentivized to rush.
            </p>
            <p>
              At Liberty Moves Orlando, our hourly rates include the truck, the crew, moving pads, shrink wrap, dollies, tape, mileage within the metro, fuel, and basic furniture disassembly and reassembly. No surprise fees for stairs, long carries, or “difficult access.”
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr><th className="p-3">Crew</th><th className="p-3">Hourly Rate</th><th className="p-3">Best For</th></tr>
                </thead>
                <tbody>
                  {ROWS_HOURLY.map((r) => (
                    <tr key={r.crew} className="border-b border-[var(--color-border)]">
                      <td className="p-3 font-semibold text-[var(--color-primary)]">{r.crew}</td>
                      <td className="p-3 text-[var(--color-accent)] font-bold">{r.rate}</td>
                      <td className="p-3 text-[var(--color-muted)]">{r.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">Orlando moving costs by home size</h2>
            <p>The easiest way to estimate your move is by home size. These ranges assume a local Orlando move (under 50 miles), standard access, and no specialty items. Packing services and materials are separate if needed.</p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="p-3">Home Size</th>
                    <th className="p-3">Total Cost</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Crew</th>
                    <th className="p-3">Typical Boxes</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS_BY_SIZE.map((r) => (
                    <tr key={r.size} className="border-b border-[var(--color-border)]">
                      <td className="p-3 font-semibold text-[var(--color-primary)]">{r.size}</td>
                      <td className="p-3 text-[var(--color-accent)] font-bold">{r.price}</td>
                      <td className="p-3 text-[var(--color-muted)]">{r.hours}</td>
                      <td className="p-3 text-[var(--color-muted)]">{r.crew}</td>
                      <td className="p-3 text-[var(--color-muted)]">{r.boxes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">Long-distance moves from Orlando</h2>
            <p>Long-distance moves (over 50 miles or across state lines) are priced differently. Instead of hourly, we use weight or cubic feet plus distance, and we provide a <strong>binding written estimate</strong> before the move so there’s no surprise. Below are rough ranges — actual pricing depends on exact weight, access, and services.</p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="p-3">Route</th>
                    <th className="p-3">Distance</th>
                    <th className="p-3">2-Bed</th>
                    <th className="p-3">3-Bed</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS_LONG.map((r) => (
                    <tr key={r.route} className="border-b border-[var(--color-border)]">
                      <td className="p-3 font-semibold text-[var(--color-primary)]">{r.route}</td>
                      <td className="p-3 text-[var(--color-muted)]">{r.miles}</td>
                      <td className="p-3 text-[var(--color-accent)] font-bold">{r.twoBed}</td>
                      <td className="p-3 text-[var(--color-accent)] font-bold">{r.threeBed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">What affects the final price</h2>
            <p>Five factors change your total move cost in Orlando:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20}/><span><strong>Home size &amp; inventory volume</strong> — more stuff, more time.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20}/><span><strong>Access</strong> — stairs, elevators, long carries, narrow streets add time.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20}/><span><strong>Specialty items</strong> — pianos, safes, pool tables, grandfather clocks, aquariums may require specialty crews.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20}/><span><strong>Packing</strong> — full pack is 8–16 additional hours depending on home size.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20}/><span><strong>Day of week &amp; season</strong> — weekends and summer are in demand; mid-week + mid-month is cheapest.</span></li>
            </ul>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">How to save money on your Orlando move</h2>
            <ul className="mt-4 space-y-2 text-[var(--color-text)]">
              <li><strong>Book mid-week, mid-month.</strong> Tuesdays–Thursdays the 2nd–3rd week of the month are cheapest.</li>
              <li><strong>Pack it yourself.</strong> Packing labor is 8–16 hours for a typical home — that’s $1,000+ you save by doing it yourself.</li>
              <li><strong>Declutter first.</strong> Movers charge for time. Less stuff = less time = less money.</li>
              <li><strong>Get multiple written quotes.</strong> Pricing varies 20–40% between Orlando movers — shop around.</li>
              <li><strong>Avoid end-of-month.</strong> Last week of the month sometimes carries a premium.</li>
              <li><strong>Be ready when the crew arrives.</strong> Boxes packed, furniture accessible, nothing blocking pathways. Every minute the crew waits is time you pay for.</li>
            </ul>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">Tipping movers in Orlando: what’s normal?</h2>
            <p>Tipping movers is not required but is appreciated for quality work. Florida industry standard is:</p>
            <ul className="mt-4 space-y-2 text-[var(--color-text)]">
              <li><strong>$5/hour per mover</strong> for good service</li>
              <li><strong>$10/hour per mover</strong> for exceptional service (extra care, long day, difficult move)</li>
              <li><strong>5–10% of total cost</strong> split among the crew is another common approach</li>
            </ul>
            <p className="mt-3">Example: a $1,500 move with a 3-person crew over 6 hours → tip $90–$180 total ($30–$60 per mover). Cash is always appreciated, but Venmo, Cash App, and Zelle are fine too. Tip goes entirely to the crew.</p>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">Red flags to avoid</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                { t: 'No written estimate', d: 'Verbal quotes are meaningless. Always get it in writing before booking.' },
                { t: 'Huge deposits required', d: 'A small deposit is fine for long-distance. Local moves shouldn’t need a big upfront payment.' },
                { t: 'No USDOT or FMCSA number', d: 'Every legitimate interstate mover has a USDOT number you can verify online.' },
                { t: 'Cash-only payment', d: 'Quality movers accept cards and checks. Cash-only is a red flag.' },
                { t: 'Unmarked truck or rental', d: 'Real movers drive their own, branded equipment.' },
                { t: 'Surprise fees on move day', d: 'Walk away from any mover who changes the price after you’ve started.' },
              ].map((r) => (
                <div key={r.t} className="card">
                  <AlertCircle className="text-[var(--color-accent)]" size={22}/>
                  <h4 className="mt-2 font-bold text-[var(--color-primary)]">{r.t}</h4>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{r.d}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold mt-12">Ready for your free quote?</h2>
            <p>Liberty Moves Orlando gives written, itemized quotes before you book. No pressure, no phone trees, no sales pitch — just an honest price from a licensed Orlando mover. Call, text, or request online.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Get my free quote</Link>
              <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={FAQS} />
      <Testimonials />
      <CTA title="Questions about your specific move?" subtitle="Call us. A real mover answers the phone and will give you a straight answer, not a scripted pitch." />
    </>
  );
}
