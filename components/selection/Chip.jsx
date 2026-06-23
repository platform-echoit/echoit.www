import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Chip — Material 3 chip. type: assist (default) | filter | input | suggestion.
 * `selected` shows the selected (tonal) state. Provide `icon` and/or `onRemove`.
 */
export function Chip({ label, type = "assist", icon, selected = false, elevated = false, onRemove, onClick, className = "", ...rest }) {
  const mods = [
    selected ? "md-chip--selected" : "",
    elevated ? "md-chip--elevated" : "",
    type === "assist" ? "md-chip--assist" : "",
  ].filter(Boolean).join(" ");
  return (
    <button className={`md-chip ${mods} ${className}`.trim()} onClick={onClick} type="button" {...rest}>
      {selected && type === "filter" && <Icon name="check" size={18} />}
      {icon && !(selected && type === "filter") && <Icon name={icon} size={18} />}
      <span>{label}</span>
      {onRemove && (
        <Icon name="close" size={18} onClick={(e) => { e.stopPropagation(); onRemove(); }} style={{ cursor: "pointer" }} />
      )}
    </button>
  );
}
