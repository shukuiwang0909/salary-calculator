import Breadcrumb from "@/components/Breadcrumb";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  path: "/cookie-policy",
  title: "Cookie Policy",
  description:
    "Cookie Policy for Salary to Hourly. Learn how we use cookies and tracking technologies.",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <h1 className="text-2xl font-bold">Cookie Policy</h1>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">What Are Cookies?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Cookies are small text files stored on your device when you visit a
            website. They help the site remember your preferences and improve your
            experience.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">How We Use Cookies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Salary to Hourly uses a minimal set of cookies and local storage:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
            <li>
              <strong>Theme preference:</strong> We store your light/dark mode
              preference in localStorage so the site looks right on your next
              visit.
            </li>
            <li>
              <strong>Analytics:</strong> If enabled, we may use privacy-friendly
              analytics (e.g., Plausible) that do not use cookies or track
              individuals.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Third-Party Cookies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We do not use third-party advertising cookies or trackers. Any
            analytics we use is privacy-first and cookie-less.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Managing Cookies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            You can clear localStorage and cookies at any time through your
            browser settings. Note that clearing storage will reset your theme
            preference.
          </p>
        </section>
      </div>
    </>
  );
}
