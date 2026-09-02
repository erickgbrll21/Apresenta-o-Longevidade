import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { MERCADO_PUBLICO } from "../data/presentationData";
import { theme, BRAND, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { StepList } from "../components/ui/StepList";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide08MercadoPublico: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 10, 22);
  const tone = SLIDE_TONES[toneForSlide(8)];

  return (
    <SlideShell slideNumber={8}>
      <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 40, flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              opacity: fadeIn(frame, 2, 16),
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: tone.accent,
              marginBottom: 12,
            }}
          >
            {MERCADO_PUBLICO.eyebrow}
          </div>
          <h1
            style={{
              margin: 0,
              opacity: titleAnim.opacity,
              transform: titleAnim.transform,
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.3,
              color: tone.text,
              maxWidth: 480,
            }}
          >
            {MERCADO_PUBLICO.titleLine1}
            <br />
            {MERCADO_PUBLICO.titleLine2}{" "}
            <span style={{ color: tone.accent }}>{MERCADO_PUBLICO.titleHighlight}</span>
          </h1>
          <p
            style={{
              opacity: fadeIn(frame, 26, 18),
              margin: "16px 0 0",
              fontSize: 19,
              lineHeight: 1.5,
              color: tone.textDim,
              maxWidth: 460,
            }}
          >
            {MERCADO_PUBLICO.description}
          </p>

          <GlassCard delay={30} style={{ marginTop: 22 }}>
            <div style={{ padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Img
                  src={staticFile(MERCADO_PUBLICO.logo)}
                  style={{ height: 32, objectFit: "contain" }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: BRAND.blue,
                  }}
                >
                  {MERCADO_PUBLICO.card.badge}
                </span>
              </div>
              <div style={{ fontSize: 17, color: theme.textDim, lineHeight: 1.5, marginTop: 6 }}>
                {MERCADO_PUBLICO.card.text}
              </div>
              <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none" }}>
                {MERCADO_PUBLICO.card.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 16,
                      color: theme.textMuted,
                      marginTop: 5,
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: BRAND.blue }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <StepList steps={MERCADO_PUBLICO.steps} startFrame={16} />
        </div>
      </div>
    </SlideShell>
  );
};
