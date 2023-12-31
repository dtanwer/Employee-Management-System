const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

exports.getDaysBetweenDates = (dateString1, dateString2) => {
  const startDate = new Date(dateString1);
  const endDate = new Date(dateString2);

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference+1;
};

exports.getDaysWithWeekends = (dateString1, dateString2) => {
  const previousDay = getPreviousDay(dateString1);
  const nextDay = getNextDay(dateString2);
  const daysBetweenDates = this.getDaysBetweenDates(dateString1, dateString2);

  let daysWithWeekends = daysBetweenDates;

  if (previousDay === "Saturday" || previousDay === "Sunday") {
    daysWithWeekends += getDayNumberForPreviousDay(previousDay);
  }

  if (nextDay === "Saturday") {
    daysWithWeekends += 2;
  }
  else if (nextDay === "Sunday") {
    daysWithWeekends += 1;
  }

  return daysWithWeekends;
};

const getPreviousDay = (dateString) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() - 1);
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
};

const getNextDay = (dateString) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
};




const getDayNumberForPreviousDay = (dayName) => {
  switch (dayName) {
    case "Sunday":
      return 2;
    case "Saturday":
      return 1;
    default:
      return 0;
  }
};
