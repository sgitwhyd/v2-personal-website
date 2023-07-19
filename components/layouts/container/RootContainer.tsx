import React, { FC } from 'react'
import clsx from 'clsx'

type RootContainerProps = {
  children: React.ReactNode
}

const RootContainer: FC<RootContainerProps> = ({ children }) => {
  return (
    <div
      className={clsx(
        'm-auto flex h-full min-h-screen w-full flex-col',
        'bg-white text-black',
        'transition-[background-color] duration-300 font-main',
        'dark:bg-slate-800 dark:text-white'
      )}
    >
      {children}
    </div>
  )
}

export default RootContainer
