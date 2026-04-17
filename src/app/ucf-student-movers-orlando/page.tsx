import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import TLDR from '@/components/sections/TLDR';
import Testimonials from '@/components/sections/Testimonials';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

const FAQS = [
  { q: 'How much does a UCF student move cost?', a: 'Dorm/studio moves typically run $300–$550 with a 2-person crew in 2–3 hours. 1-bed apartment moves run $500–$900. 2-bed apartment (roommate splits) run $650–$1,100 split between roommates. Student discount: 10% off labor for verified UCF students.' },
  { q: 'Do you move into UCF dorms and on-campus housing?', a: 'Yes — we work with UCF Housing move-in coordination, follow campus move-in day schedules, and handle the parking/permit side so you just get your stuff to your room.' },
  { q: 'Can you move on short notice at semester end?', a: 'Yes. May and December are our busiest student seasons. Book 2–3 weeks ahead for Finals Week moves. Last-minute moves still possible — call 407-641-2887.' },
  { q: 'Do you offer summer storage for UCF students?', a: 'Yes — we can move your stuff into climate-controlled storage at end of semester and deliver it to your next apartment in August. Saves the trip home with all your stuff.' },
  { q: 'Do you move between Valencia, Rollins, and UCF too?', a: 'Yes — same service for Valencia College, Rollins College, Full Sail, and UCF. We know the campus move rules and logistics for all of them.' },
];

export const metadata = {
  title: 'UCF Student Movers Orlando | Dorm + Apartment Moving',
  description: 'Affordable UCF student movers for dorms, apartments, and off-campus housing. Student discount, summer storage, semester-end specialists.',
  alternates: { canonical: `${SITE.url}/ucf-student-movers-orlando` },
};

export default function StudentMovers() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'UCF Student Movers', url: `${SITE.url}/ucf-student-movers-orlando` }]} />
      <FAQLd items={FAQS} />
      <ServiceLd name="UCF Student Moving" slug="ucf-student-movers-orlando" description="Orlando student movers for UCF, Valencia, Rollins, Full Sail. Dorm, apartment, summer storage." />
      <PageHero
        eyebrow="Student Movers"
        title="UCF student moves — done before Finals week ends."
        subtitle="Dorm-to-apartment, apartment-to-apartment, or home-for-the-summer. Student pricing, flexible scheduling, and we know the campus rules."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <TLDR points={[
            'Dorm + studio: $300–$550 · 1-bed apt: $500–$900',
            '10% student discount (bring your UCF ID)',
            'Summer storage + fall delivery available',
            'Valencia, Rollins, Full Sail students welcome too',
            'Last-minute finals-week moves — call us',
          ]} />
          <div className="prose-ink">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Built for UCF semester transitions</h2>
            <p>The end of each semester, thousands of UCF students have 72 hours to move out of dorms, off-campus apartments, or into new places. It\u2019s chaos — and your lease doesn\u2019t care that finals are that week. Liberty Moves Orlando runs a dedicated student-moves crew in May and December specifically for the UCF rush, with faster scheduling, smaller crews, and pricing built for student budgets.</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">What we cover</h2>
            <ul className="mt-4 space-y-1">
              <li>• <strong>Dorm moves:</strong> Tower, Academic Village, Apollo Circle, Lake Claire — we know them all</li>
              <li>• <strong>Off-campus apartments:</strong> The Plaza, The Edge, University House, Knights Circle, The Marquee, Lark</li>
              <li>• <strong>Home-for-the-summer moves:</strong> 2–3 person crew, same-day to wherever in Florida</li>
              <li>• <strong>Roommate splits:</strong> We deliver to different addresses in one run — one bill, split between roommates</li>
              <li>• <strong>Summer storage:</strong> Store your stuff May–August, deliver to new apartment in August</li>
            </ul>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-10">Valencia, Rollins, Full Sail students welcome too</h2>
            <p>We serve Valencia East, Valencia West, Rollins College (Winter Park), Full Sail University, and Seminole State. Same rates, same service, same student discount with a valid school ID.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Quote my student move</Link>
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
