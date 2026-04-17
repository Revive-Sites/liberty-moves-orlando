import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

const FAQS = [
  { q: 'Do you specialize in senior moves in Orlando?', a: 'Yes. We handle downsizing, assisted-living and retirement-community moves, estate transitions, and family-home relocations with patience and care. Our crews are trained to work slower, communicate clearly, and handle heirloom items with extra attention.' },
  { q: 'Can you help with downsizing?', a: 'Yes. We coordinate sort/keep/donate decisions, work with family members (even remotely via video), and partner with local estate-sale and donation services. We\u2019re patient with the pace most large downsizes need.' },
  { q: 'Do you move into Orlando retirement communities?', a: 'Yes — we work with all major Central Florida retirement and assisted-living communities. We handle COIs for community management, coordinate with activities directors, and understand each community\u2019s move-in rules.' },
  { q: 'How much do senior moves cost?', a: 'Senior moves are priced the same as residential moves — hourly based on crew + truck. Because downsizes are often slower and require more care, we quote generously so the written price is never a surprise.' },
  { q: 'Can family members coordinate remotely?', a: 'Yes. We often work with adult children who live out of state. Video walk-throughs, email quotes, and phone consultations make remote coordination easy.' },
];

export const metadata = {
  title: 'Senior Movers Orlando | Retirement & Downsizing Specialists',
  description: 'Orlando senior movers specializing in retirement communities, downsizing, and estate moves. Patient crews, heirloom care, family coordination. Licensed.',
  alternates: { canonical: `${SITE.url}/senior-movers-orlando` },
};

export default function SeniorMovers() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Senior Movers', url: `${SITE.url}/senior-movers-orlando` }]} />
      <FAQLd items={FAQS} />
      <ServiceLd name="Senior Moving" slug="senior-movers-orlando" description="Orlando moving services for seniors — downsizing, retirement community transitions, assisted-living moves, estate relocations." />
      <PageHero
        eyebrow="Senior Movers"
        title="Orlando moves done at your pace, with your dignity."
        subtitle="Retirement-community transitions, downsizing, and estate moves — handled by patient crews who understand this isn’t just about the stuff."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR points={[
            'Patient, respectful crews trained for senior moves',
            'Family coordination — including remote adult children',
            'All major Central Florida retirement communities served',
            'Estate, downsizing, and heirloom specialists',
            'Hourly pricing — same rates as residential, no senior surcharge',
          ]} />
          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Why senior moves need specialists</h2>
            <p>Senior moves are different. There are usually more decisions (what stays, what goes, what goes to the kids), more emotional weight (50 years of memories in every closet), more physical coordination (apartment hallways, elevator reservations, HOA rules at the new place), and often family members calling from out of state. A regular moving crew rushes. A senior-move specialist doesn’t.</p>
            <p>Liberty Moves Orlando has handled hundreds of senior transitions across Central Florida — downsizes from family homes into retirement communities, estate moves after a loss, assisted-living relocations, and cross-country moves to be near adult children. Every move gets the same respect: patient pace, clear communication, careful handling of heirlooms and mementos, and regular updates to family members who aren\u2019t in town.</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Retirement communities we serve</h2>
            <p>We work regularly with Central Florida\u2019s major retirement and assisted-living communities, including:</p>
            <ul className="mt-4 space-y-1">
              <li>• The Mayflower at Winter Park</li>
              <li>• Westminster Winter Park</li>
              <li>• Brookdale Island Lake (Longwood)</li>
              <li>• The Inn at Lake Mary</li>
              <li>• Oakmonte Village (Lake Mary)</li>
              <li>• Solaris Senior Living (Longwood)</li>
              <li>• Savannah Court & Cottage (Maitland)</li>
              <li>• And dozens more across Seminole, Orange, and Osceola counties</li>
            </ul>
            <p className="mt-4">We handle COIs to community management, coordinate move-in times, and follow each community\u2019s move rules.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Request a senior move quote</Link>
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
