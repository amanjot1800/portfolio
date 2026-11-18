import { track } from "@vercel/analytics";

const REF_KEY = "ref";
const VISIT_KEY = "ref-visit-tracked";

/**
 * Vercel's <Analytics /> sets itself up after a Suspense boundary resolves, so events sent too
 * early would be dropped. Wait (up to ~10s) until it is ready.
 */
function whenReady(send: () => void, tries = 40) {
  if ((window as Window & { va?: unknown }).va) send();
  else if (tries > 0) setTimeout(() => whenReady(send, tries - 1), 250);
}

/**
 * Remembers the `?ref=` tag a visitor arrived with (e.g. ?ref=linkedin) for the rest of
 * their visit, and records one "Visit" event for it.
 */
export function rememberRef() {
  try {
    const ref = new URLSearchParams(window.location.search).get(REF_KEY)?.trim().slice(0, 64);
    if (ref) sessionStorage.setItem(REF_KEY, ref.toLowerCase());
    const stored = sessionStorage.getItem(REF_KEY);
    if (stored && !sessionStorage.getItem(VISIT_KEY)) {
      sessionStorage.setItem(VISIT_KEY, "1");
      whenReady(() => track("Visit", { ref: stored }));
    }
  } catch {
    // Storage can be blocked (private mode); tracking is best-effort.
  }
}

function currentRef() {
  try {
    return sessionStorage.getItem(REF_KEY) ?? "direct";
  } catch {
    return "direct";
  }
}

/** Sends a custom event with the visitor's `ref` tag attached. */
export function trackEvent(name: string, properties: Record<string, string> = {}) {
  const data = { ...properties, ref: currentRef() };
  whenReady(() => track(name, data));
}
