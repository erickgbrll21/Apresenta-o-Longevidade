import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import { FRENTES } from "../data/presentationData";
import { theme } from "../theme";
import { SlideShell } from "../components/ui/SlideShell";
import { GlassCard } from "../components/ui/GlassCard";
import { fadeIn } from "../utils/animation";

const FrenteCard: React.FC<{
  frente: (typeof FRENTES)[number];
  index: number;
}> = ({ frente, index }) => (
  <GlassCard index={index} style={{ height: "100%" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "18px 18px",
        boxSizing: "border-box",
      }}
    >
      <Img
        src={staticFile(frente.icon)}
        style={{ height: 56, width: 56, objectFit: "contain", marginBottom: 10 }}
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
  return (
    <SlideShell slideNumber={3}>
      <h1
        style={{
          margin: "0 0 8px",
          opacity: fadeIn(frame, 4, 16),
          fontSize: 44,
          fontWeight: 700,
          color: theme.text,
        }}
      >
        Sete frentes. Um interlocutor.
      </h1>
      <p
        style={{
          margin: "0 0 18px",
          opacity: fadeIn(frame, 8, 16),
          fontSize: 20,
          color: theme.textDim,
          lineHeight: 1.45,
          maxWidth: 780,
        }}
      >
        Em vez de gerir dezenas de fornecedores, sua empresa centraliza tudo em
        um único parceiro.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minHeight: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            flex: 1,
            minHeight: 0,
          }}
        >
          {FRENTES.slice(0, 4).map((f, i) => (
            <FrenteCard key={f.slug} frente={f} index={i} />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            flex: 1,
            minHeight: 0,
          }}
        >
          {FRENTES.slice(4).map((f, i) => (
            <FrenteCard key={f.slug} frente={f} index={i + 4} />
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
