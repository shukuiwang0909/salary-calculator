import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useHourlyRate } from "../useHourlyRate";

describe("useHourlyRate", () => {
  it("divides annual salary by annual hours for hourly rate", () => {
    const { result } = renderHook(() => useHourlyRate(75000, 2080));
    // 75000 / 2080 ≈ 36.06
    expect(result.current.hourlyRate).toBeCloseTo(36.0577, 3);
  });

  it("computes monthly, weekly, daily as simple divisions", () => {
    const { result } = renderHook(() => useHourlyRate(84000, 2080));
    expect(result.current.monthlyRate).toBe(7000);
    expect(result.current.weeklyRate).toBeCloseTo(84000 / 52, 5);
    expect(result.current.dailyRate).toBeCloseTo(84000 / 260, 5);
  });

  it("multiplies hourly rate by 1.75 for the freelance default", () => {
    const { result } = renderHook(() => useHourlyRate(75000, 2080));
    expect(result.current.freelanceRate).toBeCloseTo(
      result.current.hourlyRate * 1.75,
      5,
    );
  });

  it("returns 0-derived values when salary is 0 (does not NaN)", () => {
    const { result } = renderHook(() => useHourlyRate(0, 2080));
    expect(result.current.hourlyRate).toBe(0);
    expect(result.current.monthlyRate).toBe(0);
    expect(result.current.weeklyRate).toBe(0);
    expect(result.current.dailyRate).toBe(0);
    expect(result.current.freelanceRate).toBe(0);
    expect(Number.isFinite(result.current.hourlyRate)).toBe(true);
  });

  it("returns 0-derived values when salary is negative", () => {
    const { result } = renderHook(() => useHourlyRate(-100, 2080));
    expect(result.current.hourlyRate).toBe(0);
    expect(Number.isFinite(result.current.hourlyRate)).toBe(true);
  });

  it("returns 0 hourly rate when salary is NaN", () => {
    const { result } = renderHook(() => useHourlyRate(NaN, 2080));
    expect(result.current.hourlyRate).toBe(0);
    expect(Number.isFinite(result.current.hourlyRate)).toBe(true);
  });

  it("uses 1-hour fallback when annualHours is 0", () => {
    const { result } = renderHook(() => useHourlyRate(75000, 0));
    // safeHours falls back to 1, so hourly = 75000
    expect(result.current.annualHours).toBe(1);
    expect(result.current.hourlyRate).toBe(75000);
  });
});