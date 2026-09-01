import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const CinematicBackground: React.FC<{ variant?: "default" | "green" }> = ({
  variant = "default",
}) => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame, [0, 180], [0, 40]);

  const colors =
    variant === "green"
      ? ["#04140F", "#0B2A20", "#04140F"]
      : ["#0A1624", "#1B3454", "#071018"];

  return (
    <AbsoluteFill style={{ backgroundColor: colors[0] }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${50 + shift * 0.15}% ${
            40 - shift * 0.1
          }%, ${colors[1]} 0%, ${colors[2]} 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.5,
        }}
      />
    </AbsoluteFill>
  );
};
