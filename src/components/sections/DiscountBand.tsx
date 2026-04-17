import Link from 'next/link';
import { Gift, ArrowRight, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function DiscountBand() {
  return (
    <section className="bg-gradient-to-r from-[var(--color-accent)] via-[#e11d48] to-[var(--color-accent-dark)] text-white">
      <div className="container-site py-6 md:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
              <Gift size={22} className="text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] font-bold opacity-90">First-Time Customers</div>
              <div className="mt-0.5 text-lg md:text-2xl font-extrabold leading-tight">
                <span className="text-white">Save </span>
                <span className="bg-white text-[var(--color-accent)] px-2 rounded">$100 off</span>
                <span className="text-white"> your Orlando move.</span>
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/85">Book this month. No coupon code needed — just mention it.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/contact-us" className="inline-flex items-center gap-1.5 bg-white text-[var(--color-accent)] font-extrabold px-5 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
              Claim the discount <ArrowRight size={16} />
            </Link>
            <a href={SITE.phoneLink} className="inline-flex items-center gap-1.5 border-2 border-white text-white font-bold px-5 py-3 rounded-lg hover:bg-white hover:text-[var(--color-accent)] transition-all">
              <Phone size={16} /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
