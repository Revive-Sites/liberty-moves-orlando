import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import ServiceAreas from '@/components/sections/ServiceAreas';
import CTA from '@/components/sections/CTA';
import { LocalBusinessLd } from '@/components/JsonLd';
import { SERVICES } from '@/lib/site';

export const metadata = {
  title: 'Orlando Moving Company | Liberty Moves Orlando – Local & Long Distance Movers',
  description:
    'Liberty Moves Orlando — trusted local and long-distance movers serving Orlando and all of Central Florida. Licensed, insured (USDOT 3455436). Free quote today.',
};

export default function Home() {
  return (
    <>
      <LocalBusinessLd />
      <Hero
        eyebrow="Orlando Moving Company"
        title="Moved with care. Delivered with confidence."
        subtitle="Professional Orlando movers for homes and businesses. Upfront pricing, careful crews, and no-surprise service from quote to unload. Serving all of Central Florida."
      />
      <TrustBar />
      <Services services={SERVICES} />
      <WhyUs />
      <Testimonials />
      <ServiceAreas />
      <CTA />
    </>
  );
}
