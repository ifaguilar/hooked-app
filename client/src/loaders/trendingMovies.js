import { serverBaseURL } from "../constants/constants";

export const trendingMovies = async () => {
  try {
    const response = await fetch(`${serverBaseURL}/api/trending/`);

    return response.json();
  } catch (error) {
    console.error({ message: error.message });
  }
};
