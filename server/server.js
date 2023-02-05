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
const corsOptions = {
  origin: process.env.CLIENT_BASE_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/api/genre", genreRouter);
app.use("/api/movie", movieRouter);
app.use("/api/discover", discoverRouter);
app.use("/api/trending", trendingRouter);
app.use("/api/search", searchRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
