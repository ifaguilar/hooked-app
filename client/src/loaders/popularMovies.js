import { serverBaseURL } from "../constants/constants";

export const popularMovies = async () => {
  try {
    const response = await fetch(`${serverBaseURL}/api/movie/`);

    const data = await response.json();
    const movies = data.movies;
    const name = "Popular";

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};
