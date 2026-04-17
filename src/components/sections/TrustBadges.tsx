import Link from 'next/link';
import { Shield, Award, CheckCircle2, Star, Briefcase, ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/site';

const BADGES = [
  { icon: Shield, label: 'USDOT', value: SITE.usdot, verify: 'https://safer.fmcsa.dot.gov/CompanySnapshot.aspx' },
  { icon: CheckCircle2, label: 'FLDACS', value: SITE.fldacs, verify: 'https://csapp.fdacs.gov/cspublicapp/businesssearch/businesssearch.aspx' },
  { icon: Star, label: 'Google Rating', value: `${SITE.rating.toFixed(1)} ★`, verify: SITE.googleReviewUrl },
  { icon: Award, label: 'Reviews', value: `${SITE.reviewCount}+ verified` },
  { icon: Briefcase, label: 'Years in Biz', value: '10+' },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white">
      <div className="container-site py-6">
        <div className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-muted)] mb-4">
          Licensed · Accredited · Insured · Verified
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BADGES.map((b) => {
            const inner = (
              <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-sm transition">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                  <b.icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-semibold">{b.label}</div>
                  <div className="text-sm font-extrabold text-[var(--color-primary)] truncate">
                    {b.value}
                    {b.verify && <ExternalLink size={10} className="inline ml-1 opacity-60" />}
                  </div>
                </div>
              </div>
            );
            return b.verify ? (
              <a key={b.label} href={b.verify} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <div key={b.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
