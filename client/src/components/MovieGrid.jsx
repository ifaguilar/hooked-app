import React from "react";

const MovieGrid = ({ children }) => (
  <div className="grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {children}
  </div>
);

export default MovieGrid;
