import React from "react";
import { useCurrentFrame } from "remotion";
import { theme, ACCENTS } from "../../theme";
import { slideUp, staggerDelay } from "../../utils/animation";
import { useVideoConfig } from "remotion";

export const StepList: React.FC<{
  steps: { title: string; text: string }[];
  startFrame?: number;
  accent?: string;
}> = ({ steps, startFrame = 14, accent = ACCENTS.blue }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {steps.map((step, i) => {
        const anim = slideUp(frame, fps, startFrame + staggerDelay(i, 0, 7), 16);
        return (
          <div
            key={step.title}
            style={{
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              opacity: anim.opacity,
              transform: anim.transform,
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 700,
                color: accent,
                border: `1.5px solid ${accent}55`,
                backgroundColor: `${accent}14`,
              }}
            >
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: theme.text }}>
                {step.title}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: theme.textDim,
                  lineHeight: 1.4,
                  marginTop: 3,
                  maxWidth: 520,
                }}
              >
                {step.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
