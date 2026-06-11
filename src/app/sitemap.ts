import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { listAllStaticSalaryParams } from "@/lib/salary-range";

export const dynamic = "force-static";

function salaryUrls(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  for (const { country, amount } of listAllStaticSalaryParams()) {
    urls.push({
      url: `${SITE_URL}/${country}/salary/${amount}/hourly`,
      lastModified: new Date(),
      priority: 0.8,
    });
  }
  return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), priority: 0.3 },
    { url: `${SITE_URL}/disclaimer`, lastModified: new Date(), priority: 0.3 },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/freelance-rate-guide`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hourly-to-salary`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...salaryUrls(),
  ];
}