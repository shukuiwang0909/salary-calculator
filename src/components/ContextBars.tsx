"use client";

import { CountryConfig } from "@/types";
import { formatCurrency } from "@/lib/format";

interface Props {
  annualSalary: number;
  country: CountryConfig;
  regionCode: string;
}

export default function ContextBars({
  annualSalary,
  country,
  regionCode,
}: Props) {
  const region = country.regions.find((r) => r.code === regionCode)!;
  const nationalPct = Math.round(
    (annualSalary / country.nationalMedianSalary) * 100
  );
  const regionPct = Math.round((annualSalary / region.medianSalary) * 100);

  const colColor =
    region.colLevel === "high"
      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800/30"
      : region.colLevel === "low"
        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/30"
        : "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30";

  const colText =
    region.colLevel === "high"
      ? `High cost of living (${region.colFactor}x)`
      : region.colLevel === "low"
        ? `Low cost of living (${region.colFactor}x)`
        : `Average cost of living (${region.colFactor}x)`;

  const nationLabel =
    country.id === "us" ? "US Median" : `${country.name} Median`;
  const regionLabel =
    country.id === "us" ? `${region.name} Median` : `${region.name} Median`;

  return (
    <div className="space-y-4">
      {/* National Median */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            vs {nationLabel}
          </span>
          <span className="font-bold text-gray-900 dark:text-gray-200">
            {nationalPct}%
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
            style={{ width: `${Math.min(nationalPct, 100)}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {formatCurrency(country.nationalMedianSalary, country)}{" "}
          national median
        </div>
      </div>

      {/* Region Median */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            vs {regionLabel}
          </span>
          <span className="font-bold text-gray-900 dark:text-gray-200">
            {regionPct}%
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${Math.min(regionPct, 100)}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {formatCurrency(region.medianSalary, country)}{" "}
          {country.id === "us" ? "state" : "province"} median
        </div>
      </div>

      {/* COL Badge */}
      <div
        className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium ${colColor}`}
      >
        {colText}
      </div>
    </div>
  );
}
