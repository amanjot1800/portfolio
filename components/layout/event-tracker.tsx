"use client";

import { useEffect } from "react";
import { rememberRef, trackEvent } from "@/lib/analytics";

/** Where on the page a click happened: a section id, or the nav, menu or footer. */
function placeOf(element: Element) {
  if (element.closest("#mobile-menu")) return "menu";
  if (element.closest("header")) return "nav";
  if (element.closest("footer")) return "footer";
  return element.closest("section[id]")?.id ?? "hero";
}

/** Records resume downloads, email clicks and GitHub/LinkedIn clicks across the whole site. */
export function EventTracker() {
  useEffect(() => {
    rememberRef();

    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const place = placeOf(link);

      if (href.endsWith(".pdf")) trackEvent("Resume download", { place });
      else if (href.startsWith("mailto:")) trackEvent("Email click", { place });
      else if (href.includes("github.com")) trackEvent("Profile click", { network: "GitHub", place });
      else if (href.includes("linkedin.com")) trackEvent("Profile click", { network: "LinkedIn", place });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
