import { SITE } from '@/lib/site';

export default function BlogPostingLd({
  slug, title, description, date = '2026-01-15', updated = '2026-01-15',
}: {
  slug: string; title: string; description: string; date?: string; updated?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE.url}/blog/${slug}#post`,
    headline: title,
    description,
    url: `${SITE.url}/blog/${slug}`,
    datePublished: date,
    dateModified: updated,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/apple-icon` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${slug}` },
    image: `${SITE.url}/opengraph-image`,
    inLanguage: 'en-US',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
