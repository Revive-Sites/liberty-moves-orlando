'use client';
import Script from 'next/script';
import { Instagram, CheckCircle2 } from 'lucide-react';

const REEL_URL = 'https://www.instagram.com/reel/DWgVtf2OYDA/?utm_source=ig_embed&utm_campaign=loading';

export default function VideoShowcase() {
  return (
    <section className="section-pad bg-[var(--color-primary)] text-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <div className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <Instagram size={14} /> See Us in Action
            </div>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">This is what move day looks like with us.</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Real crews. Real trucks. Real Orlando moves. Follow along on Instagram @libertymovesorlando to see our latest jobs and the team behind them.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                'Uniformed, background-checked crews',
                'We show up when we say we will',
                'Professional wrap on every piece of furniture',
                'Same foreman from walk-through to unload',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 size={14} className="text-[var(--color-accent)] shrink-0"/>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="https://www.instagram.com/libertymovesorlando"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 btn btn-primary"
            >
              <Instagram size={18} /> Follow on Instagram
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={REEL_URL}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  margin: 0,
                  maxWidth: '100%',
                  minWidth: '326px',
                  padding: 0,
                  width: '100%',
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a href={REEL_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#FFFFFF', textAlign: 'center', textDecoration: 'none', width: '100%', display: 'block', color: '#000' }}>
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
              <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
