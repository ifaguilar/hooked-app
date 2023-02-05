export const toHoursAndMinutes = (totalMinutes) => {
  if (totalMinutes !== 0) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}h ${minutes}m`;
  } else {
    return "Unknow";
  }
};

export const getFullDate = (dateString) => {
  const options = { month: "long", day: "numeric", year: "numeric" };

  if (dateString !== "") {
    const date = new Date(dateString);

    const fullDate = new Intl.DateTimeFormat("en-US", options).format(date);

    return fullDate;
  } else {
    return "Unknow";
  }
};

export const isInTheFuture = (dateString) => {
  const date = new Date(dateString);

  const today = new Date();

  return date > today;
};
