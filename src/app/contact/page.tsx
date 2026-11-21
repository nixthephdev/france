import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactEmail, linkedInUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Olga France Blas-Obias for speaking invitations, mentorship and collaborations by email or LinkedIn.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="content-page contact-page">
      <header className="page-heading shell">
        <h1>Let’s start a conversation.</h1>
        <p>A response to an idea, a speaking invitation, or a possibility to explore.</p>
      </header>

      <section className="contact-section shell" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">Connect directly.</h2>
          <p>Send France an email or reach out on LinkedIn.</p>
          <p className="contact-email-note">The email button opens your email app.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${contactEmail}`}>
            Email France<Mail size={21} aria-hidden="true" />
          </a>
          <span className="contact-address">{contactEmail}</span>
          <a className="text-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn<ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section className="page-next shell" aria-labelledby="contact-context-title">
        <div>
          <h2 id="contact-context-title">A good place to begin.</h2>
          <p>For invitations, include the topic, audience, date and format. For a collaboration, share a little about the idea and how you’d like to work together.</p>
        </div>
        <Link className="text-link" href="/speaking">Speaking & mentorship<ArrowUpRight size={19} aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
