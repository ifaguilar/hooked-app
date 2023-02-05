import { serverBaseURL } from "../constants/constants";

export const movieGenres = async () => {
  try {
    const response = await fetch(`${serverBaseURL}/api/genre/`);

    return response.json();
  } catch (error) {
    console.error({ message: error.message });
  }
};
