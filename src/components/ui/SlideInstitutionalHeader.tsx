import React from "react";
import { Img, staticFile } from "remotion";

export const SlideInstitutionalHeader: React.FC<{ slideNumber: number }> = ({
  slideNumber,
}) => {
  const num = String(slideNumber).padStart(2, "0");
  return (
    <div
      style={{
        padding: "24px 64px 0",
        position: "relative",
        zIndex: 2,
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 16,
          borderBottom: "1px solid #E7E8E8",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#94A3B8",
          }}
        >
          {num} | APRESENTAÇÃO INSTITUCIONAL — 2026
        </div>
        <Img
          src={staticFile("logo-dark.png")}
          style={{ height: 44, objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
