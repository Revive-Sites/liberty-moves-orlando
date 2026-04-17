import PageHero from '@/components/sections/PageHero';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Terms & Conditions — Liberty Moves Orlando',
  description: 'Terms and conditions for Liberty Moves Orlando services.',
  alternates: { canonical: `${SITE.url}/terms-and-condition` },
  robots: { index: true, follow: false },
};

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>These terms apply to Liberty Moves Orlando estimates, bookings, and services. By requesting service or booking a move, you agree to the terms below in addition to any specific terms stated on your estimate or bill of lading.</p>
          <h3 className="text-xl font-bold mt-8">Estimates</h3>
          <p>Estimates are non-binding unless stated otherwise in writing. The final price is based on actual time, materials, and services rendered. We communicate any potential variance in writing before performing additional work.</p>
          <h3 className="text-xl font-bold mt-8">Liability</h3>
          <p>We carry standard released-value coverage at 60¢/lb per article at no charge. Full replacement value coverage is available at an additional charge and must be elected before the move begins. We are not liable for items packed by the customer (PBO — packed by owner), pre-existing damage, or items excluded by our published non-allowable list.</p>
          <h3 className="text-xl font-bold mt-8">Cancellations</h3>
          <p>Cancellations made more than 48 hours before your move date carry no fee. Cancellations inside 48 hours may incur a deposit forfeiture as stated on your booking confirmation.</p>
          <h3 className="text-xl font-bold mt-8">Payment</h3>
          <p>Payment is due upon completion of services. We accept cash, check, and major credit cards. A valid payment method is required at booking; we do not charge until service is complete.</p>
          <h3 className="text-xl font-bold mt-8">Contact</h3>
          <p>Questions? {SITE.phoneDisplay} · {SITE.email} · USDOT {SITE.usdot}</p>
        </div>
      </section>
    </>
  );
}
