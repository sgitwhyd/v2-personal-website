import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { FiExternalLink } from 'react-icons/fi'

type CardProps = {
  title: string
  className?: string
  link: string
  count: any
}

export const Card = ({ title, className, link, count }: CardProps) => {
  return (
    <div
      className={clsx(
        'bg-brand-aqua relative rounded-2xl p-4 h-[100px] text-black transform ease-in duration-[0.4s] border-4 border-solid border-brand-midnight-blue shadow-projectCard',

        className,
        'dark:bg-brand-cream'
      )}
    >
      <Link href={link} className="flex items-center font-semibold" target="_blank">
        {title} <FiExternalLink className="ml-2" />
      </Link>
      <p className="text-2xl mt-3 font-bold font-secondary">{count}</p>
    </div>
  )
}
