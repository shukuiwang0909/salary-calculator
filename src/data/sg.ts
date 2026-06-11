import { CountryConfig } from "@/types/country";

export const sgConfig: CountryConfig = {
  id: "sg",
  name: "Singapore",
  lang: "en-SG",
  locale: "en-SG",
  flag: "🇸🇬",
  currencyCode: "SGD",
  currencySymbol: "S$",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 66000,
  regions: [
    { code: "CEN", name: "Central", medianSalary: 72000, colFactor: 1.25, colLevel: "high" },
    { code: "EST", name: "East", medianSalary: 64000, colFactor: 1.05, colLevel: "medium" },
    { code: "NTH", name: "North", medianSalary: 62000, colFactor: 0.98, colLevel: "medium" },
    { code: "NE", name: "North-East", medianSalary: 63000, colFactor: 1.00, colLevel: "medium" },
    { code: "WST", name: "West", medianSalary: 65000, colFactor: 1.02, colLevel: "medium" },
  ],
};
