export default function FreelanceGuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-bold">Freelance Rate Guide</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Freelancers typically charge 1.5–2.5× their equivalent employee hourly
        rate to cover taxes, benefits, downtime, and business expenses.
      </p>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
        <li>1.5× — Minimum viable rate (tight margins)</li>
        <li>1.75× — Healthy sustainable rate (default here)</li>
        <li>2.0×+ — Premium / specialized expertise</li>
      </ul>
    </div>
  );
}
