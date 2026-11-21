import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import francePortrait from "../../public/images/france-portrait.jpg";
import franceEvent from "../../public/images/france-asean-event.jpg";
import { articles, topics, linkedInUrl } from "@/lib/site-content";

export default function Home() {
  const featured = articles[0];
  return (
    <main id="main-content">
      <section className="essay-cover shell" aria-labelledby="featured-title">
        <h1 id="featured-title">{featured.title}</h1>
        <p className="cover-summary">
          Growth asks more of us than bigger numbers. A starting point for
          thinking about businesses, people and purpose.
        </p>
        <div className="cover-actions">
          <Link className="reading-button" href={"/insights/" + featured.slug}>
            Preview essay
            <ArrowRight size={23} aria-hidden="true" />
          </Link>
          <p className="preview-status">Editorial preview</p>
        </div>
      </section>

      <section className="author-band" aria-label="About the author">
        <div className="author-strip shell">
          <div className="author-portrait">
            <Image
              src={francePortrait}
              alt="Olga France Blas-Obias smiling in a light blue dress"
              fill
              sizes="(max-width: 640px) 84px, 184px"
              placeholder="blur"
              className="portrait-photo"
            />
          </div>
          <div className="author-note">
            <h2>Olga France Blas-Obias</h2>
            <p>Growing businesses, people and purpose</p>
            <a className="author-link" href="#about">
              About France
              <ArrowRight size={21} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="topics-section shell"
        id="focus"
        aria-labelledby="topics-title"
      >
        <h2 id="topics-title">Ideas to explore</h2>
        <nav className="topic-index" aria-label="Explore insights by topic">
          {topics.map((topic) => (
            <Link key={topic.slug} href={"/insights?topic=" + topic.slug}>
              {topic.label}
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>

      <section
        className="more-insights shell section-space"
        id="insights"
        aria-labelledby="insights-title"
      >
        <div className="section-heading">
          <h2 id="insights-title">More perspectives</h2>
          <Link className="text-link" href="/insights">
            View all insights
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <p className="section-intro">
          A preview of the journal to come. These sample topics will make way
          for France’s own writing.
        </p>
        <div className="insight-list">
          {articles.slice(1).map((article) => (
            <article className="insight-row" key={article.slug}>
              <div>
                <h3 className="insight-title">
                  <Link href={"/insights/" + article.slug}>
                    {article.title}
                  </Link>
                </h3>
                <p className="insight-summary">{article.summary}</p>
                <Link className="text-link" href={"/insights/" + article.slug}>
                  Read preview
                  <ArrowRight size={18} aria-hidden="true" />
                  <span className="sr-only">: {article.title}</span>
                </Link>
              </div>
              <p className="article-meta">
                {article.category}
                <span>Editorial preview</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-section shell section-space"
        id="about"
        aria-labelledby="about-title"
      >
        <h2 id="about-title">About France</h2>
        <div>
          <p className="about-lead">
            Entrepreneurship, business strategy, sustainability and mentorship.
            Connected interests, with people at the centre.
          </p>
          <p>
            France is building a space to share insights, advocacy, speaking
            engagements, projects and collaborations. Her professional
            background and personal story will sit alongside the ideas she
            shares here.
          </p>
          <p className="content-note">Her full biography is coming soon.</p>
          <a
            className="text-link"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet France on LinkedIn
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section
        className="speaking-section"
        id="speaking"
        aria-labelledby="speaking-title"
      >
        <div className="speaking-inner shell section-space">
          <figure className="event-figure">
            <div className="event-photo-frame">
              <Image
                src={franceEvent}
                alt="France standing in front of national flags at an ASEAN event"
                fill
                sizes="(max-width: 720px) calc(100vw - 40px), 420px"
                loading="lazy"
                placeholder="blur"
                className="event-photo"
              />
            </div>
            <figcaption>France at an ASEAN event.</figcaption>
          </figure>
          <div className="speaking-copy">
            <h2 id="speaking-title">Speaking & mentorship</h2>
            <p>
              Have a conversation in mind? Connect with France about a speaking
              invitation, a mentorship opportunity, or a shared interest.
            </p>
            <ul className="speaking-topics">
              <li>Entrepreneurship and business strategy</li>
              <li>Sustainability and advocacy</li>
              <li>Mentorship and thought leadership</li>
            </ul>
            <a
              className="text-link"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send an invitation on LinkedIn
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="projects-section shell section-space"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title">Projects & advocacy</h2>
        <div>
          <p>
            Stories of initiatives, partnerships and the people behind them will
            live here.
          </p>
          <p className="content-note">
            Project stories and photographs are coming soon.
          </p>
          <a className="text-link" href="#connect">
            Start a collaboration
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="contact-section shell"
        id="connect"
        aria-labelledby="contact-title"
      >
        <div>
          <h2 id="contact-title">Let’s keep the conversation going.</h2>
          <p>
            A response to an idea, a speaking invitation, or a possibility to
            explore.
          </p>
        </div>
        <a
          className="contact-link"
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
          <ArrowUpRight size={23} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>
    </main>
  );
}
