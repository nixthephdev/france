import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olga France Blas-Obias | Growing with Purpose",
  description:
    "Perspectives on entrepreneurship, business strategy, sustainability, and mentorship from Olga France Blas-Obias.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
