import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Tabs — Material 3 primary tabs. tabs: [{ value, label, icon }].
 * Controlled via `value` + `onChange`.
 */
export function Tabs({ tabs = [], value, onChange, className = "", ...rest }) {
  return (
    <div className={`md-tabs ${className}`.trim()} role="tablist" {...rest}>
      {tabs.map((t) => (
        <button
          key={t.value}
          role="tab"
          aria-selected={value === t.value}
          className={`md-tab ${value === t.value ? "md-tab--active" : ""}`.trim()}
          onClick={() => onChange && onChange(t.value)}
          type="button"
        >
          {t.icon && <Icon name={t.icon} size={20} fill={value === t.value} />}
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}
