import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { ECOSSISTEMA } from "../data/presentationData";
import { theme, BRAND, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide07Ecossistema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 8, 22);
  const tone = SLIDE_TONES[toneForSlide(7)];

  return (
    <SlideShell slideNumber={7}>
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
        {ECOSSISTEMA.eyebrow}
      </div>
      <h1
        style={{
          margin: "0 0 12px",
          opacity: titleAnim.opacity,
          transform: titleAnim.transform,
          fontSize: 48,
          fontWeight: 700,
          lineHeight: 1.22,
          color: tone.text,
        }}
      >
        {ECOSSISTEMA.titleLine1}
        <br />
        <span style={{ color: tone.accent }}>{ECOSSISTEMA.titleHighlight}</span>
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          opacity: fadeIn(frame, 22, 16),
          fontSize: 22,
          color: tone.textDim,
          lineHeight: 1.5,
          maxWidth: 820,
        }}
      >
        {ECOSSISTEMA.description}
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
        {ECOSSISTEMA.cards.map((card, i) => (
          <GlassCard
            key={card.title}
            index={i}
            style={{
              height: "100%",
              minHeight: 340,
              ...(card.lead ? { border: `1.5px solid ${BRAND.blue}55` } : {}),
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "26px 24px",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 999,
                  backgroundColor: card.lead ? `${BRAND.blue}14` : "#F1F5F9",
                  color: card.lead ? BRAND.blue : theme.textDim,
                  marginBottom: 14,
                }}
              >
                {card.badge}
              </span>
              {card.logo ? (
                <Img
                  src={staticFile(card.logo)}
                  style={{ height: 40, objectFit: "contain", alignSelf: "flex-start", marginBottom: 12 }}
                />
              ) : (
                <div style={{ fontSize: 24, fontWeight: 700, color: theme.text, marginBottom: 10 }}>
                  {card.title}
                </div>
              )}
              {card.logo ? (
                <div style={{ fontSize: 24, fontWeight: 700, color: theme.text, marginBottom: 10 }}>
                  {card.title}
                </div>
              ) : null}
              <div style={{ fontSize: 18, color: theme.textDim, lineHeight: 1.5, flex: 1 }}>
                {card.text}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 14 }}>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      padding: "5px 10px",
                      borderRadius: 5,
                      backgroundColor: "#F1F5F9",
                      color: theme.textMuted,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SlideShell>
  );
};
