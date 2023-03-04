import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export const searchMovies = async (req, res) => {
  try {
    const { encodedSearchTerm } = req.body;
    const endpoint = "/search/movie";

    const response = await fetch(
      `${process.env.TMDB_BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&query=${encodedSearchTerm}`
    );

    const data = await response.json();

    if (data.status_code === 7) {
      return res.status(401).json({
        ok: false,
        message: data.status_message,
      });
    }

    if (data.status_code === 34) {
      return res.status(404).json({
        ok: false,
        message: data.status_message,
      });
    }

    return res.status(200).json({
      ok: true,
      movies: data.results,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
