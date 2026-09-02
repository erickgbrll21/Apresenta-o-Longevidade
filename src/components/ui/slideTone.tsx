import React from "react";
import { SLIDE_TONES, SlideToneTokens, toneForSlide } from "../../theme";

export const SlideToneContext = React.createContext<SlideToneTokens>(SLIDE_TONES.light);

export const useSlideTone = () => React.useContext(SlideToneContext);

export const SlideToneProvider: React.FC<{
  slideNumber: number;
  children: React.ReactNode;
}> = ({ slideNumber, children }) => (
  <SlideToneContext.Provider value={SLIDE_TONES[toneForSlide(slideNumber)]}>
    {children}
  </SlideToneContext.Provider>
);
