import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Snackbar — Material 3 brief message with optional action. */
export function Snackbar({ message, action, onAction, onClose, className = "", ...rest }) {
  return (
    <div className={`md-snackbar ${className}`.trim()} role="status" {...rest}>
      <span style={{ flex: 1, padding: "8px 0" }}>{message}</span>
      {action && <button className="md-snackbar__action" onClick={onAction}>{action}</button>}
      {onClose && (
        <button className="md-icon-btn" style={{ width: 36, height: 36, color: "var(--md-sys-color-inverse-on-surface)" }} onClick={onClose} aria-label="닫기">
          <Icon name="close" size={20} />
        </button>
      )}
    </div>
  );
}
