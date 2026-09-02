import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import { FRENTES } from "../data/presentationData";
import { theme, SLIDE_TONES, toneForSlide } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn } from "../utils/animation";

const FrenteCard: React.FC<{
  frente: (typeof FRENTES)[number];
  index: number;
  style?: React.CSSProperties;
}> = ({ frente, index, style }) => (
  <GlassCard index={index} style={{ height: "100%", ...style }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "16px 16px",
        boxSizing: "border-box",
      }}
    >
      <Img
        src={staticFile(frente.icon)}
        style={{ height: 48, width: 48, objectFit: "contain", marginBottom: 8 }}
      />
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: theme.text }}>
        {frente.title}
      </h3>
      <p
        style={{
          margin: "7px 0 10px",
          fontSize: 17,
          color: theme.textDim,
          lineHeight: 1.42,
          flex: 1,
        }}
      >
        {frente.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {frente.chips.map((chip) => (
          <span
            key={chip}
            style={{
              fontSize: 15,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 6,
              backgroundColor: `${frente.color}14`,
              color: frente.color,
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  </GlassCard>
);

export const Slide03Frentes: React.FC = () => {
  const frame = useCurrentFrame();
  const tone = SLIDE_TONES[toneForSlide(3)];
  return (
    <SlideShell slideNumber={3}>
      <h1
        style={{
          margin: "0 0 8px",
          opacity: fadeIn(frame, 4, 16),
          fontSize: 44,
          fontWeight: 700,
          color: tone.text,
        }}
      >
        Sete frentes. Um interlocutor.
      </h1>
      <p
        style={{
          margin: "0 0 18px",
          opacity: fadeIn(frame, 8, 16),
          fontSize: 20,
          color: tone.textDim,
          lineHeight: 1.45,
          maxWidth: 780,
        }}
      >
        Em vez de gerir dezenas de fornecedores, sua empresa centraliza tudo em
        um único parceiro.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 12,
          flex: 1,
          minHeight: 0,
          alignContent: "start",
          gridAutoRows: "min-content",
        }}
      >
        {FRENTES.map((f, i) => (
          <FrenteCard
            key={f.slug}
            frente={f}
            index={i}
            style={{
              gridColumn: i < 4 ? `${i * 2 + 1} / span 2` : `${(i - 4) * 2 + 2} / span 2`,
            }}
          />
        ))}
      </div>
    </SlideShell>
  );
};
