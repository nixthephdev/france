import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="reading-page shell">
      <div className="reading-intro">
        <h1>This page could not be found.</h1>
        <p>Explore the insights to find something to read.</p>
        <Link className="text-link" href="/insights">
          Browse insights <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </main>
  );
}
