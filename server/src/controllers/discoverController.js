import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export const movieDiscoverByGenre = async (req, res) => {
  try {
    const page = req.query.page;
    const genreId = req.params.genreId;
    const endpoint = `/discover/movie/`;

    const response = await fetch(
      `${process.env.TMDB_BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&with_genres=${genreId}&page=${page}`
    );

    const data = await response.json();

    if (data.status_code) {
      if (data.status_code === 7) {
        res.status(401).json({
          success: false,
          message: data.status_message,
        });
      } else {
        res.status(404).json({
          success: false,
          message: data.status_message,
        });
      }
    } else {
      res.status(200).json({
        success: true,
        movies: data.results,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};
