import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import franceEvent from "../../../public/images/france-asean-event.jpg";
import { contactEmail, profileRoles } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Speaking & Mentorship",
  description: "Explore speaking and mentorship conversations with Olga France Blas-Obias on entrepreneurship, sustainability and thoughtful leadership.",
};

export default function SpeakingPage() {
  return (
    <main id="main-content" className="content-page speaking-page">
      <header className="page-heading shell">
        <h1>Speaking & mentorship.</h1>
        <p>Conversations about business, people and the future we want to build.</p>
      </header>

      <section className="speaking-section" aria-labelledby="speaking-topics-title">
        <div className="speaking-inner shell section-space">
          <figure className="event-figure">
            <div className="event-photo-frame">
              <Image
                src={franceEvent}
                alt="France standing in front of national flags at an ASEAN event"
                fill
                sizes="(max-width: 720px) calc(100vw - 56px), 420px"
                preload
                placeholder="blur"
                className="event-photo"
              />
            </div>
            <figcaption>France at an ASEAN event.</figcaption>
          </figure>
          <div className="speaking-copy">
            <h2 id="speaking-topics-title">Ideas to bring into the room.</h2>
            <p>{profileRoles[0]}</p>
            <p>Connect with France about a speaking invitation, a mentorship opportunity, or a shared interest.</p>
            <ul className="speaking-topics">
              <li>Entrepreneurship and business strategy</li>
              <li>Sustainability and advocacy</li>
              <li>Mentorship and thought leadership</li>
            </ul>
            <a className="reading-button" href={`mailto:${contactEmail}?subject=Speaking%20or%20mentorship%20enquiry`}>
              Invite France<ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="page-next shell" aria-labelledby="invitation-title">
        <div>
          <h2 id="invitation-title">Have a conversation in mind?</h2>
          <p>Share your topic, audience, preferred date and format so France has the context for your invitation.</p>
        </div>
        <Link className="text-link" href="/contact">Contact France<ArrowUpRight size={19} aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
