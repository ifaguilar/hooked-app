import React from "react";
import { Link } from "react-router-dom";

// Assets
import { ReactComponent as Hooked } from "../assets/hooked-logo.svg";

const Logo = ({ onClick }) => (
  <Link to="/" onClick={onClick}>
    <Hooked className="w-auto h-8" />
  </Link>
);

export default Logo;
