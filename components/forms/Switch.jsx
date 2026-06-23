import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Switch — Material 3 on/off toggle. */
export function Switch({ checked, onChange, disabled = false, className = "", ...rest }) {
  return (
    <label className={`md-switch ${className}`.trim()} style={disabled ? { opacity: 0.38, pointerEvents: "none" } : undefined}>
      <input type="checkbox" checked={!!checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="md-switch__track" />
      <span className="md-switch__thumb" />
    </label>
  );
}
