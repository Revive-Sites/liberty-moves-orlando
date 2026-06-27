import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// AI / answer-engine crawlers we explicitly welcome so Liberty Moves Orlando can
// be cited in ChatGPT, Claude, Perplexity, Gemini/AI Overviews, Apple, etc.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Amazonbot',
  'cohere-ai',
  'DuckAssistBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: everyone may crawl the public site, nothing internal.
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/_next/'] },
      // Explicit allow for AI/answer engines (some honor a named block over '*').
      { userAgent: AI_CRAWLERS, allow: '/', disallow: ['/api/', '/admin/'] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
