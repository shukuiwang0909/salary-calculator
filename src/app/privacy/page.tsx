import Breadcrumb from "@/components/Breadcrumb";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "Privacy Policy for Salary to Hourly. We do not collect or store your salary data.",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">No Data Collection</h2>
          <p className="text-gray-600 dark:text-gray-400">
            All calculations happen entirely in your browser. We do not collect,
            store, or transmit your salary data to any server.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We may use privacy-friendly analytics (such as Plausible) for
            anonymous traffic statistics. These tools do not use cookies, do not
            track individuals across sites, and do not collect personal data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Local Storage</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We store your theme preference (light/dark mode) in your
            browser&apos;s localStorage so the site looks correct on your next
            visit. You can clear this at any time through your browser settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Third Parties</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We do not sell, rent, or share any data with third parties. There
            are no advertising trackers on this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have questions about this privacy policy, please contact us
            through the information on our About page.
          </p>
        </section>
      </div>
    </>
  );
}
