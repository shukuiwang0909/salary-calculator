export interface StateData {
  code: string;
  name: string;
  medianSalary: number;
  colFactor: number;
  colLevel: "low" | "medium" | "high";
}

export interface CalculationResult {
  hourlyRate: number;
  annualHours: number;
  monthlyRate: number;
  weeklyRate: number;
  dailyRate: number;
  freelanceRate: number;
}
