import React from "react";

const Dropdown = ({ children, isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute w-64 z-50 top-[60px] right-0 py-4 rounded-lg shadow-xl bg-white dark:bg-neutral-900 border border-neutral-900/5 dark:border-white/5`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
