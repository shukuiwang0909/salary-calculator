import Breadcrumb from "@/components/Breadcrumb";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  path: "/terms",
  title: "Terms of Service",
  description:
    "Terms of Service for Salary to Hourly. Read about acceptable use, disclaimers, and limitations of liability.",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <h1 className="text-2xl font-bold">Terms of Service</h1>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            By using Salary to Hourly (the &quot;Site&quot;), you agree to these Terms of
            Service. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Use of the Calculator</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The salary-to-hourly calculator is provided for informational purposes
            only. Results are estimates based on standard assumptions and should
            not be taken as financial, tax, or legal advice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. No Warranty</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The Site is provided &quot;as is&quot; without warranties of any kind. We do not
            guarantee accuracy, completeness, or reliability of any calculation or
            data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-400">
            In no event shall Salary to Hourly be liable for any damages arising
            from the use or inability to use the Site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">5. Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We may update these terms at any time. Continued use of the Site
            constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </>
  );
}
