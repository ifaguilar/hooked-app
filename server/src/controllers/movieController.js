import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

export const getPopular = async (req, res) => {
  try {
    const endpoint = "/movie/popular";

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
        movies: data.results,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const getTopRated = async (req, res) => {
  try {
    const endpoint = "/movie/top_rated";

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
        movies: data.results,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const getUpcoming = async (req, res) => {
  try {
    const endpoint = "/movie/upcoming";

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
        movies: data.results,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const getDetails = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const endpoint = `/movie/${movieId}`;

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
        movie: data,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const getCredits = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const endpoint = `/movie/${movieId}/credits`;

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
        cast: data.cast,
        crew: data.crew,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const getVideos = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const endpoint = `/movie/${movieId}/videos`;

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
        videos: data.results,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const getRecommendations = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const endpoint = `/movie/${movieId}/recommendations`;

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
        recommendations: data.results,
      });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};
