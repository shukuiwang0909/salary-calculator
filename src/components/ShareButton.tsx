"use client";

import { useShare } from "@/hooks/useShare";
import { Share2 } from "lucide-react";

interface Props {
  salary: number;
  stateCode: string;
  hourlyRate: number;
}

export default function ShareButton({ salary, stateCode, hourlyRate }: Props) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const { share } = useShare(
    "Salary to Hourly Calculator",
    `My $${salary.toLocaleString()} salary in ${stateCode} equals $${hourlyRate.toFixed(2)}/hr`,
    url
  );

  return (
    <button
      onClick={share}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition"
    >
      <Share2 size={15} />
      Share
    </button>
  );
}
