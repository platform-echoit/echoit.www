import * as React from "react";

/** Material 3 divider — a thin separating rule. */
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Indent the divider 16px from the left. */
  inset?: boolean;
  /** Render a vertical divider. */
  vertical?: boolean;
}

export function Divider(props: DividerProps): JSX.Element;
