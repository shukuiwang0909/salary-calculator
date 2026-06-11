import { CountryConfig } from "@/types/country";

export const cnConfig: CountryConfig = {
  id: "cn",
  name: "China",
  lang: "zh-CN",
  locale: "zh-CN",
  flag: "🇨🇳",
  currencyCode: "CNY",
  currencySymbol: "¥",
  annualHours: 2080,
  weeklyHours: 40,
  // National median sits between the lowest region (Xi'an, 84k) and the
  // highest (Shanghai, 156k). Population-weighted figure for the listed
  // Tier-1/2 cities lands around 110k CNY.
  nationalMedianSalary: 110000,
  regions: [
    { code: "SH", name: "Shanghai", medianSalary: 156000, colFactor: 1.40, colLevel: "high" },
    { code: "BJ", name: "Beijing", medianSalary: 150000, colFactor: 1.35, colLevel: "high" },
    { code: "SZ", name: "Shenzhen", medianSalary: 144000, colFactor: 1.30, colLevel: "high" },
    { code: "HZ", name: "Hangzhou", medianSalary: 132000, colFactor: 1.15, colLevel: "high" },
    { code: "GZ", name: "Guangzhou", medianSalary: 120000, colFactor: 1.10, colLevel: "medium" },
    { code: "CD", name: "Chengdu", medianSalary: 96000, colFactor: 0.95, colLevel: "medium" },
    { code: "WH", name: "Wuhan", medianSalary: 90000, colFactor: 0.92, colLevel: "low" },
    { code: "XA", name: "Xi'an", medianSalary: 84000, colFactor: 0.88, colLevel: "low" },
  ],
};