import * as React from "react";

export type ButtonVariant = "filled" | "tonal" | "elevated" | "outlined" | "text";

/**
 * Material 3 common button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. Default "filled". */
  variant?: ButtonVariant;
  /** Leading Material Symbols icon name. */
  icon?: string;
  /** Trailing Material Symbols icon name. */
  trailingIcon?: string;
  /** Render as an anchor instead of a button. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
