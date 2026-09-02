import React from "react";
import { useSlideTone } from "./slideTone";

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tone = useSlideTone();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "9px 20px",
        borderRadius: 9999,
        border: `1px solid ${tone.badgeBorder}`,
        backgroundColor: tone.badgeBg,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: tone.badgeText,
      }}
    >
      {children}
    </span>
  );
};
