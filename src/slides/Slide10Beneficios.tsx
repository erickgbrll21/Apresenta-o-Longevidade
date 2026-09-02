import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "beneficios")!;

export const Slide10Beneficios: React.FC = () => (
  <SolutionDetail slideNumber={10} solution={solution} />
);
