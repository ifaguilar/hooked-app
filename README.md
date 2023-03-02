# Hooked App

This is a movie app project built with the MERN (MongoDB, Express, React, Node.js) stack and the TMDB (The Movie Database) API. It allows users to search and browse movies, view details about a movie, and save their favorite movies to a watchlist.

## Installation

Clone the repository and navigate to the project root directory. Then, install the dependencies for both the `client` and `server` folders using the following command:

    npm install

## Usage

### Starting the Server

Navigate to the `server` folder and start the server using the following command:

    npm run dev

The server will start running on `http://localhost:3000`.

### Starting the Client

Navigate to the `client` folder and start the client using the following command:

    npm run dev

The client will start running on `http://localhost:5000`.

## API Key

To use the TMDB API, you will need to obtain an API key from their [website](https://www.themoviedb.org/documentation/api) and set it as an environment variable in the .env file in the server folder:

    TMDB_API_KEY=your_api_key_here
