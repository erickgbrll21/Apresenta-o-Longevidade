import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { MODELO } from "../data/presentationData";
import { theme, BRAND, ACCENTS, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide04Modelo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 12, 22);
  const tone = SLIDE_TONES[toneForSlide(4)];

  return (
    <SlideShell slideNumber={4}>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 40, flex: 1, minHeight: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ opacity: fadeIn(frame, 2, 16), marginBottom: 16 }}>
            <Badge>{MODELO.badge}</Badge>
          </div>
          <h1
            style={{
              margin: 0,
              opacity: titleAnim.opacity,
              transform: titleAnim.transform,
              fontSize: 50,
              fontWeight: 700,
              lineHeight: 1.15,
              color: tone.text,
            }}
          >
            {MODELO.titleLine1}{" "}
            <span style={{ color: tone.accent }}>{MODELO.titleHighlight}</span>{" "}
            {MODELO.titleLine2}
          </h1>
          {MODELO.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                opacity: fadeIn(frame, 26 + i * 10, 18),
                margin: i === 0 ? "20px 0 0" : "12px 0 0",
                fontSize: 21,
                lineHeight: 1.55,
                color: tone.textDim,
                maxWidth: 520,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
          {MODELO.points.map((point, i) => (
            <GlassCard key={point.title} index={i} delay={20 + i * 8}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 22px" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: `${ACCENTS.blue}14`,
                    color: BRAND.blue,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: theme.text }}>
                    {point.title}
                  </div>
                  <div style={{ fontSize: 18, color: theme.textDim, lineHeight: 1.45, marginTop: 4 }}>
                    {point.text}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
