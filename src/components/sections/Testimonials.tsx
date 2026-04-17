import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Jessica R.', city: 'Winter Park', text: 'The crew was on time, polite, and unbelievably careful with our grandmother’s china cabinet. Final bill matched the quote to the dollar.' },
  { name: 'Marcus D.', city: 'Lake Mary', text: 'Second time using Liberty. Scheduled a Saturday move in 48 hours, done in five. Best movers in Orlando — not even close.' },
  { name: 'Priya S.', city: 'Kissimmee', text: 'Long-distance move to Atlanta. They wrapped everything, drove it themselves, unpacked when they arrived. White-glove the whole way.' },
  { name: 'David O.', city: 'Altamonte Springs', text: 'I get nervous about movers because I’ve been burned before. These guys were different. Clear pricing, no games, respectful team.' },
  { name: 'Alina M.', city: 'Oviedo', text: 'Our office move took four hours on a Sunday and we opened Monday morning without skipping a beat. Professional top-to-bottom.' },
  { name: 'Ken H.', city: 'Celebration', text: 'HOA-friendly, elevator-savvy, and the foreman walked me through every step. Price was fair. They’re the first number I’ll share when a neighbor asks.' },
];

export default function Testimonials() {
  return (
    <section className="section-pad">
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
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="card">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-[var(--color-accent)]" />)}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed mb-4">“{r.text}”</p>
              <div className="text-sm font-semibold text-[var(--color-primary)]">{r.name}</div>
              <div className="text-xs text-[var(--color-muted)]">{r.city}, FL</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
