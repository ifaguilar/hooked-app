export const popularMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/movie/");

    const data = await response.json();
    const movies = data.movies;
    const name = "Popular";

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};
