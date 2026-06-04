import { CountryConfig } from "@/types/country";

export const cnConfig: CountryConfig = {
  id: "cn",
  name: "China",
  flag: "🇨🇳",
  currency: "CNY",
  currencySymbol: "¥",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 72000,
  regions: [
    { code: "shanghai", name: "Shanghai", medianSalary: 156000, colFactor: 1.40, colLevel: "high" },
    { code: "beijing", name: "Beijing", medianSalary: 150000, colFactor: 1.35, colLevel: "high" },
    { code: "shenzhen", name: "Shenzhen", medianSalary: 144000, colFactor: 1.30, colLevel: "high" },
    { code: "hangzhou", name: "Hangzhou", medianSalary: 132000, colFactor: 1.15, colLevel: "medium" },
    { code: "guangzhou", name: "Guangzhou", medianSalary: 120000, colFactor: 1.10, colLevel: "medium" },
    { code: "chengdu", name: "Chengdu", medianSalary: 96000, colFactor: 0.95, colLevel: "medium" },
    { code: "wuhan", name: "Wuhan", medianSalary: 90000, colFactor: 0.92, colLevel: "low" },
    { code: "xian", name: "Xi'an", medianSalary: 84000, colFactor: 0.88, colLevel: "low" },
  ],
};
