import { Router } from "express";
import { searchMovies } from "../controllers/searchController.js";

const router = Router();

router.post("/", searchMovies);

export default router;
