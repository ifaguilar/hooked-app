import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

// Context
import { AuthContext } from "../context/AuthContext";

const Watchlist = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
        <Navigate to="/login" />
      </div>
    );
  }

  return <div>Watchlist</div>;
};

export default Watchlist;
