import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Index = ({
  title,
  children,
  styles,
}: {
  title: string;
  children: React.ReactNode;
  styles?: string;
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const onMouseHoverHandle = () => {
    setIsTooltipVisible(true);
  };

  const onMouseLeaveHandle = () => {
    setIsTooltipVisible(false);
  };

  const tooltipVariant = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative inline">
      <div
        className={clsx("relative", styles)}
        onMouseEnter={onMouseHoverHandle}
        onMouseLeave={onMouseLeaveHandle}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <motion.div
          className="absolute bottom-full mb-2 rounded bg-neutral-500 px-2 py-1 text-xs font-medium text-neutral-100 dark:bg-neutral-700 sm:block"
          variants={tooltipVariant}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.div>
      )}
    </div>
  );
};

export default Index;
