import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SITE, CITIES, SERVICES } from '@/lib/site';
import { url, IMG } from '@/lib/images';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-20">
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="bg-white rounded-xl p-4 inline-block">
            <Image src={url(IMG.logo, 400)} alt="Liberty Moves Orlando" width={160} height={44} className="h-11 w-auto object-contain"/>
          </div>
          <p className="mt-4 text-white/80 text-sm leading-relaxed">
            Licensed & insured Orlando movers. Local, long-distance, residential and commercial.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={SITE.phoneLink} className="flex items-center gap-2 text-white hover:text-[var(--color-accent)]">
              <Phone size={14}/> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white hover:text-[var(--color-accent)]">
              <Mail size={14}/> {SITE.email}
            </a>
            <div className="flex items-start gap-2 text-white/80">
              <MapPin size={14} className="mt-0.5 shrink-0"/>
              <div>
                <div>{SITE.addressStreet}</div>
                <div>{SITE.addressCity}, {SITE.addressState} {SITE.addressZip}</div>
              </div>
            </div>
            <div className="text-white/60 text-xs mt-3">USDOT {SITE.usdot} · FLDACS {SITE.fldacs}</div>
            <a href="https://csapp.fdacs.gov/cspublicapp/businesssearch/businesssearch.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline text-xs mt-1 inline-block">Verify any FL mover’s license →</a>
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

      <div className="border-t border-white/10 bg-[#0a1729]">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-white/60 text-xs">© {year} Liberty Moves Orlando, LLC. All rights reserved.</div>
          <a
            href="https://reviveagency.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--color-accent)]/50 rounded-full px-4 py-2 text-white text-sm font-medium transition"
          >
            <span className="text-white/80">Built with</span>
            <Heart size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)] animate-pulse group-hover:scale-125 transition-transform" />
            <span className="text-white/80">by</span>
            <span className="font-bold text-white group-hover:text-[var(--color-accent)]">Revive Agency</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
