const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayOfWeekFromDate(value: string) {
  const date = new Date(value);
  const day = date.getDay();
  return daysOfWeek[day];
}

function formatTemp(value: number) {
  return Math.round(value);
}

export { getDayOfWeekFromDate, formatTemp };
