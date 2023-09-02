import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { ProjectType } from "@/types/";

export const CardProject = ({
  title,
  description,
  demoLink,
  githubLink,
  image,
}: ProjectType) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-black  bg-transparent text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-projectCard  dark:text-white">
      <Image
        src={image}
        width={1280}
        height={720}
        alt={`${title} - image`}
        className="object-contain"
        priority
      />

      <div className="flex h-full flex-col justify-between px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <Link href={githubLink} aria-label={title} target="_blank">
            <BsGithub className="ml-2 inline-block text-2xl" />
          </Link>
        </div>
        <p className="mt-2 font-secondary text-lg font-medium">{description}</p>

        <Link
          className="ml-auto mt-3 inline-flex w-fit items-center border-2 border-solid border-brand-midnight-blue bg-brand-cream  px-8 py-2 text-lg font-bold text-black transition-[background-color] duration-300"
          href={demoLink}
          target="_blank"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};
