import React from "react";
import { SOLUTIONS } from "../data/presentationData";
import { SolutionDetail } from "../components/ui/SolutionDetail";

const solution = SOLUTIONS.find((s) => s.slug === "educacao")!;

export const Slide15Educacao: React.FC = () => (
  <SolutionDetail slideNumber={15} solution={solution} />
);
