import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import genreRouter from "./src/routes/genre.js";
import movieRouter from "./src/routes/movie.js";
import discoverRouter from "./src/routes/discover.js";
import trendingRouter from "./src/routes/trending.js";
import searchRouter from "./src/routes/search.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_BASE_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

// Routes
app.use("/api/genre", genreRouter);
app.use("/api/movie", movieRouter);
app.use("/api/discover", discoverRouter);
app.use("/api/trending", trendingRouter);
app.use("/api/search", searchRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
