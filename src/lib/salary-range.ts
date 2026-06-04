export const SALARY_MIN = 30000;
export const SALARY_MAX = 200000;
export const SALARY_STEP = 2000;

export function getAllSalaries(): number[] {
  const salaries: number[] = [];
  for (let s = SALARY_MIN; s <= SALARY_MAX; s += SALARY_STEP) {
    salaries.push(s);
  }
  return salaries;
}

export function salaryToK(salary: number): string {
  return "$" + salary / 1000 + "K";
}

export function calculateBreakdown(salary: number) {
  const annualHours = 2080;
  const weeksPerYear = 52;
  const hoursPerDay = 8;
  const hourly = salary / annualHours;
  return {
    hourly,
    daily: hourly * hoursPerDay,
    weekly: salary / weeksPerYear,
    biweekly: salary / (weeksPerYear / 2),
    monthly: salary / 12,
    annual: salary,
  };
}
