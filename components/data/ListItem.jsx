import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ListItem — Material 3 list row. leadingIcon/leading, headline, supporting,
 * trailingIcon/trailing. Set `onClick` to make it interactive.
 */
export function ListItem({ headline, supporting, leadingIcon, leading, trailingIcon, trailing, onClick, className = "", ...rest }) {
  return (
    <div className={`md-list-item ${className}`.trim()} onClick={onClick} role={onClick ? "button" : undefined} {...rest}>
      {leading}
      {leadingIcon && <Icon name={leadingIcon} />}
      <span className="md-list-item__text">
        <span className="md-list-item__headline">{headline}</span>
        {supporting && <span className="md-list-item__supporting">{supporting}</span>}
      </span>
      {trailing}
      {trailingIcon && <Icon name={trailingIcon} />}
    </div>
  );
}
