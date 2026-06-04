"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function AnalyticsScripts() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
    (window as unknown as Record<string, (name: string, event: string, p?: Record<string, unknown>) => void>).gtag("event", eventName, params);
  }
}

export const ANALYTICS_EVENTS = {
  CALCULATE: "calculate",
  COUNTRY_CHANGE: "country_change",
  REGION_CHANGE: "region_change",
  FREELANCE_TOGGLE: "freelance_toggle",
  SHARE_CLICK: "share_click",
  COPY_CLICK: "copy_click",
  HOURLY_TO_SALARY_CALCULATE: "hourly_to_salary_calculate",
} as const;
