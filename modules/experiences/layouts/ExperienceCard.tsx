import React from "react";
import Image from "next/image";

type ExperienceCardProps = {
  company: string;
  company_image: string;
  title: string;
  dates: string;
  description: string;
  responsibilities: string[];
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  company_image,
  title,
  dates,
  description,
  responsibilities,
}) => {
  return (
    <article className="w-full  rounded-2xl px-10 py-10 transition-all hover:-translate-y-1 hover:shadow-projectCard md:space-y-5">
      <header className="mb-3">
        <h1 className="text-2xl font-bold md:text-2xl">{company}</h1>
        <h2 className="md:text-md text-lg font-bold">{title}</h2>
        <h3 className="text-md font-bold md:text-lg">{dates}</h3>
      </header>
      <p className="text-sm font-medium md:text-xl">{description}</p>
      <div className="mt-5">
        <h4 className="text-xl font-semibold text-brand-aqua">
          Responsibilities and things I did
        </h4>
        <ul className="text-md mt-5 list-disc space-y-2 pl-6 font-medium md:text-lg">
          {responsibilities.map((responsibility, index) => (
            <li key={index}> {responsibility}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
