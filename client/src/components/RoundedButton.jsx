import React from "react";

const RoundedButton = ({ variant, children, onClick }) => (
  <button
    className={`${
      variant === "primary"
        ? "text-white bg-red-600 hover:brightness-95"
        : "text-neutral-900 dark:text-white bg-white hover:brightness-95 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    } rounded-full inline-flex items-center justify-center h-11 w-11`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default RoundedButton;
