"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  text: string;
  onCopy?: () => void;
}

export default function CopyButton({ text, onCopy }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition ${
        copied
          ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
      }`}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
