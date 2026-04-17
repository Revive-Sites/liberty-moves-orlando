import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        bg: 'var(--color-bg)',
        ink: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '80rem' },
      screens: { xs: '480px' },
    },
  },
  plugins: [],
} satisfies Config;
