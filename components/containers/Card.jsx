import React from "react";

/**
 * Card — Material 3 container. variant: elevated (default) | filled | outlined.
 * Set `interactive` for hover/press state layers. Add your own padding via children.
 */
export function Card({ variant = "elevated", interactive = false, children, className = "", style, ...rest }) {
  const mods = [`md-card--${variant}`, interactive ? "md-card--interactive" : ""].filter(Boolean).join(" ");
  return (
    <div className={`md-card ${mods} ${className}`.trim()} style={style} {...rest}>
      {children}
    </div>
  );
}
