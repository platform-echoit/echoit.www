import * as React from "react";

/** Material 3 chip — assist, filter, input or suggestion. */
export interface ChipProps {
  label: string;
  type?: "assist" | "filter" | "input" | "suggestion";
  /** Leading Material Symbols icon. */
  icon?: string;
  selected?: boolean;
  elevated?: boolean;
  /** Show a trailing remove (×) affordance and call this on click. */
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

export function Chip(props: ChipProps): JSX.Element;
