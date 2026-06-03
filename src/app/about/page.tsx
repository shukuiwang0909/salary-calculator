export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="text-gray-600 dark:text-gray-400">
        This calculator helps US workers convert annual salaries into hourly
        rates using the standard 2,080 work-hours per year.
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        It includes state-level cost-of-living context and a freelance rate
        multiplier (1.75×) to account for self-employment overhead.
      </p>
    </div>
  );
}
