import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { HERO_KPIS } from "../data/presentationData";
import { FONT_SANS } from "../theme";
import { Badge } from "../components/ui/Badge";
import { KpiColumn } from "../components/ui/KpiColumn";
import { SlideInstitutionalHeader } from "../components/ui/SlideInstitutionalHeader";
import { SlideToneProvider, useSlideTone } from "../components/ui/slideTone";
import { fadeIn, slideUp } from "../utils/animation";
import { useVideoConfig } from "remotion";

const Slide02KpisInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 10, 22);
  const tone = useSlideTone();

  return (
    <AbsoluteFill style={{ backgroundColor: tone.bg, fontFamily: FONT_SANS }}>
      {tone.overlay ? (
        <AbsoluteFill style={{ background: tone.overlay }} />
      ) : null}
      <SlideInstitutionalHeader slideNumber={2} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          top: 0,
          display: "flex",
          flexDirection: "column",
          padding: "168px 88px 56px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        <div style={{ opacity: fadeIn(frame, 2, 16), marginBottom: 20 }}>
          <Badge>Panorama Longevidade Business</Badge>
        </div>

        <h1
          style={{
            margin: 0,
            opacity: titleAnim.opacity,
            transform: titleAnim.transform,
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: tone.text,
            maxWidth: 1040,
          }}
        >
          Sua empresa pode fazer parte desse ecossistema.{" "}
          <span style={{ color: tone.accent }}>Sem custo.</span>
        </h1>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 22,
            color: tone.textDim,
            lineHeight: 1.5,
            maxWidth: 820,
          }}
        >
          Conte com nossa assessoria e análise especializada para acessar os
          melhores fornecedores, produtos e soluções para o seu negócio — de
          forma totalmente gratuita.
        </p>

        <div style={{ flex: 1 }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            paddingTop: 28,
            borderTop: `1px solid ${tone.divider}`,
          }}
        >
          {HERO_KPIS.map((kpi, i) => (
            <KpiColumn key={kpi.label} index={i} {...kpi} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Slide02Kpis: React.FC = () => (
  <SlideToneProvider slideNumber={2}>
    <Slide02KpisInner />
  </SlideToneProvider>
);
