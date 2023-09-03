import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import navMenus from "@/_data/nav-menu.json";

const containerVariants = {
  hidden: {
    x: -768,
    transition: {
      duration: 0.25,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.25,
      delayChildren: 0.25,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const linkVariants = {
  hidden: {
    translateX: -248,
    opacity: 0,
  },
  show: {
    translateX: 0,
    opacity: 1,
  },
};

const NavMenu = ({
  handleOnClickNavLink,
}: {
  handleOnClickNavLink: () => void;
}) => {
  return (
    <motion.ul
      className={clsx(
        "fixed inset-0 flex min-h-screen  min-w-full flex-col justify-center space-y-6 overflow-hidden bg-brand-secondary text-center transition-[background-color] duration-300 dark:bg-brand-main",
        "z-50",
      )}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {navMenus.map((nav, index) => (
        <motion.li key={index} variants={linkVariants}>
          <Link
            href={nav.path}
            className="font-medium"
            onClick={handleOnClickNavLink}
          >
            {nav.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavMenu;
