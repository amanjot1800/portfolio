import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full antialiased`}>
      <body id="top" className="flex min-h-full flex-col font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
