"use client";

import { CalculationResult } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/format";

interface Props {
  result: CalculationResult;
  isFreelance: boolean;
}

export default function ResultDisplay({ result, isFreelance }: Props) {
  const mainRate = isFreelance ? result.freelanceRate : result.hourlyRate;

  const items = [
    { label: "Monthly", value: formatCurrency(result.monthlyRate) },
    { label: "Weekly", value: formatCurrency(result.weeklyRate) },
    { label: "Daily", value: formatCurrency(result.dailyRate) },
    { label: "Annual Hours", value: formatNumber(result.annualHours, 0) },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />

      <div className="p-6 space-y-6">
        {/* Big Number */}
        <div className="text-center space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            {isFreelance ? "Freelance Rate" : "Hourly Rate"}
          </div>
          <div className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {formatCurrency(mainRate)}
            <span className="text-xl text-gray-400 dark:text-gray-500 font-semibold ml-1">/hr</span>
          </div>
          {isFreelance && (
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              1.75× employee rate
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 p-3.5"
            >
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
