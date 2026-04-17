'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SITE, NAV_PRIMARY } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[var(--color-border)]">
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-[var(--color-primary)] text-lg md:text-xl">Liberty Moves</span>
            <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-muted)]">Orlando, FL</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_PRIMARY.filter(n => n.href !== '/contact-us').map(n => (
            <Link
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] rounded-md transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={SITE.phoneLink} className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
            <Phone size={16} /> {SITE.phoneDisplay}
          </a>
          <Link href="/contact-us" className="btn btn-primary text-sm py-2 px-4">Free Quote</Link>
        </div>

        <button className="lg:hidden p-2" aria-label="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <div className="container-site py-4 flex flex-col gap-1">
            {NAV_PRIMARY.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className="py-3 px-2 text-sm font-medium text-[var(--color-text)] border-b border-[var(--color-border)] last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneLink} className="btn btn-primary mt-3"> <Phone size={16} /> Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      )}
    </header>
  );
}
