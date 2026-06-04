"use client";

import { Briefcase } from "lucide-react";

interface Props {
  enabled: boolean;
  onToggle: () => void;
}

export default function FreelanceSection({ enabled, onToggle }: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3.5 dark:border-gray-700/50 dark:bg-gray-800/40">
      <div className="flex items-center gap-2.5">
        <div
          className={`rounded-lg p-1.5 ${enabled ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"} transition`}
        >
          <Briefcase size={16} />
        </div>
        <div className="text-sm">
          <div className="font-semibold text-gray-800 dark:text-gray-200">
            Freelance Mode
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Apply 1.75× multiplier
          </div>
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
          enabled ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
        aria-pressed={enabled}
        aria-label="Toggle freelance mode"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
