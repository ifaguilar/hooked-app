import React from "react";

const Avatar = ({ src, onClick = null }) => (
  <img
    className="h-12 w-12 rounded-full cursor-pointer"
    src={src}
    alt="Avatar"
    onClick={onClick}
  />
);

export default Avatar;
