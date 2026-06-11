import { CountryConfig } from "@/types/country";

export const noConfig: CountryConfig = {
  id: "no",
  name: "Norway",
  lang: "no",
  locale: "nb-NO",
  flag: "🇳🇴",
  currencyCode: "NOK",
  currencySymbol: "kr",
  annualHours: 1820,
  weeklyHours: 35,
  nationalMedianSalary: 660000,
  regions: [
    { code: "oslo", name: "Oslo", medianSalary: 744000, colFactor: 1.30, colLevel: "high" },
    { code: "rogaland", name: "Rogaland", medianSalary: 720000, colFactor: 1.15, colLevel: "high" },
    { code: "vestland", name: "Vestland", medianSalary: 684000, colFactor: 1.10, colLevel: "medium" },
    { code: "trondelag", name: "Trøndelag", medianSalary: 648000, colFactor: 1.00, colLevel: "medium" },
    { code: "north", name: "Northern Norway", medianSalary: 600000, colFactor: 0.90, colLevel: "low" },
  ],
};
