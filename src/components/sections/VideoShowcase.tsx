'use client';
import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Instagram } from 'lucide-react';
import Link from 'next/link';
import { VIDEOS, IMG, url } from '@/lib/images';

export default function VideoShowcase() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.paused) { ref.current.play(); setPlaying(true); }
    else { ref.current.pause(); setPlaying(false); }
  };
  const toggleMute = () => {
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
    setMuted(ref.current.muted);
  };

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
              Real crews. Real trucks. Real Orlando moves. Uniformed team, truck pulled up on time, pads and wrap out in three minutes. By the time you\u2019re done, the beds are made.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                'Uniformed, background-checked crews',
                'We show up when we say we will',
                'Professional wrap on every piece',
                'Same foreman from quote to unload',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"/>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/gallery" className="btn btn-primary"><Instagram size={16} /> See the full gallery</Link>
              <a href="https://www.instagram.com/libertymovesorlando" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Instagram</a>
            </div>
          </div>

          {/* Reliable video player — no Instagram embed dependency */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group bg-black">
            <video
              ref={ref}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={url(IMG.heroMovers, 1600)}
              className="w-full h-full object-cover"
            >
              <source src={VIDEOS.heroSecondary} type="video/mp4" />
              <source src={VIDEOS.heroPrimary} type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
              <button onClick={toggle} aria-label={playing ? 'pause' : 'play'} className="w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[var(--color-primary)] flex items-center justify-center shadow-xl transition">
                {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5"/>}
              </button>
              <button onClick={toggleMute} aria-label={muted ? 'unmute' : 'mute'} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur transition">
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
