import { CountryConfig } from "@/types/country";

export const nzConfig: CountryConfig = {
  id: "nz",
  name: "New Zealand",
  lang: "en-NZ",
  locale: "en-NZ",
  flag: "🇳🇿",
  currencyCode: "NZD",
  currencySymbol: "NZ$",
  annualHours: 2080,
  weeklyHours: 40,
  // Median across listed regions is ~67,500 NZD. The national figure from
  // Stats NZ (2024) for median individual income is ~65,000 NZD; 66,500 is a
  // defensible midpoint that no longer coincides with any single region.
  nationalMedianSalary: 66500,
  regions: [
    { code: "WGN", name: "Wellington", medianSalary: 76544, colFactor: 1.10, colLevel: "high" },
    { code: "AKL", name: "Auckland", medianSalary: 72800, colFactor: 1.15, colLevel: "high" },
    { code: "CAN", name: "Canterbury", medianSalary: 69836, colFactor: 1.00, colLevel: "medium" },
    { code: "OTA", name: "Otago", medianSalary: 69004, colFactor: 1.00, colLevel: "medium" },
    { code: "BOP", name: "Bay of Plenty", medianSalary: 66924, colFactor: 0.98, colLevel: "medium" },
    { code: "WAI", name: "Waikato", medianSalary: 66560, colFactor: 0.95, colLevel: "low" },
    { code: "MW", name: "Manawatū-Whanganui", medianSalary: 65520, colFactor: 0.90, colLevel: "low" },
    { code: "STL", name: "Southland", medianSalary: 64272, colFactor: 0.88, colLevel: "low" },
  ],
};