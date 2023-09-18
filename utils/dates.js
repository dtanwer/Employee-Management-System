exports.getDaysBetweenDates = (dateString1, dateString2) => {
  const startDate = new Date(dateString1);
  const endDate = new Date(dateString2);

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};

exports.getPreviousDay = (dateString) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  date.setDate(date.getDate() - 1);
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
};
exports.getNextDay = (dateString) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
};

//2023-09-18

exports.getDaysWithWeekends = (dateString1, dateString2) => {
  const previousDay = this.getPreviousDay(dateString1);
  const nextDay = this.getNextDay(dateString2);
  const daysBetweenDates = this.getDaysBetweenDates(dateString1, dateString2);

  let daysWithWeekends = daysBetweenDates;

  if (previousDay === "Saturday" || previousDay === "Sunday") {
    daysWithWeekends += getDayNumberFromDayName(previousDay);
  }

  if (nextDay === "Saturday" || nextDay === "Sunday") {
    daysWithWeekends += getDayNumberFromDayName(nextDay);
  }

  return daysWithWeekends;
};

const getDayNumberFromDayName = (dayName) => {
  switch (dayName) {
    case "Sunday":
      return 2;
    case "Saturday":
      return 1;
    default:
      return 0;
  }
};
