import React from "react";

const Pill = ({ children }) => (
  <span className="bg-red-600 text-white shadow font-semibold text-xs rounded-full py-2 px-4">
    {children}
  </span>
);

export default Pill;
