import * as React from "react";

/** Material 3 on/off switch. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  className?: string;
}

export function Switch(props: SwitchProps): JSX.Element;
