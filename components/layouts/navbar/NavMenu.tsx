import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

import navMenus from '@/_data/nav-menu.json'

const NavMenu = () => {
  return (
    <div className="h-screen absolute w-full z-10">
      {' '}
      <motion.ul
        className={clsx(' bottom-0 flex flex-col justify-center w-full h-full text-center bg-slate-800 space-y-6')}
        initial={{
          y: 500,
        }}
        animate={{
          y: 0,
          transition: {
            duration: 0.25,
            delayChildren: 0.25,
            staggerChildren: 0.2,
            staggerDirection: 1,
          },
        }}
        exit={{
          y: 0,
        }}
      >
        {navMenus.map((nav, index) => (
          <motion.li key={index} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Link href={nav.path} className="font-medium">
              {nav.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default NavMenu
