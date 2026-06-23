import * as React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols ligature name, e.g. "search", "arrow_forward", "bolt". */
  name: string;
  /** Glyph size in px. Default 24. */
  size?: number;
  /** Filled vs outlined variant. Default false (outlined). */
  fill?: boolean;
  /** Stroke weight 100–700. Default 400. */
  weight?: number;
  /** Emphasis grade. Default 0. */
  grade?: number;
  /** Optical size axis. Default 24. */
  opticalSize?: number;
}

/** A Material Symbols Rounded icon glyph. */
export function Icon(props: IconProps): JSX.Element;
