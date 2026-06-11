/**
 * Per-country min/max/step for the dynamic salary routes.
 * Step is chosen to give ~60–80 URLs per country so the build stays lean
 * (~1500 total pages) while still covering the realistic salary band.
 */
export interface SalaryRange {
  min: number;
  max: number;
  step: number;
}

export const PER_COUNTRY_SALARY_RANGE: Record<string, SalaryRange> = {
  us: { min: 30000, max: 200000, step: 2000 },
  ca: { min: 30000, max: 180000, step: 2000 },
  gb: { min: 20000, max: 120000, step: 1000 },
  au: { min: 40000, max: 180000, step: 2000 },
  nz: { min: 40000, max: 140000, step: 1000 },
  de: { min: 30000, max: 120000, step: 1000 },
  fr: { min: 20000, max: 100000, step: 1000 },
  nl: { min: 25000, max: 110000, step: 1000 },
  ie: { min: 25000, max: 100000, step: 1000 },
  jp: { min: 3_000_000, max: 12_000_000, step: 100_000 },
  kr: { min: 30_000_000, max: 100_000_000, step: 500_000 },
  cn: { min: 80000, max: 200000, step: 2000 },
  hk: { min: 200000, max: 1_200_000, step: 10000 },
  sg: { min: 30000, max: 200000, step: 2000 },
  se: { min: 250000, max: 800000, step: 5000 },
  no: { min: 300000, max: 1_000_000, step: 5000 },
  dk: { min: 250000, max: 800000, step: 5000 },
  fi: { min: 25000, max: 90000, step: 1000 },
};

/** Range for the requested country, with US as fallback. */
export function getSalaryRange(countryId: string): SalaryRange {
  return (
    PER_COUNTRY_SALARY_RANGE[countryId] ?? PER_COUNTRY_SALARY_RANGE.us
  );
}

/** Enumerate every (country, amount) pair for build-time prerendering. */
export function listAllStaticSalaryParams(): {
  country: string;
  amount: string;
}[] {
  const out: { country: string; amount: string }[] = [];
  for (const [country, range] of Object.entries(PER_COUNTRY_SALARY_RANGE)) {
    for (let s = range.min; s <= range.max; s += range.step) {
      out.push({ country, amount: String(s) });
    }
  }
  return out;
}

/**
 * Validate that a (country, salary) pair is one we prerendered.
 * Returns the validated number or null if the pair is out of range / misaligned.
 */
export function validateSalaryForCountry(
  countryId: string,
  salary: number,
): number | null {
  if (!Number.isFinite(salary)) return null;
  const range = getSalaryRange(countryId);
  if (salary < range.min || salary > range.max) return null;
  if ((salary - range.min) % range.step !== 0) return null;
  return salary;
}

/**
 * Country-aware hourly breakdown. The country config owns `annualHours`
 * (e.g. 1820 for a 35-hour-week country, 2080 for 40).
 */
export function calculateBreakdownForCountry(
  salary: number,
  annualHours: number,
) {
  const hourly = salary / annualHours;
  return {
    hourly,
    daily: hourly * 8,
    weekly: salary / 52,
    biweekly: salary / 26,
    monthly: salary / 12,
    annual: salary,
  };
}