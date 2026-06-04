import { CountryConfig } from "@/types/country";

export const auConfig: CountryConfig = {
  id: "au",
  name: "Australia",
  flag: "🇦🇺",
  currency: "AUD",
  currencySymbol: "A$",
  annualHours: 1976,
  weeklyHours: 38,
  nationalMedianSalary: 74672,
  regions: [
    { code: "ACT", name: "Australian Capital Territory", medianSalary: 83200, colFactor: 1.08, colLevel: "medium" },
    { code: "NSW", name: "New South Wales", medianSalary: 76000, colFactor: 1.15, colLevel: "high" },
    { code: "VIC", name: "Victoria", medianSalary: 74000, colFactor: 1.10, colLevel: "high" },
    { code: "QLD", name: "Queensland", medianSalary: 73000, colFactor: 1.05, colLevel: "medium" },
    { code: "WA", name: "Western Australia", medianSalary: 82000, colFactor: 1.05, colLevel: "medium" },
    { code: "SA", name: "South Australia", medianSalary: 68000, colFactor: 1.00, colLevel: "medium" },
    { code: "TAS", name: "Tasmania", medianSalary: 67600, colFactor: 0.95, colLevel: "low" },
    { code: "NT", name: "Northern Territory", medianSalary: 78000, colFactor: 1.02, colLevel: "medium" },
  ],
};
