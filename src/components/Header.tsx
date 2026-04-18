'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SITE, CITIES } from '@/lib/site';
import { url, IMG } from '@/lib/images';

const EXTRA_AREAS = [
  { slug: 'lake-nona-movers', name: 'Lake Nona' },
  { slug: 'dr-phillips-movers', name: 'Dr. Phillips' },
  { slug: 'baldwin-park-movers', name: 'Baldwin Park' },
  { slug: 'thornton-park-movers', name: 'Thornton Park' },
];

const SERVICES_MENU = [
  { label: 'Residential Moving', href: '/residential-moving', desc: 'Homes, apartments, condos' },
  { label: 'Commercial Moving', href: '/commercial-moving', desc: 'Offices, retail, warehouses' },
  { label: 'Long-Distance', href: '/long-distance-moving', desc: 'Florida → anywhere in the U.S.' },
  { label: 'Packing Services', href: '/Packing-Services', desc: 'Full or partial packing' },
  { label: 'Piano Movers', href: '/piano-movers-orlando', desc: 'Uprights, grands, specialty' },
  { label: 'Apartment Movers', href: '/apartment-movers-orlando', desc: 'Walk-ups + elevator coordination' },
  { label: 'Senior Movers', href: '/senior-movers-orlando', desc: 'Downsizing, retirement transitions' },
  { label: 'UCF Student Movers', href: '/ucf-student-movers-orlando', desc: 'Dorm + apartment moves' },
  { label: 'Last-Minute / Same-Day', href: '/last-minute-movers-orlando', desc: 'Emergency moves' },
  { label: 'Storage + Moving', href: '/storage-moving-orlando', desc: 'Climate-controlled storage' },
];

// Unified: all CITIES + neighborhood pages — same list used in body ServiceAreas
const AREAS_MENU = [
  ...CITIES.map((c) => ({ label: c.name, href: `/${c.slug}` })),
  ...EXTRA_AREAS.map((a) => ({ label: a.name, href: `/${a.slug}` })),
];

const RESOURCES_MENU = [
  { label: 'Orlando Moving Cost Guide', href: '/orlando-moving-cost' },
  { label: 'Cost Calculator', href: '/orlando-moving-cost-calculator' },
  { label: 'Moving Tips Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Why Choose Us', href: '/Why-Choose-Us' },
  { label: 'Leave a Review', href: '/review' },
];

function Dropdown({ label, items, cols = 2 }: { label: string; items: Array<{ label: string; href: string; desc?: string }>; cols?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] rounded-md transition">
        {label} <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`}/>
      </button>
      <div className={`absolute top-full left-0 pt-2 transition-all ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
        <div className={`bg-white border border-[var(--color-border)] rounded-xl shadow-2xl p-3 grid gap-1 ${cols === 2 ? 'w-[520px] grid-cols-2' : cols === 3 ? 'w-[680px] grid-cols-3' : 'w-[260px] grid-cols-1'}`}>
          {items.map((it) => (
            <Link key={it.href} href={it.href} onClick={() => setOpen(false)} className="group flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-[var(--color-surface)] transition">
              <span className="text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{it.label}</span>
              {it.desc && <span className="text-xs text-[var(--color-muted)] leading-snug">{it.desc}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileSection({ title, items, initialOpen = false }: { title: string; items: Array<{ label: string; href: string; desc?: string }>; initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 px-2 text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`}/>
      </button>
      {open && (
        <div className="pb-2">
          {items.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block py-2 px-4 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)]"
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[var(--color-border)]">
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={url(IMG.logo, 400)}
            alt="Liberty Moves Orlando"
            width={180}
            height={52}
            priority
            className="h-11 md:h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] rounded-md transition">Home</Link>
          <Link href="/About-Us" className="px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] rounded-md transition">About</Link>
          <Dropdown label="Services" items={SERVICES_MENU} cols={2} />
          <Dropdown label="Service Areas" items={AREAS_MENU} cols={3} />
          <Dropdown label="Resources" items={RESOURCES_MENU} cols={1} />
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.phoneLink} className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition">
            <Phone size={16} /> {SITE.phoneDisplay}
          </a>
          <Link href="/contact-us" className="btn btn-primary text-sm py-2.5 px-5">Free Quote →</Link>
        </div>

        <button className="lg:hidden p-2" aria-label="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white max-h-[80vh] overflow-y-auto">
          <div className="container-site py-3">
            <Link href="/" className="block py-3 px-2 text-sm font-semibold border-b border-[var(--color-border)]" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/About-Us" className="block py-3 px-2 text-sm font-semibold border-b border-[var(--color-border)]" onClick={() => setOpen(false)}>About</Link>
            <MobileSection title="Services" items={SERVICES_MENU} />
            <MobileSection title="Service Areas" items={AREAS_MENU} />
            <MobileSection title="Resources" items={RESOURCES_MENU} />
            <div className="pt-4 space-y-2">
              <Link href="/contact-us" className="btn btn-primary w-full" onClick={() => setOpen(false)}>Get a Free Quote →</Link>
              <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-lg">
                <Phone size={16}/> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
