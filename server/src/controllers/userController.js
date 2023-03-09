// Models
import { User } from "../models/userModel.js";

export const getUserDetails = async (req, res) => {
  try {
    const userId = req.user;

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(401).json({
        ok: false,
        message: "User does not exists.",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "User details retrieved successfully.",
      user: user,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const userId = req.user;

    return res.status(200).json({
      ok: true,
      message: "Favorite list retrieved successfully.",
      favoriteList: [],
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

export const getWatchlist = async (req, res) => {
  try {
    const userId = req.user;

    return res.status(200).json({
      ok: true,
      message: "Watchlist retrieved successfully.",
      watchlist: [],
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
