import * as React from "react";

export interface Segment {
  value: string;
  label: string;
  /** Optional Material Symbols icon shown when not selected. */
  icon?: string;
}

/** Material 3 segmented button — choose one (or several) from a small set. */
export interface SegmentedButtonProps {
  segments: Segment[];
  /** Selected value (string) or values (string[] when multiple). */
  value: string | string[];
  onChange?: (value: any) => void;
  multiple?: boolean;
  className?: string;
}

export function SegmentedButton(props: SegmentedButtonProps): JSX.Element;
