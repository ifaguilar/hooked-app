import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

// Components
import Heading from "../components/Heading";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

// Context
import { AuthContext } from "../context/AuthContext";

const Watchlist = () => {
  const { watchlist, isTokenValid } = useLoaderData();

  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!isTokenValid) {
      logout();
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
        <Navigate
          to="/login"
          state={{
            sessionExpired: true,
          }}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-32">
      <div className="min-h-[calc(100vh_-_208px)] flex flex-col gap-20">
        <Heading size="md">Watchlist</Heading>
        {watchlist?.length > 0 ? (
          <MovieGrid>
            {watchlist.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </MovieGrid>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 flex-grow text-center">
            <p>Your watchlist is empty.</p>
            <p>
              Try adding some items to your list by clicking the "
              <span className="font-bold">Add to Watchlist</span>" button.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
