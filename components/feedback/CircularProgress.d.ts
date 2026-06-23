import * as React from "react";

/** Material 3 circular progress indicator. Omit `value` for indeterminate spin. */
export interface CircularProgressProps {
  /** 0–100. Undefined → indeterminate. */
  value?: number;
  size?: number;
  stroke?: number;
  className?: string;
}

export function CircularProgress(props: CircularProgressProps): JSX.Element;
