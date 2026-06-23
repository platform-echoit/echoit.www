import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../actions/Button.jsx";

/**
 * Dialog — Material 3 basic dialog. Render conditionally on `open`.
 * Provide `headline`, `children` (body), and `actions` (array of {label,onClick,variant}).
 */
export function Dialog({ open = true, icon, headline, children, actions = [], onClose, className = "" }) {
  if (!open) return null;
  return (
    <div className="md-scrim" onClick={onClose}>
      <div className={`md-dialog ${className}`.trim()} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {icon && <div className="md-dialog__icon"><Icon name={icon} size={24} /></div>}
        {headline && <h2 className="md-dialog__headline" style={icon ? { textAlign: "center" } : undefined}>{headline}</h2>}
        <div className="md-dialog__body">{children}</div>
        {actions.length > 0 && (
          <div className="md-dialog__actions">
            {actions.map((a, i) => (
              <Button key={i} variant={a.variant || "text"} onClick={a.onClick}>{a.label}</Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
