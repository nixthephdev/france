"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { insightConcepts, linkedInUrl, navigation } from "@/lib/site-content";

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mobile-menu-button"
          aria-label="Open navigation"
        >
          <Menu aria-hidden="true" /> Menu
        </Button>
      </SheetTrigger>
      <SheetContent className="mobile-navigation">
        <SheetHeader>
          <SheetTitle className="menu-title">Explore with France.</SheetTitle>
          <SheetDescription>Business, people, and purpose.</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <SheetClose asChild key={item.href}>
              <a href={item.href}>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <a href="#connect">
              Let’s connect
              <ArrowUpRight aria-hidden="true" />
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function EnquiryDialog({
  children,
  intent = "a collaboration",
  className = "",
}: {
  children: React.ReactNode;
  intent?: string;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="editorial-dialog">
        <DialogHeader>
          <p className="eyebrow">A good conversation starts here</p>
          <DialogTitle className="dialog-heading">
            Let’s talk about
            <br />
            <em>{intent}.</em>
          </DialogTitle>
          <DialogDescription>
            Connect with France on LinkedIn to start the conversation. A little
            context helps make the introduction meaningful.
          </DialogDescription>
        </DialogHeader>
        <div className="enquiry-guide">
          <p>In your message, you might include:</p>
          <ul>
            <li>Your name and organisation</li>
            <li>What you have in mind and who it is for</li>
            <li>Your preferred timeline or event date</li>
          </ul>
        </div>
        <Button asChild className="brand-button">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            Continue on LinkedIn
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export function InsightPreviews() {
  return (
    <div className="insights-grid">
      {insightConcepts.map((insight, index) => (
        <article className="insight-card" key={insight.title}>
          <div
            className={"insight-art insight-art-" + index}
            aria-hidden="true"
          >
            <span />
            <i />
          </div>
          <div className="insight-meta">
            <span>{insight.category}</span>
            <span>Sample topic</span>
          </div>
          <h3>{insight.title}</h3>
          <p>{insight.summary}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-link">
                Preview concept
                <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">: {insight.title}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="editorial-dialog">
              <DialogHeader>
                <p className="eyebrow">
                  {insight.category} · Editorial concept
                </p>
                <DialogTitle className="dialog-heading">
                  {insight.title}
                </DialogTitle>
                <DialogDescription>
                  Sample content for design review. This is not a published
                  article by France.
                </DialogDescription>
              </DialogHeader>
              <p className="article-body">{insight.body}</p>
            </DialogContent>
          </Dialog>
        </article>
      ))}
    </div>
  );
}
