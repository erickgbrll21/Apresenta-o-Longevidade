import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { JURIDICO } from "../data/presentationData";
import { theme, BRAND } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide09Juridico: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 8, 22);

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
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BRAND.blue,
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
              fontSize: 44,
              fontWeight: 700,
              color: theme.text,
            }}
          >
            {JURIDICO.titleLine1}{" "}
            <span style={{ color: BRAND.blue }}>{JURIDICO.titleHighlight}</span>
          </h1>
        </div>
        <div style={{ opacity: fadeIn(frame, 16, 18), textAlign: "right" }}>
          <div style={{ fontSize: 54, fontWeight: 700, color: BRAND.blue, lineHeight: 1 }}>
            {JURIDICO.kpi.value}
          </div>
          <div style={{ fontSize: 16, color: theme.textDim, marginTop: 4 }}>
            {JURIDICO.kpi.label}
          </div>
        </div>
      </div>
      <p
        style={{
          margin: "10px 0 26px",
          opacity: fadeIn(frame, 20, 16),
          fontSize: 20,
          color: theme.textDim,
          lineHeight: 1.5,
          maxWidth: 760,
        }}
      >
        {JURIDICO.description}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, flex: 1, minHeight: 0 }}>
        {JURIDICO.features.map((f, i) => (
          <GlassCard key={f.title} index={i} style={{ height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "22px 20px" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  backgroundColor: `${BRAND.blue}12`,
                  color: BRAND.blue,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                ⚖
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: theme.text, marginBottom: 8 }}>
                {f.title}
              </div>
              <div style={{ fontSize: 17, color: theme.textDim, lineHeight: 1.5 }}>{f.text}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SlideShell>
  );
};
