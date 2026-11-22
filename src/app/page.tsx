import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import franceCutout from "../../public/images/france-portrait-cutout.png";
import franceEvent from "../../public/images/france-asean-event.jpg";
import { articles, topics } from "@/lib/site-content";

export default function Home() {
  return (
    <main id="main-content" className="editorial-home">
      <section className="editorial-hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-inner shell">
          <div className="hero-introduction">
            <h1 id="hero-title">Growing businesses,<br />people and purpose.</h1>
            <p>A personal perspective on business, thoughtful leadership and a more sustainable future.</p>
            <div className="hero-actions">
              <Link className="reading-button" href="/insights">Read insights</Link>
              <Link className="hero-about-link" href="/about">Meet France<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-portrait-stage">
            <Image src={franceCutout} alt="Olga France Blas-Obias" fill sizes="(max-width: 720px) 100vw, 55vw" preload className="hero-cutout" />
          </div>
        </div>
      </section>

      <section className="topics-section shell" aria-labelledby="topics-title">
        <h2 id="topics-title">Ideas to explore</h2>
        <nav className="topic-index" aria-label="Explore insights by topic">
          {topics.map((topic) => (
            <Link key={topic.slug} href={"/insights?topic=" + topic.slug}>
              {topic.label}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>

      <section className="journal-section shell section-space" id="journal" aria-labelledby="insights-title">
        <div className="journal-introduction">
          <h2 id="insights-title">The journal.</h2>
          <p>A space for ideas on the way we build, lead and grow.</p>
          <Link className="text-link" href="/insights">View all insights<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="journal-previews">
          <p className="journal-disclosure">Editorial previews · Sample writing pending France’s own articles.</p>
          <div className="journal-grid">
            {articles.map((article) => (
              <article className="journal-preview" key={article.slug}>
                <h3><Link href={"/insights/" + article.slug}>{article.title}</Link></h3>
                <p className="journal-category">{article.category}</p>
                <p className="journal-summary">{article.summary}</p>
                <Link className="text-link" href={"/insights/" + article.slug}>
                  Read preview<ArrowRight size={17} aria-hidden="true" />
                  <span className="sr-only">: {article.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-conversations shell" aria-labelledby="conversations-title">
        <figure className="conversation-figure">
          <div className="conversation-photo-frame">
            <Image src={franceEvent} alt="France at an ASEAN event, standing beside a row of national flags" fill sizes="(max-width: 720px) 90vw, 48vw" className="conversation-photo" />
          </div>
          <figcaption>France at an ASEAN event.</figcaption>
        </figure>
        <div className="conversation-copy">
          <h2 id="conversations-title">Good ideas grow through conversation.</h2>
          <p>Speaking, mentorship and shared perspectives on entrepreneurship, sustainability and purposeful growth.</p>
          <Link className="text-link" href="/speaking">Speaking & mentorship<ArrowUpRight size={18} aria-hidden="true" /></Link>
          <div className="conversation-background">
            <h3>The experience behind the ideas.</h3>
            <p>Explore France’s professional background and the work that shapes her perspective.</p>
            <Link className="text-link" href="/about#experience">Discover her background<ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="home-invitation" aria-labelledby="home-contact-title">
        <div className="invitation-inner shell">
          <div>
            <h2 id="home-contact-title">Let’s keep the conversation going.</h2>
            <p>An idea, a speaking invitation, or a possibility to explore.</p>
          </div>
          <Link className="reading-button" href="/contact">Get in touch<ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
