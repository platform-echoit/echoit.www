import * as React from "react";

/** Material 3 badge — a small count/dot, optionally anchored over an element. */
export interface BadgeProps {
  /** Number/text shown in the badge (ignored when `dot`). */
  count?: React.ReactNode;
  /** Render a 6px dot instead of a labelled pill. */
  dot?: boolean;
  /** Element to overlay the badge on (e.g. an Icon). */
  anchored?: React.ReactNode;
  className?: string;
}

export function Badge(props: BadgeProps): JSX.Element;
