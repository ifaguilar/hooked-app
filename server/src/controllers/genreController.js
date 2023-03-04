import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export const getMovieList = async (req, res) => {
  try {
    const endpoint = "/genre/movie/list";

    const response = await fetch(
      `${process.env.TMDB_BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}`
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
      genres: data.genres,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
