import { CountryConfig } from "@/types/country";

export const fiConfig: CountryConfig = {
  id: "fi",
  name: "Finland",
  flag: "🇫🇮",
  currency: "EUR",
  currencySymbol: "€",
  annualHours: 1720,
  weeklyHours: 35,
  nationalMedianSalary: 42000,
  regions: [
    { code: "uusimaa", name: "Uusimaa", medianSalary: 48000, colFactor: 1.20, colLevel: "high" },
    { code: "pirkanmaa", name: "Pirkanmaa", medianSalary: 42000, colFactor: 1.00, colLevel: "medium" },
    { code: "varsinais", name: "Varsinais-Suomi", medianSalary: 42000, colFactor: 1.00, colLevel: "medium" },
    { code: "pohjois", name: "North Ostrobothnia", medianSalary: 39000, colFactor: 0.90, colLevel: "low" },
    { code: "lapland", name: "Lapland", medianSalary: 36000, colFactor: 0.85, colLevel: "low" },
  ],
};
