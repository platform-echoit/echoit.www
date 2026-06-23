import React from "react";

/** CircularProgress — Material 3 circular spinner. Omit `value` for indeterminate. */
export function CircularProgress({ value, size = 48, stroke = 4, className = "", ...rest }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const indeterminate = value == null;
  return (
    <span className={`md-circular-progress ${indeterminate ? "" : ""} ${className}`.trim()} style={{ width: size, height: size, animation: indeterminate ? "md-spin 1.2s linear infinite" : "none" }} role="progressbar" {...rest}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={indeterminate ? c * 0.25 : c * (1 - Math.max(0, Math.min(100, value)) / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      </svg>
    </span>
  );
}
