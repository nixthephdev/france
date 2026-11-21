import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ImageIcon, Mail } from "lucide-react";
import francePortrait from "../../public/images/france-portrait.jpg";
import franceEvent from "../../public/images/france-asean-event.jpg";
import { articles, topics, linkedInUrl, contactEmail, profileRoles } from "@/lib/site-content";

export default function Home() {
  return (
    <main id="main-content" className="immersive-home">
      <section className="portrait-hero" aria-labelledby="hero-title">
        <div className="hero-photograph">
          <Image src={francePortrait} alt="Olga France Blas-Obias smiling in a light blue dress" fill sizes="(max-width: 720px) 100vw, 80vw" preload placeholder="blur" className="hero-portrait" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-title">Growing businesses,<br />people and purpose.</h1>
          <p>A personal perspective on entrepreneurship, thoughtful leadership and building a more sustainable future.</p>
          <div className="hero-actions">
            <Link className="reading-button" href="/insights">Read the insights <ArrowUpRight size={21} aria-hidden="true" /></Link>
            <a className="hero-about-link" href="#about">Meet France</a>
          </div>
        </div>
        <p className="hero-signature" translate="no">Olga France<br />Blas-Obias</p>
        <nav className="story-strip" aria-label="Explore France’s world">
          <Link className="story-window journal-window" href="/insights">
            <span className="journal-window-title">A little perspective<br />goes a long way.</span>
            <span className="story-caption">Explore the journal <ArrowUpRight size={18} aria-hidden="true" /></span>
          </Link>
          <a className="story-window photo-window" href="#speaking">
            <Image src={franceEvent} alt="France in front of national flags at an ASEAN event" fill sizes="(max-width: 720px) 220px, 25vw" placeholder="blur" className="story-event-photo" />
            <span className="story-caption">Conversations & community <ArrowUpRight size={18} aria-hidden="true" /></span>
          </a>
          <a className="story-window photo-window" href="#about">
            <Image src={francePortrait} alt="" fill sizes="(max-width: 720px) 220px, 25vw" placeholder="blur" className="story-portrait-photo" />
            <span className="story-caption">The person behind the ideas <ArrowUpRight size={18} aria-hidden="true" /></span>
          </a>
          <a className="story-window project-window" href="#projects">
            <span className="photo-placeholder"><ImageIcon size={22} aria-hidden="true" />Project photograph coming soon</span>
            <span className="story-caption">Projects & advocacy <ArrowUpRight size={18} aria-hidden="true" /></span>
          </a>
        </nav>
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
          <h2 id="insights-title">A space for ideas.</h2>
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
          {articles.map((article) => (
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
        <div className="about-introduction">
          <h2 id="about-title">Business is personal.<br />So is purpose.</h2>
          <figure className="about-portrait-frame">
            <Image src={francePortrait} alt="Portrait of France" fill sizes="(max-width: 640px) calc(100vw - 40px), 420px" placeholder="blur" className="portrait-photo" />
          </figure>
        </div>
        <div>
          <p className="about-name" translate="no">Olga France Blas-Obias</p>
          <p className="about-lead">{profileRoles[0]}</p>
          <ul className="about-roles" aria-label="Professional background">
            {profileRoles.slice(1).map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
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
        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${contactEmail}`}>
            Email France
            <Mail size={21} aria-hidden="true" />
          </a>
          <span className="contact-address">{contactEmail}</span>
          <a
            className="text-link"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
