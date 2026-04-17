import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }: { items: Array<{ name: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} className="opacity-50" />}
            {it.href ? (
              <Link href={it.href} className="hover:text-[var(--color-accent)] underline-offset-4 hover:underline">
                {it.name}
              </Link>
            ) : (
              <span className="text-white">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
