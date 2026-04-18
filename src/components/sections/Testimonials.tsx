import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { name: 'Jessica R.', city: 'Winter Park', text: 'The crew was on time, polite, and unbelievably careful with our grandmother\u2019s china cabinet. Final bill matched the quote to the dollar.' },
  { name: 'Marcus D.', city: 'Lake Mary', text: 'Second time using Liberty. Scheduled a Saturday move in 48 hours, done in five. Best movers in Orlando \u2014 not even close.' },
  { name: 'Priya S.', city: 'Kissimmee', text: 'Long-distance move to Atlanta. They wrapped everything, drove it themselves, unpacked when they arrived. White-glove the whole way.' },
  { name: 'David O.', city: 'Altamonte Springs', text: 'I get nervous about movers because I\u2019ve been burned before. These guys were different. Clear pricing, no games, respectful team.' },
  { name: 'Alina M.', city: 'Oviedo', text: 'Our office move took four hours on a Sunday and we opened Monday morning without skipping a beat. Professional top-to-bottom.' },
  { name: 'Ken H.', city: 'Celebration', text: 'HOA-friendly, elevator-savvy, and the foreman walked me through every step. Price was fair. They\u2019re the first number I\u2019ll share when a neighbor asks.' },
];

const AVATAR_COLORS = [
  'from-[#1e3a5f] to-[#2a4a76]',
  'from-[#dc2626] to-[#b91c1c]',
  'from-[#0891b2] to-[#0e7490]',
  'from-[#ea580c] to-[#c2410c]',
  'from-[#4f46e5] to-[#3730a3]',
  'from-[#059669] to-[#047857]',
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
}

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
          {REVIEWS.map((r, i) => (
            <div key={r.name} className="relative card hover:border-[var(--color-accent)]">
              <Quote className="absolute top-5 right-5 text-[var(--color-accent)]/15" size={48} />
              <div className="flex mb-3 relative">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-[var(--color-accent)]" />)}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed mb-5 relative">\u201c{r.text}\u201d</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white font-bold text-sm flex items-center justify-center shadow-md`}>
                  {initials(r.name)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--color-primary)]">{r.name}</div>
                  <div className="text-xs text-[var(--color-muted)]">{r.city}, FL</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
