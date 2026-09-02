import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { spring } from "remotion";
import { OUTRO } from "../data/presentationData";
import { FONT_SANS } from "../theme";
import { CinematicBackground } from "../components/effects/CinematicBackground";
import { blurReveal } from "../utils/animation";

export const Slide18Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({ frame, fps, config: { damping: 16, stiffness: 90 } });
  const titleReveal = blurReveal(frame, 26, 26);
  const subReveal = blurReveal(frame, 48, 22);
  const footerReveal = blurReveal(frame, 66, 20);

  return (
    <AbsoluteFill style={{ fontFamily: FONT_SANS }}>
      <CinematicBackground variant="default" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 140px",
        }}
      >
        <div
          style={{
            opacity: logoSpring,
            transform: `scale(${0.85 + logoSpring * 0.15})`,
            marginBottom: 32,
          }}
        >
          <Img src={staticFile("logo-light.png")} style={{ height: 64, objectFit: "contain" }} />
        </div>

        <div
          style={{
            opacity: titleReveal.opacity,
            filter: titleReveal.filter,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: 16,
          }}
        >
          {OUTRO.eyebrow}
        </div>

        <h1
          style={{
            margin: 0,
            opacity: titleReveal.opacity,
            filter: titleReveal.filter,
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            lineHeight: 1.18,
            maxWidth: 980,
          }}
        >
          {OUTRO.title}
        </h1>

        <p
          style={{
            opacity: subReveal.opacity,
            filter: subReveal.filter,
            margin: "20px 0 0",
            fontSize: 22,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 680,
          }}
        >
          {OUTRO.subtitle}
        </p>

        <div
          style={{
            opacity: footerReveal.opacity,
            filter: footerReveal.filter,
            marginTop: 36,
            padding: "12px 28px",
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.25)",
            fontSize: 20,
            letterSpacing: "0.04em",
            color: "#FFFFFF",
          }}
        >
          {OUTRO.url}
        </div>

        <div
          style={{
            opacity: footerReveal.opacity,
            marginTop: 28,
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
          }}
        >
          {OUTRO.cta}
          <br />
          {OUTRO.email} · {OUTRO.phone}
          <br />
          {OUTRO.address}
        </div>
      </div>
    </AbsoluteFill>
  );
};
