"use client";

import { useMemo } from "react";
import { CalculationResult } from "@/types";

export function useHourlyRate(
  annualSalary: number,
  annualHours: number
): CalculationResult {
  return useMemo(() => {
    // Guard against invalid inputs (zero, NaN, Infinity, negative) so downstream
    // UI never displays NaN/Infinity values.
    const safeSalary =
      Number.isFinite(annualSalary) && annualSalary > 0 ? annualSalary : 0;
    const safeHours =
      Number.isFinite(annualHours) && annualHours > 0 ? annualHours : 1;
    const hourly = safeSalary / safeHours;
    return {
      hourlyRate: hourly,
      annualHours: safeHours,
      monthlyRate: safeSalary / 12,
      weeklyRate: safeSalary / 52,
      dailyRate: safeSalary / 260,
      freelanceRate: hourly * 1.75,
    };
  }, [annualSalary, annualHours]);
}
