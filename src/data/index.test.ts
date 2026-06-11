import { describe, it, expect } from "vitest";
import { COUNTRIES } from "../index";
import { validateCountryConfig } from "../_validate";
import { levelFromFactor } from "@/types/country";

describe("country data validation", () => {
  it("loads 18 countries from the registry", () => {
    expect(COUNTRIES.length).toBe(18);
  });

  it("every country has a unique id", () => {
    const ids = new Set(COUNTRIES.map((c) => c.id));
    expect(ids.size).toBe(COUNTRIES.length);
  });

  it("every country has lang, locale, currencyCode, currencySymbol", () => {
    for (const c of COUNTRIES) {
      expect(c.lang).toBeTruthy();
      expect(c.locale).toBeTruthy();
      expect(c.currencyCode).toMatch(/^[A-Z]{3}$/);
      expect(c.currencySymbol).toBeTruthy();
    }
  });

  it("every country has at least one region", () => {
    for (const c of COUNTRIES) {
      expect(c.regions.length).toBeGreaterThan(0);
    }
  });

  it("every region has a unique code within its country", () => {
    for (const c of COUNTRIES) {
      const codes = c.regions.map((r) => r.code);
      expect(new Set(codes).size).toBe(c.regions.length);
    }
  });

  it("annualHours matches weeklyHours * 52 (within rounding)", () => {
    for (const c of COUNTRIES) {
      expect(Math.abs(c.annualHours - c.weeklyHours * 52)).toBeLessThanOrEqual(1);
    }
  });

  it("auto-corrects colLevel to match colFactor using shared thresholds", () => {
    for (const c of COUNTRIES) {
      // Run validator against a fresh clone so we don't pollute COUNTRIES.
      const warnings = validateCountryConfig(JSON.parse(JSON.stringify(c)));
      // After running the validator there should be no warnings about colLevel.
      for (const r of c.regions) {
        expect(r.colLevel).toBe(levelFromFactor(r.colFactor));
      }
      // Any remaining warnings should not be colLevel-related.
      for (const w of warnings) {
        expect(w).not.toMatch(/colLevel/);
      }
    }
  });

  it("NZ national median is no longer equal to the Canterbury region median", () => {
    const nz = COUNTRIES.find((c) => c.id === "nz");
    const can = nz!.regions.find((r) => r.code === "CAN");
    expect(nz!.nationalMedianSalary).not.toBe(can!.medianSalary);
  });

  it("CN region codes are uppercase 2-letter", () => {
    const cn = COUNTRIES.find((c) => c.id === "cn");
    for (const r of cn!.regions) {
      expect(r.code).toMatch(/^[A-Z]{2}$/);
    }
  });
});