import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./main.css";

// Context
import { ThemeContextProvider } from "./context/ThemeContext";

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
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/signin",
    element: <SigninPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
