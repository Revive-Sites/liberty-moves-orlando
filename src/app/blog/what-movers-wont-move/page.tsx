import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: "What Movers Won't Move (and Why) — Non-Allowables List",
  description: 'Complete non-allowables list: hazmat, firearms, food, plants, cash. Why movers refuse these and what to do with them instead.',
  alternates: { canonical: `${SITE.url}/blog/what-movers-wont-move` },
};

export default function Post() {
  return (
    <>
      <BlogPostingLd slug="what-movers-wont-move" title="What Movers Won't Move" description="Complete non-allowables list for Florida moves — hazmat, firearms, food, plants, valuables." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: "What Movers Won't Move", url: `${SITE.url}/blog/what-movers-wont-move` }]} />
      <PageHero eyebrow="Buyer’s Guide · January 2026" title="What Movers Won’t Move (and Why)" subtitle="The complete non-allowables list — the items professional Orlando movers won’t touch, and what to do with them instead." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Hazmat is #1 rejection — fire/explosion risk',
            'Firearms and ammunition — legal + safety reasons',
            'Perishable food + frozen items — spoil in hot trucks',
            'Plants crossing state lines — USDA rules',
            'Cash, jewelry, important docs — never hand over',
          ]} />

          <h2>Hazardous materials</h2>
          <p>Federal regulations prohibit any licensed mover from carrying hazmat. Fire, explosion, and poisoning risk in a closed truck.</p>
          <ul>
            <li>Propane tanks (grills, camping)</li>
            <li>Gasoline (lawn mower, generator fuel)</li>
            <li>Paint (oil-based is hazmat, water-based technically allowed but often refused)</li>
            <li>Pool chemicals (chlorine, acids)</li>
            <li>Lighter fluid, charcoal lighter</li>
            <li>Aerosols (spray paint, bug spray, hair spray in large quantity)</li>
            <li>Cleaning supplies with bleach or ammonia</li>
            <li>Batteries (especially car + boat batteries)</li>
          </ul>
          <p><strong>What to do:</strong> Use them up or dispose at Orange County’s hazmat drop-off (one location on Young Pine Rd). Don’t try to sneak them onto the truck.</p>

          <h2>Firearms and ammunition</h2>
          <p>Licensed movers won’t transport firearms or ammunition. Liability, insurance, and legal complications.</p>
          <p><strong>What to do:</strong> Transport yourself in your own vehicle. Check Florida + destination state laws if moving interstate. FFL transfer might be required for long-distance.</p>

          <h2>Perishable food</h2>
          <p>Fridges and freezers get unplugged for the move. Frozen food thaws, refrigerated food spoils in 70°+ Florida trucks. Movers won’t take the liability.</p>
          <p><strong>What to do:</strong> Eat it down in the 2 weeks before the move. Donate unopened pantry items. Empty + defrost fridge 24 hours before move day.</p>

          <h2>Plants (especially interstate)</h2>
          <p>USDA restricts plants crossing state lines due to invasive species and pest risk. Some states (California, Arizona) prohibit almost all plants from Florida. Local moves within Florida are fine but plants often don’t survive the truck anyway.</p>
          <p><strong>What to do:</strong> Gift to neighbors, sell on Facebook Marketplace, or transport in your car for short moves. Accept that some plants won’t survive.</p>

          <h2>Cash, jewelry, important documents</h2>
          <p>Movers won’t take liability for items above $100/lb without declaration, and won’t touch cash at all.</p>
          <p><strong>What to do:</strong> Pack in your personal vehicle. Passports, tax records, jewelry, cash, family heirlooms — always with you, never on the truck.</p>

          <h2>Other common refusals</h2>
          <ul>
            <li>Animals (pets travel with you)</li>
            <li>Opened or partially used food containers</li>
            <li>Perishables from gardens (produce from your garden)</li>
            <li>Items with nostalgic value above $100/lb that weren’t declared</li>
            <li>Some movers decline mattresses in very poor condition</li>
          </ul>

          <h2>Pro tip: The "Essentials Box"</h2>
          <p>Pack a single box or bag that stays with you, NOT on the truck:</p>
          <ul>
            <li>Passports, IDs, important documents</li>
            <li>Medications (prescriptions + OTC)</li>
            <li>Cash, checkbook, jewelry</li>
            <li>2 days of clothes</li>
            <li>Phone chargers + laptop</li>
            <li>Pet supplies (day-of)</li>
            <li>Toiletries, snacks, water</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Get a quote (with non-allowables list)</Link>
            <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </article>
      <RelatedPosts currentSlug="what-movers-wont-move" />
      <CTA />
    </>
  );
}
