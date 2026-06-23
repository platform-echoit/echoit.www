import * as React from "react";

/** Material 3 snackbar — transient feedback with an optional action. */
export interface SnackbarProps {
  message: React.ReactNode;
  /** Action button label. */
  action?: string;
  onAction?: () => void;
  /** Show a close affordance and call this on click. */
  onClose?: () => void;
  className?: string;
}

export function Snackbar(props: SnackbarProps): JSX.Element;
