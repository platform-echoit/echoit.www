import * as React from "react";

/** Material 3 checkbox, optionally with a trailing label. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  /** Optional label rendered beside the box. */
  label?: string;
  className?: string;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
