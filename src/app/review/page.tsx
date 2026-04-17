import PageHero from '@/components/sections/PageHero';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'Leave a Review — Liberty Moves Orlando',
  description: 'Share your Liberty Moves Orlando experience on Google. It helps other Orlando families find a trusted mover — and it means the world to our team.',
  alternates: { canonical: `${SITE.url}/review` },
};

export default function Review() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Leave a Review', url: `${SITE.url}/review` }]} />
      <PageHero eyebrow="Reviews" title="Thank you for choosing Liberty Moves." subtitle="A few nice words on Google helps more Orlando families find a mover they can trust." />
      <section className="section-pad">
        <div className="container-site max-w-xl text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={32} fill="#f59e0b" className="text-[var(--color-accent)]" />)}
          </div>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">Click the button below to leave us a Google review. Takes 30 seconds. Genuinely means a lot.</p>
          <a
            href="https://g.page/r/liberty-moves-orlando/review"
            className="btn btn-primary mt-8 inline-flex"
            target="_blank" rel="noreferrer"
          >Leave a Google Review</a>
          <p className="mt-6 text-sm text-[var(--color-muted)]">Something wrong with your move? Call us first: <a href={SITE.phoneLink} className="text-[var(--color-primary)] font-semibold">{SITE.phoneDisplay}</a>. We’ll make it right.</p>
        </div>
      </section>
    </>
  );
}
