import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import {
  SALARY_MIN,
  SALARY_MAX,
  SALARY_STEP,
  salaryToK,
  calculateBreakdown,
} from "@/lib/salary-range";

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

function formatCompact(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function generateStaticParams() {
  const params: { amount: string }[] = [];
  for (let s = SALARY_MIN; s <= SALARY_MAX; s += SALARY_STEP) {
    params.push({ amount: String(s) });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ amount: string }>;
}): Promise<Metadata> {
  const { amount } = await params;
  const salary = Number(amount);
  const breakdown = calculateBreakdown(salary);
  const hourly = breakdown.hourly.toFixed(2);
  const k = salaryToK(salary);

  return {
    title: `${k} Salary to Hourly – How Much Is ${k}/Year Per Hour?`,
    description: `${k} a year is $${hourly} per hour. Instant ${k} salary breakdown into hourly, daily, weekly, and monthly pay.`,
    alternates: {
      canonical: `/salary/${salary}/hourly`,
    },
    openGraph: {
      title: `${k} Salary to Hourly – How Much Is ${k}/Year Per Hour?`,
      description: `${k} a year is $${hourly} per hour. Instant ${k} salary breakdown into hourly, daily, weekly, and monthly pay.`,
      url: `https://salarytohourly.com/salary/${salary}/hourly`,
    },
  };
}

export default async function SalaryPage({
  params,
}: {
  params: Promise<{ amount: string }>;
}) {
  const { amount } = await params;
  const salary = Number(amount);
  const breakdown = calculateBreakdown(salary);
  const k = salaryToK(salary);

  const faqs = [
    {
      question: `What is ${k} a year hourly at 40 hours per week?`,
      answer: `At 40 hours per week and 52 weeks per year, a ${k} salary equals approximately $${breakdown.hourly.toFixed(2)} per hour before taxes.`,
    },
    {
      question: `How much is ${k} a year after taxes?`,
      answer: `After-tax income varies by state and filing status. As a rough estimate, ${k} may yield around $${formatCompact(salary * 0.75)}–$${formatCompact(salary * 0.82)} take-home annually, depending on your tax bracket and deductions.`,
    },
    {
      question: `Is ${k} a good salary?`,
      answer: `In 2025, ${k} is ${salary >= 70000 ? "above" : salary >= 55000 ? "around" : "below"} the U.S. median individual income. Whether it feels comfortable depends on your location, cost of living, and financial obligations.`,
    },
    {
      question: `What is ${k} salary per month?`,
      answer: `${k} divided by 12 months equals ${formatCurrency(breakdown.monthly)} per month before taxes.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${k} Salary to Hourly`,
        description: `${k} a year is $${breakdown.hourly.toFixed(2)} per hour.`,
        url: `https://salarytohourly.com/salary/${salary}/hourly`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://salarytohourly.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Salary to Hourly",
            item: "https://salarytohourly.com/salary-to-hourly-calculator",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: k,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  // Related salaries (±4k range)
  const relatedSalaries: number[] = [];
  for (
    let s = Math.max(SALARY_MIN, salary - 4000);
    s <= Math.min(SALARY_MAX, salary + 4000);
    s += SALARY_STEP
  ) {
    if (s !== salary) relatedSalaries.push(s);
  }

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Salary to Hourly", href: "/" },
          { label: k },
        ]}
      />

      <div className="mx-auto max-w-2xl space-y-8 px-4 py-8">
        {/* Hero / Answer-first */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            What Is a {k} Salary Per Hour?
          </h1>
          <div className="mx-auto max-w-md rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {k}/year = {formatCurrency(breakdown.hourly)}/hour
            </div>
            <div className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Based on a 40-hour work week (2,080 hours/year)
            </div>
          </div>
        </div>

        {/* Breakdown Table */}
        <section>
          <h2 className="mb-4 text-xl font-bold">{k} Salary Breakdown</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Period
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700 dark:text-gray-300">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    label: "Hourly",
                    value: breakdown.hourly,
                    highlight: true,
                  },
                  { label: "Daily (8 hrs)", value: breakdown.daily },
                  { label: "Weekly", value: breakdown.weekly },
                  { label: "Biweekly", value: breakdown.biweekly },
                  { label: "Monthly", value: breakdown.monthly },
                  { label: "Annual", value: breakdown.annual },
                ].map((row) => (
                  <tr
                    key={row.label}
                    className={
                      row.highlight
                        ? "bg-blue-50/50 dark:bg-blue-900/10"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {row.label}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono font-medium ${
                        row.highlight
                          ? "text-blue-700 dark:text-blue-300"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {formatCurrency(row.value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Formula */}
          <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4 text-center text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <span className="font-mono">
              {k} ÷ 2,080 hours = {formatCurrency(breakdown.hourly)}/hour
            </span>
          </div>
        </section>

        {/* Context Paragraph */}
        <section className="space-y-3 text-gray-600 dark:text-gray-400">
          <p>
            If you earn {k} per year and work a standard 40-hour week for 52
            weeks, your hourly rate is approximately{" "}
            {formatCurrency(breakdown.hourly)}. This is a common salary for{" "}
            {salary >= 80000
              ? "senior professionals and experienced individual contributors"
              : salary >= 60000
                ? "mid-level professionals across many industries"
                : "early-to-mid career professionals"}
            .
          </p>
          <p>
            A {k} annual salary sits{" "}
            {salary >= 70000
              ? "above"
              : salary >= 55000
                ? "around"
                : "below"}{" "}
            the U.S. median household income. At this level, many workers are in{" "}
            {salary >= 80000
              ? "senior"
              : salary >= 60000
                ? "professional"
                : "entry-to-mid-level"}{" "}
            roles with benefits such as health insurance and retirement
            contributions.
          </p>
        </section>

        {/* Assumptions */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Assumptions
          </h3>
          <ul className="list-disc space-y-1.5 pl-5 text-xs text-gray-500 dark:text-gray-400">
            <li>
              52 working weeks per year; no unpaid leave subtracted.
            </li>
            <li>40 hours per week (standard full-time in the U.S.).</li>
            <li>
              Gross pay only — before taxes, Social Security, Medicare,
              retirement, or health insurance.
            </li>
            <li>No overtime, bonuses, commissions, or tips included.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {faq.question}
                    <svg
                      className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Related Salaries */}
        {relatedSalaries.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-bold">
              Similar Salary Conversions
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {relatedSalaries.map((s) => {
                const h = calculateBreakdown(s).hourly;
                return (
                  <Link
                    key={s}
                    href={`/salary/${s}/hourly`}
                    className="rounded-xl border border-gray-200 bg-white p-3 text-center transition hover:border-blue-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                  >
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {salaryToK(s)} salary to hourly
                    </div>
                    <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      {formatCurrency(h)}/hour
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA back to calculator */}
        <div className="text-center">
          <Link
            href={`/?salary=${salary}`}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Try the Full Calculator
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            Compare across 18 countries with cost-of-living adjustments.
          </p>
        </div>
      </div>
    </>
  );
}
