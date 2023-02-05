import { Router } from "express";
import {
  getPopular,
  getDetails,
  getTopRated,
  getUpcoming,
  getCredits,
  getVideos,
  getRecommendations,
} from "../controllers/movieController.js";

const router = Router();

router.get("/", getPopular);
router.get("/top-rated", getTopRated);
router.get("/upcoming", getUpcoming);
router.get("/:movieId", getDetails);
router.get("/:movieId/credits", getCredits);
router.get("/:movieId/videos", getVideos);
router.get("/:movieId/recommendations", getRecommendations);

export default router;
