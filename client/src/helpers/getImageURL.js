import {
  placeholderImageLight,
  placeholderImageDark,
  imagesBaseURL,
} from "../constants/constants";

export const getImageURL = (size, path) => {
  return `${imagesBaseURL}/${size}/${path}`;
};

export const getPlaceholderURL = (theme) => {
  theme === "light" ? placeholderImageLight : placeholderImageDark;
};
