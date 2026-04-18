import Image from 'next/image';
import { Award } from 'lucide-react';
import { url } from '@/lib/images';

// Partnership / accreditation badges — visually verified
const BADGES = [
  { hash: '697201df15885e248f7aa335', ext: 'png' as const, alt: 'BBB Accredited Business', name: 'BBB Accredited', href: 'https://www.bbb.org' },
  { hash: '697202f5d4fb909b9a06f068', ext: 'png' as const, alt: 'Seminole County Chamber of Commerce', name: 'Seminole Chamber', href: 'https://seminolebusiness.org' },
  { hash: '697200c810cc27051e005094', ext: 'webp' as const, alt: 'Orlando Moving Co partnership', name: 'Orlando Moving Co' },
];

export default function Partnerships() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-bold uppercase tracking-[0.2em]">
            <Award size={14}/> Recognitions & Community Partnerships
          </div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Trusted by Central Florida\u2019s business community.</h2>
          <p className="mt-3 text-[var(--color-muted)] max-w-2xl mx-auto">
            Accredited, active, and proudly part of Orlando. These partnerships aren\u2019t just logos — they\u2019re accountability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto items-center">
          {BADGES.map((b) => {
            const card = (
              <div className="relative aspect-[4/3] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-4 md:p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="relative w-full h-full">
                  <Image
                    src={url({ hash: b.hash, ext: b.ext }, 600)}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 768px) 250px, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>
            );
            return b.href ? (
              <a key={b.hash} href={b.href} target="_blank" rel="noopener noreferrer" aria-label={b.name}>{card}</a>
            ) : (
              <div key={b.hash}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
