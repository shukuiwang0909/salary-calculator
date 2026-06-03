"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  text: string;
}

export default function CopyButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition border ${
        copied
          ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
      }`}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? "Copied!" : "Copy result"}
    </button>
  );
}
