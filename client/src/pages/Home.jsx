import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

// Components
import Button from "../components/Button";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

// Loaders
import { popularMovies } from "../loaders/popularMovies";
import { topRatedMovies } from "../loaders/topRatedMovies";
import { upcomingMovies } from "../loaders/upcomingMovies";
import { moviesByGenre } from "../loaders/moviesByGenre";

// Utils
import { getRandomItem } from "../utils/getRandomItem";

const Home = () => {
  const { movies, name } = useLoaderData();

  const params = useParams();

  const [allMovies, setAllMovies] = useState(movies);
  const [mainMovie, setMainMovie] = useState(getRandomItem(movies));
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1000);

  useEffect(() => {
    setMainMovie(getRandomItem(movies));
  }, [movies]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchNextMovies();
    }
  }, [currentPage]);

  const fetchNextMovies = async () => {
    let data = [];

    switch (name) {
      case "Popular":
        data = await popularMovies(currentPage);
        break;
      case "Top Rated":
        data = await topRatedMovies(currentPage);
        break;
      case "Upcoming":
        data = await upcomingMovies(currentPage);
        break;
      default:
        data = await moviesByGenre({ params }, currentPage);
        break;
    }

    const nextMovies = data.movies;

    setAllMovies((previousMovies) => [...previousMovies, ...nextMovies]);
  };

  return (
    <>
      {mainMovie && <Hero key={mainMovie.id} movie={mainMovie} />}
      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="flex flex-col gap-20">
          <Heading size="md">{name} Movies</Heading>
          <MovieGrid>
            {allMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </MovieGrid>
          {currentPage <= lastPage ? (
            <div className="flex justify-center">
              <div className="flex flex-col w-full max-w-lg">
                <Button
                  variant="primary"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Show more
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
