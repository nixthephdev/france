"use client";

import Link from "next/link";
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

export function MobileNavigation() {
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
              <Link href={item.href}>
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
