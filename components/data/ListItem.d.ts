import * as React from "react";

/** Material 3 list item — one row of a list. */
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: React.ReactNode;
  supporting?: React.ReactNode;
  /** Leading Material Symbols icon name. */
  leadingIcon?: string;
  /** Custom leading element (avatar, thumbnail, control). */
  leading?: React.ReactNode;
  trailingIcon?: string;
  /** Custom trailing element (switch, text, control). */
  trailing?: React.ReactNode;
  onClick?: () => void;
}

export function ListItem(props: ListItemProps): JSX.Element;
