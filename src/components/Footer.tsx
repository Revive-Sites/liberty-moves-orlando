import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE, CITIES, SERVICES } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-20">
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-extrabold text-xl">Liberty Moves Orlando</div>
          <p className="mt-3 text-white/80 text-sm leading-relaxed">
            Licensed & insured Orlando movers. Local, long-distance, residential and commercial.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={SITE.phoneLink} className="flex items-center gap-2 text-white hover:text-[var(--color-accent)]">
              <Phone size={14}/> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white hover:text-[var(--color-accent)]">
              <Mail size={14}/> {SITE.email}
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin size={14}/> {SITE.addressCity}, {SITE.addressState} {SITE.addressZip}
            </div>
            <div className="text-white/60 text-xs mt-3">USDOT {SITE.usdot}</div>
            <div className="text-white/60 text-xs">FLDACS IM# pending</div>
            <div className="mt-3"><a href="/es" className="text-xs text-white/70 hover:text-[var(--color-accent)]">Español →</a></div>
          </div>
        </div>

        <div>
          <div className="font-display font-bold text-sm uppercase tracking-wider text-white/70">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-white/90 hover:text-[var(--color-accent)]">{s.title}</Link>
              </li>
            ))}
            <li><Link href="/Why-Choose-Us" className="text-white/90 hover:text-[var(--color-accent)]">Why Choose Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-sm uppercase tracking-wider text-white/70">Service Areas</div>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            {CITIES.slice(0, 12).map(c => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-white/90 hover:text-[var(--color-accent)]">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-sm uppercase tracking-wider text-white/70">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/About-Us" className="text-white/90 hover:text-[var(--color-accent)]">About</Link></li>
            <li><Link href="/gallery" className="text-white/90 hover:text-[var(--color-accent)]">Gallery</Link></li>
            <li><Link href="/faqs" className="text-white/90 hover:text-[var(--color-accent)]">FAQs</Link></li>
            <li><Link href="/blog" className="text-white/90 hover:text-[var(--color-accent)]">Blog</Link></li>
            <li><Link href="/review" className="text-white/90 hover:text-[var(--color-accent)]">Leave a Review</Link></li>
            <li><Link href="/contact-us" className="text-white/90 hover:text-[var(--color-accent)]">Contact</Link></li>
            <li><Link href="/privacy-policy" className="text-white/80 hover:text-[var(--color-accent)] text-xs mt-2 block">Privacy Policy</Link></li>
            <li><Link href="/terms-and-condition" className="text-white/80 hover:text-[var(--color-accent)] text-xs">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {year} Liberty Moves Orlando. All rights reserved.</div>
          <div>Built by <a href="https://thereviveagency.com" className="hover:text-[var(--color-accent)]">The Revive Agency</a></div>
        </div>
      </div>
    </footer>
  );
}
