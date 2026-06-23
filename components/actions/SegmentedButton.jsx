import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * SegmentedButton — Material 3 single/multi-select segmented control.
 * segments: [{ value, label, icon }]. value/onChange control selection.
 */
export function SegmentedButton({ segments = [], value, onChange, multiple = false, className = "", ...rest }) {
  const selected = multiple ? (Array.isArray(value) ? value : []) : value;
  const isSel = (v) => (multiple ? selected.includes(v) : selected === v);
  const toggle = (v) => {
    if (!onChange) return;
    if (multiple) {
      onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
    } else {
      onChange(v);
    }
  };
  return (
    <div className={`md-segmented ${className}`.trim()} role="group" {...rest}>
      {segments.map((s) => (
        <button
          key={s.value}
          className={`md-segmented__seg ${isSel(s.value) ? "md-segmented__seg--selected" : ""}`.trim()}
          aria-pressed={isSel(s.value)}
          onClick={() => toggle(s.value)}
          type="button"
        >
          {isSel(s.value) && <Icon name="check" size={18} />}
          {!isSel(s.value) && s.icon && <Icon name={s.icon} size={18} />}
          <span>{s.label}</span>
        </button>
      ))}
    </div>
  );
}
