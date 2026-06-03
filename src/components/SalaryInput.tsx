"use client";

import { useState, useEffect } from "react";

interface Props {
  value: number;
  onChange: (v: number) => void;
}

export default function SalaryInput({ value, onChange }: Props) {
  const [raw, setRaw] = useState(value ? value.toLocaleString("en-US") : "");

  useEffect(() => {
    setRaw(value ? value.toLocaleString("en-US") : "");
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "");
    const num = digits ? parseInt(digits, 10) : 0;
    setRaw(num ? num.toLocaleString("en-US") : "");
    onChange(num);
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Annual Salary
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
        <input
          type="text"
          inputMode="numeric"
          value={raw}
          onChange={handleChange}
          placeholder="e.g. 75,000"
          className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
        />
      </div>
    </div>
  );
}
