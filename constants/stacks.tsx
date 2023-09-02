import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiApollographql,
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWordpress,
  SiNpm,
  SiYarn,
} from "react-icons/si";

type StackProps = {
  [key: string]: React.ReactNode;
};

const iconSize = "100%";

export const Stacks: StackProps = {
  "React.Js": <SiReact size={iconSize} />,
  "Next.Js": <SiNextdotjs size={iconSize} />,
  HTML: <SiHtml5 size={iconSize} />,
  CSS: <SiCss3 size={iconSize} />,
  Javascript: <SiJavascript size={iconSize} />,
  Typescript: <SiTypescript size={iconSize} />,
  "React Query": <SiReactquery size={iconSize} />,
  "Vue.Js": <SiVuedotjs size={iconSize} />,
  Tailwindcss: <SiTailwindcss size={iconSize} />,
  Redux: <SiRedux size={iconSize} />,
  Node: <SiNodedotjs size={iconSize} />,
  Github: <SiGithub size={iconSize} />,
  Jest: <SiJest size={iconSize} />,
  Sass: <SiSass size={iconSize} />,
  Framer: <SiFramer size={iconSize} />,
  Npm: <SiNpm size={iconSize} />,
  Yarn: <SiYarn size={iconSize} />,
};
