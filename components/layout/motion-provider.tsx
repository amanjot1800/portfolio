"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Applies the visitor's reduced-motion setting to every animation on the site. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
