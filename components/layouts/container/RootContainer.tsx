import React, { FC } from "react";
import clsx from "clsx";
import Image from "next/image";

type RootContainerProps = {
  children: React.ReactNode;
};

const RootContainer: FC<RootContainerProps> = ({ children }) => {
  return (
    <>
      <div
        className={clsx(
          "m-auto flex h-full min-h-screen w-full flex-col",
          "bg-brand-secondary text-black",
          "font-main transition-[background-color] duration-300",
          "dark:bg-brand-main dark:text-white",
        )}
      >
        {children}
      </div>
    </>
  );
};

export default RootContainer;
