import dotenv from "dotenv";

dotenv.config();

export const getMovieList = async (req, res) => {
  const endpoint = "/genre/movie/list";

  const response = await fetch(
    `${process.env.TMDB_BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}`
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
      genres: data.genres,
    });
  }
};
