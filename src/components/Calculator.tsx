"use client";

import { useState, useMemo, useEffect } from "react";
import { getDefaultCountry, COUNTRIES } from "@/data";
import { CountryConfig } from "@/types";
import SalaryInput from "./SalaryInput";
import RegionSelector from "./RegionSelector";
import ResultDisplay from "./ResultDisplay";
import FreelanceSection from "./FreelanceSection";
import ContextBars from "./ContextBars";
import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";
import CountrySelector from "./CountrySelector";
import { useHourlyRate } from "@/hooks/useHourlyRate";
import { trackEvent, ANALYTICS_EVENTS } from "./Analytics";

function getCountryFromId(id: string | null): CountryConfig {
  if (!id) return getDefaultCountry();
  return COUNTRIES.find((c) => c.id === id) || getDefaultCountry();
}

interface UrlState {
  country: CountryConfig;
  salary: number;
  region: string;
  freelance: boolean;
}

function readUrlState(): UrlState {
  const params = new URLSearchParams(window.location.search);
  const country = getCountryFromId(params.get("country"));
  const rawSalary = params.get("salary");
  const parsedSalary = rawSalary ? Number(rawSalary) : 75000;
  const salary = Number.isNaN(parsedSalary)
    ? 75000
    : Math.max(0, Math.min(999_999_999, parsedSalary));
  const regionParam = params.get("region");
  const region =
    country.regions.find((r) => r.code === regionParam)?.code ||
    country.regions[0].code;
  const freelance = params.get("freelance") === "1";
  return { country, salary, region, freelance };
}

export default function Calculator() {
  const [isReady, setIsReady] = useState(false);
  const [country, setCountry] = useState<CountryConfig>(getDefaultCountry());
  const [salary, setSalary] = useState(75000);
  const [region, setRegion] = useState(country.regions[0].code);
  const [freelance, setFreelance] = useState(false);

  // Hydrate from URL on mount
  useEffect(() => {
    const initial = readUrlState();
    setCountry(initial.country);
    setSalary(initial.salary);
    setRegion(initial.region);
    setFreelance(initial.freelance);
    setIsReady(true);
  }, []);

  // Sync state changes back to URL (replaceState = no navigation)
  useEffect(() => {
    if (!isReady) return;
    const params = new URLSearchParams();
    if (country.id !== getDefaultCountry().id)
      params.set("country", country.id);
    if (salary !== 75000) params.set("salary", String(salary));
    if (region !== country.regions[0].code) params.set("region", region);
    if (freelance) params.set("freelance", "1");

    const query = params.toString();
    const newUrl = query ? `?${query}` : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
  }, [country, salary, region, freelance, isReady]);

  const handleCountryChange = (newCountry: CountryConfig) => {
    trackEvent(ANALYTICS_EVENTS.COUNTRY_CHANGE, {
      country_id: newCountry.id,
      country_name: newCountry.name,
    });
    setCountry(newCountry);
    setRegion(newCountry.regions[0].code);
  };

  const result = useHourlyRate(salary, country.annualHours);

  const regionName = useMemo(
    () => country.regions.find((r) => r.code === region)?.name || region,
    [country, region]
  );

  const shareData = {
    salary,
    regionCode: region,
    regionName,
    countryId: country.id,
    hourlyRate: result.hourlyRate,
    currencySymbol: country.currencySymbol,
  };

  const shareText = `My ${country.currencySymbol}${salary.toLocaleString()} salary in ${regionName} equals ${country.currencySymbol}${result.hourlyRate.toFixed(2)}/hr`;

  return (
    <div className="mx-auto max-w-xl space-y-6 px-4 py-10">
      {/* Header text */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Salary to Hourly
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Convert your annual salary to an hourly rate across {COUNTRIES.length}{" "}
          countries.
        </p>
      </div>

      {/* Inputs Card */}
      <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <CountrySelector value={country} onChange={handleCountryChange} />
        <SalaryInput
          value={salary}
          onChange={(val) => {
            trackEvent(ANALYTICS_EVENTS.CALCULATE, {
              salary: val,
              country: country.id,
            });
            setSalary(val);
          }}
          country={country}
        />
        <RegionSelector
          country={country}
          value={region}
          onChange={(code) => {
            trackEvent(ANALYTICS_EVENTS.REGION_CHANGE, {
              region_code: code,
              country: country.id,
            });
            setRegion(code);
          }}
        />
        <div className="pt-1">
          <FreelanceSection
            enabled={freelance}
            onToggle={() => {
              trackEvent(ANALYTICS_EVENTS.FREELANCE_TOGGLE, {
                enabled: !freelance,
              });
              setFreelance(!freelance);
            }}
          />
        </div>
      </div>

      {/* Result Card */}
      <ResultDisplay
        result={result}
        isFreelance={freelance}
        currencySymbol={country.currencySymbol}
      />

      {/* Context Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          Context
        </div>
        <ContextBars
          annualSalary={salary}
          country={country}
          regionCode={region}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        <CopyButton
          text={shareText}
          onCopy={() =>
            trackEvent(ANALYTICS_EVENTS.COPY_CLICK, {
              country: country.id,
              salary,
            })
          }
        />
        <ShareButton
          data={shareData}
          onShare={() =>
            trackEvent(ANALYTICS_EVENTS.SHARE_CLICK, {
              country: country.id,
              salary,
            })
          }
        />
      </div>
    </div>
  );
}
