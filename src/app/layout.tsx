import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import GTM from '@/components/GTM';

const SITE_URL = 'https://libertymovesorlando.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Orlando Moving Company | Liberty Moves Orlando – Local & Long Distance Movers',
    template: '%s | Liberty Moves Orlando',
  },
  description:
    'Liberty Moves Orlando — trusted local and long-distance movers serving Orlando and all of Central Florida. Licensed, insured (USDOT 3455436). Free quotes, upfront pricing, careful crews.',
  openGraph: {
    title: 'Orlando Moving Company | Liberty Moves Orlando',
    description: 'Professional Orlando movers for homes and businesses. Licensed, insured, careful. Free quote.',
    url: SITE_URL,
    siteName: 'Liberty Moves Orlando',
    images: ['/images/og.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
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
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
