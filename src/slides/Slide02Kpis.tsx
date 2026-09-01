import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { HERO_KPIS } from "../data/presentationData";
import { BRAND, theme, FONT_SANS } from "../theme";
import { Badge } from "../components/ui/Badge";
import { KpiColumn } from "../components/ui/KpiColumn";
import { SlideInstitutionalHeader } from "../components/ui/SlideInstitutionalHeader";
import { fadeIn, slideUp } from "../utils/animation";
import { useVideoConfig } from "remotion";

export const Slide02Kpis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleAnim = slideUp(frame, fps, 10, 22);

  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_SANS }}>
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
            color: theme.text,
            maxWidth: 900,
          }}
        >
          R$ 1,5 bi em contratos.{" "}
          <span style={{ color: BRAND.blue }}>Sem custo para você.</span>
        </h1>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 22,
            color: theme.textDim,
            lineHeight: 1.5,
            maxWidth: 760,
          }}
        >
          Números consolidados da operação: R$ 1,5 bi em contratos, 6.000+
          atendimentos, 400+ clientes, 40+ fornecedores e 200+ advogados no grupo.
        </p>

        <div style={{ flex: 1 }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            paddingTop: 28,
            borderTop: "1px solid #E5E7EB",
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
