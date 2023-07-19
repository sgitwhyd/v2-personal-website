import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import clsx from 'clsx'

type PageContainerProps = {
  children: React.ReactNode
  className?: string
  seoProps?: NextSeoProps
}

const PageContainer = ({ children, className, seoProps }: PageContainerProps) => {
  return (
    <main
      className={clsx(
        'mx-auto min-h-screen flex w-full max-w-5xl flex-col justify-center py-6 px-4 xs:py-6 xs:px-9',
        className
      )}
    >
      <NextSeo {...seoProps} key="next-seo" />
      {children}
    </main>
  )
}

export default PageContainer
