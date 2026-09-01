import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { ECOSSISTEMA } from "../data/presentationData";
import { theme, BRAND } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide07Ecossistema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 8, 22);

  return (
    <SlideShell slideNumber={7}>
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
        {ECOSSISTEMA.eyebrow}
      </div>
      <h1
        style={{
          margin: "0 0 10px",
          opacity: titleAnim.opacity,
          transform: titleAnim.transform,
          fontSize: 42,
          fontWeight: 700,
          lineHeight: 1.25,
          color: theme.text,
        }}
      >
        {ECOSSISTEMA.titleLine1}
        <br />
        <span style={{ color: BRAND.blue }}>{ECOSSISTEMA.titleHighlight}</span>
      </h1>
      <p
        style={{
          margin: "0 0 22px",
          opacity: fadeIn(frame, 22, 16),
          fontSize: 20,
          color: theme.textDim,
          lineHeight: 1.5,
          maxWidth: 760,
        }}
      >
        {ECOSSISTEMA.description}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, flex: 1, minHeight: 0 }}>
        {ECOSSISTEMA.cards.map((card, i) => (
          <GlassCard
            key={card.title}
            index={i}
            style={{
              height: "100%",
              ...(card.lead ? { border: `1.5px solid ${BRAND.blue}55` } : {}),
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "22px 22px",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "5px 10px",
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
                  style={{ height: 36, objectFit: "contain", alignSelf: "flex-start", marginBottom: 10 }}
                />
              ) : (
                <div style={{ fontSize: 22, fontWeight: 700, color: theme.text, marginBottom: 8 }}>
                  {card.title}
                </div>
              )}
              {card.logo ? (
                <div style={{ fontSize: 22, fontWeight: 700, color: theme.text, marginBottom: 8 }}>
                  {card.title}
                </div>
              ) : null}
              <div style={{ fontSize: 17, color: theme.textDim, lineHeight: 1.5, flex: 1 }}>
                {card.text}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      padding: "4px 8px",
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
