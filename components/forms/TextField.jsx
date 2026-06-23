import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * TextField — Material 3 text input.
 * variant: filled (default) | outlined. Supports leading/trailing icons,
 * label, supporting text and error state.
 */
export function TextField({
  variant = "filled",
  label,
  value,
  onChange,
  placeholder,
  leadingIcon,
  trailingIcon,
  supportingText,
  error = false,
  type = "text",
  multiline = false,
  rows = 3,
  className = "",
  ...rest
}) {
  const cls = `md-field md-field--${variant} ${error ? "md-field--error" : ""} ${className}`.trim();
  return (
    <label className={cls}>
      {label && <span className="md-field__label">{label}</span>}
      <span className="md-field__box">
        {leadingIcon && <Icon name={leadingIcon} />}
        {multiline ? (
          <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows} {...rest} />
        ) : (
          <input type={type} value={value} onChange={onChange} placeholder={placeholder} {...rest} />
        )}
        {trailingIcon && <Icon name={trailingIcon} />}
      </span>
      {supportingText && (
        <span className="md-field__label" style={error ? { color: "var(--md-sys-color-error)" } : undefined}>
          {supportingText}
        </span>
      )}
    </label>
  );
}
