import { serverBaseURL } from "../constants/constants";

export const upcomingMovies = async () => {
  try {
    const response = await fetch(`${serverBaseURL}/api/movie/upcoming`);

    const data = await response.json();
    const movies = data.movies;
    const name = "Upcoming";

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};