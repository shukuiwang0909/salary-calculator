"use client";

import { useMemo } from "react";
import { CalculationResult } from "@/types";

export function useHourlyRate(
  annualSalary: number,
  annualHours: number
): CalculationResult {
  return useMemo(() => {
    const hourly = annualSalary / annualHours;
    return {
      hourlyRate: hourly,
      annualHours,
      monthlyRate: annualSalary / 12,
      weeklyRate: annualSalary / 52,
      dailyRate: annualSalary / 260,
      freelanceRate: hourly * 1.75,
    };
  }, [annualSalary, annualHours]);
}
