import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://salarytohourly.com";

const SALARY_MIN = 30000;
const SALARY_MAX = 200000;
const SALARY_STEP = 2000;

function salaryUrls(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  for (let s = SALARY_MIN; s <= SALARY_MAX; s += SALARY_STEP) {
    urls.push({
      url: `${baseUrl}/salary/${s}/hourly`,
      lastModified: new Date(),
      priority: 0.8,
    });
  }
  return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date(), priority: 0.3 },
    {
      url: `${baseUrl}/freelance-rate-guide`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hourly-to-salary`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...salaryUrls(),
  ];
}
