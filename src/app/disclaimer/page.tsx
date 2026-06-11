import Breadcrumb from "@/components/Breadcrumb";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  path: "/disclaimer",
  title: "Disclaimer",
  description:
    "Disclaimer for Salary to Hourly. All calculations are estimates for informational purposes only.",
});

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <h1 className="text-2xl font-bold">Disclaimer</h1>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Not Financial Advice</h2>
          <p className="text-gray-600 dark:text-gray-400">
            All calculations on this site are estimates for informational
            purposes only. They do not constitute financial, tax, or legal
            advice. Please consult a qualified professional before making any
            financial decisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Calculation Assumptions</h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
            <li>
              We assume <strong>52 working weeks per year</strong> and do not
              subtract time for unpaid leave or holidays.
            </li>
            <li>
              Hourly rates are calculated from <strong>gross pay</strong> — before
              taxes, Social Security, Medicare, retirement contributions, or health
              insurance deductions.
            </li>
            <li>
              Cost-of-living factors are approximate and based on publicly
              available data. They may not reflect your personal circumstances.
            </li>
            <li>
              Freelance multipliers (1.75×) are rules of thumb, not guaranteed
              rates.
            </li>
            <li>
              Regional median salaries are estimates and may vary by industry,
              experience, and employer.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Data Accuracy</h2>
          <p className="text-gray-600 dark:text-gray-400">
            While we strive to keep data accurate and up to date, we make no
            representations or warranties about the completeness, reliability, or
            accuracy of any information on this site.
          </p>
        </section>
      </div>
    </>
  );
}
