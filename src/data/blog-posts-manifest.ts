// Static manifest of all blog posts. By importing each JSON file directly,
// we guarantee they are bundled into every consuming serverless function.

import realCost from './generated-blog-posts/the-real-cost-of-hiring-the-wrong-movers-in-orlando-and-how-to-avoid-it.json';
import howToChoose from './generated-blog-posts/how-to-choose-the-best-moving-company-in-orlando-without-getting-burned-by.json';
import apartmentChecklist from './generated-blog-posts/orlando-apartment-move-checklist-30-day-plan.json';
import whyLiberty from './generated-blog-posts/why-liberty-moves-orlando-is-one-of-the-top-movers-in-lake-mary.json';
import movingWithKids from './generated-blog-posts/moving-with-kids-in-orlando-how-to-make-the-transition-easier-for-the-whole-fami.json';
import apartmentMoving from './generated-blog-posts/apartment-moving-in-orlando-what-nobody-tells-you-before-move-in-day.json';

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
  realCost as BlogPost,
  howToChoose as BlogPost,
  apartmentChecklist as BlogPost,
  whyLiberty as BlogPost,
  movingWithKids as BlogPost,
  apartmentMoving as BlogPost,
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
