"use client";

import { useShare } from "@/hooks/useShare";
import { ShareData } from "@/types";
import { Share2 } from "lucide-react";

interface Props {
  data: ShareData;
  onShare?: () => void;
}

export default function ShareButton({ data, onShare }: Props) {
  const { share } = useShare(
    "Salary to Hourly Calculator",
    `My ${data.currencySymbol}${data.salary.toLocaleString()} salary in ${data.regionName} equals ${data.currencySymbol}${data.hourlyRate.toFixed(2)}/hr`,
    ""
  );

  const handleClick = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    await share(url);
    onShare?.();
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
    >
      <Share2 size={15} />
      Share
    </button>
  );
}
