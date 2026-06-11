export type ColLevel = "low" | "medium" | "high";

export interface RegionData {
  code: string;
  name: string;
  medianSalary: number; // in local currency
  colFactor: number;
  colLevel: ColLevel;
}

export interface CountryConfig {
  id: string;
  name: string;
  /** BCP-47 language tag for <html lang> (e.g. "en", "zh-CN", "ja") */
  lang: string;
  /** BCP-47 locale tag for number/currency formatting (e.g. "en-US", "de-DE") */
  locale: string;
  flag: string;
  /** ISO 4217 currency code (e.g. "USD", "EUR", "CNY") — passed to Intl.NumberFormat */
  currencyCode: string;
  /** Display symbol (e.g. "$", "€", "¥") — used as fallback only */
  currencySymbol: string;
  annualHours: number;
  weeklyHours: number;
  regions: RegionData[];
  nationalMedianSalary: number;
  // Optional tax brackets for future use
  taxBrackets?: TaxBracket[];
}

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface CalculationResult {
  hourlyRate: number;
  annualHours: number;
  monthlyRate: number;
  weeklyRate: number;
  dailyRate: number;
  freelanceRate: number;
}

export interface ShareData {
  salary: number;
  regionCode: string;
  regionName: string;
  countryId: string;
  hourlyRate: number;
  currencySymbol: string;
  /** Locale used to format the salary number (e.g. "en-US", "de-DE") */
  locale: string;
}

/**
 * Single source of truth for cost-of-living level thresholds.
 * Used to validate country data and to recompute `colLevel` if needed.
 */
export const COL_THRESHOLDS = {
  low: 0.95,
  high: 1.1,
} as const;

/** Derive a ColLevel from a numeric factor using the shared thresholds. */
export function levelFromFactor(factor: number): ColLevel {
  if (factor < COL_THRESHOLDS.low) return "low";
  if (factor > COL_THRESHOLDS.high) return "high";
  return "medium";
}