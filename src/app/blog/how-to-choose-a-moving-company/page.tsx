import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'How to Choose a Moving Company (7 Questions + Red Flags)',
  description: 'The 7 questions every honest mover answers easily — and the red flags that mean you should walk away. Florida-specific verification tips.',
  alternates: { canonical: `${SITE.url}/blog/how-to-choose-a-moving-company` },
};

export default function Post() {
  return (
    <>
      <BlogPostingLd slug="how-to-choose-a-moving-company" title="How to Choose a Moving Company" description="7 questions every honest mover answers easily, plus red flags to walk away from." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'How to Choose a Mover', url: `${SITE.url}/blog/how-to-choose-a-moving-company` }]} />
      <PageHero eyebrow="Buyer’s Guide · January 2026" title="How to Choose a Moving Company" subtitle="7 questions every honest mover answers easily, plus 6 red flags that mean you should walk away before handing over a dollar." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Verify USDOT (safer.fmcsa.dot.gov) + FLDACS IM# for any FL mover',
            'Get 3 written quotes — verbal is meaningless',
            'Walk away from: cash-only, huge deposits, unmarked trucks',
            'Pick by reputation not price — cheapest often costs more',
            'Book 2–6 weeks ahead for best pricing and crew',
          ]} />

          <h2>The 7 questions every honest mover answers fast</h2>
          <ol>
            <li><strong>"What’s your USDOT number and FLDACS IM#?"</strong> Any legitimate mover has both for Florida intrastate moves. Verify at safer.fmcsa.dot.gov and <a href="https://csapp.fdacs.gov/cspublicapp/businesssearch/businesssearch.aspx" target="_blank" rel="noopener noreferrer" className="underline">FDACS Business Search</a>.</li>
            <li><strong>"Can you send me a written estimate?"</strong> "Yes, same day" is the only right answer.</li>
            <li><strong>"What’s included in the hourly rate?"</strong> Should include truck, crew, pads, shrink wrap, dollies, tape, mileage, fuel. Anything else separate is a red flag.</li>
            <li><strong>"What coverage options do you offer?"</strong> Released Value (free, 60¢/lb), Full Value Protection, and optional third-party insurance. See our <Link href="/blog/moving-insurance-explained" className="underline">insurance guide</Link>.</li>
            <li><strong>"Do you subcontract?"</strong> Best answer: "No." Subcontractors mean your stuff gets handled by people the company you hired doesn’t control.</li>
            <li><strong>"What’s your damage claims process?"</strong> Clear timeline (usually 30 days), clear contact, straightforward. Vague answers = slow payouts.</li>
            <li><strong>"Can I see recent reviews?"</strong> Google Business Profile, not just testimonials on their own site. 100+ reviews with 4.5+ stars.</li>
          </ol>

          <h2>6 red flags that mean walk away</h2>
          <ul>
            <li><strong>Cash-only payment.</strong> Real businesses take cards and checks. Cash-only often means unlicensed.</li>
            <li><strong>Large deposit required.</strong> Local moves under $2,000 shouldn’t need a deposit. Long-distance maybe 10% refundable 48 hours out. Anything else is a scam pattern.</li>
            <li><strong>Unmarked truck or rental.</strong> Legitimate movers drive their own branded equipment.</li>
            <li><strong>No written estimate.</strong> Verbal quotes become “final price” arguments at destination, holding your stuff hostage.</li>
            <li><strong>Surprise fees on move day.</strong> Run from any mover adding charges after the truck is loaded.</li>
            <li><strong>Huge price gap vs competitors.</strong> 40% below the market usually means they’ll find ways to make up the gap — usually by damaging your stuff.</li>
          </ul>

          <h2>Where to find reputable Orlando movers</h2>
          <ul>
            <li><strong>Google Business Profile</strong> — look for 100+ reviews, 4.5+ stars, active responses to reviews</li>
            <li><strong>BBB</strong> — A+ rating + no unresolved complaints</li>
            <li><strong>FMCSA database</strong> — safer.fmcsa.dot.gov shows insurance + authority status</li>
            <li><strong>FDACS</strong> — <a href="https://csapp.fdacs.gov/cspublicapp/businesssearch/businesssearch.aspx" target="_blank" rel="noopener noreferrer" className="underline">csapp.fdacs.gov</a> for Florida intrastate license verification</li>
            <li><strong>AMSA/Pro Mover program</strong> — voluntary trade association with standards</li>
          </ul>

          <h2>The honest pitch</h2>
          <p>We’re Liberty Moves Orlando. USDOT {SITE.usdot}. FLDACS {SITE.fldacs}. 300+ Google reviews. Licensed, insured, transparent. If you’re comparing us to other Orlando movers — ask them the 7 questions above. Let them earn your business. If we don’t, hire someone else. That’s the right way to make this decision.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Get my Liberty Moves quote</Link>
            <a href={SITE.phoneLink} className="btn btn-outline">Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </article>
      <RelatedPosts currentSlug="how-to-choose-a-moving-company" />
      <CTA />
    </>
  );
}
