import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "@/lib/site-content";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return {
    title: `${article.title} — Editorial preview`,
    description: `Illustrative editorial preview for design review. ${article.summary}`,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const articleIndex = articles.findIndex((item) => item.slug === slug);
  const article = articles[articleIndex];

  if (!article) notFound();

  const nextArticle = articles[(articleIndex + 1) % articles.length];

  return (
    <main id="main-content" className="reading-page article-page shell">
      <Link className="reading-back" href="/insights">
        <ArrowLeft aria-hidden="true" size={18} /> All insights
      </Link>

      <article>
        <header className="article-header">
          <h1>{article.title}</h1>
          <p className="article-meta">{article.category}</p>
          <p className="insight-summary">{article.summary}</p>
          <p className="editorial-notice">
            Editorial preview — sample content for design review, not a
            published article by France.
          </p>
        </header>
        <div className="article-content">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <aside className="article-related" aria-labelledby="next-preview-heading">
        <h2 id="next-preview-heading" className="insight-title">
          <Link href={`/insights/${nextArticle.slug}`}>
            {nextArticle.title}
          </Link>
        </h2>
        <p className="article-meta">Continue exploring / Editorial preview</p>
        <p className="insight-summary">{nextArticle.summary}</p>
        <Link className="text-link" href={`/insights/${nextArticle.slug}`}>
          Read next preview <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </aside>
    </main>
  );
}
