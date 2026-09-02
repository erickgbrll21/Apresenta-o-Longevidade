import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "esg")!;

export const Slide16ESG: React.FC = () => (
  <SolutionDetail slideNumber={16} solution={solution} />
);
