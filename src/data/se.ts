import { CountryConfig } from "@/types/country";

export const seConfig: CountryConfig = {
  id: "se",
  name: "Sweden",
  lang: "sv",
  locale: "sv-SE",
  flag: "🇸🇪",
  currencyCode: "SEK",
  currencySymbol: "kr",
  annualHours: 1720,
  weeklyHours: 35,
  nationalMedianSalary: 480000,
  regions: [
    { code: "stockholm", name: "Stockholm", medianSalary: 570000, colFactor: 1.25, colLevel: "high" },
    { code: "vastra_gotaland", name: "Västra Götaland", medianSalary: 528000, colFactor: 1.10, colLevel: "medium" },
    { code: "uppsala", name: "Uppsala", medianSalary: 510000, colFactor: 1.10, colLevel: "medium" },
    { code: "skane", name: "Skåne", medianSalary: 498000, colFactor: 1.05, colLevel: "medium" },
    { code: "east", name: "East Sweden", medianSalary: 480000, colFactor: 0.95, colLevel: "low" },
    { code: "north", name: "North Sweden", medianSalary: 450000, colFactor: 0.85, colLevel: "low" },
  ],
};
