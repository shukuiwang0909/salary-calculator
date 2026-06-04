import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnalyticsScripts } from "@/components/Analytics";

const siteUrl = "https://salarytohourly.com";
const siteName = "Salary to Hourly";
const defaultTitle = "Salary to Hourly Calculator | 18 Countries 2025";
const defaultDescription =
  "Free salary to hourly calculator for 18 countries. Convert annual salary to hourly rate with cost-of-living adjustments, state/province data, and freelance multipliers.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Salary to Hourly",
  },
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salary to Hourly Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <AnalyticsScripts />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
