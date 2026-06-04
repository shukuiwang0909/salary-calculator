"use client";

import { CalculationResult } from "@/types";
import { formatCurrency } from "@/lib/format";

interface Props {
  result: CalculationResult;
  isFreelance: boolean;
  currencySymbol: string;
}

export default function ResultDisplay({
  result,
  isFreelance,
  currencySymbol,
}: Props) {
  const mainRate = isFreelance ? result.freelanceRate : result.hourlyRate;

  const items = [
    {
      label: "Monthly",
      value: formatCurrency(result.monthlyRate, currencySymbol),
    },
    {
      label: "Weekly",
      value: formatCurrency(result.weeklyRate, currencySymbol),
    },
    { label: "Daily", value: formatCurrency(result.dailyRate, currencySymbol) },
    { label: "Annual Hours", value: `${result.annualHours.toLocaleString()}` },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />

      <div className="space-y-6 p-6">
        {/* Big Number */}
        <div className="space-y-1 text-center">
          <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
            {isFreelance ? "Freelance Rate" : "Hourly Rate"}
          </div>
          <div className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {formatCurrency(mainRate, currencySymbol, 2)}
            <span className="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">
              /hr
            </span>
          </div>
          {isFreelance && (
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
              1.75× employee rate
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-gray-50 p-3.5 dark:border-gray-700/50 dark:bg-gray-800/60"
            >
              <div className="mb-0.5 text-xs text-gray-500 dark:text-gray-400">
                {item.label}
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
