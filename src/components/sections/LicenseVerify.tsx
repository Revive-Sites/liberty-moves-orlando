import Image from 'next/image';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/site';
import { url, IMG } from '@/lib/images';

export default function LicenseVerify({ variant = 'full' }: { variant?: 'full' | 'strip' }) {
  if (variant === 'strip') {
    return (
      <div className="bg-[var(--color-surface)] border-y border-[var(--color-border)] text-sm">
        <div className="container-site py-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[var(--color-muted)]">
          <ShieldCheck size={14} className="text-emerald-600"/>
          <span>Licensed FL mover: <strong className="text-[var(--color-primary)]">FLDACS {SITE.fldacs}</strong> · USDOT {SITE.usdot}</span>
          <span className="text-[var(--color-muted)]">·</span>
          <a href="https://csapp.fdacs.gov/cspublicapp/businesssearch/businesssearch.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-semibold inline-flex items-center gap-1">
            Verify any Florida mover’s license <ExternalLink size={12}/>
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="section-pad">
      <div className="container-site max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#0f2344] text-white overflow-hidden">
          <div className="p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center shrink-0">
              <ShieldCheck className="text-[var(--color-text)]" size={32}/>
            </div>
            <div>
              <div className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.2em]">Fully licensed Florida mover</div>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">Don’t just take our word for it. Verify for yourself.</h2>
              <p className="mt-3 text-white/80 leading-relaxed">
                Florida requires every intrastate moving company to be registered with the Florida Department of Agriculture & Consumer Services (FLDACS). Liberty Moves Orlando is <strong className="text-white">IM{SITE.fldacs.replace('IM', '')}</strong> — registered, in good standing, expires {SITE.fldacsExpires}.
              </p>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Before you hire <em>any</em> mover in Florida, look them up. A legitimate mover will have an IM# on file. If they don’t, walk away — that’s usually a sign of uninsured, unregulated operators who leave customers stuck when things go wrong.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://csapp.fdacs.gov/cspublicapp/businesssearch/businesssearch.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  Verify any Florida mover <ExternalLink size={16}/>
                </a>
                <a
                  href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center gap-2"
                >
                  Check interstate (USDOT) <ExternalLink size={16}/>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-[1fr_auto] items-end gap-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">FLDACS IM#</div>
                    <div className="mt-1 font-bold text-[var(--color-accent)]">{SITE.fldacs}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">USDOT</div>
                    <div className="mt-1 font-bold text-[var(--color-accent)]">{SITE.usdot}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Legal name</div>
                    <div className="mt-1 font-bold text-white">{SITE.legalName}</div>
                  </div>
                </div>
                <div className="hidden md:block relative w-20 h-20 bg-white/95 rounded-lg p-2 shrink-0">
                  <Image src={url(IMG.logo, 300)} alt="Liberty Moves Orlando" fill sizes="80px" className="object-contain p-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
