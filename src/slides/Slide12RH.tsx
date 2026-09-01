import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "rh")!;

export const Slide12RH: React.FC = () => (
  <SolutionDetail slideNumber={12} solution={solution} />
);
