import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

// Components
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

// Utils
import { getRandomItem } from "../utils/getRandomItem";

const Home = () => {
  const { movies, name } = useLoaderData();

  const [mainMovie, setMainMovie] = useState(getRandomItem(movies));

  useEffect(() => {
    setMainMovie(getRandomItem(movies));
  }, [movies]);

  return (
    <>
      {mainMovie && <Hero key={mainMovie.id} movie={mainMovie} />}
      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="flex flex-col gap-20">
          <Heading size="md">{name} Movies</Heading>
          <MovieGrid>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </MovieGrid>
        </div>
      </div>
    </>
  );
};

export default Home;
