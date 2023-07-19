import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import useTheme from '@/hooks/useTheme'

import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

import IconButton from '@/components/ui/button/IconButton'
import NavMenu from './NavMenu'
import navLinks from '@/_data/nav-menu.json'

import { useMedia } from 'react-use'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const isWide = useMedia('(min-width: 768px)', true)
  const [themeMounted, setThemeMounted] = useState(false)
  const { isLight, setTheme } = useTheme()

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  const handleToggleTheme = () => {
    setTheme(isLight ? 'dark' : 'light')
  }

  useEffect(() => {
    setThemeMounted(true)
  }, [])

  return (
    <header>
      <nav>
        <div className={clsx('bottom-0 md:sticky md:top-0 z-20', { absolute: isWide, fixed: !isWide })}>
          <div
            className={clsx(
              'mx-auto flex w-full max-w-5xl justify-between',
              'bg-white p-4',
              'transition-[background-color] duration-300',
              'dark:bg-slate-800'
            )}
          >
            <div className=""></div>
            <IconButton label="toggle-menu" className="visible relative md:hidden z-10" onClick={handleShowMenu}>
              {showMenu ? <FiX /> : <FiMenu />}
            </IconButton>

            <div className="hidden md:flex md:w-fit space-x-6">
              {navLinks.map((nav, index) => (
                <Link href={nav.path} key={index}>
                  {nav.name}
                </Link>
              ))}
            </div>

            {themeMounted && (
              <IconButton label="toggle-theme" className="" onClick={handleToggleTheme}>
                {isLight ? <FiSun /> : <FiMoon />}
              </IconButton>
            )}
          </div>
        </div>
        <AnimatePresence>{showMenu && !isWide && <NavMenu />}</AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
