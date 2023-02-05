export const movieGenres = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/genre/");

    return response.json();
  } catch (error) {
    console.error({ message: error.message });
  }
};
