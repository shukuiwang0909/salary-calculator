import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-14 max-w-xl items-center justify-between px-4">
        <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Salary to Hourly
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
