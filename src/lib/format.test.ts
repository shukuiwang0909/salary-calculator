import { describe, it, expect } from "vitest";
import { formatCurrency } from "../format";
import type { CountryConfig } from "@/types/country";

const usCountry: Pick<CountryConfig, "locale" | "currencyCode" | "currencySymbol"> = {
  locale: "en-US",
  currencyCode: "USD",
  currencySymbol: "$",
};
const deCountry: Pick<CountryConfig, "locale" | "currencyCode" | "currencySymbol"> = {
  locale: "de-DE",
  currencyCode: "EUR",
  currencySymbol: "€",
};
const jpCountry: Pick<CountryConfig, "locale" | "currencyCode" | "currencySymbol"> = {
  locale: "ja-JP",
  currencyCode: "JPY",
  currencySymbol: "¥",
};

describe("formatCurrency", () => {
  it("formats USD with US locale (commas, leading $)", () => {
    const out = formatCurrency(75000, usCountry);
    expect(out).toContain("75,000");
    expect(out).toMatch(/\$/);
  });

  it("formats EUR with German locale (period thousand, comma decimal, trailing €)", () => {
    const out = formatCurrency(1234.5, deCountry, 2);
    expect(out).toContain("€");
    // German formatting uses . for thousands and , for decimals
    expect(out).toMatch(/1\.234,50/);
  });

  it("formats JPY without decimals (yen has no fractional unit)", () => {
    const out = formatCurrency(1000000, jpCountry);
    expect(out).toMatch(/¥/);
    expect(out).toContain("1,000,000");
  });

  it("respects decimals argument", () => {
    expect(formatCurrency(1234, usCountry, 0)).toMatch(/1,234/);
    expect(formatCurrency(1234, usCountry, 2)).toMatch(/1,234\.00/);
  });

  it("never throws — falls back gracefully on bad inputs", () => {
    expect(() => formatCurrency(NaN, usCountry)).not.toThrow();
    expect(() =>
      formatCurrency(100, {
        locale: "not-a-real-locale",
        currencyCode: "XXX",
        currencySymbol: "?",
      }),
    ).not.toThrow();
  });
});