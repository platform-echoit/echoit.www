import React from "react";

/**
 * Badge — Material 3 badge. Renders a small count/label pill, or a 6px dot
 * when `dot` is set. Wrap an icon and pass `anchored` to overlay it.
 */
export function Badge({ count, dot = false, anchored, className = "", ...rest }) {
  const badge = (
    <span className={`md-badge ${dot ? "md-badge--dot" : ""} ${className}`.trim()} {...rest}>
      {!dot && count}
    </span>
  );
  if (!anchored) return badge;
  return (
    <span style={{ position: "relative", display: "inline-flex" }}>
      {anchored}
      <span style={{ position: "absolute", top: dot ? 2 : -4, right: dot ? 2 : -6 }}>{badge}</span>
    </span>
  );
}
