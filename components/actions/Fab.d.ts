import * as React from "react";

/** Material 3 floating action button (FAB). Pass `label` for an extended FAB. */
export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  /** Extended-FAB text label. */
  label?: string;
  size?: "regular" | "small" | "large";
  color?: "primary" | "secondary" | "surface";
}

export function Fab(props: FabProps): JSX.Element;
