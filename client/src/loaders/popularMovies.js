import { serverBaseURL } from "../constants/constants";

export const popularMovies = async (page = 1) => {
  try {
    const response = await fetch(`${serverBaseURL}/api/movie/?page=${page}`);

    const data = await response.json();
    const movies = data.movies;
    const name = "Popular";

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};
