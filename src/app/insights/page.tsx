import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { articles, topics } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Insights — Editorial previews",
  description:
    "Explore illustrative editorial previews on business strategy, sustainability, and mentorship.",
};

type InsightsPageProps = {
  searchParams: Promise<{ topic?: string | string[] }>;
};

export default function InsightsPage({ searchParams }: InsightsPageProps) {
  return (
    <main id="main-content" className="reading-page shell">
      <header className="reading-intro">
        <h1>Insights</h1>
        <p>
          Exploring business, people, and purpose through strategy,
          sustainability, and shared learning.
        </p>
        <p className="editorial-notice">
          Editorial previews — illustrative drafts for design review, not
          published articles by France.
        </p>
      </header>

      <Suspense
        fallback={
          <p className="editorial-notice" role="status">
            Loading topics and editorial previews…
          </p>
        }
      >
        <FilteredInsights searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function FilteredInsights({ searchParams }: InsightsPageProps) {
  const { topic } = await searchParams;
  const selectedTopic =
    typeof topic === "string"
      ? topics.find((item) => item.slug === topic)
      : undefined;
  const visibleArticles = selectedTopic
    ? articles.filter((article) =>
        selectedTopic.slug === "entrepreneurship"
          ? article.category === "Business strategy"
          : article.category === selectedTopic.label,
      )
    : articles;

  return (
    <>
      <nav className="topic-filters" aria-label="Filter insights by topic">
        <Link
          href="/insights"
          aria-current={!selectedTopic ? "page" : undefined}
        >
          All topics
        </Link>
        {topics.map((item) => (
          <Link
            key={item.slug}
            href={`/insights?topic=${item.slug}`}
            aria-current={
              selectedTopic?.slug === item.slug ? "page" : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {selectedTopic?.slug === "entrepreneurship" && (
        <p className="editorial-notice">
          The business strategy preview also explores entrepreneurship.
        </p>
      )}

      <section className="insight-list" aria-label="Editorial previews">
        {visibleArticles.map((article) => (
          <article key={article.slug} className="insight-row">
            <div>
              <h2 className="insight-title">
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="insight-summary">{article.summary}</p>
              <Link
                className="text-link"
                href={`/insights/${article.slug}`}
                aria-label={`Read preview: ${article.title}`}
              >
                Read preview <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <p className="article-meta">
              {article.category} / Editorial preview
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
