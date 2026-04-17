import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

const FAQS = [
  { q: 'How much does it cost to move a piano in Orlando?', a: 'Upright pianos in Orlando typically cost $250–$450 to move locally. Baby grand and grand pianos run $400–$1,200 depending on size and access. Add $50–$150 for stairs. We provide a firm written quote after a brief walk-through or photos.' },
  { q: 'Do you move all types of pianos?', a: 'Upright pianos, spinet pianos, console pianos, and most baby grand pianos — yes, standard crew. Concert grand pianos, antique pianos, and player pianos sometimes require a specialty crew. We\u2019ll tell you upfront if we\u2019re the right fit for your piano.' },
  { q: 'Is my piano insured when you move it?', a: 'Yes — standard 60¢/lb cargo coverage is included at no charge, and we offer upgraded full-replacement coverage for valuable instruments. In 10 years, we\u2019ve never damaged a piano.' },
  { q: 'How do you move a piano up or down stairs?', a: 'For most uprights, a 3–4 person crew with a proper piano dolly, padding, and straps handles stairs safely. Long straight-run stairs are usually fine. Curved or spiral staircases may require special equipment — we scope it during the quote.' },
  { q: 'Can you move a piano into a storage unit?', a: 'Yes, and we recommend climate-controlled storage for pianos to prevent humidity damage to the wood and strings. We can deliver directly to the storage facility.' },
];

export const metadata = {
  title: 'Piano Movers Orlando | Professional Piano Moving Services',
  description:
    'Professional piano movers in Orlando. Uprights, baby grands, grand pianos — careful, insured, experienced crews. Written quote in minutes. Licensed USDOT 3455436.',
  alternates: { canonical: `${SITE.url}/piano-movers-orlando` },
};

export default function PianoMovers() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Piano Movers', url: `${SITE.url}/piano-movers-orlando` }]} />
      <FAQLd items={FAQS} />
      <ServiceLd name="Piano Moving" slug="piano-movers-orlando" description="Professional piano moving in Orlando and Central Florida. Uprights, baby grands, grand pianos — insured, experienced crews." priceRange="$$" />
      <PageHero
        eyebrow="Piano Movers"
        title="Orlando piano movers who actually know pianos."
        subtitle="Uprights, baby grands, and grand pianos — moved carefully by trained crews with proper equipment. Licensed, insured, and never damaged one yet."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR points={[
            'Upright pianos: $250–$450 local Orlando moves',
            'Baby grand / grand pianos: $400–$1,200',
            'Full-replacement insurance available for valuable instruments',
            'Climate-controlled storage available before delivery',
            'Same-day or next-day scheduling, 7 days a week',
          ]} />
          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Why you shouldn\u2019t let regular movers move your piano</h2>
            <p>A piano is not a piece of furniture. It\u2019s a 400\u20131,200 lb precision instrument with a cast-iron harp, tensioned wire strings, soundboards that crack with the wrong angle, and legs that snap if loaded incorrectly. The average mover has moved three pianos in their career. Liberty Moves Orlando crews have moved hundreds.</p>
            <p>We use proper piano dollies (not regular furniture dollies), 4-strap harnesses, heavy-duty pads, and a minimum 3-person crew for anything beyond a spinet. Upstairs moves, basement moves, and pianos through narrow doorways all require specific techniques we\u2019ve practiced for years.</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Pianos we move</h2>
            <ul className="mt-4 space-y-1">
              <li>• Upright, spinet, and console pianos</li>
              <li>• Baby grand pianos (up to ~6 feet)</li>
              <li>• Grand pianos (up to ~7 feet)</li>
              <li>• Player pianos and antique pianos (case-by-case)</li>
              <li>• Digital pianos and keyboards (regular service, lower cost)</li>
            </ul>
            <p className="mt-4">For concert grands, very antique or unusual instruments, or pianos in extremely difficult access, we may recommend a piano-specialty crew. We\u2019ll tell you the honest answer upfront.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Get my piano quote</Link>
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
