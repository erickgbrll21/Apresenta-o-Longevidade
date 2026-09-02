import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "saude")!;

export const Slide11Saude: React.FC = () => (
  <SolutionDetail slideNumber={11} solution={solution} />
);
