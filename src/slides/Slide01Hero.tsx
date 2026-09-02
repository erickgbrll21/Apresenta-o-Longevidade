import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HERO } from "../data/presentationData";
import { BRAND, FONT_SANS } from "../theme";
import { fadeIn, slideUp } from "../utils/animation";

export const Slide01Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const eyebrowOpacity = fadeIn(frame, 6, 20);
  const titleAnim = slideUp(frame, fps, 16, 30);
  const descAnim = slideUp(frame, fps, 34, 24);
  const footerOpacity = fadeIn(frame, 50, 20);
  const diamondOpacity = fadeIn(frame, 12, 28);

  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_SANS }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 82% 22%, rgba(21,96,189,0.12) 0%, rgba(255,255,255,0) 52%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px 48px",
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        <div style={{ opacity: fadeIn(frame, 2, 18) }}>
          <Img src={staticFile(HERO.logo)} style={{ height: 72, objectFit: "contain" }} />
        </div>

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                opacity: eyebrowOpacity,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: BRAND.blue,
                marginBottom: 22,
              }}
            >
              {HERO.eyebrow}
            </div>

            <h1
              style={{
                margin: 0,
                opacity: titleAnim.opacity,
                transform: titleAnim.transform,
                fontSize: 84,
                lineHeight: 1.06,
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: BRAND.titleLine1,
              }}
            >
              {HERO.titleLine1}
              <br />
              <span style={{ color: BRAND.blue }}>{HERO.titleLine2}</span>
            </h1>

            <p
              style={{
                opacity: descAnim.opacity,
                transform: descAnim.transform,
                marginTop: 28,
                maxWidth: 640,
                fontSize: 26,
                lineHeight: 1.55,
                color: "#5C6E82",
                fontWeight: 400,
              }}
            >
              {HERO.description}
            </p>
          </div>

          <div
            style={{
              opacity: diamondOpacity,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img
              src={staticFile(HERO.diamond)}
              style={{
                height: 520,
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div
          style={{
            opacity: footerOpacity,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 22,
            borderTop: "1px solid #E7E8E8",
            fontSize: 18,
            color: "#94A3B8",
            letterSpacing: "0.05em",
          }}
        >
          <span>longevidadebusiness.com.br</span>
          <span>APRESENTAÇÃO INSTITUCIONAL — 2026</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
