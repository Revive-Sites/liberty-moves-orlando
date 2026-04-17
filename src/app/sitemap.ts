import type { MetadataRoute } from 'next';
import { SITE, CITIES, SERVICES } from '@/lib/site';

const BLOG_POSTS = [
  'how-much-do-movers-cost-in-orlando',
  'how-much-to-tip-movers-in-florida',
  'best-time-to-move-in-orlando',
  'orlando-moving-checklist',
  'how-to-pack-fragile-items',
  'moving-insurance-explained',
  'diy-vs-professional-movers-orlando',
  'moving-with-pets-to-florida',
];

const SPECIALTY = [
  'orlando-moving-cost',
  'piano-movers-orlando',
  'apartment-movers-orlando',
  'last-minute-movers-orlando',
  'senior-movers-orlando',
  'ucf-student-movers-orlando',
  'storage-moving-orlando',
];

const NEIGHBORHOODS = [
  'lake-nona-movers',
  'dr-phillips-movers',
  'baldwin-park-movers',
  'thornton-park-movers',
];

const INBOUND = [
  'moving-to-orlando-from-new-york',
  'moving-to-orlando-from-new-jersey',
  'moving-to-orlando-from-chicago',
  'moving-to-orlando-from-atlanta',
  'moving-to-orlando-from-los-angeles',
  'moving-to-orlando-from-boston',
  'moving-to-orlando-from-philadelphia',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${SITE.url}/es`, lastModified: now, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE.url}/About-Us`, lastModified: now, priority: 0.7 },
    { url: `${SITE.url}/contact-us`, lastModified: now, priority: 0.9 },
    { url: `${SITE.url}/Why-Choose-Us`, lastModified: now, priority: 0.7 },
    { url: `${SITE.url}/faqs`, lastModified: now, priority: 0.6 },
    { url: `${SITE.url}/gallery`, lastModified: now, priority: 0.5 },
    { url: `${SITE.url}/blog`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE.url}/review`, lastModified: now, priority: 0.4 },
  ];

  const services = SERVICES.map((s) => ({ url: `${SITE.url}/${s.slug}`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' as const }));
  const specialty = SPECIALTY.map((s) => ({ url: `${SITE.url}/${s}`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' as const }));
  const neighborhoods = NEIGHBORHOODS.map((s) => ({ url: `${SITE.url}/${s}`, lastModified: now, priority: 0.85, changeFrequency: 'monthly' as const }));
  const cities = CITIES.map((c) => ({ url: `${SITE.url}/${c.slug}`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' as const }));
  const posts = BLOG_POSTS.map((slug) => ({ url: `${SITE.url}/blog/${slug}`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' as const }));
  const inbound = INBOUND.map((slug) => ({ url: `${SITE.url}/${slug}`, lastModified: now, priority: 0.85, changeFrequency: 'monthly' as const }));

  return [...core, ...services, ...specialty, ...neighborhoods, ...cities, ...inbound, ...posts];
}
