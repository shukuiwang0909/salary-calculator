import type { CountryConfig } from "@/types/country";
import { levelFromFactor } from "@/types/country";

/**
 * Validate one country config and normalize derived fields in place.
 *
 * - Recomputes `colLevel` from `colFactor` using the shared thresholds so
 *   the data layer stays consistent across files.
 * - Verifies region codes are unique.
 * - Verifies `annualHours ≈ weeklyHours * 52`.
 *
 * Throws on structural errors (missing regions, duplicate codes, bad hours).
 * Mutates the input only for `colLevel` (the derived field). Returns a
 * list of warnings for soft issues.
 */
export function validateCountryConfig(country: CountryConfig): string[] {
  const warnings: string[] = [];

  if (!country.regions || country.regions.length === 0) {
    throw new Error(`[${country.id}] has no regions`);
  }

  // Unique region codes
  const codes = new Set<string>();
  for (const region of country.regions) {
    if (codes.has(region.code)) {
      throw new Error(
        `[${country.id}] duplicate region code: ${region.code}`,
      );
    }
    codes.add(region.code);
    if (region.medianSalary <= 0) {
      throw new Error(
        `[${country.id}/${region.code}] medianSalary must be > 0`,
      );
    }
    if (region.colFactor <= 0) {
      throw new Error(
        `[${country.id}/${region.code}] colFactor must be > 0`,
      );
    }
  }

  // annualHours ≈ weeklyHours * 52 (allow ±1 for rounding)
  const expected = country.weeklyHours * 52;
  if (Math.abs(country.annualHours - expected) > 1) {
    warnings.push(
      `[${country.id}] annualHours (${country.annualHours}) does not match weeklyHours*52 (${expected})`,
    );
  }

  // Recompute colLevel from colFactor and warn on mismatch.
  for (const region of country.regions) {
    const derived = levelFromFactor(region.colFactor);
    if (region.colLevel !== derived) {
      warnings.push(
        `[${country.id}/${region.code}] colLevel "${region.colLevel}" did not match factor ${region.colFactor} → "${derived}" (auto-fixed)`,
      );
      region.colLevel = derived;
    }
  }

  return warnings;
}

/** Validate every country and return all warnings. Throws on hard errors. */
export function validateAllCountries(countries: CountryConfig[]): string[] {
  const ids = new Set<string>();
  const all: string[] = [];
  for (const country of countries) {
    if (ids.has(country.id)) {
      throw new Error(`Duplicate country id: ${country.id}`);
    }
    ids.add(country.id);
    all.push(...validateCountryConfig(country));
  }
  return all;
}