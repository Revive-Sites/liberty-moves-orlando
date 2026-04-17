import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import TLDR from '@/components/sections/TLDR';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'Furniture Disassembly Guide for Moving (Tools + Tips)',
  description: 'How to disassemble beds, tables, cribs, and bookcases for a move — tools, labeling systems, and how to make reassembly easy.',
  alternates: { canonical: `${SITE.url}/blog/furniture-disassembly-guide` },
};

export default function Post() {
  return (
    <>
      <BlogPostingLd slug="furniture-disassembly-guide" title="Furniture Disassembly Guide for Moving" description="Tools, labeling, and how to make furniture reassembly easy on move day." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: 'Furniture Disassembly', url: `${SITE.url}/blog/furniture-disassembly-guide` }]} />
      <PageHero eyebrow="Packing Guide · January 2026" title="Furniture Disassembly Guide for Moving" subtitle="How to take apart beds, tables, dressers, and cribs without losing hardware — plus a labeling system that makes reassembly fast." />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <TLDR points={[
            'Take photos before you disassemble — reassembly reference',
            'Use ziplock bags labeled with item name for hardware',
            'Tape hardware bag to the item itself',
            'Keep Allen keys (hex tools) with IKEA items',
            'Liberty Moves includes disassembly — free for standard items',
          ]} />

          <h2>Tools you\u2019ll actually need</h2>
          <ul>
            <li>Phillips + flathead screwdrivers</li>
            <li>Allen key / hex key set (IKEA, modern furniture)</li>
            <li>Adjustable wrench (bed frames, tables)</li>
            <li>Ziplock bags (quart size for hardware)</li>
            <li>Masking tape + Sharpie (labels)</li>
            <li>Your phone camera</li>
          </ul>

          <h2>The labeling system that saves you hours</h2>
          <ol>
            <li>Before you touch a tool: take photos of the furniture from 4 angles</li>
            <li>Remove hardware into a ziplock bag</li>
            <li>Write on the bag in Sharpie: <em>"BED FRAME — QUEEN — LEFT SIDE RAIL"</em></li>
            <li>Tape the bag directly to the furniture piece (on the underside or back)</li>
            <li>If the furniture is coming apart into multiple pieces, label each piece with masking tape</li>
          </ol>

          <h2>Bed frames</h2>
          <p>Standard process: remove mattress and box spring. Remove side rails (usually 4 bolts). Remove headboard and footboard from rails. Keep hardware bag taped to one rail. Reassemble is the reverse — takes ~30 min per bed.</p>

          <h2>Dining tables</h2>
          <p>Most tables: flip table upside down on a blanket to protect finish. Unscrew legs (usually 4 bolts each). Keep all hardware in one labeled bag taped to the underside of the table. Reassemble: 15 min.</p>

          <h2>Dressers + bookcases</h2>
          <p>Generally don\u2019t need to disassemble unless they\u2019re too wide to fit through doorways. Empty all drawers and pack contents separately. Remove drawers for the move (lighter + easier to handle). Take photos first of any mirror attachments for reassembly.</p>

          <h2>Cribs</h2>
          <p>Cribs MUST be disassembled — they\u2019re too fragile to move assembled. Save all hardware carefully. Keep the instruction manual if you still have it. If you don\u2019t, search the manufacturer website for reassembly steps. For safety, inspect all hardware before putting baby back in.</p>

          <h2>IKEA + modern furniture</h2>
          <p>Keep original Allen keys taped to the item. Label every panel before removing. Take photos of every dowel hole before disassembling. IKEA furniture typically doesn\u2019t love being disassembled/reassembled — if you can move it assembled, do.</p>

          <h2>Desks + home office</h2>
          <p>Remove monitor arms, cable management, drawer contents. Photograph cable setups before disconnecting. Most desks disassemble like tables.</p>

          <h2>When we handle it for you</h2>
          <p>Liberty Moves Orlando includes basic furniture disassembly and reassembly at no extra charge — beds, tables, cribs, standard pieces. We bring our own tools, we keep hardware labeled, and we handle reassembly at your destination. Complex items (custom cabinets, pool tables, entertainment centers) may be quoted separately.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Quote my move (disassembly included)</Link>
            <Link href="/Packing-Services" className="btn btn-outline">Packing services →</Link>
          </div>
        </div>
      </article>
      <RelatedPosts currentSlug="furniture-disassembly-guide" />
      <CTA />
    </>
  );
}
