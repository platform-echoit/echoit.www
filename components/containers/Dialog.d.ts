import * as React from "react";

export interface DialogAction {
  label: string;
  onClick?: () => void;
  variant?: "text" | "filled" | "tonal" | "outlined";
}

/** Material 3 basic dialog (modal). Render with a scrim; close on backdrop click. */
export interface DialogProps {
  open?: boolean;
  /** Optional hero icon (centers the headline). */
  icon?: string;
  headline?: string;
  children?: React.ReactNode;
  actions?: DialogAction[];
  onClose?: () => void;
  className?: string;
}

export function Dialog(props: DialogProps): JSX.Element | null;
