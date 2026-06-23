import React from "react";

/** LinearProgress — Material 3 linear progress. Omit `value` for indeterminate. */
export function LinearProgress({ value, className = "", ...rest }) {
  const indeterminate = value == null;
  return (
    <div className={`md-linear-progress ${className}`.trim()} role="progressbar" aria-valuenow={indeterminate ? undefined : value} {...rest}>
      <div
        className="md-linear-progress__bar"
        style={indeterminate
          ? { width: "40%", animation: "md-linear-indet 1.4s ease-in-out infinite" }
          : { width: `${Math.max(0, Math.min(100, value))}%` }}
      />
      {indeterminate && (
        <style>{`@keyframes md-linear-indet{0%{left:-40%}60%,100%{left:100%}}`}</style>
      )}
    </div>
  );
}
