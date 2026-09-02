import React from "react";
import { useCurrentFrame } from "remotion";
import { slideUp, staggerDelay } from "../../utils/animation";
import { useVideoConfig } from "remotion";
import { useSlideTone } from "./slideTone";

export const StepList: React.FC<{
  steps: { title: string; text: string }[];
  startFrame?: number;
  accent?: string;
}> = ({ steps, startFrame = 14, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const tone = useSlideTone();
  const color = accent ?? tone.accent;

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
                color: color,
                border: `1.5px solid ${color}55`,
                backgroundColor: `${color}14`,
              }}
            >
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: tone.text }}>
                {step.title}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: tone.textDim,
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
