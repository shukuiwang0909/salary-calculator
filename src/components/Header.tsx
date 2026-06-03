import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">
          Salary to Hourly
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
