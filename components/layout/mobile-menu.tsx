"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { sectionLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

const FOCUSABLE = "a[href], button:not([disabled])";

const noop = () => () => {};
/** True in the browser after hydration, false during server rendering. */
function useIsClient() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

/** Stops the page behind the open menu from scrolling. */
function setScrollLocked(locked: boolean) {
  document.body.style.overflow = locked ? "hidden" : "";
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  /** Section the visitor picked; scrolled to once the menu has closed and unlocked scrolling. */
  const pendingSection = useRef<string | null>(null);

  function goToSection(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const id = href.split("#")[1];
    if (!id || !document.getElementById(id)) return close(false);
    event.preventDefault();
    pendingSection.current = id;
    history.pushState(null, "", `#${id}`);
    close(false);
  }

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    setScrollLocked(true);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    // Close if the screen grows to where the full nav shows.
    const wide = window.matchMedia("(min-width: 48rem)");
    function onResize() {
      if (wide.matches) close(false);
    }

    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onResize);
    return () => {
      setScrollLocked(false);
      const id = pendingSection.current;
      pendingSection.current = null;
      if (id)
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView(),
        );
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 transition-colors hover:border-fg md:hidden"
      >
        Menu
      </button>

      {/* Rendered into <body> so the header's backdrop blur can't trap the fixed panel. */}
      {isClient &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={panelRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className="fixed inset-0 z-50 flex flex-col bg-bg px-4 sm:px-6 md:hidden"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="flex h-(--nav-h) items-center justify-between font-mono text-sm">
                  <Link
                    href="/"
                    onClick={() => close(false)}
                    className="text-base font-medium"
                  >
                    AS<span className="text-accent">/</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => close()}
                    className="inline-flex min-h-11 items-center rounded-full border border-accent px-4 text-accent"
                  >
                    Close
                  </button>
                </div>

                <nav
                  aria-label="Sections"
                  className="flex flex-1 flex-col justify-center"
                >
                  <ol className="flex flex-col gap-2">
                    {sectionLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 + i * 0.04,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={(event) => goToSection(event, link.href)}
                          className="flex items-baseline gap-4 py-1 text-display-md font-bold uppercase transition-colors hover:text-accent"
                        >
                          <span className="font-mono text-eyebrow text-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ol>
                </nav>

                <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line py-6 font-mono text-sm">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-11 content-center"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-11 content-center"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={profile.resume}
                    download
                    className="min-h-11 content-center"
                  >
                    Resume ↓
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="min-h-11 content-center text-accent"
                  >
                    Email ↗
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
