import React from "react";

const MenuHeading = ({ children }) => (
  <span className="flex items-center h-14 p-4 font-semibold text-sm uppercase text-neutral-900/60 dark:text-white/60">
    {children}
  </span>
);

export default MenuHeading;
