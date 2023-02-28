import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";

// Components
import Button from "./Button";
import Heading from "./Heading";
import Pill from "./Pill";
import Rating from "./Rating";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { getImageURL } from "../helpers/getImageURL";

// Utils
import { truncateString } from "../utils/truncateString";

const Hero = ({ movie }) => {
  const { theme } = useContext(ThemeContext);

  const genres = useRouteLoaderData("app").genres;

  const [movieGenres, setMovieGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const backgroundRef = useCallback(
    (node) => {
      if (node !== null) {
        {
          movie.backdrop_path
            ? (node.style.backgroundImage = `url(${getImageURL(
                "original",
                movie.backdrop_path
              )}`)
            : theme === "light"
            ? (node.style.backgroundColor = "#f3f3f3")
            : (node.style.backgroundColor = "#171717");
        }
      }
    },
    [theme]
  );

  useEffect(() => {
    let preloaderImage = document.createElement("img");

    preloaderImage.src = getImageURL("original", movie.backdrop_path);

    preloaderImage.addEventListener("load", (event) => {
      setIsLoading(false);
      preloaderImage = null;
    });

    return removeEventListener("load", preloaderImage);
  }, []);

  useEffect(() => {
    filterGenres();
  }, [movie.genre_ids]);

  const filterGenres = () => {
    const movieGenres = genres.filter((genre) => {
      return movie.genre_ids.includes(genre.id);
    });

    setMovieGenres(movieGenres);
  };

  return (
    <div
      className={`relative h-[90vh] mt-[60px] bg-fixed bg-cover bg-no-repeat bg-center transition ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
      ref={backgroundRef}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white dark:from-neutral-900"></div>
      <div className="relative w-full h-full container mx-auto px-4 lg:px-8">
        <div className="absolute left-0 right-0 bottom-32 flex flex-col gap-12 max-w-prose px-4 lg:px-8">
          <Heading size="lg">{movie.title}</Heading>
          <div className="flex gap-4 items-center">
            <Rating
              voteAverage={movie.vote_average || 0}
              releaseDate={movie.release_date}
            />
            {movieGenres &&
              movieGenres.map((genre, index) => {
                if (index < 2) {
                  return <Pill key={genre.id}>{genre.name}</Pill>;
                }
              })}
          </div>
          <p>{truncateString(movie.overview)}</p>
          <div>
            <Link to={`/movie/${movie.id}`}>
              <Button variant="primary">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
