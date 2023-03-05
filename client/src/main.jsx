import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App";
import "./main.css";

// Context
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

// Loaders
import { movieGenres } from "./loaders/movieGenres";
import { moviesByGenre } from "./loaders/moviesByGenre";
import { popularMovies } from "./loaders/popularMovies";
import { topRatedMovies } from "./loaders/topRatedMovies";
import { upcomingMovies } from "./loaders/upcomingMovies";
import { trendingMovies } from "./loaders/trendingMovies";
import { movieDetails } from "./loaders/movieDetails";

// Pages
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import MoviePage from "./pages/Movie";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import FavoritesPage from "./pages/Favorites";
import WatchlistPage from "./pages/Watchlist";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      id: "app",
      loader: movieGenres,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: popularMovies,
        },
        {
          path: "/top-rated",
          element: <HomePage />,
          loader: topRatedMovies,
        },
        {
          path: "/upcoming",
          element: <HomePage />,
          loader: upcomingMovies,
        },
        {
          path: "/search",
          element: <SearchPage />,
          loader: trendingMovies,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/favorites",
          element: <FavoritesPage />,
        },
        {
          path: "/watchlist",
          element: <WatchlistPage />,
        },
        {
          path: "/movie/:movieId",
          element: <MoviePage />,
          loader: movieDetails,
        },
        {
          path: "/genre/:genreName",
          element: <HomePage />,
          loader: moviesByGenre,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
