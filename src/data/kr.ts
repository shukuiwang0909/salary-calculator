import { CountryConfig } from "@/types/country";

export const krConfig: CountryConfig = {
  id: "kr",
  name: "South Korea",
  flag: "🇰🇷",
  currency: "KRW",
  currencySymbol: "₩",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 35000000,
  regions: [
    { code: "SEL", name: "Seoul", medianSalary: 42000000, colFactor: 1.30, colLevel: "high" },
    { code: "GG", name: "Gyeonggi", medianSalary: 38000000, colFactor: 1.10, colLevel: "high" },
    { code: "BSN", name: "Busan", medianSalary: 35000000, colFactor: 1.00, colLevel: "medium" },
    { code: "ICN", name: "Incheon", medianSalary: 36000000, colFactor: 1.02, colLevel: "medium" },
    { code: "DJN", name: "Daejeon", medianSalary: 34000000, colFactor: 0.98, colLevel: "medium" },
    { code: "USN", name: "Ulsan", medianSalary: 36000000, colFactor: 1.00, colLevel: "medium" },
    { code: "DG", name: "Daegu", medianSalary: 33000000, colFactor: 0.95, colLevel: "low" },
    { code: "GWJ", name: "Gwangju", medianSalary: 32000000, colFactor: 0.92, colLevel: "low" },
  ],
};
