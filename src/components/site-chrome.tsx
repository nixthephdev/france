import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import { HeaderNavigation } from "@/components/site-interactions";
import { linkedInUrl, contactEmail } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Suspense fallback={<div className="header-placeholder" />}>
        <HeaderNavigation />
      </Suspense>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div>
        <Link className="footer-brand" href="/">
          France
        </Link>
        <p>Growing businesses, people and purpose.</p>
      </div>
      <div className="footer-links">
        <Link href="/contact">Contact</Link>
        <Link href="/insights">Explore the insights</Link>
        <a href={`mailto:${contactEmail}`}>Email France</a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
