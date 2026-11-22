"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/lib/site-content";

export function HeaderNavigation() {
  const pathname = usePathname();
  return (
    <header className="site-header shell">
      <Link href="/" className="publication-brand" aria-label="France — home">
        <span className="brand-name" translate="no">France</span>
        <span className="brand-byline" translate="no">Olga France Blas-Obias</span>
      </Link>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {navigation.filter(item => item.label !== "Contact").map(item => (
          <Link
            href={item.href}
            key={item.label}
            aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact <ArrowUpRight size={17} aria-hidden="true" /></Link>
      <MobileNavigation pathname={pathname} />
    </header>
  );
}

function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileNavigation({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mobile-menu-button"
          aria-label="Open navigation"
        >
          <Menu size={20} aria-hidden="true" />
          <span>Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="mobile-navigation">
        <SheetHeader>
          <SheetTitle className="menu-title">France</SheetTitle>
          <SheetDescription>
            Perspectives on business, people and purpose.
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link href={item.href} aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}>
                {item.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
