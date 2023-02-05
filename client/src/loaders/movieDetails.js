import { serverBaseURL } from "../constants/constants";

export const movieDetails = async ({ params }) => {
  const movieId = params.movieId;

  try {
    let response = await fetch(`${serverBaseURL}/api/movie/${movieId}`);
    let data = await response.json();
    const movie = data.movie;

    response = await fetch(`${serverBaseURL}/api/movie/${movieId}/credits`);
    data = await response.json();
    const cast = data.cast;
    const crew = data.crew;

    response = await fetch(`${serverBaseURL}/api/movie/${movieId}/videos`);
    data = await response.json();
    const videos = data.videos;

    response = await fetch(
      `${serverBaseURL}/api/movie/${movieId}/recommendations`
    );
    data = await response.json();
    const recommendations = data.recommendations;

    return { movie, cast, crew, videos, recommendations };
  } catch (error) {
    console.error({ message: error.message });
  }
};
