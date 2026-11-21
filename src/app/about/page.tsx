import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import francePortrait from "../../../public/images/france-portrait.jpg";
import { linkedInUrl, profileRoles } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Olga France Blas-Obias: speaker, health and sustainability advisor, digital marketer, growth strategist and community builder.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="content-page profile-page">
      <header className="page-heading shell">
        <h1>About France.</h1>
        <p>Growing businesses, people and purpose.</p>
      </header>

      <section className="about-section shell section-space" aria-labelledby="profile-title">
        <figure className="about-portrait-frame">
          <Image
            src={francePortrait}
            alt="Olga France Blas-Obias smiling in a light blue dress"
            fill
            sizes="(max-width: 720px) calc(100vw - 40px), 420px"
            preload
            placeholder="blur"
            className="portrait-photo"
          />
        </figure>
        <div>
          <h2 id="profile-title" className="profile-name" translate="no">Olga France Blas-Obias</h2>
          <p className="about-lead">{profileRoles[0]}</p>
          <ul className="about-roles" aria-label="Professional background">
            {profileRoles.slice(1).map((role) => <li key={role}>{role}</li>)}
          </ul>
          <a className="text-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            Meet France on LinkedIn<ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section className="page-next shell" aria-labelledby="about-next-title">
        <div>
          <h2 id="about-next-title">The ideas behind the work.</h2>
          <p>Explore the journal on business strategy, sustainability and shared learning.</p>
        </div>
        <Link className="text-link" href="/insights">Explore insights<ArrowRight size={19} aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
