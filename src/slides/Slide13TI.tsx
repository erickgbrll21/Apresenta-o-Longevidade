import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "ti")!;

export const Slide13TI: React.FC = () => (
  <SolutionDetail slideNumber={13} solution={solution} />
);
