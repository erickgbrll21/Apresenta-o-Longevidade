export const theme = {
  bg: "#FFFFFF",
  surface: "#F5F7FA",
  card: "#FFFFFF",
  cardFill: "#F5F7FA",
  headerBg: "rgba(20,40,63,0.04)",

  text: "#14283F",
  textMuted: "#3D5166",
  textDim: "#5C6E82",

  cardBorder: "rgba(27, 52, 84, 0.12)",
  borderSubtle: "rgba(27, 52, 84, 0.08)",
  grayLine: "#E7E8E8",
};

// Paleta extraída do site via Firecrawl branding
export const BRAND = {
  navy: "#14283F",
  titleLine1: "#1B3454",
  titleLine2: "#1560BD",
  blue: "#1560BD",
  blueLight: "#3B82F6",
  badgeBorder: "#1560BD",
  badgeBg: "#E8F1FA",
};

export const ACCENTS = {
  blue: "#1560BD",
  green: "#10B981",
  amber: "#F59E0B",
  red: "#EF4444",
  purple: "#A855F7",
  pink: "#EC4899",
  cyan: "#22D3EE",
};

export const GRADIENTS = {
  volume: "linear-gradient(180deg, #5BA3E8 0%, #1560BD 100%)",
  atendimentos: "linear-gradient(180deg, #4ADE80 0%, #059669 100%)",
  clientes: "linear-gradient(180deg, #FBBF24 0%, #EA580C 100%)",
  fornecedores: "linear-gradient(180deg, #FB7185 0%, #E11D48 100%)",
  advogados: "linear-gradient(180deg, #C4B5FD 0%, #7C3AED 100%)",
};

export const FONT_SANS =
  "var(--font-sans), 'IBM Plex Sans', system-ui, -apple-system, sans-serif";
export const FONT_DISPLAY =
  "var(--font-display), 'IBM Plex Sans', var(--font-sans)";

export type SlideToneKind = "light" | "blue";

export const SLIDE_TONES = {
  light: {
    kind: "light" as const,
    bg: "#FFFFFF",
    overlay: undefined as string | undefined,
    text: "#14283F",
    textDim: "#5C6E82",
    textMuted: "#3D5166",
    accent: "#1560BD",
    headerMeta: "#94A3B8",
    headerBorder: "#E7E8E8",
    divider: "#E5E7EB",
    logo: "logo-dark.png",
    cardShadow: "0 8px 32px rgba(15, 23, 42, 0.08)",
    badgeBg: "#E8F1FA",
    badgeBorder: "#1560BD",
    badgeText: "#1B3454",
  },
  blue: {
    kind: "blue" as const,
    bg: "#1560BD",
    overlay:
      "radial-gradient(circle at 82% 16%, rgba(255,255,255,0.16) 0%, transparent 46%), linear-gradient(165deg, #1B3454 0%, #1560BD 58%)",
    text: "#FFFFFF",
    textDim: "rgba(255,255,255,0.82)",
    textMuted: "rgba(255,255,255,0.68)",
    accent: "#E8F1FA",
    headerMeta: "rgba(255,255,255,0.62)",
    headerBorder: "rgba(255,255,255,0.22)",
    divider: "rgba(255,255,255,0.22)",
    logo: "logo-light.png",
    cardShadow: "0 16px 40px rgba(8, 24, 48, 0.28)",
    badgeBg: "rgba(255,255,255,0.12)",
    badgeBorder: "rgba(255,255,255,0.45)",
    badgeText: "#FFFFFF",
  },
};

export type SlideToneTokens = (typeof SLIDE_TONES)[SlideToneKind];

export const toneForSlide = (slideNumber: number): SlideToneKind =>
  slideNumber % 2 === 0 ? "blue" : "light";
