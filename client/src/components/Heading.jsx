import React from "react";

const Heading = ({ size, children }) => (
  <>
    {size === "lg" ? (
      <h2 className="font-bold text-4xl xl:text-6xl">{children}</h2>
    ) : (
      <h3 className="font-bold text-2xl xl:text-4xl">{children}</h3>
    )}
  </>
);

export default Heading;
