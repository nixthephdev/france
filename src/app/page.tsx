import Image from "next/image";
import { ArrowDown, ArrowUpRight, Leaf } from "lucide-react";
import francePortrait from "../../public/images/france-portrait.jpg";
import franceEvent from "../../public/images/france-asean-event.jpg";
import {
  EnquiryDialog,
  InsightPreviews,
  MobileNavigation,
} from "@/components/site-interactions";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { focusAreas, linkedInUrl, navigation } from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header shell" id="top">
        <a className="wordmark" href="#top" aria-label="France — home">
          france<span aria-hidden="true">.</span>
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-connect" href="#connect">
          Let’s connect <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <MobileNavigation />
      </header>

      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Olga France Blas-Obias</p>
            <h1 id="hero-title">
              Growing
              <br />
              businesses, people
              <br />
              and <em>purpose.</em>
            </h1>
            <p className="hero-description">
              At the intersection of entrepreneurship, strategy, and
              sustainability. A space for ideas, shared learning, and work that
              matters.
            </p>
            <div className="hero-actions">
              <EnquiryDialog className="brand-button">
                Explore a collaboration
                <ArrowUpRight aria-hidden="true" />
              </EnquiryDialog>
              <a className="quiet-link" href="#about">
                Meet France
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src={francePortrait}
                alt="Olga France Blas-Obias smiling in a light blue dress"
                fill
                sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1100px) 42vw, 510px"
                preload
                placeholder="blur"
                className="portrait-photo"
              />
            </div>
            <figcaption>
              <span>Thoughtful work. Human connections.</span>
              <Leaf size={17} strokeWidth={1.3} aria-hidden="true" />
            </figcaption>
          </figure>
          <div className="hero-footer">
            <span>
              Entrepreneurship · Strategy · Sustainability · Mentorship
            </span>
            <span className="hero-location">Based in the Philippines</span>
          </div>
        </section>

        <section
          className="about-section shell section-space"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">A little about France</p>
            <h2 id="about-title">
              Purpose is personal.
              <br />
              <em>So is the journey.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="intro-paragraph">
              Business, people, and purpose are connected. This is a space to
              explore what can happen when we grow them together.
            </p>
            <p>
              France’s interests bring together entrepreneurship, business
              strategy, sustainability, mentorship, and thought leadership.
              Here, those threads become conversations, perspectives, and
              possibilities for collaboration.
            </p>
            <p className="draft-note">
              Biography preview — her personal story and career highlights will
              be added here.
            </p>
            <a
              className="text-link"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>

        <section
          className="focus-section"
          id="focus"
          aria-labelledby="focus-title"
        >
          <div className="shell section-space">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Where ideas meet intention</p>
                <h2 id="focus-title">
                  Different perspectives.
                  <br />
                  <em>A shared purpose.</em>
                </h2>
              </div>
              <p>
                Three connected ways to think about growth, impact, and the
                people behind both.
              </p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="focus-item" key={area.number}>
                  <span className="focus-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="shell section-space"
          id="insights"
          aria-labelledby="insights-title"
        >
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Notes & perspectives</p>
              <h2 id="insights-title">
                Ideas worth
                <br />
                <em>making space for.</em>
              </h2>
            </div>
            <p>
              Preview topics for this evolving journal. Published insights from
              France will take their place.
            </p>
          </div>
          <InsightPreviews />
        </section>

        <section
          className="speaking-section"
          id="speaking"
          aria-labelledby="speaking-title"
        >
          <div className="shell speaking-grid section-space">
            <figure className="speaking-media">
              <div className="event-photo-frame">
                <Image
                  src={franceEvent}
                  alt="France standing in front of national flags at an ASEAN event"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1100px) 46vw, 600px"
                  loading="lazy"
                  placeholder="blur"
                  className="event-photo"
                />
              </div>
              <figcaption className="media-footnote">
                France at an ASEAN event.
              </figcaption>
            </figure>
            <div className="speaking-copy">
              <p className="eyebrow">Speaking & mentorship</p>
              <h2 id="speaking-title">
                Conversations
                <br />
                that <em>move us forward.</em>
              </h2>
              <p>
                Bring a thoughtful perspective to your next gathering, or start
                a conversation about learning and growing together.
              </p>
              <p className="small-label">Suggested conversation themes</p>
              <ul className="topic-list">
                <li>
                  Building a business with purpose<span>01</span>
                </li>
                <li>
                  Bringing sustainability into strategy<span>02</span>
                </li>
                <li>
                  Growing through mentorship<span>03</span>
                </li>
              </ul>
              <EnquiryDialog
                intent="a speaking invitation"
                className="text-link"
              >
                Discuss a speaking invitation
                <ArrowUpRight size={16} aria-hidden="true" />
              </EnquiryDialog>
            </div>
          </div>
        </section>

        <section
          className="shell section-space projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Projects & advocacy</p>
              <h2 id="projects-title">
                Purpose,
                <br />
                <em>put into practice.</em>
              </h2>
            </div>
            <p>
              Every initiative has a human story. This is where France’s
              projects, partnerships, and lessons will live.
            </p>
          </div>
          <div className="project-preview">
            <MediaPlaceholder
              title="The work, and the people behind it"
              note="A real project or community photograph"
            />
            <div className="project-story">
              <span className="sample-label">Project story placeholder</span>
              <h3>
                A space for
                <br />
                meaningful impact.
              </h3>
              <p>
                The first story will share the challenge, France’s role, the
                collaboration, and what changed. Details and outcomes will come
                from her.
              </p>
              <a className="text-link" href="#connect">
                Explore a future collaboration
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="connect"
          id="connect"
          aria-labelledby="connect-title"
        >
          <div className="shell connect-inner">
            <div>
              <p className="eyebrow">Good things begin with a conversation</p>
              <h2 id="connect-title">
                What could we
                <br />
                <em>grow together?</em>
              </h2>
            </div>
            <div className="connect-copy">
              <p>
                A speaking invitation, a shared idea, or a possibility worth
                exploring. Start with a hello.
              </p>
              <EnquiryDialog className="brand-button light-button">
                Let’s start a conversation
                <ArrowUpRight aria-hidden="true" />
              </EnquiryDialog>
              <span className="contact-channel">
                Connect directly with France on LinkedIn
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="wordmark" href="#top" aria-label="France — back to top">
          france<span>.</span>
        </a>
        <p>Growing businesses, people and purpose.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
