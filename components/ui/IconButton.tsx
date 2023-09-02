import React, { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: React.ReactNode;
  className?: string;
};

const IconButton: FC<IconButtonProps> = ({
  label,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "rounded-md px-4 py-3",
        "transition-[background-color] duration-300",
        "hover:bg-gray-200 dark:hover:bg-gray-700",

        className,
      )}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
