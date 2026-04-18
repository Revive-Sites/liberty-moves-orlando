'use client';
import Script from 'next/script';
import { Instagram } from 'lucide-react';

// Replaces the placeholder Before/After slider with a real Instagram reel
// from @libertymovesorlando
const REEL_URL = 'https://www.instagram.com/reel/DWgVtf2OYDA/?utm_source=ig_embed&utm_campaign=loading';

export default function InstagramReel() {
  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <div className="container-site max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <div>
            <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em] flex items-center gap-2">
              <Instagram size={14} /> @libertymovesorlando
            </div>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">This is what move day looks like.</h2>
            <p className="mt-4 text-[var(--color-muted)] text-lg">
              Real crews. Real trucks. Real Orlando moves. Follow along on Instagram to see our latest jobs and the team behind them.
            </p>
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
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={REEL_URL}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%',
              }}
            >
              <div style={{ padding: '16px' }}>
                <a href={REEL_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#FFFFFF', textAlign: 'center', textDecoration: 'none', width: '100%', display: 'block' }}>
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
            <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>
    </section>
  );
}
