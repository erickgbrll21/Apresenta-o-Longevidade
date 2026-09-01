import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";
import { blurReveal, staggerDelay } from "../../utils/animation";

export const GlassCard: React.FC<{
  index?: number;
  delay?: number;
  static?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}> = ({ index = 0, delay, static: isStatic, style, children }) => {
  const frame = useCurrentFrame();
  const start = delay ?? staggerDelay(index);
  const reveal = isStatic
    ? { opacity: 1, filter: "none" }
    : blurReveal(frame, start);
  const { fps } = useVideoConfig();
  const ty = isStatic
    ? 0
    : Math.max(0, 24 * (1 - Math.min(1, Math.max(0, (frame - start) / 22))));

  return (
    <div
      style={{
        backgroundColor: theme.card,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08)",
        opacity: reveal.opacity,
        filter: reveal.filter,
        transform: `translateY(${ty}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
