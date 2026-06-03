"use client";

import { US_STATES, US_MEDIAN_SALARY } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";

interface Props {
  annualSalary: number;
  stateCode: string;
}

export default function ContextBars({ annualSalary, stateCode }: Props) {
  const state = US_STATES.find((s) => s.code === stateCode)!;
  const usPct = Math.round((annualSalary / US_MEDIAN_SALARY) * 100);
  const statePct = Math.round((annualSalary / state.medianSalary) * 100);

  const colColor =
    state.colLevel === "high"
      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800/30"
      : state.colLevel === "low"
      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/30"
      : "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30";

  const colText =
    state.colLevel === "high"
      ? `High cost of living (${state.colFactor}x)`
      : state.colLevel === "low"
      ? `Low cost of living (${state.colFactor}x)`
      : `Average cost of living (${state.colFactor}x)`;

  return (
    <div className="space-y-4">
      {/* US Median */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">vs US Median</span>
          <span className="font-bold text-gray-900 dark:text-gray-200">{usPct}%</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
            style={{ width: `${Math.min(usPct, 100)}%` }}
          />
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500">
          {formatCurrency(US_MEDIAN_SALARY)} national median
        </div>
      </div>

      {/* State Median */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">vs {state.name} Median</span>
          <span className="font-bold text-gray-900 dark:text-gray-200">{statePct}%</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${Math.min(statePct, 100)}%` }}
          />
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500">
          {formatCurrency(state.medianSalary)} state median
        </div>
      </div>

      {/* COL Badge */}
      <div className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border ${colColor}`}>
        {colText}
      </div>
    </div>
  );
}
