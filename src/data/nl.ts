import { CountryConfig } from "@/types/country";

export const nlConfig: CountryConfig = {
  id: "nl",
  name: "Netherlands",
  flag: "🇳🇱",
  currency: "EUR",
  currencySymbol: "€",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 44000,
  regions: [
    { code: "NH", name: "North Holland", medianSalary: 48000, colFactor: 1.15, colLevel: "high" },
    { code: "ZH", name: "South Holland", medianSalary: 45000, colFactor: 1.10, colLevel: "high" },
    { code: "UT", name: "Utrecht", medianSalary: 46000, colFactor: 1.08, colLevel: "medium" },
    { code: "NB", name: "North Brabant", medianSalary: 44000, colFactor: 1.02, colLevel: "medium" },
    { code: "GE", name: "Gelderland", medianSalary: 42000, colFactor: 0.98, colLevel: "medium" },
    { code: "GR", name: "Groningen", medianSalary: 40000, colFactor: 0.92, colLevel: "low" },
    { code: "FR", name: "Friesland", medianSalary: 39000, colFactor: 0.90, colLevel: "low" },
    { code: "LI", name: "Limburg", medianSalary: 41000, colFactor: 0.95, colLevel: "low" },
  ],
};
