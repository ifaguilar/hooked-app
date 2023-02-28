import React from "react";

const RoundedButton = ({
  children,
  onClick,
  hasShadow = false,
  isActive = false,
}) => (
  <button
    className={`${
      hasShadow
        ? "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
        : ""
    } text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 hover:brightness-90 dark:hover:bg-neutral-800 rounded-full inline-flex items-center justify-center h-12 w-12`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default RoundedButton;
