import React from "react";

/** Radio — Material 3 radio button, optionally with a label. */
export function Radio({ checked, onChange, disabled = false, label, name, value, className = "", ...rest }) {
  const control = (
    <span className="md-radio-ctl">
      <input type="radio" checked={!!checked} onChange={onChange} disabled={disabled} name={name} value={value} {...rest} />
      <span className="md-radio-ctl__ring" />
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
