import Image from 'next/image';
import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { url } from '@/lib/images';

// Real move/crew photos only. Badges (BBB/Chamber/OMC) moved to Partnerships section.
const GALLERY = [
  { hash: '69666066aa336fee46b8e00b', ext: 'png' as const, caption: 'Loaded and ready — Orlando local move' },
  { hash: '6967f14225c12a7e4603b30c', ext: 'jpeg' as const, caption: 'Careful handling on move day' },
  { hash: '6968ff5644b623c7e5fd8a70', ext: 'png' as const, caption: 'Residential moves across Central Florida' },
  { hash: '695fb25e6eabe665b924f386', ext: 'jpg' as const, caption: 'Specialty custom crating' },
  { hash: '69a585f2320ef42744c0babb', ext: 'png' as const, caption: 'Long-distance — storage staging' },
  { hash: '6982b5e399f1bff20e92e47a', ext: 'jpg' as const, caption: 'Professional packing service' },
  { hash: '69816e3d1311f6256add592f', ext: 'jpg' as const, caption: 'Packing materials at cost' },
  { hash: '697f84e91fd8279b465f05c8', ext: 'jpg' as const, caption: 'Protecting every piece' },
  { hash: '6966737be2d75bd6ac16fff0', ext: 'jpg' as const, caption: 'Trained crew in action' },
  { hash: '6967ea1ec802d94ad6138835', ext: 'png' as const, caption: 'Apartment move — Lake Mary' },
  { hash: '696908c7f43f8a25f73b23b2', ext: 'jpeg' as const, caption: 'High-rise lobby move' },
  { hash: '696675210475d420a14bbe91', ext: 'png' as const, caption: 'Loading the truck' },
  { hash: '6967ea1e5ce16c64a01539a8', ext: 'png' as const, caption: 'Storage unit delivery' },
];

export const metadata = {
  title: 'Gallery — Liberty Moves Orlando at Work',
  description: 'Photos of Liberty Moves Orlando crews, trucks, and move days across Central Florida. Licensed, insured, and careful with every customer.',
  alternates: { canonical: `${SITE.url}/gallery` },
};

export default function Gallery() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Gallery', url: `${SITE.url}/gallery` }]} />
      <PageHero eyebrow="Gallery" title="Real crews. Real trucks. Real Orlando moves." subtitle="Every job gets the same care — whether it’s a studio in College Park or a Windermere estate." />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((g, i) => (
              <div key={`${g.hash}-${i}`} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow">
                <Image
                  src={url({ hash: g.hash, ext: g.ext }, 900)}
                  alt={g.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1729]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
