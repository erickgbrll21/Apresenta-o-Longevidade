import React from "react";
import { SOLUTIONS } from "../../data/presentationData";
import { theme } from "../../theme";
import { SlideShell } from "./SlideShell";
import { GlassCard } from "./GlassCard";
import { Badge } from "./Badge";
import { fadeIn, slideUp, staggerDelay } from "../../utils/animation";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const SolutionDetail: React.FC<{
  slideNumber: number;
  solution: (typeof SOLUTIONS)[number];
}> = ({ slideNumber, solution }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 10, 22);
  const manyGroups = solution.groups.length >= 5;

  return (
    <SlideShell slideNumber={slideNumber}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: manyGroups ? "0.78fr 1.22fr" : "0.85fr 1.15fr",
          gap: 32,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ opacity: fadeIn(frame, 2, 16), marginBottom: 14, display: "flex", alignItems: "center", gap: 16 }}>
            <Img
              src={staticFile(solution.icon)}
              style={{ height: 80, width: 80, objectFit: "contain" }}
            />
            <Badge>{solution.title}</Badge>
          </div>
          <h1
            style={{
              margin: 0,
              opacity: titleAnim.opacity,
              transform: titleAnim.transform,
              fontSize: manyGroups ? 40 : 44,
              fontWeight: 700,
              lineHeight: 1.15,
              color: theme.text,
            }}
          >
            {solution.heroTitle}
          </h1>
          <p
            style={{
              opacity: fadeIn(frame, 24, 18),
              margin: "16px 0 0",
              fontSize: 20,
              lineHeight: 1.5,
              color: theme.textDim,
              maxWidth: 520,
            }}
          >
            {solution.heroDescription}
          </p>

          <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
            {solution.stats.map((s, i) => (
              <div key={s.label} style={{ opacity: fadeIn(frame, 40 + i * 8, 16) }}>
                <div style={{ fontSize: 38, fontWeight: 700, color: solution.color }}>
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: theme.textDim,
                    maxWidth: 150,
                    marginTop: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "min-content",
            gap: 12,
            alignContent: "center",
          }}
        >
          {solution.groups.map((g, i) => (
            <GlassCard key={g.title} index={i} delay={20 + staggerDelay(i, 0, 5)}>
              <div style={{ padding: "16px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: solution.color,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ fontSize: 19, fontWeight: 700, color: theme.text }}>{g.title}</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        padding: "5px 10px",
                        borderRadius: 6,
                        backgroundColor: `${solution.color}12`,
                        color: theme.textMuted,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
