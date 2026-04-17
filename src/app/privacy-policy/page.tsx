import PageHero from '@/components/sections/PageHero';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy — Liberty Moves Orlando',
  description: 'How Liberty Moves Orlando collects, uses, and protects your information.',
  alternates: { canonical: `${SITE.url}/privacy-policy` },
  robots: { index: true, follow: false },
};

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h3 className="text-xl font-bold mt-8">What we collect</h3>
          <p>When you request a quote or contact us, we collect your name, phone, email, origin and destination addresses, and any details you share about your move. We use this only to respond to your request and provide service.</p>
          <h3 className="text-xl font-bold mt-8">How we use it</h3>
          <p>We use the information you provide to prepare your estimate, schedule your move, communicate during service, and follow up afterward. We never sell your information. Customer records are retained for tax and legal purposes as required.</p>
          <h3 className="text-xl font-bold mt-8">Cookies and analytics</h3>
          <p>We use Google Analytics via Google Tag Manager to understand aggregate site usage. These tools may set cookies. You can disable cookies in your browser — the site will still work.</p>
          <h3 className="text-xl font-bold mt-8">Your rights</h3>
          <p>You can request a copy or deletion of your data any time by calling {SITE.phoneDisplay} or emailing {SITE.email}.</p>
          <h3 className="text-xl font-bold mt-8">Contact</h3>
          <p>Liberty Moves Orlando, {SITE.addressCity}, {SITE.addressState} {SITE.addressZip} — USDOT {SITE.usdot}.</p>
        </div>
      </section>
    </>
  );
}
