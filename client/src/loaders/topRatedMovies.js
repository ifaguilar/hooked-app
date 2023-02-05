export const topRatedMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movie/top-rated");

    const data = await response.json();
    const movies = data.movies;
    const name = "Top Rated";

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};
