import ServiceDetail from '@/components/sections/ServiceDetail';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: 'What counts as a "local" move?', a: 'Anything inside Central Florida — typically within 50 miles of our Casselberry base. Orlando metro, Seminole, Orange, Osceola, Lake, and Volusia counties. If your new home is further out, ask about our long-distance service.' },
  { q: 'How much does a local move in Orlando cost?', a: 'Most local moves are priced hourly: 2 movers + truck starts around $139/hr, 3 movers + truck around $179/hr. A typical 2-bedroom takes 4–6 hours. We always quote the full expected cost in writing before you book — no surprise fees.' },
  { q: 'How quickly can you book a local move?', a: 'Same-week is almost always possible. Same-day and next-day bookings work for smaller moves when crews are available. Weekends book up fastest — call early if you need a Saturday.' },
  { q: 'Do you bring everything we need?', a: 'Yes. Trucks arrive stocked with pads, stretch wrap, dollies, tools, shrink, and tie-downs. Boxes and packing materials are sold at-cost if you need them; you can also use your own.' },
  { q: 'Are you licensed and insured in Florida?', a: 'Yes. Florida IM License #IM3347, USDOT #3455436. Liability and cargo insurance are standard on every job, with upgrade options for higher-value households.' },
];

export const metadata = {
  title: 'Local Movers in Orlando | Same-Week Moving, Upfront Pricing',
  description: 'Local movers serving Orlando and Central Florida. Hourly rates, same-week booking, uniformed crews, no surprise fees. Licensed (USDOT 3455436, FL IM3347).',
  alternates: { canonical: `${SITE.url}/local-movers` },
};

export default function LocalMovers() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Local Movers', url: `${SITE.url}/local-movers` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetail
        heroImage={{ hash: '6968ff5644b623c7e5fd8a70', ext: 'png' }}
        sectionImages={{ intro: { hash: '6968ff5644b623c7e5fd8a70', ext: 'png' }, benefits: { hash: '69666066aa336fee46b8e00b', ext: 'png' }, close: { hash: '696675210475d420a14bbe91', ext: 'png' } }}
        eyebrow="Local Movers"
        title="Orlando local movers — hourly rates, upfront pricing, careful crews."
        subtitle="Same-week booking across Orlando, Winter Park, Kissimmee, Lake Mary, Celebration, and all of Central Florida. Licensed, insured, uniformed."
        intro="A local move shouldn't cost you a weekend of your sanity. Most Orlando moves we book get wrapped in a single day: crew arrives on time, trucks come stocked with pads and dollies, furniture gets disassembled and reassembled at no extra charge. Pricing is hourly and transparent — you see the rate before you book, and the foreman tracks time in front of you. No stair fees, no fuel surcharges, no small-print surprises on the final invoice."
        benefits={[
          { t: 'Hourly, upfront pricing', d: 'Clear hourly rate quoted before you book. Written estimate with the expected hours. No hidden fees.' },
          { t: 'Same-week availability', d: 'Most local moves book within 3–5 days. Same-day slots open when crews free up — just ask.' },
          { t: 'Free disassembly & reassembly', d: 'Beds, tables, cribs, desks, TVs off stands — we handle the hardware on both ends.' },
          { t: 'Pads, wrap, dollies included', d: 'Every truck is pre-stocked. Floors and doorways protected before we carry a thing.' },
          { t: 'Uniformed, vetted crews', d: 'Background-checked, trained, clean-cut movers. A lead foreman stays with your job from first box to last.' },
          { t: 'Licensed in Florida', d: 'USDOT #3455436, FL IM#3347. Cargo insurance standard. Full-replacement coverage available for higher-value loads.' },
        ]}
        process={[
          { n: 1, t: 'Get a quote', d: 'Call (407) 641-2887, text, or fill the quote form. Usually 10 minutes to a written estimate.' },
          { n: 2, t: 'Lock the date', d: 'Pick your window. Weekend slots fill first — book early. Deposit holds your slot.' },
          { n: 3, t: 'Move day', d: 'Uniformed crew on time, truck stocked, pads down, clock visible. Foreman walks the home with you first.' },
          { n: 4, t: 'Unload & setup', d: 'Boxes placed where you want them. Beds reassembled, couches positioned, final walk-through before we leave.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
