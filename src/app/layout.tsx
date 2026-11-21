import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import "./globals.css";

const hanken = localFont({
  src: "../../node_modules/@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2",
  variable: "--font-hanken",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "France | Insights on Business, People and Purpose",
    template: "%s | France",
  },
  description:
    "Explore perspectives on entrepreneurship, business strategy, sustainability, and mentorship from Olga France Blas-Obias.",
};
export const viewport: Viewport = { themeColor: "#f6f6f0" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
