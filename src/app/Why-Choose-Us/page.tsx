import PageHero from '@/components/sections/PageHero';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Why Choose Liberty Moves Orlando — Orlando’s Trusted Movers',
  description:
    'Why families and businesses pick Liberty Moves Orlando: upfront pricing, licensed (USDOT 3455436), careful crews, and on-time service across Central Florida.',
  alternates: { canonical: `${SITE.url}/Why-Choose-Us` },
};

export default function WhyChooseUs() {
  return (
    <>
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Why Choose Us', url: `${SITE.url}/Why-Choose-Us` },
      ]} />
      <PageHero
        eyebrow="Why Liberty Moves"
        title="The reasons Orlando families keep calling back."
        subtitle="We’ve built our reputation on six simple promises. Break one and we’ll make it right."
      />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
