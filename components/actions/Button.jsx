import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Button — Material 3 common button.
 * Variants: filled (default), tonal, elevated, outlined, text.
 */
export function Button({
  variant = "filled",
  icon,
  trailingIcon,
  children,
  disabled = false,
  href,
  className = "",
  ...rest
}) {
  const cls = `md-btn md-btn--${variant} ${className}`.trim();
  const inner = (
    <>
      {icon && <Icon name={icon} size={18} className="md-btn__icon" />}
      <span>{children}</span>
      {trailingIcon && <Icon name={trailingIcon} size={18} />}
    </>
  );
  if (href && !disabled) {
    return (
      <a className={cls} href={href} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} disabled={disabled} {...rest}>
      {inner}
    </button>
  );
}
