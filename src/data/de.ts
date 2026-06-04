import { CountryConfig } from "@/types/country";

export const deConfig: CountryConfig = {
  id: "de",
  name: "Germany",
  flag: "🇩🇪",
  currency: "EUR",
  currencySymbol: "€",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 53900,
  regions: [
    { code: "BY", name: "Bavaria", medianSalary: 58000, colFactor: 1.10, colLevel: "high" },
    { code: "BW", name: "Baden-Württemberg", medianSalary: 57000, colFactor: 1.08, colLevel: "high" },
    { code: "HE", name: "Hesse", medianSalary: 56000, colFactor: 1.10, colLevel: "high" },
    { code: "HH", name: "Hamburg", medianSalary: 55000, colFactor: 1.12, colLevel: "high" },
    { code: "BE", name: "Berlin", medianSalary: 52000, colFactor: 1.05, colLevel: "medium" },
    { code: "NW", name: "North Rhine-Westphalia", medianSalary: 53000, colFactor: 1.00, colLevel: "medium" },
    { code: "NI", name: "Lower Saxony", medianSalary: 51000, colFactor: 0.95, colLevel: "low" },
    { code: "SN", name: "Saxony", medianSalary: 48000, colFactor: 0.88, colLevel: "low" },
  ],
};
