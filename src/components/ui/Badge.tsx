import React from "react";
import { BRAND } from "../../theme";

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "9px 20px",
      borderRadius: 9999,
      border: `1px solid ${BRAND.badgeBorder}`,
      backgroundColor: BRAND.badgeBg,
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: BRAND.titleLine1,
    }}
  >
    {children}
  </span>
);
