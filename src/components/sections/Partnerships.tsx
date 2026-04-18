import Image from 'next/image';
import { Award } from 'lucide-react';
import { url } from '@/lib/images';

// Partnership / accreditation badges — BBB, Seminole Chamber, Orlando Moving Co
const BADGES = [
  { hash: '696675210475d420a14bbe91', ext: 'png' as const, alt: 'BBB Accredited Business', name: 'BBB Accredited' },
  { hash: '6967ea1ec802d94ad6138835', ext: 'png' as const, alt: 'Seminole County Chamber of Commerce', name: 'Seminole Chamber' },
  { hash: '696908c7f43f8a25f73b23b2', ext: 'jpeg' as const, alt: 'Orlando Moving Co partnership', name: 'Orlando Moving Co' },
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
          {BADGES.map((b) => (
            <div key={b.hash} className="relative aspect-[4/3] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-4 md:p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
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
          ))}
        </div>
      </div>
    </section>
  );
}
