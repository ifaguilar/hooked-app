export const truncateString = (string, maxLength = 120) => {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}...`
    : string;
};
