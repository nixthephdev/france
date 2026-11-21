import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Advocacy",
  description: "A space for France's project stories, advocacy and future collaborations. Project details and photography are coming soon.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="content-page projects-page">
      <header className="page-heading shell">
        <h1>Projects & advocacy.</h1>
        <p>The initiatives, partnerships and people behind purposeful work.</p>
      </header>

      <section className="projects-section shell" aria-labelledby="project-stories-title">
        <div className="project-placeholder">
          <ImageIcon size={32} aria-hidden="true" />
          <p>Project photograph coming soon</p>
        </div>
        <div className="project-empty-copy">
          <h2 id="project-stories-title">Stories to come.</h2>
          <p>This space will bring together project stories, collaborations and advocacy initiatives.</p>
          <p className="content-note">Project details and photographs are coming soon.</p>
          <Link className="text-link" href="/contact">
            Discuss a collaboration<ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="page-next shell" aria-labelledby="projects-next-title">
        <div>
          <h2 id="projects-next-title">Explore the thinking.</h2>
          <p>Visit the journal for perspectives on business, sustainability and shared learning.</p>
        </div>
        <Link className="text-link" href="/insights">Read the insights<ArrowUpRight size={19} aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
