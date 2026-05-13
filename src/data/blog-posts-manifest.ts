// Static manifest of all blog posts. By importing each JSON file directly,
// we guarantee they are bundled into every consuming serverless function.
// fs.readFileSync / fs.readdirSync against the data dir is unreliable on
// Vercel for files added between builds — webpack's static analysis is.
//
// New posts: add an import line below + an entry in BLOG_POSTS.

import apartmentChecklist from './generated-blog-posts/apartment-moving-checklist-orlando-30-days.json';
import movingWithKids from './generated-blog-posts/moving-with-kids-in-orlando-how-to-make-the-transition-easier-for-the-whole-fami.json';
import whyLiberty from './generated-blog-posts/why-liberty-moves-orlando-is-one-of-the-top-movers-in-lake-mary.json';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  category: string;
  readTime: string;
  date: string;
  isoDate: string;
  author: string;
  tags: string[];
  heroImage?: string;
  heroImageAlt?: string;
  contentHtml?: string;
  contentBlocks?: string[];
}

const ALL: BlogPost[] = [
  apartmentChecklist as BlogPost,
  movingWithKids as BlogPost,
  whyLiberty as BlogPost,
];

export const BLOG_POSTS: Record<string, BlogPost> = Object.fromEntries(
  ALL.map((p) => [p.slug, p]),
);

export function getBlogPost(slug: string): BlogPost | null {
  return BLOG_POSTS[slug] ?? null;
}

export function listBlogPosts(): BlogPost[] {
  return ALL;
}
