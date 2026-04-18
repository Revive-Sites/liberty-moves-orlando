import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

const FAQS = [
  { q: 'Do you offer storage and moving together?', a: 'Yes. We can move your belongings from your origin into climate-controlled storage, hold them as long as needed, then deliver to your new home. One invoice, one company, one crew responsible the whole way.' },
  { q: 'Do you own storage facilities?', a: 'We partner with trusted Central Florida climate-controlled storage facilities rather than operating our own. That lets us match you to the right size, location, and price — instead of pushing you into ours.' },
  { q: 'How much does storage + moving cost in Orlando?', a: 'Storage is typically $100–$300/month depending on unit size (from 5×5 to 10×30). Moving into and out of storage is priced at our standard hourly rates. Booking both together often saves 10–15% vs. separate providers.' },
  { q: 'Is climate-controlled storage necessary in Florida?', a: 'For most household goods, yes. Florida’s humidity (80%+ year-round) damages wood furniture, paper, photos, electronics, leather, and artwork without climate control. We exclusively recommend climate-controlled units.' },
  { q: 'How long can I store my stuff?', a: 'As short as 1 month, as long as years. Month-to-month contracts at our partner facilities. Call or request a quote for short-term vs long-term rates.' },
];

export const metadata = {
  title: 'Orlando Storage & Moving | Climate-Controlled Storage + Pro Movers',
  description: 'Orlando storage + moving combined — climate-controlled units, pro crews, month-to-month contracts. One call handles your move, your storage, and your delivery.',
  alternates: { canonical: `${SITE.url}/storage-moving-orlando` },
};

export default function StorageMoving() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Storage & Moving', url: `${SITE.url}/storage-moving-orlando` }]} />
      <FAQLd items={FAQS} />
      <ServiceLd name="Storage & Moving" slug="storage-moving-orlando" description="Orlando moving combined with climate-controlled storage. Short-term or long-term. Door-to-storage-to-door under one vendor." />
      <PageHero
        eyebrow="Storage + Moving"
        title="Orlando storage and moving — one call, one vendor, one answer."
        subtitle="Move in, store as long as you need, deliver when you’re ready. Climate-controlled. Florida-humidity-proof. Booked together, priced together."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR points={[
            'Climate-controlled storage (Florida humidity requires it)',
            'Unit sizes from 5×5 ($100/mo) to 10×30 ($300+/mo)',
            'Month-to-month contracts at partner facilities',
            'Bundled pricing saves 10–15% vs separate vendors',
            'One crew responsible from origin through delivery',
          ]} />
          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">When storage + moving together makes sense</h2>
            <p>Life is rarely synchronized. You close on selling your house two weeks before you close on the new one. Your lease ends before the rental you want is available. You’re relocating for work, staying temporarily with family, and need your stuff somewhere safe in the meantime. You’re renovating and can’t have furniture in the house. We’ve seen every scenario — and the answer is usually the same: get your stuff into climate-controlled storage with the same company that’ll deliver it when you’re ready.</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Why climate-controlled storage in Florida</h2>
            <p>Florida’s year-round humidity is rough on stored belongings. Non-climate-controlled units bake in summer heat and sweat with humidity, which damages:</p>
            <ul className="mt-4 space-y-1">
              <li>• Wood furniture — warps, cracks, separates at joints</li>
              <li>• Leather — mildews, cracks, discolors</li>
              <li>• Paper — books, photos, documents yellow and stick together</li>
              <li>• Electronics — corrosion on contacts, capacitors degrade</li>
              <li>• Artwork — framed prints buckle, paintings bloom</li>
            </ul>
            <p className="mt-4">We exclusively recommend climate-controlled storage for household goods stored more than a few weeks. The extra $40–$60/month vs. non-climate-controlled is worth it every time.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Quote storage + moving</Link>
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
