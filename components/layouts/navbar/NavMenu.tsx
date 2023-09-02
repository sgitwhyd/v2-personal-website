import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import navMenus from "@/_data/nav-menu.json";

const NavMenu = ({
  handleOnClickNavLink,
}: {
  handleOnClickNavLink: () => void;
}) => {
  return (
    <div className=" relative z-50">
      <motion.ul
        className={clsx(
          "fixed inset-0 flex  min-h-screen flex-col justify-center space-y-6 overflow-hidden bg-brand-secondary text-center transition-[background-color] dark:bg-brand-main",
        )}
        initial={{
          x: -1000,
        }}
        animate={{
          x: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
            when: "afterChildren",
          },
        }}
        exit={{
          x: -1000,
          transition: {
            duration: 0.8,
          },
        }}
      >
        {navMenus.map((nav, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, translateX: -500 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                delay: 0.8,
                duration: ((index + 1) * 4) / 10,
              },
            }}
            exit={{
              opacity: 0,
              translateX: -500,
              transition: {
                duration: ((index + 1) * 4) / 10,
              },
            }}
          >
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
    </div>
  );
};

export default NavMenu;
