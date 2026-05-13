import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogPost, listBlogPosts } from '@/data/blog-posts-manifest';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return listBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
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
  const post = getBlogPost(slug);
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
