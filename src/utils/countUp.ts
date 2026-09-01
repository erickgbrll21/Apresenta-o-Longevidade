import { interpolate, spring } from "remotion";

export type KpiCountFormat = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  decimalSeparator?: string;
  thousandsSeparator?: string;
};

export const getCountUpValue = (
  frame: number,
  fps: number,
  delay: number,
  target: number
) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 24, stiffness: 65, mass: 1 },
  });
  return interpolate(progress, [0, 1], [0, target], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

export const formatKpiCount = (value: number, fmt: KpiCountFormat) => {
  const decimals = fmt.decimals ?? 0;
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const thousands = fmt.thousandsSeparator ?? ".";
  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
  const dec = fmt.decimalSeparator ?? ",";
  const full = decPart ? `${withThousands}${dec}${decPart}` : withThousands;
  return `${fmt.prefix ?? ""}${full}${fmt.suffix ?? ""}`;
};
