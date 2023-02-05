import { serverBaseURL } from "../constants/constants";

export const moviesByGenre = async ({ params }) => {
  const genreName = params.genreName;
  const genres = JSON.parse(localStorage.getItem("genres"));

  const result = genres.filter((genre) => {
    return genre.name.toLowerCase().replace(" ", "-") === genreName;
  });

  const genreId = result[0].id;

  try {
    const response = await fetch(
      `${serverBaseURL}/api/discover/movie/genre/${genreId}`
    );

    const data = await response.json();
    const movies = data.movies;
    const name = result[0].name;

    return { movies, name };
  } catch (error) {
    console.error({ message: error.message });
  }
};
