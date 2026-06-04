"use client";

import { CountryConfig } from "@/types";
import { MapPin } from "lucide-react";

interface Props {
  country: CountryConfig;
  value: string;
  onChange: (code: string) => void;
}

const LABEL_MAP: Record<string, string> = {
  us: "State",
  ca: "Province",
  gb: "Region",
  au: "State",
  nz: "Region",
  de: "State",
  fr: "Region",
  nl: "Province",
  ie: "County",
  jp: "Prefecture",
  kr: "Region",
  sg: "Region",
  hk: "District",
  se: "Region",
  no: "County",
  dk: "Region",
  fi: "Region",
  cn: "City",
};

export default function RegionSelector({ country, value, onChange }: Props) {
  const label = LABEL_MAP[country.id] ?? "Region";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="region-select" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <select
          id="region-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-10 pl-9 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        >
          {country.regions.map((r) => (
            <option key={r.code} value={r.code}>
              {r.name}
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
