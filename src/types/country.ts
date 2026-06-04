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
  flag: string;
  currency: string;
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
}
