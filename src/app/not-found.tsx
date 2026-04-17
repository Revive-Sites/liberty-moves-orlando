import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <section className="hero-gradient text-white">
      <div className="container-site py-24 text-center">
        <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">404</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white">Page moved — like so many things we move.</h1>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">The page you’re looking for isn’t here. No worries, we can get you somewhere useful.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/contact-us" className="btn btn-secondary">Get a Quote</Link>
          <a href={SITE.phoneLink} className="btn btn-secondary">Call {SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
