import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Moving Tips & Guides — Liberty Moves Orlando Blog',
  description: 'Honest, practical moving advice from Orlando’s trusted local movers — pricing guides, packing tips, and checklists that actually work.',
  alternates: { canonical: `${SITE.url}/blog` },
};

const POSTS: Array<{ slug: string; title: string; excerpt: string; date: string }> = [
  // Seeded post list — full posts added in content phase
];

export default function Blog() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }]} />
      <PageHero eyebrow="Blog" title="Moving guides that actually help." subtitle="We’re building a library of honest, Orlando-specific moving advice. Check back soon for weekly posts." />
      <section className="section-pad">
        <div className="container-site max-w-3xl">
          {POSTS.length === 0 ? (
            <div className="card text-center">
              <Calendar className="mx-auto text-[var(--color-accent)]" size={32} />
              <h2 className="mt-4 text-2xl font-bold text-[var(--color-primary)]">New posts coming soon.</h2>
              <p className="mt-3 text-[var(--color-muted)]">In the meantime — if you have a moving question, just call us. We’ll answer honestly, whether you hire us or not.</p>
              <Link href="/contact-us" className="btn btn-primary mt-6 inline-flex">Ask a question</Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {POSTS.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card block">
                  <div className="text-xs text-[var(--color-muted)]">{p.date}</div>
                  <h3 className="mt-2 text-xl font-bold text-[var(--color-primary)]">{p.title}</h3>
                  <p className="mt-2 text-[var(--color-muted)] text-sm">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
