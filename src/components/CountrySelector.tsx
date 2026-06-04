"use client";

import { COUNTRIES } from "@/data";
import { CountryConfig } from "@/types";
import { Globe } from "lucide-react";

interface CountrySelectorProps {
  value: CountryConfig;
  onChange: (country: CountryConfig) => void;
}

export default function CountrySelector({
  value,
  onChange,
}: CountrySelectorProps) {
  return (
    <div>
      <label htmlFor="country-select" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
        Country
      </label>
      <div className="relative">
        <Globe className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <select
          id="country-select"
          value={value.id}
          onChange={(e) => {
            const country = COUNTRIES.find((c) => c.id === e.target.value);
            if (country) onChange(country);
          }}
          className="w-full cursor-pointer appearance-none rounded-xl border-0 bg-gray-100 py-2.5 pr-10 pl-9 text-sm font-medium text-gray-900 transition-shadow focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        >
          {COUNTRIES.map((country) => (
            <option key={country.id} value={country.id}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-gray-400">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
