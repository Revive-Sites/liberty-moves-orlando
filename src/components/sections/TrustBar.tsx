import { Shield, Award, Users, Truck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Shield, label: 'Licensed & Insured' },
    { icon: Award, label: 'USDOT 3455436' },
    { icon: Truck, label: 'Local & Long Distance' },
    { icon: Users, label: '500+ Families Moved' },
  ];
  return (
    <section className="trust-bar text-white">
      <div className="container-site py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2">
            <it.icon size={16} className="text-[var(--color-accent)]" />
            {it.label}
          </div>
        ))}
      </div>
    </section>
  );
}
