import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Cursor } from "@/components/layout/cursor";
import { EventTracker } from "@/components/layout/event-tracker";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/layout/motion-provider";
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

const title = `${profile.name} · ${profile.role}`;
const description = `${profile.name} is a full-stack developer in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "full-stack developer",
    "software engineer",
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "Ottawa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description,
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full antialiased`}>
      <head>
        {/* Without JavaScript, scroll-reveal content would stay hidden: show it. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body id="top" className="flex min-h-full flex-col font-sans">
        <MotionProvider>
          <Nav />
          {children}
          <Footer />
          <Cursor />
          <Analytics />
          <EventTracker />
          <SpeedInsights />
        </MotionProvider>
      </body>
    </html>
  );
}
