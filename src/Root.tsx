import React from "react";
import { Composition } from "remotion";
import { loadFont as loadPlex } from "@remotion/google-fonts/IBMPlexSans";
import {
  LongevidadePresentation,
  DURATION_IN_FRAMES,
  FPS,
} from "./LongevidadePresentation";

const { fontFamily: plexFamily } = loadPlex("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

document.documentElement.style.setProperty("--font-sans", plexFamily);
document.documentElement.style.setProperty("--font-display", plexFamily);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LongevidadeBusiness"
        component={LongevidadePresentation}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
