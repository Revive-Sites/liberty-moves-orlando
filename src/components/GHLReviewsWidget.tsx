import { Star, Quote } from 'lucide-react';
import { SITE } from '@/lib/site';

type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  initial: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Kyle M.',
    initial: 'K',
    rating: 5,
    date: 'Aug 2025',
    text: 'Great team, utterly professional and made moving day significantly less stressful.',
  },
  {
    name: 'Christina H.',
    initial: 'C',
    rating: 5,
    date: 'Jun 2025',
    text: 'Shemuel & Amare with Liberty Moves Orlando did a great job. They protected all the furniture and took great care when moving it. They were both very polite. I would highly recommend them.',
  },
  {
    name: 'Mark G.',
    initial: 'M',
    rating: 5,
    date: 'Jul 2025',
    text: 'The boys were fast and done within 3 hours. They arrived within the hour, they had everything they needed. They were very attentive to our valuables. Thank you for relieving the stress off our bodies by moving big furniture. I truly recommend them — they will not disappoint.',
  },
  {
    name: 'Chloe H.',
    initial: 'C',
    rating: 5,
    date: 'Jun 2024',
    text: 'Great experience with Liberty Moves! They were communicative during the whole process — from booking all the way through the move. My two movers called the morning of to let me know their ETA and they showed up right on time. They treated all of my items with care and wrapped my furniture to protect it from damage. Very quick — finished the move in less than 3 hours.',
  },
  {
    name: 'Steve S.',
    initial: 'S',
    rating: 5,
    date: 'Apr 2024',
    text: 'Liberty Moves Orlando was everything I hoped when I booked this move. Courteous from the beginning and through the entire process. Derek and Spencer were friendly but professional, worked together when required but also kept busy making progress on separate tasks. Everything was packed and transported safely and securely. It was a pleasure doing business with Liberty Moves Orlando.',
  },
  {
    name: 'Robert A.',
    initial: 'R',
    rating: 5,
    date: 'Jul 2024',
    text: 'On time for move. Nicely prepared for items to move. Moved items in and helped to move items already in new home out for us. Even some from upstairs. I recommend Liberty Moves Orlando.',
  },
  {
    name: 'Kassandra R.',
    initial: 'K',
    rating: 5,
    date: 'Aug 2024',
    text: 'Did a great job! Fast and efficient.',
  },
];

const AVATAR_COLORS = [
  'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500',
  'bg-rose-500', 'bg-cyan-500', 'bg-fuchsia-500',
];

export default function GHLReviewsWidget({ minRating = 3 }: { minRating?: number }) {
  const visible = REVIEWS.filter((r) => r.rating >= minRating);
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="relative bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow"
          >
            <Quote className="absolute top-4 right-4 text-[var(--color-accent)]/15" size={36} />
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white flex items-center justify-center font-extrabold text-lg shrink-0`}>
                {r.initial}
              </div>
              <div>
                <div className="font-bold text-[var(--color-primary)]">{r.name}</div>
                <div className="text-xs text-[var(--color-muted)]">{r.date}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5">
              {[...Array(r.rating)].map((_, s) => (
                <Star key={s} size={16} fill="#f59e0b" className="text-amber-500" />
              ))}
            </div>
            <p className="mt-3 text-sm text-[var(--color-primary)]/90 leading-relaxed">
              {r.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" className="text-amber-500" />
            ))}
          </div>
          <span className="font-bold">{SITE.rating.toFixed(1)}</span>
          <span className="text-[var(--color-muted)]">average from {SITE.reviewCount}+ reviews</span>
        </div>
        <a
          href={SITE.social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm font-bold transition"
        >
          Read all Google reviews →
        </a>
      </div>
    </div>
  );
}
