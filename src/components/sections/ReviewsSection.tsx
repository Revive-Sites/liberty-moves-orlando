import { Star } from 'lucide-react';
import GHLReviewsWidget from '@/components/GHLReviewsWidget';

export default function ReviewsSection({ minRating = 3 }: { minRating?: number }) {
  return (
    <section className="section-pad" id="reviews">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Reviews</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">What Central Florida is saying.</h2>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" className="text-[var(--color-accent)]" />)}
            </div>
            <span className="text-[var(--color-muted)]">5.0 from 300+ verified Google reviews</span>
          </div>
        </div>
        <div className="mt-10">
          <GHLReviewsWidget minRating={minRating} />
        </div>
      </div>
    </section>
  );
}
