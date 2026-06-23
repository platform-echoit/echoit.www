import React from "react";

/** Avatar — Material 3 user image. Pass `src` for a photo, or `initials`/`icon` fallback. */
export function Avatar({ src, alt = "", initials, size = 40, className = "", style, ...rest }) {
  return (
    <span className={`md-avatar ${className}`.trim()} style={{ width: size, height: size, fontSize: size * 0.4, ...style }} {...rest}>
      {src ? <img src={src} alt={alt} /> : initials}
    </span>
  );
}
