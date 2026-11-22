import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import franceCutout from "../../public/images/france-portrait-cutout.png";
import { articles, topics, linkedInUrl, contactEmail } from "@/lib/site-content";

export default function Home() {
  const featured = articles[0];
  return (
    <main id="main-content" className="immersive-home">
      <section className="editorial-hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-portrait-stage">
          <span className="hero-outline" aria-hidden="true">PURPOSE</span>
          <Image
            src={franceCutout}
            alt="Olga France Blas-Obias"
            fill
            sizes="(max-width: 720px) 90vw, 60vw"
            preload
            className="hero-cutout"
          />
        </div>
        <div className="hero-introduction">
          <h1 id="hero-title">Growing businesses,<br />people and purpose.</h1>
          <p>
            A personal perspective on business, thoughtful leadership
            and a more sustainable future.
          </p>
        </div>
        <article className="hero-insight-panel" aria-labelledby="featured-insight-title">
          <h2 id="featured-insight-title">{featured.title}</h2>
          <p className="hero-preview-label">Editorial preview</p>
          <p className="hero-insight-description">{featured.summary}</p>
          <Link className="reading-button" href={`/insights/${featured.slug}`}>
            Read the insight<ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </article>
        <div className="hero-bottom-bar">
          <div className="hero-social-links">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="France on LinkedIn (opens in a new tab)">
              LinkedIn<ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${contactEmail}`} aria-label="Email France">
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
          <a className="hero-journal-link" href="#journal">Explore the journal<ArrowDown size={17} aria-hidden="true" /></a>
          <Link className="hero-about-link" href="/about">Meet France<ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="topics-section shell" aria-labelledby="topics-title">
        <h2 id="topics-title">Ideas to explore</h2>
        <nav className="topic-index" aria-label="Explore insights by topic">
          {topics.map((topic) => (
            <Link key={topic.slug} href={"/insights?topic=" + topic.slug}>
              {topic.label}<ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>

      <section className="more-insights shell section-space" id="journal" aria-labelledby="insights-title">
        <div className="section-heading">
          <h2 id="insights-title">A space for ideas.</h2>
          <Link className="text-link" href="/insights">
            View all insights<ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <p className="section-intro">
          A preview of the journal to come. These sample topics will make way
          for France’s own writing.
        </p>
        <div className="insight-list">
          {articles.map((article) => (
            <article className="insight-row" key={article.slug}>
              <div>
                <h3 className="insight-title">
                  <Link href={"/insights/" + article.slug}>{article.title}</Link>
                </h3>
                <p className="insight-summary">{article.summary}</p>
                <Link className="text-link" href={"/insights/" + article.slug}>
                  Read preview<ArrowRight size={18} aria-hidden="true" />
                  <span className="sr-only">: {article.title}</span>
                </Link>
              </div>
              <p className="article-meta">{article.category}<span>Editorial preview</span></p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section shell" aria-labelledby="home-contact-title">
        <div>
          <h2 id="home-contact-title">Let’s keep the conversation going.</h2>
          <p>A response to an idea, a speaking invitation, or a possibility to explore.</p>
        </div>
        <Link className="contact-link" href="/contact">
          Get in touch<ArrowUpRight size={21} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
