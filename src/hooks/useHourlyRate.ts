"use client";

import { useMemo } from "react";
import { CalculationResult } from "@/types";

export function useHourlyRate(
  annualSalary: number,
  stateCode: string,
  isFreelance: boolean,
  annualHours = 2080
): CalculationResult {
  return useMemo(() => {
    const hourly = annualSalary / annualHours;
    const freelanceRate = hourly * 1.75;
    return {
      hourlyRate: hourly,
      annualHours,
      monthlyRate: annualSalary / 12,
      weeklyRate: annualSalary / 52,
      dailyRate: annualSalary / 260,
      freelanceRate: isFreelance ? freelanceRate : hourly,
    };
  }, [annualSalary, stateCode, isFreelance, annualHours]);
}
