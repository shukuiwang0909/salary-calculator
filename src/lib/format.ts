import type { CountryConfig } from "@/types";

/**
 * Format a number as a currency string using the country's BCP-47 locale
 * and ISO 4217 currency code. Falls back to en-US + symbol if locale/code
 * is missing (defensive — should not happen in production).
 */
export function formatCurrency(
  value: number,
  country: Pick<CountryConfig, "locale" | "currencyCode" | "currencySymbol">,
  decimals = 0,
): string {
  try {
    return new Intl.NumberFormat(country.locale, {
      style: "currency",
      currency: country.currencyCode,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  } catch {
    // Defensive fallback: never throw from a display helper.
    return `${country.currencySymbol}${value.toFixed(decimals)}`;
  }
}

/** Compact currency format (no decimals) — used in headlines. */
export function formatCurrencyCompact(
  value: number,
  country: Pick<CountryConfig, "locale" | "currencyCode" | "currencySymbol">,
): string {
  return formatCurrency(value, country, 0);
}

/**
 * Format an hourly rate with the localized currency plus "/hr" suffix.
 */
export function formatHourly(
  value: number,
  country: Pick<CountryConfig, "locale" | "currencyCode" | "currencySymbol">,
): string {
  return `${formatCurrency(value, country, 2)}/hr`;
}