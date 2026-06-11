import { CountryConfig } from "@/types/country";

export const hkConfig: CountryConfig = {
  id: "hk",
  name: "Hong Kong",
  lang: "zh-HK",
  locale: "zh-HK",
  flag: "🇭🇰",
  currencyCode: "HKD",
  currencySymbol: "HK$",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 254400,
  regions: [
    { code: "HKI", name: "Hong Kong Island", medianSalary: 280000, colFactor: 1.25, colLevel: "high" },
    { code: "KLN", name: "Kowloon", medianSalary: 250000, colFactor: 1.10, colLevel: "high" },
    { code: "NTE", name: "New Territories (East)", medianSalary: 230000, colFactor: 0.95, colLevel: "low" },
    { code: "NTW", name: "New Territories (West)", medianSalary: 220000, colFactor: 0.90, colLevel: "low" },
  ],
};
