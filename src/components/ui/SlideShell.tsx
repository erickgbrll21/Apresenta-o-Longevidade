import React from "react";
import { AbsoluteFill } from "remotion";
import { theme, FONT_SANS } from "../../theme";
import { SlideInstitutionalHeader } from "./SlideInstitutionalHeader";

export const SlideShell: React.FC<{
  slideNumber?: number;
  showHud?: boolean;
  padding?: string;
  children: React.ReactNode;
}> = ({ slideNumber, padding = "20px 64px 40px", children }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: FONT_SANS,
      }}
    >
      {slideNumber ? <SlideInstitutionalHeader slideNumber={slideNumber} /> : null}
      <div
        style={{
          position: "absolute",
          inset: 0,
          top: slideNumber ? 118 : 0,
          display: "flex",
          flexDirection: "column",
          padding,
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
