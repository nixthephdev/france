const focusAreas = [
  {
    number: "01",
    title: "Entrepreneurship & strategy",
    description: "Ideas, enterprise, and the work of growing with intention.",
  },
  {
    number: "02",
    title: "Sustainability & purpose",
    description:
      "A longer view of progress, grounded in people and the planet.",
  },
  {
    number: "03",
    title: "Mentorship & leadership",
    description:
      "Sharing perspectives, opening conversations, and growing together.",
  },
];

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
        <nav aria-label="Main navigation">
          <a href="#perspective">Perspective</a>
          <a href="#connect">
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
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
              Exploring the connections between entrepreneurship, strategy,
              sustainability, and the people who move ideas forward.
            </p>
            <a className="text-link" href="#perspective">
              A little perspective <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-stem" />
            <div className="art-leaf leaf-one" />
            <div className="art-leaf leaf-two" />
            <div className="art-leaf leaf-three" />
            <span className="art-caption">
              Rooted in purpose.
              <br />
              Open to possibility.
            </span>
          </div>

          <div className="hero-footer">
            <span>Business with intention. Leadership with heart.</span>
            <span className="hero-location">
              Philippines · Connected by ideas
            </span>
          </div>
        </section>

        <section
          className="perspective shell"
          id="perspective"
          aria-labelledby="perspective-title"
        >
          <div className="section-heading">
            <p className="eyebrow">A shared thread</p>
            <h2 id="perspective-title">
              Good work starts
              <br />
              with <em>what matters.</em>
            </h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-item" key={area.number}>
                <span className="focus-number" aria-hidden="true">
                  {area.number}
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="connect"
          id="connect"
          aria-labelledby="connect-title"
        >
          <div className="shell connect-inner">
            <p className="eyebrow">Conversations create possibility</p>
            <h2 id="connect-title">
              Let’s grow
              <br />
              <em>something meaningful.</em>
            </h2>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/olga-france-blas-obias-23912996/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with France on LinkedIn (opens in a new tab)"
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span className="footer-name">Olga France Blas-Obias</span>
        <p>Growing businesses, people and purpose.</p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
