import * as React from "react";

/** Material 3 text input — filled or outlined. */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  variant?: "filled" | "outlined";
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  /** Leading Material Symbols icon. */
  leadingIcon?: string;
  /** Trailing Material Symbols icon. */
  trailingIcon?: string;
  /** Helper/error text below the field. */
  supportingText?: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
}

export function TextField(props: TextFieldProps): JSX.Element;
