import * as React from "react";

/** Material 3 avatar — photo or initials fallback. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** Fallback initials when no image. */
  initials?: string;
  size?: number;
}

export function Avatar(props: AvatarProps): JSX.Element;
