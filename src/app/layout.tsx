import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import GTM from '@/components/GTM';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import FloatingQuoteWidget from '@/components/FloatingQuoteWidget';
import ExitIntent from '@/components/ExitIntent';

const SITE_URL = 'https://libertymovesorlando.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Orlando Movers | Liberty Moves Orlando — Local & Long Distance Moving',
    template: '%s | Liberty Moves Orlando',
  },
  description:
    'Orlando movers with upfront pricing and careful crews. Liberty Moves Orlando — licensed (USDOT 3455436), 5-star rated, serving all of Central Florida. Free quote in minutes.',
  keywords: ['orlando movers', 'moving company orlando', 'movers orlando fl', 'local movers orlando', 'orlando moving company', 'central florida movers', 'long distance movers orlando', 'packing services orlando'],
  openGraph: {
    title: 'Orlando Movers | Liberty Moves Orlando',
    description: 'Licensed Orlando moving company. Upfront pricing, careful crews, free quotes. Residential, commercial, long-distance, packing.',
    url: SITE_URL,
    siteName: 'Liberty Moves Orlando',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Liberty Moves Orlando — professional moving company' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlando Movers | Liberty Moves Orlando',
    description: 'Licensed Orlando moving company. Free quote in minutes.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  alternates: {
    canonical: SITE_URL,
    languages: { 'en-US': SITE_URL, 'es': `${SITE_URL}/es` },
  },
  other: { 'geo.region': 'US-FL', 'geo.placename': 'Orlando', 'geo.position': '28.5383;-81.3792', 'ICBM': '28.5383, -81.3792' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <GTM />
      </head>
      <body>
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <FloatingQuoteWidget />
        <ExitIntent />
        <ChatWidget />
      </body>
    </html>
  );
}
