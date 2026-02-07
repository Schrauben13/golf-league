import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golf League Manager",
  description: "Manage seasons, players, rounds, and standings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="min-h-screen">
          <header
            className="border-b"
            style={{
              background: "var(--augusta-green)",
              borderColor: "rgba(0,0,0,0.08)",
            }}
          >
            <nav className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-3 px-5 py-4 text-sm font-medium text-white">
              <span className="mr-2 text-base font-semibold text-white">
                Not So Sharp Shooters
              </span>
              <Link
                className="hover:opacity-90"
                href="/"
                style={{ color: "var(--augusta-cream)" }}
              >
                Dashboard
              </Link>
              <Link
                className="hover:opacity-90"
                href="/players"
                style={{ color: "var(--augusta-cream)" }}
              >
                Players
              </Link>
              <Link
                className="hover:opacity-90"
                href="/rounds"
                style={{ color: "var(--augusta-cream)" }}
              >
                Rounds
              </Link>
              <Link
                className="hover:opacity-90"
                href="/standings"
                style={{ color: "var(--augusta-cream)" }}
              >
                Standings
              </Link>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-5xl px-5 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
