import { Router } from "express";
import {
  getUserDetails,
  getFavorites,
  getWatchlist,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/", verifyToken, getUserDetails);
router.get("/favorites", verifyToken, getFavorites);
router.get("/watchlist", verifyToken, getWatchlist);

export default router;
