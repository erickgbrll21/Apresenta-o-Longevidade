import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { formatKpiCount, getCountUpValue, KpiCountFormat } from "../../utils/countUp";
import { theme } from "../../theme";
import { fadeIn, staggerDelay } from "../../utils/animation";

export const KpiColumn: React.FC<{
  index: number;
  count: KpiCountFormat;
  label: string;
  footer?: string;
  gradient: string;
}> = ({ index, count, label, footer, gradient }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delay = 18 + index * 8;
  const value = getCountUpValue(frame, fps, delay, count.to);
  const opacity = fadeIn(frame, staggerDelay(index, 10, 4), 18);

  return (
    <div style={{ display: "flex", flexDirection: "column", opacity, flex: 1 }}>
      <div
        style={{
          fontSize: 58,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          fontVariantNumeric: "tabular-nums",
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          lineHeight: 1.05,
        }}
      >
        {formatKpiCount(value, count)}
      </div>
      <div
        style={{
          fontSize: 19,
          fontWeight: 700,
          color: theme.text,
          maxWidth: 230,
          marginTop: 8,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
      {footer ? (
        <div style={{ fontSize: 16, fontWeight: 400, color: "#9CA3AF", marginTop: 6 }}>
          {footer}
        </div>
      ) : null}
    </div>
  );
};
