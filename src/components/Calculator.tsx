"use client";

import { useState } from "react";
import SalaryInput from "./SalaryInput";
import StateSelector from "./StateSelector";
import ResultDisplay from "./ResultDisplay";
import FreelanceSection from "./FreelanceSection";
import ContextBars from "./ContextBars";
import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";
import { useHourlyRate } from "@/hooks/useHourlyRate";

export default function Calculator() {
  const [salary, setSalary] = useState(75000);
  const [state, setState] = useState("CA");
  const [freelance, setFreelance] = useState(false);

  const result = useHourlyRate(salary, state, freelance);
  const shareText = `My $${salary.toLocaleString()} salary in ${state} equals $${result.hourlyRate.toFixed(2)}/hr`;

  return (
    <div className="max-w-xl mx-auto px-4 py-10 space-y-6">
      {/* Header text */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Salary to Hourly
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Convert your annual salary to an hourly rate.
        </p>
      </div>

      {/* Inputs Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 space-y-5">
        <SalaryInput value={salary} onChange={setSalary} />
        <StateSelector value={state} onChange={setState} />
        <div className="pt-1">
          <FreelanceSection enabled={freelance} onToggle={() => setFreelance(!freelance)} />
        </div>
      </div>

      {/* Result Card */}
      <ResultDisplay result={result} isFreelance={freelance} />

      {/* Context Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          Context
        </h3>
        <ContextBars annualSalary={salary} stateCode={state} />
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-center">
        <CopyButton text={shareText} />
        <ShareButton salary={salary} stateCode={state} hourlyRate={result.hourlyRate} />
      </div>
    </div>
  );
}
