import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2344 100%)',
          color: '#f59e0b',
          fontWeight: 900,
          fontSize: 92,
          fontFamily: 'system-ui',
          letterSpacing: '-0.05em',
        }}
      >
        LM
      </div>
    ),
    size,
  );
}
