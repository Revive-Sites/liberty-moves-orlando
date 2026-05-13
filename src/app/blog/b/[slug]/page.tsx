import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { notFound } from 'next/navigation';
import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';

export const revalidate = 60;
export const dynamicParams = true;

interface GeneratedPost {
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

// Static dir reference helps Next.js's file tracer include every JSON file
// in this directory in the serverless bundle. Without it, new files added
// between builds are missing from the bundle even though they're in git.
const POSTS_DIR = path.join(process.cwd(), 'src/data/generated-blog-posts');

function loadPost(slug: string): GeneratedPost | null {
  try {
    const file = path.join(POSTS_DIR, `${slug}.json`);
    if (!fs.existsSync(file)) return null;
    return JSON.parse(fs.readFileSync(file, 'utf-8')) as GeneratedPost;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs
      .readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith('.json'))
      .map((f) => ({ slug: f.replace(/\.json$/, '') }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = loadPost(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} — Liberty Moves Orlando`,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/b/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author],
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = loadPost(slug);
  if (!post) notFound();

  const body =
    post.contentHtml ||
    (post.contentBlocks || []).map((p) => `<p>${p}</p>`).join('\n');

  return (
    <>
      <BlogPostingLd
        slug={`b/${slug}`}
        title={post.title}
        description={post.metaDescription || post.excerpt}
        date={post.isoDate}
        updated={post.isoDate}
      />
      <BreadcrumbsLd
        items={[
          { name: 'Home', url: SITE.url },
          { name: 'Blog', url: `${SITE.url}/blog` },
          { name: post.title, url: `${SITE.url}/blog/b/${slug}` },
        ]}
      />
      <PageHero
        eyebrow={`${post.category} · ${post.date}`}
        title={post.title}
        subtitle={post.excerpt}
      />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          {post.heroImage ? (
            <figure className="mb-8">
              <img
                src={post.heroImage}
                alt={post.heroImageAlt || post.title}
                loading="eager"
                className="w-full rounded-xl border border-[var(--color-border)]"
              />
            </figure>
          ) : null}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </article>
      <RelatedPosts currentSlug={`b/${slug}`} />
      <CTA />
    </>
  );
}
