import { CountryConfig } from "@/types/country";

export const ukConfig: CountryConfig = {
  id: "gb",
  name: "United Kingdom",
  lang: "en-GB",
  locale: "en-GB",
  flag: "🇬🇧",
  currencyCode: "GBP",
  currencySymbol: "£",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 35000,
  regions: [
    { code: "LDN", name: "London", medianSalary: 42000, colFactor: 1.35, colLevel: "high" },
    { code: "SE", name: "South East", medianSalary: 38000, colFactor: 1.15, colLevel: "high" },
    { code: "EE", name: "East of England", medianSalary: 36000, colFactor: 1.08, colLevel: "medium" },
    { code: "SW", name: "South West", medianSalary: 34000, colFactor: 1.02, colLevel: "medium" },
    { code: "WM", name: "West Midlands", medianSalary: 33000, colFactor: 0.95, colLevel: "low" },
    { code: "EM", name: "East Midlands", medianSalary: 32000, colFactor: 0.92, colLevel: "low" },
    { code: "YH", name: "Yorkshire & Humber", medianSalary: 31000, colFactor: 0.88, colLevel: "low" },
    { code: "NW", name: "North West", medianSalary: 32000, colFactor: 0.90, colLevel: "low" },
    { code: "NE", name: "North East", medianSalary: 30000, colFactor: 0.85, colLevel: "low" },
    { code: "SCO", name: "Scotland", medianSalary: 33000, colFactor: 0.92, colLevel: "low" },
    { code: "WAL", name: "Wales", medianSalary: 31000, colFactor: 0.88, colLevel: "low" },
    { code: "NI", name: "Northern Ireland", medianSalary: 30000, colFactor: 0.85, colLevel: "low" },
  ],
};
