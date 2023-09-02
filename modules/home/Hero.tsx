import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useMedia } from "react-use";
import { BsArrowRight } from "react-icons/bs";

import projectsData from "@/_data/projects.json";
import { profile } from "@/constants/site";

export const Hero = () => {
  const isWide = useMedia("(min-width: 1024px)", true);
  const { name, description } = profile;
  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-col items-start justify-between">
          <h1 className="mb-2 text-4xl font-semibold md:mb-5 md:flex md:text-5xl">
            {name}{" "}
          </h1>
          <p className="font-secondary text-xl font-normal tracking-wide md:text-2xl">
            {description}
          </p>
        </div>
      </div>

      <section id="latest__project" className="mt-5">
        <h1 className="text-3xl font-bold">Latest Project</h1>
        <hr className="my-5" />
        <div className="grid  w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.slice(0, isWide ? 3 : 4).map((item, idx) => (
            <div
              key={idx}
              className="transition-[ transfrom, border-color]  overflow-hidden rounded-md border-2 border-transparent duration-300 hover:-translate-y-1 hover:border-brand-cream"
            >
              <Image
                src={item.image}
                alt="project image"
                width={640}
                height={360}
                className="max-h-32 object-cover"
              />
              <div className="flex flex-col p-4">
                <h1 className="my-3 font-semibold xl:text-2xl">{item.title}</h1>
                <p className="text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 flex items-center justify-end gap-5 text-xl font-semibold"
        >
          View All Projects
          <BsArrowRight size={24} />
        </Link>
      </section>
    </>
  );
};
