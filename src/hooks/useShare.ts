"use client";

import { useCallback } from "react";

export function useShare(title: string, text: string, url: string) {
  const share = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }, [title, text, url]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      return false;
    }
  }, [url]);

  return { share, copyLink };
}
