"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ArrowRight, DollarSign, Clock } from "lucide-react";

export default function HourlyToSalaryPage() {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);

  const annualSalary = useMemo(
    () => hourlyRate * hoursPerWeek * weeksPerYear,
    [hourlyRate, hoursPerWeek, weeksPerYear]
  );
  const monthlySalary = annualSalary / 12;
  const weeklySalary = hourlyRate * hoursPerWeek;
  const dailySalary = hourlyRate * 8;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Hourly to Salary" },
        ]}
      />
      <div className="mx-auto max-w-xl space-y-6 px-4 py-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hourly to Salary
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Convert your hourly rate to an annual salary.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Hourly Rate
            </label>
            <div className="relative">
              <DollarSign className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                min={0}
                max={9999}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-4 pl-9 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Hours / Week
              </label>
              <div className="relative">
                <Clock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  min={1}
                  max={168}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-4 pl-9 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Weeks / Year
              </label>
              <input
                type="number"
                min={1}
                max={52}
                value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-4 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="text-center">
            <div className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
              Annual Salary
            </div>
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white">
              ${annualSalary.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </div>
            <div className="mt-1 text-sm text-gray-400 dark:text-gray-500">
              {hourlyRate} × {hoursPerWeek} × {weeksPerYear}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Monthly
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                ${monthlySalary.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Weekly
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                ${weeklySalary.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Daily (8 hrs)
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                ${dailySalary.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Hourly
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                ${hourlyRate.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
          <span className="font-mono">
            ${hourlyRate}/hr × {hoursPerWeek} hrs/week × {weeksPerYear}{" "}
            weeks = ${annualSalary.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}/year
          </span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Try Salary to Hourly
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
