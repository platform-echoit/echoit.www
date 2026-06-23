import * as React from "react";

/**
 * Material 3 card container.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "filled" | "outlined";
  /** Enable hover/press state layers for clickable cards. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
