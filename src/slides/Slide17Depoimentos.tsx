import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { DEPOIMENTOS, DEPOIMENTOS_META } from "../data/presentationData";
import { theme, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

const INITIAL_COLORS = ["#1560BD", "#10B981", "#F59E0B", "#A855F7"];

export const Slide17Depoimentos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 8, 22);
  const tone = SLIDE_TONES[toneForSlide(17)];

  return (
    <SlideShell slideNumber={17}>
      <div
        style={{
          opacity: fadeIn(frame, 2, 16),
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: tone.accent,
          marginBottom: 8,
        }}
      >
        {DEPOIMENTOS_META.eyebrow}
      </div>
      <h1
        style={{
          margin: "0 0 8px",
          opacity: titleAnim.opacity,
          transform: titleAnim.transform,
          fontSize: 46,
          fontWeight: 700,
          color: tone.text,
        }}
      >
        {DEPOIMENTOS_META.title}
      </h1>
      <p
        style={{
          margin: "0 0 22px",
          opacity: fadeIn(frame, 12, 16),
          fontSize: 20,
          color: tone.textDim,
          maxWidth: 760,
        }}
      >
        {DEPOIMENTOS_META.subtitle}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, flex: 1, minHeight: 0 }}>
        {DEPOIMENTOS.map((d, i) => (
          <GlassCard key={d.name} index={i} style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "22px 24px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ fontSize: 19, color: theme.textMuted, lineHeight: 1.55, flex: 1, fontStyle: "italic" }}>
                “{d.quote}”
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    backgroundColor: INITIAL_COLORS[i % INITIAL_COLORS.length],
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {d.initials}
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: theme.text }}>{d.name}</div>
                  <div style={{ fontSize: 16, color: theme.textDim }}>{d.role}</div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SlideShell>
  );
};
