import * as React from "react";

/** Material 3 linear progress indicator. Omit `value` for an indeterminate bar. */
export interface LinearProgressProps {
  /** 0–100. Undefined → indeterminate. */
  value?: number;
  className?: string;
}

export function LinearProgress(props: LinearProgressProps): JSX.Element;
