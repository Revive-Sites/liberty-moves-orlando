import PageHero from '@/components/sections/PageHero';
import WhyUs from '@/components/sections/WhyUs';
import LicenseVerify from '@/components/sections/LicenseVerify';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'About Liberty Moves Orlando — Family-Owned Moving Company',
  description:
    'Meet the team behind Liberty Moves Orlando. A family-run, licensed moving company serving Orlando and Central Florida with honest pricing and careful crews.',
  alternates: { canonical: `${SITE.url}/about` },
};

export default function About() {
  return (
    <>
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'About', url: `${SITE.url}/about` },
      ]} />
      <PageHero
        eyebrow="About Us"
        title="A family-run moving company built on one promise: treat every box like it’s our own."
        subtitle="We started Liberty Moves Orlando because we were tired of watching neighbors get nickel-and-dimed by faceless national chains. We do it differently — you’ll know our names by the end of your move."
      />
      <section className="section-pad">
        <div className="container-site max-w-4xl prose-ink">
          <p>Liberty Moves Orlando is a locally owned, licensed moving company serving Orlando and all of Central Florida. We’re proud of two numbers: our USDOT ({SITE.usdot}) — which means we’re fully vetted by federal transportation authorities — and the hundreds of families who’ve trusted us to pack and move their lives.</p>
          <p>What makes us different isn’t a gimmick. It’s that we show up when we say we will, we price what we quote, and we treat your grandmother’s china like it belongs to our own. When things go right (and they almost always do), you’ll barely notice us. When something unexpected comes up, you’ll hear from us first — not a surprise on the invoice.</p>
          <p>From one-bedroom apartments in College Park to 5,000-square-foot homes in Windermere, from office moves in downtown Orlando to long-distance relocations out of state — we handle it all. Same crew, same care, same commitment.</p>
        </div>
      </section>
      <WhyUs />
      <LicenseVerify />
      <CTA />
    </>
  );
}
