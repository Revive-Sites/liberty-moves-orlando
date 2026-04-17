import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

type Post = { slug: string; title: string; excerpt: string; category: string };
const ALL: Post[] = [
  { slug: 'how-professional-packing-services-protect-your-belongings', title: 'Pro Packing Protects Your Belongings', excerpt: 'Materials, methods, and liability differences.', category: 'Packing' },
  { slug: 'what-makes-liberty-moves-different', title: 'What Makes Liberty Moves Different', excerpt: 'Transparent pricing, real crews, real accountability.', category: 'Company' },
  { slug: 'licensed-vs-unlicensed-orlando-movers', title: 'Licensed vs Unlicensed Movers', excerpt: 'What licensing actually protects you from.', category: 'Buyer Guide' },
  { slug: 'why-hire-local-orlando-movers', title: 'Why Hire Local Orlando Movers', excerpt: 'Why locals outperform national chains.', category: 'Local' },
  { slug: 'long-distance-moving-services-guide', title: 'Long Distance Moving Services Guide', excerpt: 'Interstate moving demystified.', category: 'Long Distance' },
  { slug: 'how-much-do-movers-cost-in-orlando', title: 'How Much Do Movers Cost in Orlando? (2026)', excerpt: 'Hourly rates, home-size tables, and money-saving tips.', category: 'Pricing' },
  { slug: 'how-much-to-tip-movers-in-florida', title: 'How Much to Tip Movers in Florida', excerpt: 'Hourly vs percentage, exceptional service, cash vs Venmo.', category: 'Tipping' },
  { slug: 'best-time-to-move-in-orlando', title: 'Best Time of Year to Move in Orlando', excerpt: 'Seasonal pricing, hurricane season, cheapest weeks.', category: 'Planning' },
  { slug: 'orlando-moving-checklist', title: 'Complete Orlando Moving Checklist', excerpt: '8-week countdown with week-by-week tasks.', category: 'Planning' },
  { slug: 'how-to-pack-fragile-items', title: 'How to Pack Fragile Items', excerpt: 'Glassware, china, TVs, mirrors, art, electronics.', category: 'Packing' },
  { slug: 'moving-insurance-explained', title: 'Moving Insurance, Actually Explained', excerpt: 'Released Value vs Full Value vs third-party.', category: 'Insurance' },
  { slug: 'diy-vs-professional-movers-orlando', title: 'DIY vs Professional Movers in Orlando', excerpt: 'True cost of a U-Haul vs hiring pros.', category: 'Decision' },
  { slug: 'moving-with-pets-to-florida', title: 'Moving with Pets to Florida', excerpt: 'Vet records, heat safety, first-week adjustment.', category: 'Pets' },
  { slug: 'moving-to-orlando-with-kids', title: 'Moving to Orlando With Kids', excerpt: 'School transfers, neighborhood picks, family tips.', category: 'Family' },
  { slug: 'best-orlando-neighborhoods-for-families', title: 'Best Orlando Neighborhoods for Families', excerpt: 'Schools, parks, safety, and home values compared.', category: 'Neighborhoods' },
  { slug: 'moving-during-hurricane-season-florida', title: 'Moving During Hurricane Season in Florida', excerpt: 'How to plan, what to watch, when to reschedule.', category: 'Planning' },
  { slug: 'how-to-choose-a-moving-company', title: 'How to Choose a Moving Company (Red Flags)', excerpt: 'The 7 questions every honest mover answers easily.', category: 'Buyer Guide' },
  { slug: 'office-relocation-planning-guide', title: 'Office Relocation Planning Guide', excerpt: 'IT, landlord, timeline, zero-downtime playbook.', category: 'Commercial' },
  { slug: 'storage-unit-sizes-guide', title: 'Storage Unit Sizes: What Fits?', excerpt: '5×5 through 10×30 — what each size actually holds.', category: 'Storage' },
  { slug: 'furniture-disassembly-guide', title: 'Furniture Disassembly Guide', excerpt: 'Beds, tables, cribs — tools, labels, and reassembly.', category: 'Packing' },
  { slug: 'what-movers-wont-move', title: "What Movers Won't Move (and Why)", excerpt: 'The non-allowables list — plus safe alternatives.', category: 'Buyer Guide' },
];

export default function RelatedPosts({ currentSlug, count = 3 }: { currentSlug: string; count?: number }) {
  const related = ALL.filter((p) => p.slug !== currentSlug).slice(0, count);
  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <div className="container-site max-w-4xl">
        <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Keep reading</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">Related Orlando moving guides</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group block">
              <div className="flex items-center gap-2 text-[10px] text-[var(--color-muted)]">
                <Calendar size={10}/>
                <span className="text-[var(--color-accent)] font-semibold uppercase tracking-widest">{p.category}</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{p.excerpt}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">Read <ArrowRight size={12}/></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
