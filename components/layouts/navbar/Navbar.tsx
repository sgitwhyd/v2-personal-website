import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import useTheme from "@/hooks/useTheme";

import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

import { IconButton } from "@/components/ui";
import NavMenu from "./NavMenu";
import navLinks from "@/_data/nav-menu.json";

import { useMedia } from "react-use";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isWide = useMedia("(min-width: 768px)", true);
  const [themeMounted, setThemeMounted] = useState(false);
  const { isLight, setTheme } = useTheme();

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleClickNavLink = () => {
    setShowMenu(false);
  };

  const handleToggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  useEffect(() => {
    setShowMenu(false);
  }, [isWide]);

  useEffect(() => {
    setThemeMounted(true);
  }, []);

  return (
    <header className="md:shadow-sm">
      <nav
        className={clsx(
          "bg-brand-light dark:bg-brand-dark mx-auto flex w-full max-w-5xl items-center justify-between p-4 transition-[background-color] duration-300 sm:px-9",
          "bottom-0 z-[99] w-full bg-brand-secondary p-4 dark:bg-brand-main md:sticky md:top-0",
          {
            absolute: isWide,
            fixed: !isWide,
          },
        )}
      >
        <Link
          href="/"
          onClick={handleClickNavLink}
          className="z-10 font-secondary text-2xl font-bold tracking-widest md:text-3xl"
        >
          Sigitwhyd
        </Link>

        <div className="hidden space-x-8 font-secondary text-xl md:flex md:w-fit">
          {navLinks.map((nav, index) => (
            <Link
              href={nav.path}
              key={index}
              className="block rounded-md px-4 py-2 hover:bg-gray-200 hover:dark:bg-gray-700"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div>
          {themeMounted && (
            <IconButton label="toggle-theme" onClick={handleToggleTheme}>
              {isLight ? <FiSun /> : <FiMoon />}
            </IconButton>
          )}
          <IconButton
            label="toggle-menu"
            className="visible  relative z-10 md:hidden"
            onClick={handleShowMenu}
          >
            {showMenu ? <FiX /> : <FiMenu />}
          </IconButton>
        </div>
      </nav>
      <AnimatePresence>
        {showMenu && !isWide && (
          <NavMenu handleOnClickNavLink={handleClickNavLink} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
