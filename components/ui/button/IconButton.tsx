import React, { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: React.ReactNode
  className?: string
}

const IconButton: FC<IconButtonProps> = ({ label, children, className, ...rest }) => {
  return (
    <button
      className={clsx(
        'rounded-md py-3 px-4',
        'transition-[background-color] duration-300',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        'md:py-2',
        className
      )}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton
