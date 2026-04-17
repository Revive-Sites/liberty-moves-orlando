import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Orlando Moving Tips & Guides — Liberty Moves Orlando Blog',
  description: 'Honest, practical Orlando moving advice — pricing, packing, tipping, hurricane-season planning, and 16+ guides written by actual movers.',
  alternates: { canonical: `${SITE.url}/blog` },
};

const POSTS = [
  { slug: 'how-much-do-movers-cost-in-orlando', title: 'How Much Do Movers Cost in Orlando? (2026 Pricing Guide)', excerpt: 'Hourly rates, home-size tables, long-distance pricing, and how to save money on your move.', date: 'January 2026', category: 'Pricing' },
  { slug: 'how-much-to-tip-movers-in-florida', title: 'How Much to Tip Movers in Florida (2026)', excerpt: 'Standard tipping for Florida movers — hourly vs percentage, exceptional service.', date: 'January 2026', category: 'Tipping' },
  { slug: 'best-time-to-move-in-orlando', title: 'When’s the Best Time of Year to Move in Orlando?', excerpt: 'Seasonal pricing, hurricane season, and the specific weeks that save hundreds.', date: 'January 2026', category: 'Planning' },
  { slug: 'orlando-moving-checklist', title: 'The Complete Orlando Moving Checklist (8 Weeks Out)', excerpt: 'Week-by-week moving checklist through your first week in Orlando.', date: 'January 2026', category: 'Planning' },
  { slug: 'how-to-pack-fragile-items', title: 'How to Pack Fragile Items (Without Breaking Them)', excerpt: 'Professional packing for glassware, china, TVs, mirrors, art, electronics.', date: 'January 2026', category: 'Packing' },
  { slug: 'moving-insurance-explained', title: 'Moving Insurance, Actually Explained', excerpt: 'Released Value vs Full Value Protection vs third-party insurance.', date: 'January 2026', category: 'Insurance' },
  { slug: 'diy-vs-professional-movers-orlando', title: 'DIY Move vs Professional Movers in Orlando', excerpt: 'Real cost comparison: U-Haul vs hiring pros.', date: 'January 2026', category: 'Decision' },
  { slug: 'moving-with-pets-to-florida', title: 'Moving with Pets to Florida — The Complete Guide', excerpt: 'Dogs, cats, exotic pets. Health certificates, heat, hurricane prep.', date: 'January 2026', category: 'Pets' },
  { slug: 'moving-to-orlando-with-kids', title: 'Moving to Orlando With Kids', excerpt: 'School transfers, family neighborhoods, kid-friendly activities.', date: 'January 2026', category: 'Family' },
  { slug: 'best-orlando-neighborhoods-for-families', title: 'Best Orlando Neighborhoods for Families (2026)', excerpt: '10 top-rated Orlando family neighborhoods with schools, safety, home prices compared.', date: 'January 2026', category: 'Neighborhoods' },
  { slug: 'moving-during-hurricane-season-florida', title: 'Moving During Hurricane Season in Florida', excerpt: 'How to plan, what to watch, when to reschedule.', date: 'January 2026', category: 'Planning' },
  { slug: 'how-to-choose-a-moving-company', title: 'How to Choose a Moving Company (Red Flags)', excerpt: 'The 7 questions every honest mover answers easily.', date: 'January 2026', category: 'Buyer Guide' },
  { slug: 'office-relocation-planning-guide', title: 'Office Relocation Planning Guide', excerpt: 'IT, landlord, timeline — zero-downtime commercial move playbook.', date: 'January 2026', category: 'Commercial' },
  { slug: 'storage-unit-sizes-guide', title: 'Storage Unit Sizes Guide', excerpt: '5×5 through 10×30 — what fits in each and Orlando pricing.', date: 'January 2026', category: 'Storage' },
  { slug: 'furniture-disassembly-guide', title: 'Furniture Disassembly Guide for Moving', excerpt: 'Tools, labeling, and making reassembly easy.', date: 'January 2026', category: 'Packing' },
  { slug: 'what-movers-wont-move', title: "What Movers Won't Move (and Why)", excerpt: 'Non-allowables list — hazmat, firearms, food, plants, valuables.', date: 'January 2026', category: 'Buyer Guide' },
];

export default function Blog() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }]} />
      <PageHero eyebrow="Blog" title="Orlando moving guides that actually help." subtitle="16+ real answers to the questions Orlando homeowners actually ask. Written by people who move houses for a living — not SEO writers." />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <div className="grid gap-6">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card group block">
                <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                  <Calendar size={12}/> {p.date}
                  <span className="text-[var(--color-accent)] font-semibold">· {p.category}</span>
                </div>
                <h2 className="mt-3 text-xl md:text-2xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{p.title}</h2>
                <p className="mt-2 text-[var(--color-muted)]">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">Read the guide <ArrowRight size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
