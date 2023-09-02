import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import PageContainer from "@/components/layouts/container/PageContainer";
import { Heading, Tooltip } from "@/components/ui";
import { profile } from "@/constants/site";
import { skills } from "@/constants/skills";
import { Stacks } from "@/constants/stacks";

const pageProps = {
  title: "About",
  description: `${profile.description}`,
};

const skillVariant = {
  initial: {
    opacity: 0,
    translateX: -100,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const About = () => {
  const { socials } = profile;
  return (
    <PageContainer seoProps={pageProps}>
      <Heading title="About" showSeparator={false} />
      <p className="text-md sm:text-xl">{profile.about}</p>
      <section id="skills" className="mt-10">
        <h1 className=" text-3xl font-bold">Skills</h1>
        <hr className="my-5" />
        <div className="grid grid-cols-3 justify-items-center gap-y-5 sm:grid-cols-5 md:grid-cols-10">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariant}
              initial="initial"
              animate="animate"
              key={skill.name}
              className="w-10"
            >
              <Tooltip
                title={skill.level}
                styles="transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  {Stacks[skill.name]}
                  <div className="mt-3">{skill.name}</div>
                </div>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="getInTouch" className="mt-10">
        <h1 className="text-xl font-bold sm:text-3xl">Get In Touch</h1>
        <hr className="my-5" />
        <h4 className="text-base  sm:text-xl">
          You can reach me via email in{" "}
          <Link
            className="underline hover:text-blue-600 "
            href="mailto:sigitwahyu.mutu@gmail.com"
          >
            sigitwahyu.mutu@gmail.com
          </Link>{" "}
          or via socials below
        </h4>
        <ul className="mt-3 list-disc pl-6">
          {Object.entries(socials).map(([key, value]) => (
            <li key={key} className="text-sm sm:text-lg ">
              <span className="capitalize">{key}</span> -{" "}
              <Link href={value} className="underline hover:text-blue-600">
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
};

export default About;
