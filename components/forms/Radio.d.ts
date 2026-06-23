import * as React from "react";

/** Material 3 radio button, optionally with a trailing label. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  className?: string;
}

export function Radio(props: RadioProps): JSX.Element;
