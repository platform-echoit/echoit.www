import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Fab — Material 3 floating action button.
 * size: regular (default) | small | large. color: primary (default) | secondary | surface.
 * Provide `label` to render an extended FAB.
 */
export function Fab({ icon, label, size = "regular", color = "primary", className = "", ...rest }) {
  const mods = [
    size === "small" ? "md-fab--small" : "",
    size === "large" ? "md-fab--large" : "",
    color === "secondary" ? "md-fab--secondary" : "",
    color === "surface" ? "md-fab--surface" : "",
  ].filter(Boolean).join(" ");
  return (
    <button className={`md-fab ${mods} ${className}`.trim()} aria-label={label || rest["aria-label"]} {...rest}>
      <Icon name={icon} size={size === "large" ? 36 : 24} />
      {label && size !== "small" && <span>{label}</span>}
    </button>
  );
}
