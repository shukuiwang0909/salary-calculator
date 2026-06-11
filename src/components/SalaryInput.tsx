"use client";

import { CountryConfig } from "@/types";
import { DollarSign } from "lucide-react";

interface Props {
  value: number;
  onChange: (value: number) => void;
  country: CountryConfig;
}

const MIN_SALARY = 0;
const MAX_SALARY = 999_999_999;

export default function SalaryInput({ value, onChange, country }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "") {
      onChange(0);
      return;
    }
    const num = Number(raw);
    if (Number.isNaN(num)) return;
    if (num < MIN_SALARY) {
      onChange(MIN_SALARY);
      return;
    }
    if (num > MAX_SALARY) {
      onChange(MAX_SALARY);
      return;
    }
    onChange(num);
  };

  const isDollar = country.currencySymbol === "$";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Annual Salary ({country.currencyCode})
      </label>
      <div className="relative">
        {isDollar ? (
          <DollarSign className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        ) : (
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm font-semibold text-gray-400">
            {country.currencySymbol}
          </span>
        )}
        <input
          type="number"
          min={MIN_SALARY}
          max={MAX_SALARY}
          step={1000}
          value={value}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-4 pl-9 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          placeholder="75000"
        />
      </div>
    </div>
  );
}
