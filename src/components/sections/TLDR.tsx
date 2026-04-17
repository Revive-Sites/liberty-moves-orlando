import { Sparkles } from 'lucide-react';

export default function TLDR({
  title = 'In a nutshell',
  points,
}: { title?: string; points: string[] }) {
  return (
    <aside className="tldr my-6 rounded-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-surface)] p-5">
      <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold mb-3">
        <Sparkles size={16} className="text-[var(--color-accent)]" />
        <span className="text-sm uppercase tracking-widest">{title}</span>
      </div>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-sm text-[var(--color-text)] leading-relaxed flex gap-2">
            <span className="text-[var(--color-accent)] font-bold shrink-0">→</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
