import { ImageResponse } from 'next/og';

export const alt = 'Liberty Moves Orlando — Local & Long Distance Movers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0a1729 0%, #1e3a5f 55%, #2a4a76 100%)',
          padding: 80,
          fontFamily: 'system-ui',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: 'linear-gradient(135deg,#f59e0b,#d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a1729', fontWeight: 900, fontSize: 32 }}>LM</div>
          <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)' }}>LIBERTY MOVES ORLANDO</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 900, lineHeight: 1 }}>Orlando movers</div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 900, lineHeight: 1, color: '#f59e0b' }}>who treat your stuff like ours.</div>
          <div style={{ display: 'flex', fontSize: 28, marginTop: 30, color: 'rgba(255,255,255,0.8)' }}>Licensed · Insured · 5.0 ★ · USDOT 3455436</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>libertymovesorlando.com</div>
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 800, color: '#f59e0b' }}>(407) 641-2887</div>
        </div>
      </div>
    ),
    size,
  );
}
