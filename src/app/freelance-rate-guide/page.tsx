import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  path: "/freelance-rate-guide",
  title: "Freelance Rate Guide",
  description:
    "Learn how to set freelance rates. Typical multipliers range from 1.5× to 2.5× your employee hourly rate.",
  ogType: "article",
});

const faqs = [
  {
    question: "What is a good freelance rate multiplier?",
    answer:
      "A common rule of thumb is to charge 1.5× to 2.5× your equivalent employee hourly rate. The exact number depends on your expenses, taxes, benefits, and how much downtime you have between projects.",
  },
  {
    question: "Why is the 1.75× multiplier a good default?",
    answer:
      "The 1.75× multiplier is high enough to cover self-employment tax, health insurance, equipment, and a buffer for unpaid time, but not so high that it prices you out of typical projects. It is a sustainable default for most freelancers.",
  },
  {
    question: "When should I charge 2× or more?",
    answer:
      "Charge 2× or more if you have highly specialized skills, in-demand expertise, premium positioning, or a track record of measurable results that justify higher rates.",
  },
  {
    question: "When is 1.5× acceptable?",
    answer:
      "A 1.5× multiplier is only viable when you have very low overhead, consistent client flow, and minimal unpaid time between projects. It leaves little margin for unexpected expenses or slow months.",
  },
  {
    question: "How do I calculate my freelance rate from my salary?",
    answer:
      "First convert your target salary to an hourly rate using standard work hours for your country. Then multiply by your chosen multiplier (1.5×–2.5×). For example, a $75,000 salary at 2,080 hours is $36.06/hour, which becomes about $63/hour at 1.75×.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FreelanceGuidePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Freelance Rate Guide" },
        ]}
      />
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <h1 className="text-2xl font-bold">Freelance Rate Guide</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Freelancers typically charge <strong>1.5–2.5×</strong> their equivalent
          employee hourly rate to cover taxes, benefits, downtime, and business
          expenses.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              1.5× — Minimum Viable Rate
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tight margins. Only viable if you have very low overhead and
              consistent client flow.
            </p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="mb-1 text-sm font-semibold text-blue-900 dark:text-blue-200">
              1.75× — Healthy Sustainable Rate (Default)
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Covers self-employment tax, health insurance, equipment, and a
              reasonable buffer for unpaid time. This is our recommended
              default.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              2.0×+ — Premium / Specialized Expertise
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For highly specialized skills, in-demand niches, or premium
              consulting. Justify with demonstrable expertise and results.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">What the Multiplier Covers</h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
          <li>
            <strong>Self-employment tax:</strong> You pay both the employer and
            employee portions of Social Security and Medicare (15.3% in the US).
          </li>
          <li>
            <strong>Health insurance:</strong> No employer-subsidized plan means
            you cover premiums yourself.
          </li>
          <li>
            <strong>Business expenses:</strong> Software, hardware, office space,
            professional development.
          </li>
          <li>
            <strong>Unpaid time:</strong> Vacation, sick days, admin work,
            marketing, and gaps between projects.
          </li>
          <li>
            <strong>Savings buffer:</strong> Emergency fund and retirement
            contributions that an employer might match.
          </li>
        </ul>

        <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
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
      </div>
    </>
  );
}
