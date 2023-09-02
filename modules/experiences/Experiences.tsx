import React from "react";
import { ExperienceCard } from "./layouts/ExperienceCard";
import experiences from "@/_data/experiences.json";

export const Experiences = () => {
  return (
    <div className="flex flex-col space-y-5">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}
    </div>
  );
};
