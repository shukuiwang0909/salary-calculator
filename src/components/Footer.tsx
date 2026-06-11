import Link from "next/link";

const calculatorLinks = [
  { href: "/", label: "Salary to Hourly" },
  { href: "/hourly-to-salary", label: "Hourly to Salary" },
  { href: "/freelance-rate-guide", label: "Freelance Rate Guide" },
];

const countryLinks = [
  { href: "/?country=us", label: "United States" },
  { href: "/?country=ca", label: "Canada" },
  { href: "/?country=gb", label: "United Kingdom" },
  { href: "/?country=au", label: "Australia" },
  { href: "/?country=de", label: "Germany" },
  { href: "/?country=jp", label: "Japan" },
  { href: "/?country=cn", label: "China" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 text-sm sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-2 text-base font-bold text-gray-900 dark:text-white">
            Salary to Hourly
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Free salary conversion tools for 18 countries. All calculations are
            estimates.
          </p>
        </div>

        {/* Calculators */}
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Calculators
          </div>
          <ul className="space-y-2">
            {calculatorLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            By Country
          </div>
          <ul className="space-y-2">
            {countryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Company
          </div>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-4 text-center text-xs text-gray-400 dark:border-gray-800 dark:text-gray-500">
        © {new Date().getFullYear()} Salary to Hourly. All calculations are
        estimates. Consult a tax professional for advice.
      </div>
    </footer>
  );
}
