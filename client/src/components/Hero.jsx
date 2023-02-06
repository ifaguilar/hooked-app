import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";

// Components
import Button from "./Button";
import Heading from "./Heading";
import Pill from "./Pill";
import Rating from "./Rating";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { getImageURL, getPlaceholderURL } from "../helpers/getImageURL";

// Utils
import { truncateString } from "../utils/truncateString";

const Hero = ({ movie }) => {
  const { theme } = useContext(ThemeContext);

  const [genres, setGenres] = useState(
    JSON.parse(localStorage.getItem("genres"))
  );
  const [movieGenres, setMovieGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const backgroundRef = useCallback((node) => {
    if (node !== null) {
      node.style.backgroundImage = `url(${
        movie.backdrop_path
          ? getImageURL("original", movie.backdrop_path)
          : getPlaceholderURL(theme)
      })`;
    }
  }, []);

  useEffect(() => {
    let preloaderImage = document.createElement("img");

    preloaderImage.src = movie.backdrop_path
      ? getImageURL("original", movie.backdrop_path)
      : getPlaceholderURL(theme);

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
        <div className="absolute bottom-32 flex flex-col gap-12 max-w-prose">
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