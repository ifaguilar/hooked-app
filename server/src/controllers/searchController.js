import dotenv from "dotenv";

dotenv.config();

export const searchMovies = async (req, res) => {
  const { encodedSearchTerm } = req.body;
  const endpoint = "/search/movie";

  const response = await fetch(
    `${process.env.TMDB_BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&query=${encodedSearchTerm}`
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
};
