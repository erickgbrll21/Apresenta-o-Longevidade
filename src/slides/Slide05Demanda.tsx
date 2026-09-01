import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { DEMANDA } from "../data/presentationData";
import { theme, BRAND } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { StepList } from "../components/ui/StepList";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide05Demanda: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 10, 22);

  return (
    <SlideShell slideNumber={5}>
      <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 40, flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              opacity: fadeIn(frame, 2, 16),
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BRAND.blue,
              marginBottom: 12,
            }}
          >
            {DEMANDA.eyebrow}
          </div>
          <h1
            style={{
              margin: 0,
              opacity: titleAnim.opacity,
              transform: titleAnim.transform,
              fontSize: 44,
              fontWeight: 700,
              lineHeight: 1.25,
              color: theme.text,
              maxWidth: 480,
            }}
          >
            {DEMANDA.titleLine1}{" "}
            <span style={{ color: BRAND.blue }}>{DEMANDA.titleHighlight}</span>
          </h1>
          <p
            style={{
              opacity: fadeIn(frame, 26, 18),
              margin: "18px 0 0",
              fontSize: 20,
              lineHeight: 1.55,
              color: theme.textDim,
              maxWidth: 460,
            }}
          >
            {DEMANDA.description}
          </p>

          <GlassCard delay={70} style={{ marginTop: 24 }}>
            <div style={{ display: "flex", gap: 14, padding: "18px 20px", alignItems: "flex-start" }}>
              <Img
                src={staticFile(DEMANDA.icon)}
                style={{ height: 44, width: 44, objectFit: "contain", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 19, fontWeight: 700, color: theme.text }}>
                  {DEMANDA.note.title}
                </div>
                <div style={{ fontSize: 17, color: theme.textDim, lineHeight: 1.5, marginTop: 6 }}>
                  {DEMANDA.note.text}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <StepList steps={DEMANDA.steps} startFrame={16} accent={BRAND.blue} />
        </div>
      </div>
    </SlideShell>
  );
};
