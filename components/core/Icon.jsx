import React from "react";

/**
 * Icon — renders a Material Symbols Rounded glyph.
 * The Material Symbols Rounded font is loaded globally via styles.css.
 * Pass the symbol's ligature name (e.g. "search", "arrow_forward", "bolt").
 */
export function Icon({ name, size = 24, fill = false, weight = 400, grade = 0, opticalSize = 24, style, className = "", ...rest }) {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `"FILL" ${fill ? 1 : 0}, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${opticalSize}`,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  );
}
