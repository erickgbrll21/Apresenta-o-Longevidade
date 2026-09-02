import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { JURIDICO } from "../data/presentationData";
import { theme, BRAND, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide09Juridico: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 8, 22);
  const tone = SLIDE_TONES[toneForSlide(9)];

  return (
    <SlideShell slideNumber={9}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <div>
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
            {JURIDICO.eyebrow}
          </div>
          <h1
            style={{
              margin: 0,
              opacity: titleAnim.opacity,
              transform: titleAnim.transform,
              fontSize: 50,
              fontWeight: 700,
              color: tone.text,
            }}
          >
            {JURIDICO.titleLine1}{" "}
            <span style={{ color: tone.accent }}>{JURIDICO.titleHighlight}</span>
          </h1>
        </div>
        <div style={{ opacity: fadeIn(frame, 16, 18), textAlign: "right" }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: tone.accent, lineHeight: 1 }}>
            {JURIDICO.kpi.value}
          </div>
          <div style={{ fontSize: 18, color: tone.textDim, marginTop: 4 }}>
            {JURIDICO.kpi.label}
          </div>
        </div>
      </div>
      <p
        style={{
          margin: "12px 0 28px",
          opacity: fadeIn(frame, 20, 16),
          fontSize: 23,
          color: tone.textDim,
          lineHeight: 1.5,
          maxWidth: 820,
        }}
      >
        {JURIDICO.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 520px))",
          justifyContent: "center",
          gap: 20,
          flex: 1,
          minHeight: 0,
          alignContent: "center",
          alignItems: "stretch",
        }}
      >
        {JURIDICO.features.map((f, i) => (
          <GlassCard key={f.title} index={i} style={{ height: "100%", minHeight: 220 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "28px 28px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  backgroundColor: `${BRAND.blue}12`,
                  color: BRAND.blue,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                ⚖
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: theme.text, marginBottom: 10 }}>
                {f.title}
              </div>
              <div style={{ fontSize: 19, color: theme.textDim, lineHeight: 1.5 }}>{f.text}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SlideShell>
  );
};
