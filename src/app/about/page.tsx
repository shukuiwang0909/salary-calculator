import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "About",
  description:
    "Learn about Salary to Hourly — a free calculator supporting 18 countries with cost-of-living adjustments and freelance rate estimates.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Salary to Hourly is a free calculator supporting workers in{" "}
          <strong>18 countries</strong>. Convert your annual salary into an
          hourly rate using country-specific work hours, regional cost-of-living
          data, and freelance multipliers.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Whether you are comparing job offers, negotiating a raise, or setting
          freelance rates, understanding your true hourly value helps you make
          better financial decisions.
        </p>
        <h2 className="text-lg font-semibold">Supported Countries</h2>
        <p className="text-gray-600 dark:text-gray-400">
          United States 🇺🇸, Canada 🇨🇦, United Kingdom 🇬🇧, Australia 🇦🇺, New
          Zealand 🇳🇿, Germany 🇩🇪, France 🇫🇷, Netherlands 🇳🇱, Ireland 🇮🇪, Japan
          🇯🇵, South Korea 🇰🇷, Singapore 🇸🇬, Hong Kong 🇭🇰, Sweden 🇸🇪, Norway
          🇳🇴, Denmark 🇩🇰, Finland 🇫🇮, and China 🇨🇳.
        </p>
        <h2 className="text-lg font-semibold">Key Features</h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-400">
          <li>Country-specific annual work-hour standards</li>
          <li>Regional cost-of-living context (state, province, city)</li>
          <li>Freelance rate multiplier (1.75× default)</li>
          <li>Instant hourly, daily, weekly, and monthly breakdowns</li>
          <li>Shareable results with URL state sync</li>
          <li>Dark mode support</li>
        </ul>
      </div>
    </>
  );
}
