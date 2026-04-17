'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="container-site max-w-3xl">
        <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">FAQs</div>
        <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Answers before you book.</h2>

        <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {items.map((item, i) => (
            <div key={i} className="py-4">
              <button
                className="w-full flex items-center justify-between text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[var(--color-primary)] text-base md:text-lg">{item.q}</span>
                <ChevronDown
                  className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              {open === i && (
                <div className="mt-3 text-[var(--color-muted)] leading-relaxed">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
