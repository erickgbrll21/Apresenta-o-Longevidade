import React from "react";
import { AbsoluteFill } from "remotion";
import { FONT_SANS } from "../../theme";
import { SlideInstitutionalHeader } from "./SlideInstitutionalHeader";
import { SlideToneProvider, useSlideTone } from "./slideTone";

const SlideShellFrame: React.FC<{
  slideNumber?: number;
  padding?: string;
  children: React.ReactNode;
}> = ({ slideNumber, padding = "20px 64px 40px", children }) => {
  const tone = useSlideTone();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: tone.bg,
        fontFamily: FONT_SANS,
      }}
    >
      {tone.overlay ? (
        <AbsoluteFill style={{ background: tone.overlay }} />
      ) : null}
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
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

export const SlideShell: React.FC<{
  slideNumber?: number;
  showHud?: boolean;
  padding?: string;
  children: React.ReactNode;
}> = ({ slideNumber, padding = "20px 64px 40px", children }) => {
  const frame = (
    <SlideShellFrame slideNumber={slideNumber} padding={padding}>
      {children}
    </SlideShellFrame>
  );

  if (!slideNumber) {
    return frame;
  }

  return <SlideToneProvider slideNumber={slideNumber}>{frame}</SlideToneProvider>;
};
