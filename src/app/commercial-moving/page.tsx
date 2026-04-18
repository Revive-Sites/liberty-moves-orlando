import ServiceDetail from '@/components/sections/ServiceDetail';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: 'Can you move offices on weekends?', a: 'Yes — most of our commercial moves happen Friday night, Saturday, or Sunday to minimize downtime. We’ll build a schedule around your operations.' },
  { q: 'Do you provide certificates of insurance?', a: 'Yes. We can provide COIs naming your landlord, new building, or insurance carrier — usually same-day on request.' },
  { q: 'Can you handle IT equipment?', a: 'Yes — servers, workstations, network gear. We coordinate with your IT team and use anti-static wrap, padded crates, and careful handling.' },
  { q: 'Do you disassemble and reassemble furniture?', a: 'Cubicles, conference tables, heavy desks — yes. We bring the tools and do it all on-site.' },
];

export const metadata = {
  title: 'Commercial & Office Movers in Orlando | Business Relocation',
  description: 'Commercial moving in Orlando — offices, retail, warehouses. Weekend moves to keep your business open. Licensed, insured, IT-savvy crews.',
  alternates: { canonical: `${SITE.url}/commercial-moving` },
};

export default function Commercial() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Commercial Moving', url: `${SITE.url}/commercial-moving` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetail
        heroImage={{ hash: '695fb25e6eabe665b924f386', ext: 'jpg' }}
        sectionImages={{ intro: { hash: '696908c7f43f8a25f73b23b2', ext: 'jpeg' }, benefits: { hash: '695fb25e6eabe665b924f386', ext: 'jpg' }, close: { hash: '69666066aa336fee46b8e00b', ext: 'png' } }}
        eyebrow="Commercial Moving"
        title="Office and business moves, done on your schedule."
        subtitle="Zero downtime is the goal. We work nights and weekends so your team comes back Monday to a functioning office."
        intro="Commercial moves are a different animal. IT equipment, cubicles, conference rooms, compliance, landlords, insurance — a single missed step can cost you days. Liberty Moves Orlando handles commercial relocations across Central Florida with detailed planning, dedicated crews, and the flexibility to move on your timeline instead of ours."
        benefits={[
          { t: 'Weekend & after-hours moves', d: 'Friday–Sunday is our busy season for commercial. Minimum downtime.' },
          { t: 'COIs for landlords & buildings', d: 'Certificates of insurance issued on request, usually same-day.' },
          { t: 'IT-savvy handling', d: 'Servers, workstations, and cabling handled with care and coordination.' },
          { t: 'Furniture disassembly included', d: 'Cubicles, conference tables, and heavy desks — we bring the tools.' },
          { t: 'Labeled, organized setup', d: 'Desks land where they should. Boxes go to the right office, not a pile.' },
          { t: 'Single point of contact', d: 'One foreman manages your move from start to finish.' },
        ]}
        process={[
          { n: 1, t: 'Walk-through', d: 'On-site walk of origin and destination to plan scope and logistics.' },
          { n: 2, t: 'Plan & schedule', d: 'Detailed moving plan with timeline, crew, and building coordination.' },
          { n: 3, t: 'Move day(s)', d: 'Nights, weekends, staged moves — whatever minimizes your downtime.' },
          { n: 4, t: 'Ready for Monday', d: 'Everything placed, labeled, and ready for your team to plug in and go.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
