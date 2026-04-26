/**
 * Decorative drifting moving-box SVGs behind content. Mirrors the
 * perezmovingco.com motif but brand-tinted for Liberty Moves Orlando
 * (red tape stripe + navy edge highlight). Sits as a fixed full-viewport
 * layer so the boxes drift up through any white section. Low opacity
 * keeps them invisible against the dark hero / navy footer.
 */
'use client';

const BoxSvg = ({ size = 48, variant = 'front' as 'front' | 'side' }) => {
  if (variant === 'front') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="12" width="52" height="44" rx="1.5" fill="#e9c9a6" stroke="#b38957" strokeWidth="1.2" />
        <rect x="6" y="12" width="52" height="8" fill="#d6b283" />
        <line x1="32" y1="12" x2="32" y2="56" stroke="#b38957" strokeWidth="1" />
        {/* Brand-red tape stripe */}
        <rect x="24" y="14" width="16" height="6" fill="#dc2626" rx="0.5" opacity="0.92" />
        <line x1="6" y1="20" x2="58" y2="20" stroke="#8b6740" strokeWidth="0.7" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="8,18 32,6 56,18 32,30" fill="#d6b283" stroke="#8b6740" strokeWidth="1" />
      <polygon points="8,18 8,54 32,66 32,30" fill="#c39a6c" stroke="#8b6740" strokeWidth="1" />
      <polygon points="56,18 56,54 32,66 32,30" fill="#b38957" stroke="#8b6740" strokeWidth="1" />
      <line x1="32" y1="30" x2="32" y2="66" stroke="#8b6740" strokeWidth="0.8" />
      {/* Brand-red tape stripe across the top flap */}
      <rect x="20" y="16" width="24" height="4" fill="#dc2626" opacity="0.88" />
    </svg>
  );
};

type BoxCfg = {
  left: string;
  size: number;
  duration: number;
  delay: number;
  variant: 'front' | 'side';
  rotate: number;
  opacity: number;
};

const BOXES: BoxCfg[] = [
  { left: '5%',  size: 52, duration: 28, delay: 0,    variant: 'front', rotate: -6,  opacity: 0.20 },
  { left: '14%', size: 38, duration: 34, delay: 5,    variant: 'side',  rotate: 8,   opacity: 0.16 },
  { left: '24%', size: 64, duration: 26, delay: 2,    variant: 'front', rotate: 4,   opacity: 0.22 },
  { left: '34%', size: 42, duration: 32, delay: 7,    variant: 'side',  rotate: -10, opacity: 0.16 },
  { left: '45%', size: 56, duration: 30, delay: 3,    variant: 'front', rotate: -4,  opacity: 0.18 },
  { left: '55%', size: 36, duration: 36, delay: 9,    variant: 'side',  rotate: 12,  opacity: 0.14 },
  { left: '66%', size: 48, duration: 28, delay: 1.5,  variant: 'front', rotate: 6,   opacity: 0.20 },
  { left: '76%', size: 60, duration: 26, delay: 4,    variant: 'side',  rotate: -8,  opacity: 0.20 },
  { left: '86%', size: 40, duration: 34, delay: 6.5,  variant: 'front', rotate: 10,  opacity: 0.16 },
  { left: '94%', size: 44, duration: 30, delay: 8,    variant: 'side',  rotate: -2,  opacity: 0.18 },
];

export default function FloatingBoxes() {
  return (
    <div className="floating-boxes" aria-hidden="true">
      {BOXES.map((b, i) => (
        <div
          key={i}
          className="float-box-3d"
          style={{
            left: b.left,
            bottom: '-80px',
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            transform: `rotate(${b.rotate}deg)`,
            opacity: b.opacity,
          }}
        >
          <BoxSvg size={b.size} variant={b.variant} />
        </div>
      ))}
    </div>
  );
}
