import {
  placeholderImageLight,
  placeholderImageDark,
  imagesBaseURL,
} from "../constants/constants.js";

export const getImageURL = (size, path) => {
  return `${imagesBaseURL}/${size}/${path}`;
};

export const getPlaceholderURL = (theme) => {
  if (theme === "light") {
    return placeholderImageLight;
  } else {
    return placeholderImageDark;
  }
};
