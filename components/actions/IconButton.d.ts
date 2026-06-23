import * as React from "react";

export type IconButtonVariant = "standard" | "filled" | "tonal" | "outlined";

/** Material 3 icon-only button. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Material Symbols icon name. */
  icon: string;
  variant?: IconButtonVariant;
  /** Use the filled glyph variant. */
  fill?: boolean;
  /** Accessible label (required for icon-only controls). */
  label?: string;
  disabled?: boolean;
}

export function IconButton(props: IconButtonProps): JSX.Element;
