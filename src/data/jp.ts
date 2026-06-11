import { CountryConfig } from "@/types/country";

export const jpConfig: CountryConfig = {
  id: "jp",
  name: "Japan",
  lang: "ja",
  locale: "ja-JP",
  flag: "🇯🇵",
  currencyCode: "JPY",
  currencySymbol: "¥",
  annualHours: 2080,
  weeklyHours: 40,
  nationalMedianSalary: 4600000,
  regions: [
    { code: "TKY", name: "Tokyo", medianSalary: 6200000, colFactor: 1.35, colLevel: "high" },
    { code: "KNG", name: "Kanagawa", medianSalary: 5800000, colFactor: 1.18, colLevel: "high" },
    { code: "OSA", name: "Osaka", medianSalary: 4800000, colFactor: 1.08, colLevel: "medium" },
    { code: "AIC", name: "Aichi", medianSalary: 4700000, colFactor: 1.02, colLevel: "medium" },
    { code: "KYO", name: "Kyoto", medianSalary: 4500000, colFactor: 1.00, colLevel: "medium" },
    { code: "HKD", name: "Hokkaido", medianSalary: 4100000, colFactor: 0.92, colLevel: "low" },
    { code: "FUK", name: "Fukuoka", medianSalary: 4200000, colFactor: 0.95, colLevel: "low" },
    { code: "OKN", name: "Okinawa", medianSalary: 3600000, colFactor: 0.88, colLevel: "low" },
  ],
};
