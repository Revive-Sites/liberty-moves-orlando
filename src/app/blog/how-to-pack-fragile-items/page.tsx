import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'How to Pack Fragile Items for a Move (Pro Tips)',
  description: 'Professional packing techniques for glassware, china, TVs, mirrors, art, and electronics. Learn what breaks, why, and how to prevent it.',
  alternates: { canonical: `${SITE.url}/blog/how-to-pack-fragile-items` },
};

export default function Post() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Packing Fragiles', url: `${SITE.url}/blog/how-to-pack-fragile-items` }]} />
      <PageHero eyebrow="Packing Guide · January 2026" title="How to Pack Fragile Items (Without Breaking Them)" subtitle="The techniques professional packers use for glassware, china, TVs, mirrors, art, and electronics." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Use small boxes for heavy fragiles (books, plates, glassware)',
            'Wrap items individually in unprinted packing paper (newsprint ink stains)',
            'Pack vertically when possible — plates, vinyl, mirrors',
            'Fill every void — empty space = breakage',
            'Label “FRAGILE / THIS SIDE UP” on top AND sides',
          ]} />

          <h2>The two rules of fragile packing</h2>
          <p>Pro packers follow two rules that amateur packers miss: <strong>wrap each item individually</strong> (never stack naked glasses in a box), and <strong>fill every void</strong> (air space inside a box means items slide and collide). Follow those two rules and your damage rate drops 90%.</p>

          <h2>Glassware and stemware</h2>
          <p>Each glass wrapped in unprinted packing paper (newsprint transfers ink to dishes), then placed in a divided glassware box (sold at moving supply stores or by us at cost). Tops of glasses face up. Fill voids between glasses with crumpled paper. Heavy items (wine bottles, decanters) go bottom, light items (stemware) on top.</p>

          <h2>Plates and china</h2>
          <p>Pack plates VERTICALLY, not stacked. Wrap each plate individually, then stand them on edge in a small box with crumpled paper between. This is the single biggest change most homeowners miss — flat-stacked plates break constantly; vertically-packed plates almost never do.</p>

          <h2>Mirrors and framed art</h2>
          <p>Mirrors and flat-glass frames go in specialty mirror/picture boxes. Each item wrapped in paper, then in bubble wrap. Blue painter’s tape an “X” across the glass surface — this keeps the glass from shattering inward if it breaks. Stand vertically in the box, never flat.</p>

          <h2>Flat-screen TVs</h2>
          <p>Ideally: use the original box. If you don’t have it, use a specialty TV box (we sell them at cost). Pad the face of the TV with moving pads. Never lay a flat-screen flat during transport — always vertical.</p>

          <h2>Electronics (computers, stereo, routers)</h2>
          <p>Photograph all cable connections before disconnecting. Pack each component in its own small box with paper padding. Keep cables in labeled ziplock bags inside the same box as the component. For computers specifically: remove hard drives if possible and transport separately (a hard drive in a pocket is safer than one bouncing in a truck).</p>

          <h2>Artwork and collectibles</h2>
          <p>Valuable original art should be custom-crated — this is a service Liberty Moves Orlando can provide, or we coordinate with a fine-art specialist. Framed prints and photos: wrap in paper, then bubble wrap, then in picture boxes vertically.</p>

          <h2>What professional packing costs</h2>
          <p>Packing a 3-bedroom home professionally runs 8–16 labor hours on top of your standard move. At Liberty Moves Orlando that’s $400–$1,200 depending on crew size. Materials (boxes, paper, bubble wrap, specialty boxes) run another $150–$400. Full-service packing eliminates your damage risk because we’re liable for items we pack — self-packed boxes are not covered.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/Packing-Services" className="btn btn-primary">See our packing services</Link>
            <Link href="/contact-us" className="btn btn-outline">Get a quote</Link>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
