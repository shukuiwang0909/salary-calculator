import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Freelance Rate Guide",
  description:
    "Learn how to set freelance rates. Typical multipliers range from 1.5× to 2.5× your employee hourly rate.",
};

export default function FreelanceGuidePage() {
  return (
    <>
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
      </div>
    </>
  );
}
