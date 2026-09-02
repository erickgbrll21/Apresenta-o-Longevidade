import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { DIFERENCIAIS } from "../data/presentationData";
import { theme, BRAND, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide06Diferenciais: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 8, 22);
  const tone = SLIDE_TONES[toneForSlide(6)];

  return (
    <SlideShell slideNumber={6}>
      <div
        style={{
          opacity: fadeIn(frame, 2, 16),
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: tone.accent,
          marginBottom: 10,
        }}
      >
        {DIFERENCIAIS.eyebrow}
      </div>
      <h1
        style={{
          margin: "0 0 10px",
          opacity: titleAnim.opacity,
          transform: titleAnim.transform,
          fontSize: 50,
          fontWeight: 700,
          color: tone.text,
        }}
      >
        {DIFERENCIAIS.title}
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          opacity: fadeIn(frame, 12, 16),
          fontSize: 23,
          color: tone.textDim,
          maxWidth: 780,
        }}
      >
        Três razões estruturais — não promessas de marketing.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 480px))",
          justifyContent: "center",
          gap: 22,
          flex: 1,
          minHeight: 0,
          alignContent: "center",
          alignItems: "stretch",
        }}
      >
        {DIFERENCIAIS.items.map((d, i) => (
          <GlassCard key={d.num} index={i} style={{ height: "100%", minHeight: 300 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "28px 26px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  color: BRAND.blue,
                  opacity: 0.35,
                  marginBottom: 14,
                }}
              >
                {d.num}
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: theme.text, marginBottom: 12 }}>
                {d.title}
              </div>
              <div style={{ fontSize: 19, color: theme.textDim, lineHeight: 1.55 }}>
                {d.text}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SlideShell>
  );
};
