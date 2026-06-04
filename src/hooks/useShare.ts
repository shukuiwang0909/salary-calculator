"use client";

import { useCallback } from "react";

export function useShare(title: string, text: string, url: string) {
  const share = useCallback(
    async (overrideUrl?: string) => {
      const finalUrl = overrideUrl || url;
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url: finalUrl });
          return true;
        } catch {
          return false;
        }
      }
      return false;
    },
    [title, text, url]
  );

  const copyLink = useCallback(
    async (overrideUrl?: string) => {
      const finalUrl = overrideUrl || url;
      try {
        await navigator.clipboard.writeText(finalUrl);
        return true;
      } catch {
        return false;
      }
    },
    [url]
  );

  return { share, copyLink };
}
