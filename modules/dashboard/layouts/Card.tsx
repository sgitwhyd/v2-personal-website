import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FiExternalLink } from "react-icons/fi";

type CardProps = {
  title: string;
  className?: string;
  link: string;
  count: any;
};

export const Card = ({ title, className, link, count }: CardProps) => {
  return (
    <div
      className={clsx(
        "relative h-[100px] transform rounded-2xl border-4 border-solid border-brand-midnight-blue bg-brand-aqua p-4 text-black shadow-projectCard duration-[0.4s] ease-in",
        className,
        "dark:bg-brand-cream",
      )}
    >
      <Link
        href={link}
        className=" flex w-fit items-center font-semibold transition-all hover:-translate-y-1"
        target="_blank"
      >
        {title} <FiExternalLink className="ml-2" />
      </Link>
      <p className="mt-3 font-secondary text-2xl font-bold">{count}</p>
    </div>
  );
};
