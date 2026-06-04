import { CountryConfig } from "@/types/country";

export const ieConfig: CountryConfig = {
  id: "ie",
  name: "Ireland",
  flag: "🇮🇪",
  currency: "EUR",
  currencySymbol: "€",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 40000,
  regions: [
    { code: "DUB", name: "Dublin", medianSalary: 43000, colFactor: 1.35, colLevel: "high" },
    { code: "COR", name: "Cork", medianSalary: 40000, colFactor: 1.05, colLevel: "medium" },
    { code: "GAL", name: "Galway", medianSalary: 39000, colFactor: 1.02, colLevel: "medium" },
    { code: "LIM", name: "Limerick", medianSalary: 38000, colFactor: 0.98, colLevel: "medium" },
    { code: "KIL", name: "Kildare", medianSalary: 41000, colFactor: 1.10, colLevel: "high" },
    { code: "WIC", name: "Wicklow", medianSalary: 39000, colFactor: 1.08, colLevel: "medium" },
    { code: "KER", name: "Kerry", medianSalary: 36000, colFactor: 0.92, colLevel: "low" },
    { code: "DON", name: "Donegal", medianSalary: 35000, colFactor: 0.85, colLevel: "low" },
  ],
};
