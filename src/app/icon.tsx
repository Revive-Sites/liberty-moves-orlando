import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 20,
          fontFamily: 'system-ui',
          letterSpacing: '-0.05em',
          borderRadius: 6,
        }}
      >
        LM
      </div>
    ),
    size,
  );
}
