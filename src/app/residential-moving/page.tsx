import ServiceDetail from '@/components/sections/ServiceDetail';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: 'How much does a local residential move cost in Orlando?', a: 'Most 2-bed apartments run $600–$1,100; 3–4 bed homes $1,200–$2,400. Pricing is hourly based on crew size, truck size, and travel. We quote every move in writing first.' },
  { q: 'Do you provide boxes and packing materials?', a: 'Yes — boxes, paper, tape, wardrobe boxes, TV and mattress covers. Sold at cost. You can also pack yourself and we’ll just move.' },
  { q: 'Do you disassemble and reassemble furniture?', a: 'Yes, included at no extra charge. Beds, tables, cribs, desks — we handle them and the hardware.' },
  { q: 'Can you handle stairs and elevators?', a: 'Yes. Just let us know when you book so we bring the right crew size and equipment. No surprise stair fees.' },
];

export const metadata = {
  title: 'Residential Movers in Orlando | Home Moving Services',
  description: 'Full-service residential moving in Orlando and Central Florida. Upfront pricing, careful crews, same-day local moves. Licensed (USDOT 3455436).',
  alternates: { canonical: `${SITE.url}/residential-moving` },
};

export default function Residential() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Residential Moving', url: `${SITE.url}/residential-moving` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetail
        eyebrow="Residential Moving"
        title="Orlando home movers who treat your stuff like it’s theirs."
        subtitle="Apartments, condos, townhomes, single-family — we pack it, move it, and set it back up. In a single day, most of the time."
        intro="A residential move is more than a truck and a crew — it’s trust. You’re handing over your family’s things to strangers, and we take that seriously. Every Liberty Moves Orlando crew is background-checked, trained, uniformed, and supervised by a lead foreman who stays with your move from start to finish. Pricing is transparent, in writing, and final."
        benefits={[
          { t: 'Upfront, written pricing', d: 'Your quote is your price. No surprise fuel, stair, or long-carry fees.' },
          { t: 'Free disassembly & setup', d: 'Beds, cribs, tables, desks — we handle the hardware on both ends.' },
          { t: 'Pads, wrap, and dollies included', d: 'We protect floors, walls, and furniture with professional-grade materials.' },
          { t: 'Same-day moves', d: '98% of local residential jobs finish the same day.' },
          { t: 'Full-replacement coverage available', d: 'Upgrade beyond the default 60¢/lb coverage for larger moves.' },
          { t: 'Friendly, vetted crews', d: 'Uniformed, background-checked, respectful of your home.' },
        ]}
        process={[
          { n: 1, t: 'Free quote', d: 'Call, text, or fill out the form. We get you a written estimate fast.' },
          { n: 2, t: 'Walk-through', d: 'In-home or video walk-through for larger moves so pricing is exact.' },
          { n: 3, t: 'Move day', d: 'Uniformed crew arrives on time. Pads, wrap, and dollies ready.' },
          { n: 4, t: 'Unload & setup', d: 'Beds made, couches placed, boxes where you want them.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
