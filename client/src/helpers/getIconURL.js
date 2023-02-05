import { iconsBaseURL } from "../constants/constants";

export const getIconURL = (icon, size = "24", color = "dc2626") => {
  return `${iconsBaseURL}/${size}/${color}/${icon}.png`;
};
