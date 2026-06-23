import { permanentRedirect } from 'next/navigation';

/**
 * Legacy /blog/b/<slug> → /blog/<slug> permanent (308) redirect.
 *
 * The OS native blog posts moved off the /blog/b/ namespace to the clean
 * /blog/<slug> route (src/app/blog/[slug]/page.tsx). The 5 hand-authored
 * static /blog/b/<x> pages take routing priority over this dynamic [slug]
 * segment, so only the JSON-driven posts are redirected here.
 */
export const dynamicParams = true;

export default async function LegacyBlogBSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/blog/${slug}`);
}
