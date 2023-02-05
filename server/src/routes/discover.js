import { Router } from "express";
import { movieDiscoverByGenre } from "../controllers/discoverController.js";

const router = Router();

router.get("/movie/genre/:genreId", movieDiscoverByGenre);

export default router;
