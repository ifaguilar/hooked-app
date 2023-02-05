export const trendingMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/trending/");

    return response.json();
  } catch (error) {
    console.error({ message: error.message });
  }
};
