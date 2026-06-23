import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * IconButton — Material 3 icon-only button.
 * Variants: standard (default), filled, tonal, outlined.
 */
export function IconButton({ icon, variant = "standard", disabled = false, fill = false, label, className = "", ...rest }) {
  const mod = variant === "standard" ? "" : `md-icon-btn--${variant}`;
  return (
    <button className={`md-icon-btn ${mod} ${className}`.trim()} disabled={disabled} aria-label={label} {...rest}>
      <Icon name={icon} fill={fill} />
    </button>
  );
}
