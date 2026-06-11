"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Calculator,
  Globe,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { calculateBreakdownForCountry } from "@/lib/salary-range";
import { formatCurrency } from "@/lib/format";
import { getCountryById } from "@/data";

const steps = [
  {
    icon: Globe,
    title: "Select Your Country",
    description:
      "Choose from 18 countries including the US, UK, Canada, Germany, Japan, China, and more. Each country uses its own currency and regional data.",
  },
  {
    icon: Calculator,
    title: "Enter Your Salary",
    description:
      "Input your annual salary in local currency. We default to the national median for quick comparison.",
  },
  {
    icon: TrendingUp,
    title: "See Your Hourly Rate",
    description:
      "Instantly see your hourly, daily, weekly, and monthly rates. Toggle Freelance Mode for a 1.75× multiplier.",
  },
];

const assumptions = [
  "We assume 52 working weeks per year and do not subtract time for unpaid leave, holidays, or gaps in employment.",
  "Hourly pay is calculated using standard full-time hours per week for each country (typically 35–40 hours).",
  "All figures are gross pay — before taxes, Social Security, Medicare, retirement contributions, health insurance, or other deductions.",
  "We do not include overtime rates, bonuses, commissions, or tips.",
  "Cost-of-living factors are approximate estimates based on publicly available data.",
  "Freelance multipliers are rules of thumb, not guaranteed market rates.",
];

const faqs = [
  {
    question: "How is the hourly rate calculated?",
    answer:
      "Your hourly rate is calculated by dividing your annual salary by the standard number of work hours per year for your selected country. For example, in the US we use 2,080 hours (40 hours/week × 52 weeks).",
  },
  {
    question: "What is the freelance multiplier?",
    answer:
      "Freelancers typically charge 1.5–2.5× their equivalent employee rate to cover taxes, benefits, downtime, and business expenses. We use 1.75× as a healthy, sustainable default.",
  },
  {
    question: "Is this calculator accurate for my exact situation?",
    answer:
      "This calculator provides estimates based on standard assumptions. Your actual take-home pay depends on your tax bracket, deductions, benefits, and local laws. Consult a tax professional for personalized advice.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "We support 18 countries: United States, Canada, United Kingdom, Australia, New Zealand, Germany, France, Netherlands, Ireland, Japan, South Korea, Singapore, Hong Kong, Sweden, Norway, Denmark, Finland, and China.",
  },
  {
    question: "What does the cost-of-living adjustment mean?",
    answer:
      "Each region within a country has a cost-of-living factor relative to the national average. This helps you understand whether your salary goes further or shorter in a specific city or state.",
  },
  {
    question: "Does the calculator show after-tax income?",
    answer:
      "No. All results are gross (pre-tax) figures. Tax rates vary widely by country, region, and personal situation.",
  },
];

// Popular salary links for the homepage grid (US dollars, since we link
// to the /us/salary/[amount]/hourly pages).
const popularSalaries = [
  50000, 60000, 70000, 80000, 90000, 100000, 120000, 150000,
];

const usCountry = getCountryById("us");

function compactSalaryK(salary: number): string {
  return `${(salary / 1000).toLocaleString(usCountry.locale, {
    maximumFractionDigits: 0,
  })}K`;
}

export default function HomeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-xl space-y-10 px-4 pb-16">
      {/* How It Works */}
      <section>
        <h2 className="mb-5 text-center text-xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Assumptions */}
      <section>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Assumptions
            </h2>
          </div>
          <ul className="space-y-2">
            {assumptions.map((item, i) => (
              <li
                key={i}
                className="text-xs leading-relaxed text-gray-500 dark:text-gray-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="mb-5 text-center text-xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Popular Salary Conversions */}
      <section>
        <h2 className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-white">
          Popular Salary Conversions
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {popularSalaries.map((s) => {
            const h = calculateBreakdownForCountry(s, usCountry.annualHours)
              .hourly;
            return (
              <Link
                key={s}
                href={`/us/salary/${s}/hourly`}
                className="rounded-xl border border-gray-200 bg-white p-3 text-center transition hover:border-blue-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {compactSalaryK(s)} to hourly
                </div>
                <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {formatCurrency(h, usCountry, 2)}/hour
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
