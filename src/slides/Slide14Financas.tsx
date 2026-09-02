import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "financas")!;

export const Slide14Financas: React.FC = () => (
  <SolutionDetail slideNumber={14} solution={solution} />
);
