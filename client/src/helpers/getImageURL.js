import { imagesBaseURL } from "../constants/constants";

export const getImageURL = (size, path) => {
  return `${imagesBaseURL}/${size}/${path}`;
};
