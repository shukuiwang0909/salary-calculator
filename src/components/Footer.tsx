export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 mt-8">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-3 text-sm text-gray-400 dark:text-gray-500">
        <div className="flex gap-6">
          <a href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition">About</a>
          <a href="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300 transition">Privacy</a>
          <a href="/freelance-rate-guide" className="hover:text-gray-600 dark:hover:text-gray-300 transition">Freelance Guide</a>
        </div>
        <p className="text-xs text-center max-w-sm">
          Data is approximate. Consult a tax professional for advice.
        </p>
      </div>
    </footer>
  );
}
