'use client';
import { useEffect, useState } from 'react';
import { CheckCircle2, X, MapPin, Star } from 'lucide-react';

const EVENTS = [
  { who: 'Jessica R.', where: 'Winter Park', what: 'booked a 3-bed move' },
  { who: 'Marcus D.', where: 'Lake Mary', what: 'requested a quote' },
  { who: 'Alina M.', where: 'Oviedo', what: 'booked an office move' },
  { who: 'David O.', where: 'Altamonte Springs', what: 'scheduled a Saturday move' },
  { who: 'Priya S.', where: 'Kissimmee', what: 'locked in long-distance pricing' },
  { who: 'Ken H.', where: 'Celebration', what: 'requested a quote' },
  { who: 'Tori B.', where: 'Windermere', what: 'booked a white-glove move' },
  { who: 'Sam P.', where: 'Sanford', what: 'requested a quote' },
  { who: 'Elena V.', where: 'Apopka', what: 'booked a move for next Saturday' },
  { who: 'Chris L.', where: 'Dr. Phillips', what: 'requested packing help' },
  { who: 'Monique G.', where: 'Baldwin Park', what: 'scheduled a weekday move' },
  { who: 'Ray T.', where: 'Winter Garden', what: 'booked a 2-bedroom apartment move' },
];

export default function SocialProofToast() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  const [ago, setAgo] = useState(4);

  useEffect(() => {
    if (closed) return;
    if (typeof window === 'undefined') return;

    // First toast: 25 seconds in
    const first = setTimeout(() => setShow(true), 25000);

    // Cycle every 45 seconds
    const cycle = setInterval(() => {
      if (closed) return;
      setShow(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % EVENTS.length);
        setAgo(Math.floor(Math.random() * 11) + 2); // 2–12 minutes ago
        setShow(true);
      }, 400);
    }, 45000);

    return () => { clearTimeout(first); clearInterval(cycle); };
  }, [closed]);

  if (closed || !show) return null;
  const ev = EVENTS[idx];

  return (
    <div className={`fixed bottom-4 left-4 z-40 max-w-sm transition-all duration-400 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white rounded-xl shadow-2xl border border-[var(--color-border)] p-3 flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
          <CheckCircle2 className="text-emerald-600" size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-[var(--color-muted)] font-semibold">
            <span className="text-[var(--color-primary)] font-bold">{ev.who}</span> in {ev.where}
          </div>
          <div className="text-sm font-semibold text-[var(--color-text)] mt-0.5">{ev.what}</div>
          <div className="text-[11px] text-[var(--color-muted)] mt-1 flex items-center gap-2">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#fbbf24" className="text-amber-400"/>)}
            </span>
            <span>•</span>
            <span>{ago} min ago</span>
          </div>
        </div>
        <button
          onClick={() => setClosed(true)}
          aria-label="dismiss"
          className="p-1 -m-1 rounded hover:bg-[var(--color-surface)] text-[var(--color-muted)] shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
