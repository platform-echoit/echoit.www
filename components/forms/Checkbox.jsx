import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Checkbox — Material 3 checkbox, optionally with a label. */
export function Checkbox({ checked, onChange, disabled = false, label, className = "", ...rest }) {
  const control = (
    <span className="md-check">
      <input type="checkbox" checked={!!checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="md-check__box">
        <Icon name="check" size={16} weight={600} />
      </span>
    </span>
  );
  if (!label) return <label className={className} style={disabled ? { opacity: 0.38 } : undefined}>{control}</label>;
  return (
    <label className={`md-list-item ${className}`.trim()} style={{ minHeight: 0, padding: "4px 8px", gap: 12, ...(disabled ? { opacity: 0.38, pointerEvents: "none" } : {}) }}>
      {control}
      <span className="md-list-item__headline">{label}</span>
    </label>
  );
}
