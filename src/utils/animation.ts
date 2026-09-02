import { interpolate, spring } from "remotion";

export const fadeIn = (frame: number, start: number, duration = 20) => {
  return interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

export const blurReveal = (frame: number, start: number, duration = 25) => {
  const opacity = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const blur = interpolate(frame, [start, start + duration], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity, blur, filter: `blur(${blur}px)` };
};

export const slideUp = (
  frame: number,
  fps: number,
  start: number,
  fromY = 24
) => {
  const progress = spring({
    frame: frame - start,
    fps,
    config: { damping: 20, stiffness: 120, mass: 0.9 },
  });
  return {
    opacity: interpolate(progress, [0, 1], [0, 1]),
    transform: `translateY(${interpolate(progress, [0, 1], [fromY, 0])}px)`,
  };
};

export const staggerDelay = (index: number, base = 8, step = 6) =>
  base + index * step;
