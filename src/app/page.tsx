import Calculator from "@/components/Calculator";
import HomeContent from "@/components/HomeContent";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

interface PageProps {
  searchParams: Promise<{
    country?: string;
    salary?: string;
    region?: string;
    freelance?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const salaryNum = params.salary ? Number(params.salary) : undefined;

  const initial = {
    country: params.country,
    salary: Number.isFinite(salaryNum) ? salaryNum : undefined,
    region: params.region,
    freelance: params.freelance === "1",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Salary to Hourly Calculator",
    description:
      "Free salary to hourly calculator for 18 countries. Convert annual salary to hourly rate with cost-of-living adjustments and freelance multipliers.",
    url: SITE_URL,
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is the hourly rate calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your hourly rate is calculated by dividing your annual salary by the standard number of work hours per year for your selected country. For example, in the US we use 2,080 hours (40 hours/week × 52 weeks).",
          },
        },
        {
          "@type": "Question",
          name: "What is the freelance multiplier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Freelancers typically charge 1.5–2.5× their equivalent employee rate to cover taxes, benefits, downtime, and business expenses. We use 1.75× as a healthy, sustainable default.",
          },
        },
        {
          "@type": "Question",
          name: "Which countries are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We support 18 countries: United States, Canada, United Kingdom, Australia, New Zealand, Germany, France, Netherlands, Ireland, Japan, South Korea, Singapore, Hong Kong, Sweden, Norway, Denmark, Finland, and China.",
          },
        },
        {
          "@type": "Question",
          name: "Does the calculator show after-tax income?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. All results are gross (pre-tax) figures. Tax rates vary widely by country, region, and personal situation.",
          },
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <Breadcrumb items={[{ label: "Home" }]} />
      <Calculator initial={initial} />
      <HomeContent />
    </>
  );
}