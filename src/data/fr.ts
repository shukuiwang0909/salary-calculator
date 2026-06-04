import { CountryConfig } from "@/types/country";

export const frConfig: CountryConfig = {
  id: "fr",
  name: "France",
  flag: "🇫🇷",
  currency: "EUR",
  currencySymbol: "€",
  annualHours: 1820,
  weeklyHours: 35,
  nationalMedianSalary: 38000,
  regions: [
    { code: "IDF", name: "Île-de-France", medianSalary: 45000, colFactor: 1.35, colLevel: "high" },
    { code: "ARA", name: "Auvergne-Rhône-Alpes", medianSalary: 40000, colFactor: 1.08, colLevel: "medium" },
    { code: "PACA", name: "Provence-Alpes-Côte d'Azur", medianSalary: 38000, colFactor: 1.10, colLevel: "high" },
    { code: "OCC", name: "Occitanie", medianSalary: 37000, colFactor: 1.00, colLevel: "medium" },
    { code: "NAQ", name: "Nouvelle-Aquitaine", medianSalary: 37000, colFactor: 1.02, colLevel: "medium" },
    { code: "HDF", name: "Hauts-de-France", medianSalary: 35000, colFactor: 0.92, colLevel: "low" },
    { code: "BRE", name: "Brittany", medianSalary: 35000, colFactor: 0.95, colLevel: "low" },
    { code: "GES", name: "Grand Est", medianSalary: 36000, colFactor: 0.95, colLevel: "low" },
  ],
};
