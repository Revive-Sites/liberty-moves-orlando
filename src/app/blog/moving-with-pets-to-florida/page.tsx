import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Moving with Pets to Florida — The Complete Guide',
  description: 'How to move dogs, cats, and exotic pets to Florida safely. Vet records, heat safety, road trip planning, and settling pets into Orlando.',
  alternates: { canonical: `${SITE.url}/blog/moving-with-pets-to-florida` },
};

export default function Post() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Moving with Pets', url: `${SITE.url}/blog/moving-with-pets-to-florida` }]} />
      <PageHero eyebrow="Pet Relocation Guide · January 2026" title="Moving with Pets to Florida" subtitle="The practical guide to moving dogs, cats, and exotic pets into Orlando safely — health certificates, heat, hurricanes, and first-week adjustment." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Health certificate required if moving across state lines (most states)',
            'Florida heat is rough — never leave pets in cars, even briefly',
            'Register pets with a Florida vet within 30 days',
            'Know hurricane-season evacuation plans for pets',
            'First week: keep pets in one room, gradually expand access',
          ]} />

          <h2>Before the move</h2>
          <ul>
            <li><strong>Visit the vet.</strong> Get a copy of vaccination records. If moving interstate, get a health certificate (required by most states for cross-border pet transport, valid 10–30 days).</li>
            <li><strong>Update microchip and ID tags.</strong> New address, new phone number, new state. Update before the move — not after.</li>
            <li><strong>Research Florida vets.</strong> Pick a vet in your new Orlando neighborhood and schedule a “meet-and-greet” visit for the first week.</li>
            <li><strong>Prepare a pet carrier.</strong> Acclimate them to it 2–3 weeks before the move with short drives and favorite treats.</li>
          </ul>

          <h2>Move day logistics</h2>
          <ul>
            <li>Pets should NOT be on the moving truck. Dogs/cats travel in your vehicle or fly separately.</li>
            <li>Arrange pet boarding or a friend’s house for move-day itself. Movers + stressed pets = a bad combo.</li>
            <li>Pack a pet essentials bag: food, water, bowls, leash, medications, favorite toy, vet records, medications.</li>
            <li>For road trips to Florida: stop every 2–3 hours for bathroom breaks. Never leave pets unattended in vehicles (Florida heat is lethal fast, even “cool” days reach 100°F inside a car).</li>
          </ul>

          <h2>Flying pets to Orlando</h2>
          <p>Small pets (under ~20 lbs) can fly in-cabin on most airlines for $95–$150. Larger pets fly as checked cargo ($200–$700) or via specialized pet shipping services ($600–$2,000). Orlando International (MCO) has pet relief areas throughout all terminals.</p>

          <h2>Florida-specific considerations</h2>
          <ul>
            <li><strong>Heat and humidity.</strong> Florida summers are brutal. Walk dogs before 8am or after 7pm. Hot pavement burns paws. Shaded backyards, water bowls, and AC are essentials.</li>
            <li><strong>Fleas, ticks, heartworm.</strong> Florida’s year-round warmth means year-round prevention — not just April–October.</li>
            <li><strong>Wildlife awareness.</strong> Alligators in ponds and canals (keep pets away from shorelines). Also: toads that are toxic to dogs, fire ants, and occasional coyotes.</li>
            <li><strong>Hurricane season.</strong> Have a pet evacuation plan. Identify pet-friendly hotels inland. Keep a go-bag with vaccination records, food, meds, carrier, water.</li>
          </ul>

          <h2>First week in Orlando</h2>
          <ul>
            <li>Keep pets in ONE room initially. New house = too much stimulus all at once.</li>
            <li>Gradually expand access over 3–5 days.</li>
            <li>Keep feeding times, walk times, and routines the same as before the move. Familiarity helps.</li>
            <li>Schedule that vet visit within the first 10 days — establishes care, updates any prescriptions, gets pet used to new vet.</li>
            <li>Explore Orlando’s pet-friendly areas: Lake Baldwin Dog Park, Barber Park, Downey Dog Park, and the Winter Park off-leash trails.</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Get your Orlando quote</Link>
            <Link href="/long-distance-moving" className="btn btn-outline">Long-distance moving</Link>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
