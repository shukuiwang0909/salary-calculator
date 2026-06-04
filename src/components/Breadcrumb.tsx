"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://salarytohourly.com${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-xl px-4 pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">
                /
              </span>
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="transition hover:text-gray-600 dark:hover:text-gray-300"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
