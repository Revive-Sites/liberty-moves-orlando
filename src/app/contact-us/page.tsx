import PageHero from '@/components/sections/PageHero';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact Liberty Moves Orlando — Get a Free Quote',
  description:
    'Contact Liberty Moves Orlando today for reliable local and long-distance moving services. Get a free quote and speak with our professional moving experts.',
  alternates: { canonical: `${SITE.url}/contact-us` },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Contact', url: `${SITE.url}/contact-us` },
      ]} />
      <PageHero
        eyebrow="Contact"
        title="Let’s make your move simple — contact us today."
        subtitle="Fill out the form, call, or text. A real person will reply within the day with an honest quote."
      />

      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)]">Get a free, no-pressure quote</h2>
            <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
              Tell us a little about your move. We’ll reach out the same day with a clear estimate and a friendly conversation — no phone tree, no pressure.
            </p>
            <div className="mt-8 space-y-5">
              <a href={SITE.phoneLink} className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><Phone size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Call or Text</div>
                  <div className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{SITE.phoneDisplay}</div>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><Mail size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Email</div>
                  <div className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{SITE.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><MapPin size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Service Area</div>
                  <div className="text-lg font-bold text-[var(--color-primary)]">Orlando + all of Central Florida</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><Clock size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Hours</div>
                  <div className="text-lg font-bold text-[var(--color-primary)]">Mon–Sun, 7am–7pm</div>
                </div>
              </div>
              <div className="text-xs text-[var(--color-muted)] mt-6">USDOT {SITE.usdot}</div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-lg overflow-hidden">
              <div className="bg-[var(--color-accent)] text-white px-6 py-3">
                <div className="text-sm font-extrabold uppercase tracking-wide">Request a Free Quote</div>
                <div className="text-xs opacity-90">Answered within the hour · Licensed USDOT {SITE.usdot} · FLDACS {SITE.fldacs}</div>
              </div>
              <iframe
                src="https://app.contact.liveswitch.com/form"
                style={{ width: '100%', height: '600px', border: 'none' }}
                title="Contact Form"
                loading="lazy"
                allow="camera *; microphone *; autoplay *"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
