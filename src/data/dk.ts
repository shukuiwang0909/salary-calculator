import { CountryConfig } from "@/types/country";

export const dkConfig: CountryConfig = {
  id: "dk",
  name: "Denmark",
  flag: "🇩🇰",
  currency: "DKK",
  currencySymbol: "kr",
  annualHours: 1820,
  weeklyHours: 35,
  nationalMedianSalary: 540000,
  regions: [
    { code: "hovedstaden", name: "Hovedstaden", medianSalary: 624000, colFactor: 1.25, colLevel: "high" },
    { code: "midtjylland", name: "Midtjylland", medianSalary: 564000, colFactor: 1.05, colLevel: "medium" },
    { code: "syddanmark", name: "Syddanmark", medianSalary: 540000, colFactor: 1.00, colLevel: "medium" },
    { code: "sjaelland", name: "Sjælland", medianSalary: 516000, colFactor: 0.95, colLevel: "low" },
    { code: "nordjylland", name: "Nordjylland", medianSalary: 492000, colFactor: 0.88, colLevel: "low" },
  ],
};
