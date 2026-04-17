import ServiceDetail from '@/components/sections/ServiceDetail';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: 'Do you provide the boxes and materials?', a: 'Yes — boxes, paper, tape, bubble wrap, wardrobe boxes, TV and mattress covers. Sold at cost, never marked up.' },
  { q: 'Can I pack some and you pack the rest?', a: 'Absolutely. Most customers want us to pack the kitchen and fragiles while they handle clothes and books. We price partial packing by the hour.' },
  { q: 'How long does full-house packing take?', a: 'A 3-bedroom home typically packs in 6–10 hours with a 2-person crew. We can do it the day before your move or pack and load same-day for smaller homes.' },
  { q: 'What about unpacking at the new place?', a: 'Yes — we can unpack and haul away the empties if you’d like. Just ask when we quote.' },
];

export const metadata = {
  title: 'Packing Services Orlando | Professional Packers & Supplies',
  description: 'Professional packing in Orlando — full-house, partial, or kitchen-only. Top-grade materials, careful handling, no-damage guarantee.',
  alternates: { canonical: `${SITE.url}/Packing-Services` },
};

export default function Packing() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Packing Services', url: `${SITE.url}/Packing-Services` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetail
        eyebrow="Packing Services"
        title="Professional packing that makes moving day actually easy."
        subtitle="Full-house, partial, or kitchen-only. Top-grade materials, careful crews, and nothing broken on the other side."
        intro="Packing is the part of moving that burns out even the most organized families. A kitchen alone can take a whole weekend. A whole house — days. Liberty Moves Orlando takes packing off your plate entirely. Our crews arrive with professional-grade materials (boxes sold at cost, not marked up), wrap and pack every item, and label every box so unpacking is a breeze."
        benefits={[
          { t: 'Pro-grade materials', d: 'Double-walled boxes, acid-free paper, bubble wrap, wardrobe boxes — all included.' },
          { t: 'Labeled by room', d: 'Every box labeled for fast unpacking. No hunting for the coffee maker.' },
          { t: 'Responsible for breakage', d: 'When we pack it, we’re liable for damage. That’s a different story than self-packed boxes.' },
          { t: 'Fragiles & art specialists', d: 'China, glassware, mirrors, TVs, framed art — handled with specialized wrap.' },
          { t: 'Partial packing available', d: 'Just the kitchen? Just the breakables? We price partial packing by the hour.' },
          { t: 'Unpacking available', d: 'We can unpack and haul empties if you want to skip that chore too.' },
        ]}
        process={[
          { n: 1, t: 'Inventory call', d: 'We walk through what needs packing and give you a firm estimate.' },
          { n: 2, t: 'Materials delivered', d: 'Boxes and supplies show up the day before or day-of.' },
          { n: 3, t: 'Pack day', d: 'Crew arrives, wraps, packs, labels, and stacks — while you relax or run errands.' },
          { n: 4, t: 'Load & move', d: 'We load the truck and move — everything handled by one coordinated team.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
