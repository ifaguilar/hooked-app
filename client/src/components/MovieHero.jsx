import React, { useState, useEffect, useContext, useCallback } from "react";
import { useRouteLoaderData } from "react-router-dom";

// Components
import RoundedButton from "./RoundedButton";
import Heading from "./Heading";
import Pill from "./Pill";
import Rating from "./Rating";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { getImageURL } from "../helpers/getImageURL";
import { getIconURL } from "../helpers/getIconURL";

// Utils
import { toHoursAndMinutes, getFullDate } from "../utils/DateTime";

const MovieHero = ({ movie, director }) => {
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
    const movieGenres = genres.filter((genre) =>
      movie.genres.some(
        (movieGenre) => JSON.stringify(genre) === JSON.stringify(movieGenre)
      )
    );

    setMovieGenres(movieGenres);
  };

  return (
    <div className="relative min-h-screen mt-[60px]">
      <div
        className={`absolute top-0 left-0 w-full h-[90vh] bg-fixed bg-cover bg-no-repeat bg-center transition ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        ref={backgroundRef}
      >
        <div className="backdrop-blur-md absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900"></div>
      </div>
      <div className="relative w-full h-full container mx-auto px-4 lg:px-8 py-32">
        <div className="flex flex-col gap-12 lg:grid lg:gap-24 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <div className="aspect-[2/3] w-2/3 md:w-1/2 lg:w-full mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-md">
              {movie.poster_path ? (
                <img
                  className="object-cover"
                  src={getImageURL("w500", movie.poster_path)}
                  alt={movie.title}
                />
              ) : (
                <div className="w-full h-full bg-[#f3f3f3] dark:bg-[#232323]"></div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <Heading size="lg">{movie.title}</Heading>
              {movie.tagline && (
                <p className="italic text-lg">"{movie.tagline}"</p>
              )}
            </div>
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <Rating
                  voteAverage={movie.vote_average || 0}
                  releaseDate={movie.release_date}
                />
                <span className="font-semibold">User Score</span>
              </div>
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <RoundedButton hasShadow={true}>
                  <img
                    className="icon"
                    src={getIconURL("hearts")}
                    alt="Add to favorite list"
                  />
                </RoundedButton>
                <RoundedButton hasShadow={true}>
                  <img
                    className="icon"
                    src={getIconURL("add--v1")}
                    alt="Add to watchlist"
                  />
                </RoundedButton>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Heading size="md">Overview</Heading>
              <p>{movie?.overview || "No overview found."}</p>
            </div>
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
              <div className="flex flex-col gap-4">
                <Heading size="md">Details</Heading>
                <ul className="flex flex-col gap-4 text-neutral-900/80 dark:text-white/80">
                  <li>Director: {director?.name || "Unknow"}</li>
                  <li>Duration: {toHoursAndMinutes(movie.runtime)}</li>
                  <li>Release Date: {getFullDate(movie.release_date)}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Heading size="md">Genres</Heading>
                <div className="flex gap-4 items-center flex-wrap">
                  {movieGenres.length !== 0 ? (
                    movieGenres.map((genre) => {
                      return <Pill key={genre.id}>{genre.name}</Pill>;
                    })
                  ) : (
                    <div>
                      <p>No genres found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
