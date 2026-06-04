"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // ignore
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
