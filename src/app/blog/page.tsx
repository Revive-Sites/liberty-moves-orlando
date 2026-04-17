import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Orlando Moving Tips & Guides — Liberty Moves Orlando Blog',
  description: 'Honest, practical Orlando moving advice — pricing guides, packing tips, tipping standards, hurricane-season planning, and checklists.',
  alternates: { canonical: `${SITE.url}/blog` },
};

const POSTS = [
  { slug: 'how-much-do-movers-cost-in-orlando', title: 'How Much Do Movers Cost in Orlando? (2026 Pricing Guide)', excerpt: 'Complete breakdown of Orlando moving costs — hourly rates, home-size tables, long-distance pricing, and how to save money on your move.', date: 'January 2026', category: 'Pricing' },
  { slug: 'how-much-to-tip-movers-in-florida', title: 'How Much to Tip Movers in Florida (2026)', excerpt: 'What’s standard for tipping Orlando and Florida movers — hourly rates, percentage approach, exceptional service, and how to tip properly.', date: 'January 2026', category: 'Tipping' },
  { slug: 'best-time-to-move-in-orlando', title: 'When’s the Best Time of Year to Move in Orlando?', excerpt: 'Orlando’s weather, hurricane season, seasonal pricing, and the specific weeks that save you hundreds.', date: 'January 2026', category: 'Planning' },
  { slug: 'orlando-moving-checklist', title: 'The Complete Orlando Moving Checklist (8 Weeks Out)', excerpt: 'Week-by-week moving checklist from 8 weeks out through your first week in Orlando. Florida-specific tips included.', date: 'January 2026', category: 'Planning' },
  { slug: 'how-to-pack-fragile-items', title: 'How to Pack Fragile Items (Without Breaking Them)', excerpt: 'Professional packing techniques for glassware, china, TVs, mirrors, art, and electronics.', date: 'January 2026', category: 'Packing' },
  { slug: 'moving-insurance-explained', title: 'Moving Insurance, Actually Explained', excerpt: 'Released Value vs Full Value Protection vs third-party insurance — what\u2019s covered, what isn\u2019t, and how to choose.', date: 'January 2026', category: 'Insurance' },
  { slug: 'diy-vs-professional-movers-orlando', title: 'DIY Move vs Professional Movers in Orlando', excerpt: 'Real cost comparison: U-Haul vs hiring pros. Hidden DIY costs and when each makes sense.', date: 'January 2026', category: 'Decision' },
  { slug: 'moving-with-pets-to-florida', title: 'Moving with Pets to Florida — The Complete Guide', excerpt: 'Dogs, cats, and exotic pets to Orlando. Health certificates, heat safety, hurricane plans, first-week adjustment.', date: 'January 2026', category: 'Pets' },
];

export default function Blog() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }]} />
      <PageHero eyebrow="Blog" title="Orlando moving guides that actually help." subtitle="Real answers to the questions Orlando homeowners actually ask. Written by people who move houses for a living — not SEO writers." />
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
