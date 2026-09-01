import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

import { Slide01Hero } from "./slides/Slide01Hero";
import { Slide02Kpis } from "./slides/Slide02Kpis";
import { Slide03Frentes } from "./slides/Slide03Frentes";
import { Slide04Modelo } from "./slides/Slide04Modelo";
import { Slide05Demanda } from "./slides/Slide05Demanda";
import { Slide06Diferenciais } from "./slides/Slide06Diferenciais";
import { Slide07Ecossistema } from "./slides/Slide07Ecossistema";
import { Slide08MercadoPublico } from "./slides/Slide08MercadoPublico";
import { Slide09Juridico } from "./slides/Slide09Juridico";
import { Slide10Beneficios } from "./slides/Slide10Beneficios";
import { Slide11Saude } from "./slides/Slide11Saude";
import { Slide12RH } from "./slides/Slide12RH";
import { Slide13TI } from "./slides/Slide13TI";
import { Slide14Financas } from "./slides/Slide14Financas";
import { Slide15Educacao } from "./slides/Slide15Educacao";
import { Slide16ESG } from "./slides/Slide16ESG";
import { Slide17Depoimentos } from "./slides/Slide17Depoimentos";
import { Slide18Outro } from "./slides/Slide18Outro";

export const SLIDE_DURATION = 210; // 7s @ 30fps
export const TRANSITION_DURATION = 20;
export const HERO_TRANSITION_DURATION = 36;

const slides = [
  Slide01Hero,
  Slide02Kpis,
  Slide03Frentes,
  Slide04Modelo,
  Slide05Demanda,
  Slide06Diferenciais,
  Slide07Ecossistema,
  Slide08MercadoPublico,
  Slide09Juridico,
  Slide10Beneficios,
  Slide11Saude,
  Slide12RH,
  Slide13TI,
  Slide14Financas,
  Slide15Educacao,
  Slide16ESG,
  Slide17Depoimentos,
  Slide18Outro,
];

export const TOTAL_SLIDES = slides.length;

const transitionDurations = slides.map((_, i) =>
  i === 0 ? HERO_TRANSITION_DURATION : TRANSITION_DURATION
);

export const DURATION_IN_FRAMES =
  slides.length * SLIDE_DURATION -
  transitionDurations.slice(1).reduce((a, b) => a + b, 0);

export const FPS = 30;

export const LongevidadePresentation: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <TransitionSeries>
        {slides.map((Slide, index) => {
          const elements = [
            <TransitionSeries.Sequence key={`slide-${index}`} durationInFrames={SLIDE_DURATION}>
              <Slide />
            </TransitionSeries.Sequence>,
          ];

          if (index < slides.length - 1) {
            if (index === 0) {
              elements.push(
                <TransitionSeries.Transition
                  key={`t-${index}`}
                  presentation={wipe({ direction: "from-left" })}
                  timing={springTiming({
                    config: { damping: 200 },
                    durationInFrames: HERO_TRANSITION_DURATION,
                  })}
                />
              );
            } else if (index % 2 === 0) {
              elements.push(
                <TransitionSeries.Transition
                  key={`t-${index}`}
                  presentation={fade()}
                  timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                />
              );
            } else {
              elements.push(
                <TransitionSeries.Transition
                  key={`t-${index}`}
                  presentation={slide({ direction: "from-right" })}
                  timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                />
              );
            }
          }

          return elements;
        })}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
