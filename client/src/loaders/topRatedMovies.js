import { serverBaseURL } from "../constants/constants";

export const topRatedMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${serverBaseURL}/api/movie/top-rated?page=${page}`
    );

    const data = await response.json();
    const movies = data.movies;
    const name = "Top Rated";

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};
