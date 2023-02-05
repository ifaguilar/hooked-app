import { Router } from "express";
import { getMovieList } from "../controllers/genreController.js";

const router = Router();

router.get("/", getMovieList);

export default router;
