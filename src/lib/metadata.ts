import type { Metadata } from "next";
import { SITE_NAME } from "./site";

/**
 * Build per-page Metadata with canonical and OG defaults derived from the path.
 * Use this for static inner pages (about, privacy, terms, disclaimer, etc.).
 */
export function pageMeta(input: {
  path: `/${string}`;
  title: string;
  description: string;
  ogType?: "website" | "article";
}): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      type: input.ogType ?? "website",
      url: input.path,
      siteName: SITE_NAME,
      title: input.title,
      description: input.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: ["/opengraph-image"],
    },
  };
}