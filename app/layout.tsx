import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/ui/smooth-scroll";
import SiteHeader from "@/components/ui/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Praveen Uppar — final-year Computer Science student at VIT Bhopal working on backend development and distributed systems. Ex-Advan Drive Technologies, AWS Certified Cloud Practitioner.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pavicodes.in"),
  title: {
    default: "Praveen Uppar",
    template: "%s · Praveen Uppar",
  },
  description,
  keywords: [
    "Praveen Uppar",
    "backend developer",
    "software engineer",
    "cloud infrastructure",
    "Bengaluru",
  ],
  authors: [{ name: "Praveen Uppar" }],
  openGraph: {
    title: "Praveen Uppar — Backend & Cloud",
    description,
    url: "https://pavicodes.in",
    siteName: "Praveen Uppar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Uppar — Backend & Cloud",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Applies the stored theme before first paint so the page never
            flashes dark then swaps to light. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-bg text-ink min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-chip focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-xs"
        >
          Skip to content
        </a>
        <span id="top" />
        <div
          aria-hidden="true"
          // className="grid-band pointer-events-none fixed inset-y-0 left-1/2 -z-10 w-full max-w-[62rem] -translate-x-1/2"
        />
        <SiteHeader />
        <SmoothScroll>
          <main id="main">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
