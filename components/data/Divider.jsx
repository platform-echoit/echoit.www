import React from "react";

/** Divider — Material 3 thin rule. Set `inset` to indent from the left. */
export function Divider({ inset = false, vertical = false, className = "", style, ...rest }) {
  return (
    <hr
      className={`md-divider ${className}`.trim()}
      style={{
        ...(inset ? { marginLeft: 16 } : null),
        ...(vertical ? { width: 1, height: "auto", alignSelf: "stretch" } : null),
        ...style,
      }}
      {...rest}
    />
  );
}
