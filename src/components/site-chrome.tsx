import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MobileNavigation } from "@/components/site-interactions";
import { linkedInUrl, navigation } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header shell">
        <Link href="/" className="publication-brand" aria-label="France — home">
          <span className="brand-name" translate="no">
            France
          </span>
          <span className="brand-byline" translate="no">
            Olga France Blas-Obias
          </span>
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNavigation />
      </header>
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
        <Link href="/insights">Explore the insights</Link>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
