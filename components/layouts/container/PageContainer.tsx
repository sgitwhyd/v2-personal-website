import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import clsx from "clsx";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  seoProps?: NextSeoProps;
};

const PageContainer = ({
  children,
  className,
  seoProps,
}: PageContainerProps) => {
  return (
    <main
      className={clsx(
        "z-20 mx-auto mb-16 flex min-h-screen w-full max-w-5xl flex-col justify-center overflow-hidden px-4 py-6 sm:px-9 sm:py-6 md:mb-0",
        className,
      )}
    >
      <NextSeo {...seoProps} key="next-seo" />
      {children}
    </main>
  );
};

export default PageContainer;
